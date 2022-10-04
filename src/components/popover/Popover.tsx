import { connect } from 'react-redux';
// import opening_hours from 'opening_hours';
import { queryLabels } from '../../utils/queryIcon';
import { translateDay } from '../../utils/translateDay';
import { ToolTip } from './style';

function CustomMapPopover({ data, dataID, props }: any) {
  const openingDay = !!data[9] && data[9].map((item: any, i: number) => item);
  const translateFR = translateDay(openingDay);

  return dataID === 'Manger Local' ? (
    <ToolTip
      style={{
        position: 'absolute',
        left: props.x,
        top: props.y,
      }}
    >
      <ul>
        {!!data[12] &&
          data[12].map((item: string, index: number) => {
            return (
              <li key={index}>
                <img src={queryLabels(item)} alt={item} />
              </li>
            );
          })}
      </ul>
      {data[0] && <h2>{data[2]}</h2>}
      <h4>Ouverture</h4>
      {!!translateFR && translateFR ? (
        <p>{translateFR}</p>
      ) : (
        <p>Les horaires n'ont pas été renseigné</p>
      )}
    </ToolTip>
  ) : (
    <ToolTip
      style={{
        position: 'absolute',
        left: props.x,
        top: props.y,
      }}
    >
      <p>{!!data[10] && data[10]} </p>
      {data[0] && <h2>Marché - {data[2]}</h2>}
      {data[6] && data[7] ? (
        <>
          <h4>Ouverture</h4>
          <p>
            {data[6]} - {data[7]}
          </p>
        </>
      ) : (
        ''
      )}
      <h4>Ajoutez vos stands préférés sur ce marché !</h4>
    </ToolTip>
  );
}

const mapStateToProps = (state: any) => state;
const dispatchToProps = (dispatch: any) => ({ dispatch });

export default connect(mapStateToProps, dispatchToProps)(CustomMapPopover);
