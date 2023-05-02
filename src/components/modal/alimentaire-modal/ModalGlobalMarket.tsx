import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { getLayers } from '../../../store/keplerGl';
import PictoTime from '../../../assets/icon/icon-time.png';
import PictoPoi from '../../../assets/icon/icon-poi.png';
import PictoPen from '../../../assets/icon/icon-pen.png';
import { OpeningHours } from '../../../utils/opening-hours';
import { translateDay } from '../../../utils/translateDay';
import Tab from './tabs';
import Tabs from './tabs/Tabs';
import { ModalHeading, InfoPratiqueGlobal, BottomButton, TabsMarket, TitleModal } from './style';
import TabContent from './tabs/TabContent';
import { StyledModalPicture } from './ModalPicture';
import { ModalInside } from './index';

function ModalGlobalMarket({ data, onClick }: any) {
  const dataLayer = useSelector(getLayers);
  const marketLocalList = dataLayer[1].dataToFeature;
  // Open ModalInside
  const [modalOpen, setIsModalOpen] = useState(false);
  const [modalData, setIsModalData] = useState({});

  // Open Modal Inside
  const openModal = (info) => {
    setIsModalOpen(true);
    setIsModalData(info.properties);
  };
  useEffect(() => {}, [modalData]);

  const getStandAll: any = marketLocalList.filter(
    (stand) =>
      stand.properties.type === 'Producteur du marché (Cultive ses produits et les vend)' ||
      stand.properties.type === 'Revendeur du marché (Achète des produits et les revend)',
  );
  const getProducerStand: any = marketLocalList.filter(
    (stand) => stand.properties.type === 'Producteur du marché (Cultive ses produits et les vend)',
  );
  const getSellerStand: any = marketLocalList.filter(
    (stand) => stand.properties.type === 'Revendeur du marché (Achète des produits et les revend)',
  );

  const openingDay = !!data[7] && data[7].map((item: any, i: number) => item);
  // Ouvert maintenant
  const shopIsOpen = OpeningHours(openingDay);
  // Day in french
  const translateFR = translateDay(openingDay);

  return (
    <>
      <ModalHeading>
        <TitleModal>
          <h2>Marché</h2>
          <h3>{data[2]}</h3>
        </TitleModal>
        <StyledModalPicture onClick={onClick} />
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
          <p>{translateFR}</p>
          {shopIsOpen}
        </li>
      </InfoPratiqueGlobal>
      <TabsMarket>
        <Tabs>
          <Tab title={'Producteur'}>
            <TabContent getStand={getProducerStand} data={data} onClick={openModal} />
          </Tab>
          <Tab title={'Revendeur'}>
            <TabContent getStand={getSellerStand} data={data} onClick={openModal} />
          </Tab>
          <Tab title={'Tous'}>
            <TabContent getStand={getStandAll} data={data} onClick={openModal} />
          </Tab>
        </Tabs>
      </TabsMarket>
      {modalOpen && <ModalInside info={modalData} onClick={onClick} />}
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
