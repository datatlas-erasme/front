import { connect } from 'react-redux';
import { ModalGlobalMarket, ModalLocal } from './alimentaire-modal/index';

function CustomMapModal({ data, onClick, dataID, ...props }: any) {
  const modalProps = {
    data: data,
    onClick: onClick,
    dataID: dataID,
    props: props,
  };

  return dataID === 'Marche forains' ? (
    <ModalGlobalMarket {...modalProps} />
  ) : (
    <ModalLocal {...modalProps} />
  );
}
const mapStateToProps = (state) => state;
const dispatchToProps = (dispatch) => ({ dispatch });

export default connect(mapStateToProps, dispatchToProps)(CustomMapModal);
