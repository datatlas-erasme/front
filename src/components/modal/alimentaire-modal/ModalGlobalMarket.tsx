import { useState, useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { getLayers } from '../../../store/keplerGl';
import PictoTime from '../../../assets/icon/icon-time.png';
import PictoPoi from '../../../assets/icon/icon-poi.png';
import PictoPen from '../../../assets/icon/icon-pen.png';
import {
  Amap,
  FarmSale,
  MarketDealer,
  MarketProducer,
  ProducerShop,
  Solidarity,
} from '../../../assets/svg/types';
import { queryIcon } from '../../../utils/queryIcon';
import { ModalHeading, InfoPratiqueGlobal, BottomButton, TabsMarket, ModalList } from './style';
import { ModalInside } from './index';

function ModalGlobalMarket({ data, onClick }: any) {
  const [modalOpen, setIsModalOpen] = useState(false);
  const [modalData, setIsModalData] = useState({});
  const dataLayer = useSelector(getLayers);
  const marketLocalList = dataLayer[1].dataToFeature;

  const openModal = (info) => {
    setIsModalOpen(true);
    setIsModalData(info.properties);
  };

  useEffect(() => {}, [modalData]);

  return (
    <>
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
      <TabsMarket>
        {/*<div className="tab">*/}
        {/*  /!* {types.map((type) => (*/}
        {/*    <button key={type} data-active={active === type} onClick={() => setActive(type)}>*/}
        {/*      {type}*/}
        {/*    </button>*/}
        {/*  ))} *!/*/}
        {/*  <button className="tablinks" onClick={() => setFiltersMarket}>*/}
        {/*    Tous*/}
        {/*  </button>*/}
        {/*  <button className="tablinks" onClick={() => setFiltersMarket}>*/}
        {/*    Producteur*/}
        {/*  </button>*/}
        {/*  <button*/}
        {/*    className="tablinks"*/}
        {/*    onClick={() =>*/}
        {/*      setFiltersMarket(['Producteur du marché (Cultive ses produits et les vend)'])*/}
        {/*    }*/}
        {/*  >*/}
        {/*    Revendeur*/}
        {/*  </button>*/}
        {/*</div>*/}
        <ModalList>
          {marketLocalList.map((info, i) => {
            return info.properties.adresse.includes(data[2]) ? (
              <li key={i} onClick={() => openModal(info)}>
                <div>
                  {info.properties.type === 'AMAP' ? (
                    <Amap />
                  ) : info.properties.type === 'Magasin de producteurs' ? (
                    <ProducerShop />
                  ) : info.properties.type ===
                    'Revendeur du marché (Achète des produits et les revend)' ? (
                    <MarketDealer />
                  ) : info.properties.type === 'Epicerie sociale et solidaire' ? (
                    <Solidarity />
                  ) : info.properties.type ===
                    'Producteur du marché (Cultive ses produits et les vend)' ? (
                    <MarketProducer />
                  ) : info.properties.type === 'Vente à la ferme' ? (
                    <FarmSale />
                  ) : (
                    ''
                  )}
                </div>
                <h5>{info.properties.nom}</h5>
                <span>
                  <FontAwesomeIcon icon={faChevronRight} />
                </span>
                <ul>
                  {info.properties.produits.map((p) => (
                    <li key={p}>
                      <img src={queryIcon(p)} alt={p} />
                      <p>{p}</p>
                    </li>
                  ))}
                </ul>
              </li>
            ) : null;
          })}
        </ModalList>
      </TabsMarket>
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
      {modalOpen && <ModalInside info={modalData} onClick={onClick} />}
    </>
  );
}
const mapStateToProps = (state: any) => state;
const dispatchToProps = (dispatch: any) => ({ dispatch });

export default connect(mapStateToProps, dispatchToProps)(ModalGlobalMarket);
