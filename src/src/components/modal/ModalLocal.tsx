import { useEffect } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FarmSale, ProducerShop, Amap, MarketProducer, Solidarity, MarketDealer } from '../../assets/svg/types/index';
import PictoTime from '../../assets/icon/icon-time.png';
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
  WrapperModal,
  TitleModal
} from './style'

const labels = importAll(require.context('../../assets/label', false, /\.(png)$/));
const icons = importAll(require.context('../../assets/icon', false, /\.(png)$/));

// const OpeningTime = ({ data }) => {

//   useEffect(() => {
//   }, []);
  
//   const today = new Date()
//   const time = today.getDay() + '' + today.getHours();

//   const dataDay = Date.parse("Fr 15:30-18:30");
//   console.log(dataDay);

//   function openDay (currentTime, openingTime){
//     const actualDay = new Date(currentTime);
//     const openTime = openingTime;
//   };

//   return(
//     <h3>{today ? 'Ouvert maintenant' : 'Fermer actuellement'}</h3>
//   )
// } 

function MapModalLocal({data, onClick}) {

// Logo labels
const labelItem = !!data[12] && data[12].map(label => label);
const query_labels = (() => {
  switch(labelItem){
    case 'AB - agriculture biologique': return labels[`Agriculture-biologique.png`].default;
    case 'Autres labels' : return labels['bienvenueferme.png'].default;
    case 'LVED (Lyon Ville Equitable et Durable)': return labels['lyonequitabledurable.png'].default;
    case 'HVE (Haute Valeur Environnementale)': return labels['hve.png'].default;
    default : return '';}
 })();
 
  const product = data[10]?.map((product) => {
    const query_icon = (() => {
     switch(product){
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
        case 'Epicerie': return icons['icon-cookie.png'].default;
        case 'Traiteur': return icons['icon-caterer.png'].default;
        case 'Boissons': return icons['icon-wine.png'].default;
        default : return icons[`icon-bulle.png`].default;}
  })();

  // console.log(product);
  // console.log(query_icon);
 
     return (query_icon)
    
  } )
  // console.log(product);
//  const query_icon = (() => {
//     switch(product){
//        case 'Légumes': return icons[`icon-vegetables.png`].default;
//        case 'Miel' : return icons['icon-honey.png'].default;
//        case 'Fruits': return icons['icon-fruits.png'].default;
//        case 'Oeufs': return icons['icon-egg.png'].default;
//        case 'Poisson': return icons['icon-fish.png'].default;
//        case 'Viande': return icons['icon-chiken.png'].default;
//        case 'Boulangerie': return icons['icon-bread.png'].default;
//        case 'Lait': return icons['icon-milk.png'].default;
//        case 'Fromage et produits laitiers': return icons['icon-cheese.png'].default;
//        case 'Produits laitiers': return icons['icon-cheese.png'].default;
//        case 'Epicerie': return icons['icon-cookie.png'].default;
//        case 'Traiteur': return icons['icon-caterer.png'].default;
//        case 'Boissons': return icons['icon-wine.png'].default;
//        default : return icons[`icon-bulle.png`].default;}
//  })();

//  console.log(query_icon);
 
		return (
      <WrapperModal>
              <ModalHeading>
                <TitleModal>
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
                  { !!data[0] && <h2>{data[2]}</h2> }
                  <p>{data[6]} </p>
                </TitleModal>
                <div>
                  <FontAwesomeIcon icon={faXmark} onClick={onClick}/>
                  <img
                    alt={'Unsplash'}
                    src={'https://images.unsplash.com/photo-1543083477-4f785aeafaa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'}
                  />
                </div>

                { !!data[14] ?
                  (<a href={data[14]} target={'_blank'} rel={'noreferrer'}><button >En savoir plus</button></a>) 
                    : ''
                  }
              </ModalHeading>
            
          <ModalColLeft>
            <ProvenanceList>
              <h4>Provenance des produits</h4>
                <ul>
                  <li>{data[11]}</li>
                </ul>
            </ProvenanceList>
            <InfoPratique>
                <li>
                  <img src={PictoPoi} alt='icon poi' width={20} height={20}/>
                  <address>{data[3]}, {data[4]} - {data[5]}</address>
                </li>
                <li>
                  <img src={PictoTime} alt='icon horloge' width={20} height={20}/>
                  {!!data[9] && data[9] ? (
                    <ul>
                    {data[9].map((item, index) => (
                      <li key={index}>
                        {item}
                      </li>
                    ))}
                    </ul>
                    ) : (
                      <p>Les horaires n'ont pas été renseigné</p>
                    )}

                </li>
            </InfoPratique>
          </ModalColLeft>

        <ModalColRight>

        <LabelRow>
            <h4>Labels & certifications</h4>
            { !!data[12] && data[12] ? (
              <ul>
                <li> {data[12]} 
                {/* <img src={query_labels} alt="Label" /> */}
                </li>
              </ul> 
              ) : (
                <p>{data[2]} ne propose pas encore de produits labelisés</p>
              )}
        </LabelRow>
        
        <ProductRow>
        <h4>Produits vendus</h4>
        <ul>
          {data[10].map((item, index) => {

            return (
              <li key={index}>
                {/* {product.map(icon => {
                  console.log(icon);
                  
                  return( <img src={icon} alt={data[10]} />)
                 
                }
                  
            )} */}
                <p>{item}</p>
              </li>
            )
          })}
        </ul>
        </ProductRow>
        
        </ModalColRight>
        <BottomButton href={'https://demarches.guichet-recette.grandlyon.com/projets-de-crowdsourcing/ajouter-un-marchand/'} target='_blank' rel={'noreferrer'}>
          <button>
            <img src={PictoPen} alt="Icon Stylo" />
            <p>Modifier les informations</p>
          </button>
        </BottomButton>
      </WrapperModal>
		);
}
const mapStateToProps = state => state;
const dispatchToProps = dispatch => ({dispatch});

export default connect(
  mapStateToProps, 
  dispatchToProps
)(MapModalLocal);