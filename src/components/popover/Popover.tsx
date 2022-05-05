import { connect } from 'react-redux';
import { importAll } from '../../utils/import-png';
import { ToolTip } from './style';

const labels: { [index: string]: any } = importAll(
  require.context('../../assets/label', false, /\.(png)$/),
);

function CustomMapPopover({ data, dataID, props }: any) {
  const labelItem = !!data[12] && data[12].map((label: any) => label);
  const query_labels = (() => {
    switch (labelItem[0]) {
      case 'AB - agriculture biologique':
        return labels[`Agriculture-biologique.png`].default;
      case 'Autres labels':
        return labels['bienvenueferme.png'].default;
      case 'LVED (Lyon Ville Equitable et Durable)':
        return labels['lyonequitabledurable.png'].default;
      case 'HVE (Haute Valeur Environnementale)':
        return labels['hve.png'].default;
      default:
        return '';
    }
  })();

  return dataID === 'Manger Local' ? (
    <ToolTip
      style={{
        position: 'absolute',
        left: props.x,
        top: props.y,
      }}
    >
      <ul>
        <li>
          <img src={query_labels} alt="" />
        </li>
      </ul>
      {data[0] && <h2>{data[2]}</h2>}
      <h4>Ouverture</h4>
      {data[9] ? (
        <ul>
          {data[9].map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
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
