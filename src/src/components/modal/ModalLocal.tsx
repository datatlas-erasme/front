import {useEffect} from 'react';
import {connect, useSelector} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import {FarmSale, ProducerShop, Amap, MarketProducer, Solidarity, MarketDealer} from '../../assets/svg/types/index';
import PictoTime from '../../assets/icon/icon-time.png';
import PictoBulle from '../../assets/icon/icon-bulle.png';
import PictoPoi from '../../assets/icon/icon-poi.png';
import PictoPen from '../../assets/icon/icon-pen.png';
import { importAll } from '../../utils/import-png';
import {
  ModalColLeft,
  ModalColRight,
  ModalHeading,
  LabelRow,
  ProductRow,
  ProvenanceList,
  InfoPratique,
  BottomButton,
} from './style'

// Import label
const labels = importAll(require.context('../../assets/logo/label', false, /\.(png)$/));
const icons = importAll(require.context('../../assets/icon', false, /\.(png)$/));

const OpeningTime = ({ data }) => {

  // const openingDay = data[9].map(day => day.split('[a-zA-Z]+ (0?[0-9]|1[0-9]|2[0-3]):([+-]?(?=\.\d|\d)(?:\d+)?(?:\.?\d*))(?:[eE]([+-]?\d+))?-(0?[0-9]|1[0-9]|2[0-3]):([+-]?(?=\.\d|\d)(?:\d+)?(?:\.?\d*))(?:[eE]([+-]?\d+))?'));
  console.log(data);
  
  // const openingDay = data[9].map(item => item.split(' ')[0]);
  // console.log(openingDay);
  // const openingHours = data[9].map(item => item.split(' ')[1]);
  // console.log(openingHours);

  useEffect(() => {
  }, []);
  
  const today = new Date()
    console.log(today);
  const time = today.getDay() + '' + today.getHours();
  console.log(time);

  const dataDay = Date.parse("Fr 15:30-18:30");
  console.log(dataDay);

  function openDay (currentTime, openingTime){
    const actualDay = new Date(currentTime);
    const openTime = openingTime;
    // const JourJ = day.getUTCDay()
    // const heureH =  day.getUTCHours()
  };

  return(
    <h3>{today ? 'Ouvert maintenant' : 'Fermer actuellement'}</h3>
  )
} 

// const dispatch = useDispatch();

function MapModalLocal({data, onClick, dataglobal, ...props}) {

// const datalocal = useSelector((state) => state.keplerGl?.map?.visState?.datasets ?? null);

// console.log(datalocal["Manger Local"])

  console.log(dataglobal);
  console.log(data);

		return (
      <>
        <ModalColLeft>
          
            {dataglobal === 'Manger Local' ? (

              <ModalHeading>
                <span>
                  { data[6] === 'AMAP' ? (
                          <Amap/>
                        ) : data[6] === 'Magasin de producteurs' ? (
                          <ProducerShop/>
                        ) : data[6] === 'Revendeur du marché (Achète des produits et les revend)' ? (
                          <MarketDealer/>
                        ) : data[6] === 'Epicerie sociale et solidaire' ? (
                          <Solidarity/>
                        ) : data[6] === 'Producteur du marché (Cultive ses produits et les vend)' ? (
                          <MarketProducer/>
                        ) : data[6] === 'Vente à la ferme' ? (
                          <FarmSale/>
                        ) : '' }
                </span>
                <div>
                { !!data[0] && <h2>{data[2]}</h2> }
                <p>{data[6]} </p>
                </div>
              </ModalHeading>
                ) : (
                  <ModalHeading>
                { !!data[0] && <h2>Marché - {data[2]}</h2> }
                  </ModalHeading>
                )}
            
          { !!data[14] ?
           (<a href={data[14]} target={'_blank'} rel={'noreferrer'}><button >En savoir plus</button></a>) 
            : ''
          }
          {!!data[11] && dataglobal === 'Manger Local'?          
          <ProvenanceList>
            <h4>Provenance des produits</h4>
              <ul>
                <li>{data[11]}</li>
              </ul>
          </ProvenanceList>
          : ""}

            <InfoPratique>
            {!!data[3] && dataglobal === 'Manger Local' ? (
              <li>
                <img src={PictoPoi} alt='icon poi' width={20} height={20}/>
                <address>{data[3]}, {data[4]} - {data[5]}</address>
              </li>
              ) : ( 
              <li>
                <img src={PictoPoi} alt='icon poi' width={20} height={20}/>
                <address>{data[2]}, {data[3]} - {data[4]}</address>
              </li> )}

              {!!data[9] && dataglobal === 'Manger Local' ?
              (<li>
                <img src={PictoTime} alt='icon horloge' width={20} height={20}/>    
                  <ul>
                  {data[9].map((item, index) => (
                    <li key={index}>
                      {/* <img src={query_icon} alt="" /> */}
                      {item}
                    </li>
                  ))}
                  </ul>
                {/* <OpeningTime data={data}/> */}
              </li>
              ) : (
              <li>
                <img src={PictoTime} alt='icon horloge' width={20} height={20}/>
                  <ul>
                    <li>{data[6]} - {data[7]}</li>
                  </ul>
              </li>)}

            </InfoPratique>
        </ModalColLeft>

        <ModalColRight>
          <FontAwesomeIcon icon={faXmark} onClick={onClick}/>
          <img
            alt={'Unsplash'}
            src={'https://images.unsplash.com/photo-1543083477-4f785aeafaa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'}
          />

        {!!data[12] && dataglobal === 'Manger Local' ? (
          <LabelRow>
            <h4>Labels & certifications</h4>
            {!!data[12] === data[12] ? (
              <ul>
                <li>{data[12]}</li>
              </ul>
          ) : (<p>{data[2]} ne propose pas encore de produits labelisés</p>)}
          </LabelRow>
        ) : ""}
        
        {!!data[10] && dataglobal === 'Manger Local' ? (
        <ProductRow>
        <h4>Produits vendus</h4>
        <ul>
          {data[10].map((item, index) => (
            <li key={index}>
              {/* <img src={query_icon} alt="" /> */}
              <p>{item}</p>
            </li>
          ))}
        </ul>
          
        </ProductRow>
        ) : ""}
        
        </ModalColRight>
        <BottomButton href={'https://demarches.guichet-recette.grandlyon.com/projets-de-crowdsourcing/ajouter-un-marchand/'} target='_blank' rel={'noreferrer'}>
          <button>
            <img src={PictoPen} alt="Icon Stylo" />
            <p>Modifier les informations</p>
          </button>
        </BottomButton>

      </>
		);
}
const mapStateToProps = state => state;
const dispatchToProps = dispatch => ({dispatch});

console.log(dispatchToProps);

export default connect(
  mapStateToProps, 
  dispatchToProps
)(MapModalLocal);