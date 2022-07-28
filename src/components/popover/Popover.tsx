import { connect } from 'react-redux';
import { ToolTip } from './style';

function CustomMapPopover({ data, props }) {
  return (
    <ToolTip
      style={{
        position: 'absolute',
        left: props.x,
        top: props.y,
      }}
    >
      <p>{data[10]} </p>
      {data[0] && <h2>{data[2]}</h2>}
      <p>Horaires :</p>
      <p>{data[9]} </p>
    </ToolTip>
  );
}

const mapStateToProps = (state) => state;
const dispatchToProps = (dispatch) => ({ dispatch });

export default connect(mapStateToProps, dispatchToProps)(CustomMapPopover);
