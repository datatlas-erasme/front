import { useState, useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'erasme-kepler.gl/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { getLayers, getFilters } from '../../../store/keplerGl';
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
// import ModalLocal from './ModalLocal';
import { ModalHeading, InfoPratiqueGlobal, BottomButton, TabsMarket, ModalList } from './style';

const types = ['Tous', 'Producteurs', 'Revendeurs'];

function ModalGlobalMarket({ data, onClick, props }: any) {
  const [active, setActive] = useState<string>(types[0]);
  const dispatch = useDispatch();
  const dataLayer = useSelector(getLayers);
  const dataFilter = useSelector(getFilters);
  const marketLocalList = dataLayer[1].dataToFeature;
  const filtersDomain = dataFilter[1].domain;
  const [filtersMarket, setFiltersMarket] = useState<string[]>(filtersDomain);

  console.log(props);

  // const setFilterValue = (item: string) => {
  //   if (filtersDomain.includes(item)) {
  //     setFiltersMarket((filtersDomain) =>
  //       filtersDomain.filter((cat) => {
  //         return cat !== item;
  //       }),
  //     );
  //   } else {
  //     setFiltersMarket((filtersDomain) => [...filtersDomain, item]);
  //   }
  // };

  useEffect(() => {
    dispatch(setFilter(filtersDomain, 'value', filtersMarket));
  }, [dispatch, filtersDomain, filtersMarket]);

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
        <div className="tab">
          {types.map((type) => (
            <button key={type} data-active={active === type} onClick={() => setActive(type)}>
              {type}
            </button>
          ))}
          {/* <button className="tablinks" onClick={() => setFiltersMarket}>
            Tous
          </button>
          <button className="tablinks" onClick={() => setFiltersMarket}>
            Producteur
          </button>
          <button
            className="tablinks"
            onClick={() =>
              setFiltersMarket(['Producteur du marché (Cultive ses produits et les vend)'])
            }
          >
            Revendeur
          </button> */}
        </div>
        <ModalList>
          {marketLocalList.map((info, i) => {
            return info.properties.adresse.includes(data[2]) ? (
              <li key={i} onClick={props}>
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
                <span onClick={() => setFiltersMarket}>
                  <FontAwesomeIcon icon={faChevronRight} />
                </span>
                <ul>
                  {info.properties.produits.map((p) => (
                    <li>
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
    </>
  );
}
const mapStateToProps = (state: any) => state;
const dispatchToProps = (dispatch: any) => ({ dispatch });

export default connect(mapStateToProps, dispatchToProps)(ModalGlobalMarket);
