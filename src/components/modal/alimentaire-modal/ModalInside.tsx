import { connect } from 'react-redux';
import React from 'react';
import { queryIcon } from '../../../utils/queryIcon';
import { MarketProducer, MarketDealer } from '../../../assets/svg/types';
import { Override } from '../../../types/Override';
import PictoTime from '../../../assets/icon/icon-time.png';
import PictoPoi from '../../../assets/icon/icon-poi.png';
import PictoPen from '../../../assets/icon/icon-pen.png';
import { OpeningHours } from '../../../utils/opening-hours';
import { translateDay } from '../../../utils/translateDay';
import { StyledModalPicture } from './ModalPicture';
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
  WrapperModal,
} from './style';

export type ModalInsideProps = Override<
  React.ComponentPropsWithoutRef<'span'>,
  {
    info?: string[] | any;
    onClick?: (item: any) => void;
  }
>;

const ModalInside = ({ onClick, info }: ModalInsideProps) => {
  const openingDay = !!info.horaires && info.horaires.map((item: any, i: number) => item);
  // Ouvert maintenant
  const shopIsOpen = OpeningHours(openingDay);
  // Day in french
  const translateFR = translateDay(openingDay);

  return (
    <WrapperModal>
      <ModalHeading>
        <TitleModal>
          <span>
            {!!info.type &&
            info.type === 'Revendeur du marché (Achète des produits et les revend)' ? (
              <MarketDealer />
            ) : info.type === 'Producteur du marché (Cultive ses produits et les vend)' ? (
              <MarketProducer />
            ) : (
              ''
            )}
          </span>
          {!!info && <h2>{info.nom}</h2>}
          <p>{info.type}</p>
        </TitleModal>
        <StyledModalPicture onClick={onClick} />
        {!!info.url ? (
          <a href={info.url} target={'_blank'} rel={'noreferrer'}>
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
            <li>{info.origine_produits}</li>
          </ul>
        </ProvenanceList>
        <InfoPratique>
          <li>
            <img src={PictoPoi} alt="icon poi" width={20} height={20} />
            <address>
              {info.adresse}, {info.insee} - {info.commune}
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
          {!!info.label && info.label ? (
            <ul>
              <li>{info.label}</li>
            </ul>
          ) : (
            <p>{info.nom} ne propose pas encore de produits labelisés</p>
          )}
        </LabelRow>
        <ProductRow>
          <h4>Produits vendus</h4>
          <ul>
            {info.produits.map((item: string, index: number) => {
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
    </WrapperModal>
  );
};
const mapStateToProps = (state: any) => state;
const dispatchToProps = (dispatch: any) => ({ dispatch });

export default connect(mapStateToProps, dispatchToProps)(ModalInside);
