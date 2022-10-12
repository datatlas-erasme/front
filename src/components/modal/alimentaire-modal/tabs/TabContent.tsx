import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { MarketDealer, MarketProducer } from '../../../../assets/svg/types';
import { queryIcon } from '../../../../utils/queryIcon';

type TabContentProps = {
  getStand: any;
  data: string;
  onClick: (item: any) => void;
};
const TabContent: React.FC<TabContentProps> = ({ getStand, data, onClick }) => {
  return getStand.map((info, i) =>
    info.properties.adresse.includes(data[2]) ? (
      <li key={i} onClick={() => onClick(info)}>
        <div>
          {info.properties.type === 'Revendeur du marché (Achète des produits et les revend)' ? (
            <MarketDealer />
          ) : info.properties.type === 'Producteur du marché (Cultive ses produits et les vend)' ? (
            <MarketProducer />
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
    ) : null,
  );
};

export default TabContent;
