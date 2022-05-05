import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import PictoTime from '../../assets/icon/icon-time.png';
import PictoPoi from '../../assets/icon/icon-poi.png';
import PictoPen from '../../assets/icon/icon-pen.png';
import { ModalHeading, InfoPratiqueGlobal, BottomButton, WrapperModal } from './style';

function MapModalGobal({ data, day, onClick }: any) {
  return (
    <WrapperModal>
      <ModalHeading>
        <div>
          <h2>Marché </h2>
          <h3>{data[2]}</h3>
        </div>
        <div>
          <FontAwesomeIcon icon={faXmark} onClick={onClick} />
          <img
            alt={'Unsplash'}
            src={
              'https://images.unsplash.com/photo-1543083477-4f785aeafaa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
            }
          />
        </div>
      </ModalHeading>
      <InfoPratiqueGlobal>
        <li>
          <img src={PictoPoi} alt="icon poi" width={20} height={20} />
          <address>
            {data[2]}, {data[3]} - {data[4]}
          </address>
        </li>
        <li>
          <img src={PictoTime} alt="icon horloge" width={20} height={20} />
          <ul>
            <li>{data[6]}</li>
            <li>{data[7]}</li>
          </ul>
        </li>
      </InfoPratiqueGlobal>

      <BottomButton
        href={
          'https://demarches.guichet-recette.grandlyon.com/projets-de-crowdsourcing/ajouter-un-marchand/'
        }
        target="_blank"
        rel={'noreferrer'}
      >
        <button>
          <img src={PictoPen} alt="Icon Stylo" />
          <p>Ajouter un stand au marché</p>
        </button>
      </BottomButton>
    </WrapperModal>
  );
}
const mapStateToProps = (state: any) => state;
const dispatchToProps = (dispatch: any) => ({ dispatch });

export default connect(mapStateToProps, dispatchToProps)(MapModalGobal);
