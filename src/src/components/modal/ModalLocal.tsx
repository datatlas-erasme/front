import {useEffect} from 'react';
import {connect} from 'react-redux';
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

function MapModalLocal({data, onClick, ...props}) {
    console.log(data);
    
    const query_icon = (() => {
      switch(data[10]){
           case 'Légumes': return icons[`icon-vegetables.png`].default;
           case 'Miel' : return icons['icon-honey.png'].default;
           case 'Fruits': return icons['icon-fruits.png'].default;
           case 'Oeufs': return icons['icon-egg.png'].default;
           case 'Poisson': return icons['icon-fish.png'].default;
           case 'Viande': return icons['icon-chiken.png'].default;
           case 'Boulangerie': return icons['icon-bread.png'].default;
           case 'Lait': return icons['icon-milk.png'].default;
           case 'Fromage et produits laitiers': return icons['icon-cheese.png'].default;
           case 'Produits laitiers': return icons['icon-cheese.png'].default;
           case 'Épicerie': return icons['icon-caterer.png'].default;
           case 'Epicerie': return icons['icon-caterer.png'].default;
           case 'Boissons': return icons['icon-wine.png'].default;
           default : return icons[`icon-bulle.png`].default;}
     })();

		return (
      <>
        <ModalColLeft>
          <ModalHeading>
            <span>{ data[6] === 'Vente à la ferme' ? (
            <FarmSale/>
          ) : data[6] === 'Magasin de producteurs' ? (
            <ProducerShop/>
          ) : data[6] === 'AMAP/Panier' ? (
            <Amap/>
          ) : data[6] === 'Distributeur automatique' ? (
            <MarketProducer/>
          ) : data[6] === 'Epicerie sociale et solidaire' ? (
              <Solidarity/>
          ) : data[6] === 'Distributeur automatique' ? (
                <MarketProducer/>
          ) : (<MarketDealer/>) }</span>
            <div>
            { data[0] && <h2>{data[2]}</h2> }
            <p>{data[6]} </p>
            </div>
          </ModalHeading>

            <a href={data[14]} target={'_blank'} rel={'noreferrer'}><button >En savoir plus</button></a>
          
          {!!data[11] ?          
          <ProvenanceList>
            <h4>Provenance des produits</h4>
              <ul>
                <li>{data[11]}</li>
              </ul>
          </ProvenanceList>
          : ""}

            <InfoPratique>
              <li>
                <img src={PictoPoi} alt='icon poi' width={20} height={20}/>
                <address>{data[3]} {data[4]} {data[5]}</address>
              </li>
              {!!data[9] ?
              <li>
                <img src={PictoTime} alt='icon horloge' width={20} height={20}/>
                  <ul>
                    <li>{data[9]}</li>
                  </ul>
                {/* <OpeningTime data={data}/> */}
              </li> : ""}
              {!!data[13] ?
              <li>
                <img src={PictoBulle} alt='icon horloge' width={25} height={25}/>
              </li> : ""}
            </InfoPratique>
        </ModalColLeft>

        <ModalColRight>
          <FontAwesomeIcon icon={faXmark} onClick={onClick}/>
          <img
            alt={'Unsplash'}
            src={'https://images.unsplash.com/photo-1543083477-4f785aeafaa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'}
          />

        {!!data[12] ? 
        <LabelRow>
        <h4>Labels & certifications</h4>
          <ul>
            <li>{data[12]}</li>
          </ul>
          {/* <img src={labels[`Group-245.png`].default} width={50} height={50}/>
          <img src={labels[`Group-245.png`].default} width={50} height={50}/>
          <img src={labels[`Group-245.png`].default} width={50} height={50}/> */}
        </LabelRow>
        : ""}

        <ProductRow>
        <h4>Produits vendus</h4>
        <ul>
          {data[10].map((item, index) => (
            <li key={index}>
              <img src={query_icon} alt="" />
              <p>{item}</p>
            </li>
          ))}
        </ul>
          
        </ProductRow>
        
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

export default connect(
  mapStateToProps,
  dispatchToProps
)(MapModalLocal);