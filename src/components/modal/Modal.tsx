import { useEffect } from 'react';
import { connect } from 'react-redux';
import { ModalGlobalMarket, ModalLocal } from './alimentaire-modal/index';

const OpeningTime = ({ data }) => {
  // const openingDay = data[9].map(day => day.split('[a-zA-Z]+ (0?[0-9]|1[0-9]|2[0-3]):([+-]?(?=\.\d|\d)(?:\d+)?(?:\.?\d*))(?:[eE]([+-]?\d+))?-(0?[0-9]|1[0-9]|2[0-3]):([+-]?(?=\.\d|\d)(?:\d+)?(?:\.?\d*))(?:[eE]([+-]?\d+))?'));

  const openingDay = data[9].map((item) => item.split(' ')[0]);
  const openingHours = data[9].map((item) => item.split(' ')[1]);

  useEffect(() => {}, []);

  const today = new Date();
  const time = today.getDay() + '' + today.getHours();
  const dataDay = Date.parse('Fr 15:30-18:30');

  function openDay(currentTime, openingTime) {
    const actualDay = new Date(currentTime);
    const openTime = openingTime;
    // const JourJ = day.getUTCDay()
    // const heureH =  day.getUTCHours()
  }

  return <h3>{today ? 'Ouvert maintenant' : 'Fermer actuellement'}</h3>;
};

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
