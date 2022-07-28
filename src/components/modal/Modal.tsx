import { useEffect } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FarmerIcon } from '../../assets/svg/FarmerIcon';
import { PointAdress } from '../../assets/svg/PointAdress';
import PictoTime from '../../assets/icon/icon-time.png';
import { importAll } from '../../utils/import-png';
import { ModalColLeft, ModalColRight, ModalHeading, LabelRow } from './style';

// Import label
const labels = importAll(require.context('../../assets/logo/label', false, /\.(png)$/));

const OpeningTime = ({ data }) => {
  // const openingDay = data[9].map(day => day.split('[a-zA-Z]+ (0?[0-9]|1[0-9]|2[0-3]):([+-]?(?=\.\d|\d)(?:\d+)?(?:\.?\d*))(?:[eE]([+-]?\d+))?-(0?[0-9]|1[0-9]|2[0-3]):([+-]?(?=\.\d|\d)(?:\d+)?(?:\.?\d*))(?:[eE]([+-]?\d+))?'));

  const openingDay = data[9].map((item) => item.split(' ')[0]);
  console.log(openingDay);
  const openingHours = data[9].map((item) => item.split(' ')[1]);
  console.log(openingHours);

  useEffect(() => {}, []);

  const today = new Date();
  console.log(today);
  const time = today.getDay() + '' + today.getHours();
  console.log(time);

  const dataDay = Date.parse('Fr 15:30-18:30');
  console.log(dataDay);

  function openDay(currentTime, openingTime) {
    const actualDay = new Date(currentTime);
    const openTime = openingTime;
    // const JourJ = day.getUTCDay()
    // const heureH =  day.getUTCHours()
  }

  return <h3>{today ? 'Ouvert maintenant' : 'Fermer actuellement'}</h3>;
};

function CustomMapModal({ data, onClick, ...props }) {
  return (
    <>
      <ModalColLeft>
        <ModalHeading>
          <span>
            <FarmerIcon />
          </span>
          <div>
            {data[0] && <h2>{data[2]}</h2>}
            <p>{data[6]} </p>
          </div>
        </ModalHeading>
        <p>Informations complémentaires liées à la spécificité de ce lieu.</p>
        <a href={data[14]} target={'_blank'} rel={'noreferrer'}>
          <button>En savoir plus</button>
        </a>
        <h4>Provenance des produits</h4>
        <ul>
          <li>France</li>
        </ul>
        <ul>
          <li>
            <PointAdress />
            <address>
              {data[3]} {data[4]} {data[5]}
            </address>
          </li>
          <li>
            <img src={PictoTime} alt="icon horloge" width={20} height={20} />
            {data[9]}
            <OpeningTime data={data} />
          </li>
          <li>
            <a href={'https://form.typeform.com/to/V1f3GNXR'} target="_blank" rel={'noreferrer'}>
              Modifier les informations
            </a>
          </li>
        </ul>
      </ModalColLeft>
      <ModalColRight>
        <FontAwesomeIcon icon={faXmark} onClick={onClick} />
        <img
          alt={'Unsplash'}
          src={
            'https://images.unsplash.com/photo-1543083477-4f785aeafaa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
          }
        />
        <p>{data[10]} </p>
        <LabelRow>
          <img src={labels[`Group-245.png`].default} width={50} height={50} />
          <img src={labels[`Group-245.png`].default} width={50} height={50} />
          <img src={labels[`Group-245.png`].default} width={50} height={50} />
        </LabelRow>
      </ModalColRight>
    </>
  );
}
const mapStateToProps = (state) => state;
const dispatchToProps = (dispatch) => ({ dispatch });

export default connect(mapStateToProps, dispatchToProps)(CustomMapModal);
