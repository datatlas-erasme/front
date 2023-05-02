import React from 'react';
import { connect } from 'react-redux';
import PictoTime from '../../../assets/icon/icon-time.png';
import PictoPoi from '../../../assets/icon/icon-poi.png';
import PictoPen from '../../../assets/icon/icon-pen.png';
import { queryIcon } from '../../../utils/queryIcon';
import { OpeningHours } from '../../../utils/opening-hours';
import { translateDay } from '../../../utils/translateDay';
import {
  ModalColLeft,
  ModalColRight,
  ModalHeading,
  LabelRow,
  ProductRow,
  ProvenanceList,
  InfoPratique,
  BottomButton,
  TitleModal,
} from './style';
import { StyledModalPicture } from './ModalPicture';
import { WhoIcon } from './WhoIcon';

function MapModalLocal({ data, onClick }: any) {
  const openingDay = !!data[9] && data[9].map((item: any, i: number) => item);
  const shopIsOpen = OpeningHours(openingDay);
  const translateFR = translateDay(openingDay);

  return (
    <>
      <ModalHeading>
        <TitleModal>
          {!!data[0] && (
            <>
              <WhoIcon type={data[6]} />
              <h2>{data[2]}</h2>
            </>
          )}
          <p>{data[6]}</p>
        </TitleModal>
        <StyledModalPicture onClick={onClick} />
        {!!data[14] ? (
          <a href={data[14]} target={'_blank'} rel={'noreferrer'}>
            <button>En savoir plus</button>
          </a>
        ) : (
          ''
        )}
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
            <img src={PictoPoi} alt="icon poi" width={20} height={20} />
            <address>
              {data[3]}, {data[4]} - {data[5]}
            </address>
          </li>
          <li>
            <img src={PictoTime} alt="icon horloge" width={20} height={20} />
            {!!translateFR && translateFR ? (
              <ul>
                <li>{translateFR}</li>
              </ul>
            ) : (
              <p>Les horaires n'ont pas été renseigné</p>
            )}
            {shopIsOpen}
          </li>
        </InfoPratique>
      </ModalColLeft>

      <ModalColRight>
        <LabelRow>
          <h4>Labels & certifications</h4>
          {!!data[12] && data[12] ? (
            <ul>
              <li>{data[12]}</li>
            </ul>
          ) : (
            <p>{data[2]} ne propose pas encore de produits labelisés</p>
          )}
        </LabelRow>
        <ProductRow>
          <h4>Produits vendus</h4>
          <ul>
            {data[10].map((item: string, index: number) => {
              return (
                <li key={index}>
                  <img src={queryIcon(item)} alt={item} />
                  <p>{item}</p>
                </li>
              );
            })}
          </ul>
        </ProductRow>
      </ModalColRight>
      <BottomButton
        href={
          'https://demarches.guichet-recette.grandlyon.com/projets-de-crowdsourcing/ajouter-un-marchand/'
        }
        target="_blank"
        rel={'noreferrer'}
      >
        <button>
          <img src={PictoPen} alt="Icon Stylo" />
          <p>Modifier les informations</p>
        </button>
      </BottomButton>
    </>
  );
}
const mapStateToProps = (state: any) => state;
const dispatchToProps = (dispatch: any) => ({ dispatch });

export default connect(mapStateToProps, dispatchToProps)(MapModalLocal);
