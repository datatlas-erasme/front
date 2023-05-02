import React from 'react';
import {
  Amap,
  FarmSale,
  MarketDealer,
  MarketProducer,
  ProducerShop,
  Solidarity,
} from '../../../assets/svg/types';

interface WhoIconProps {
  type: string;
}

export const WhoIcon = ({ type }: WhoIconProps) => {
  return (
    <span>
      {type === 'AMAP' ? (
        <Amap />
      ) : type === 'Magasin de producteurs' ? (
        <ProducerShop />
      ) : type === 'Revendeur du marché (Achète des produits et les revend)' ? (
        <MarketDealer />
      ) : type === 'Epicerie sociale et solidaire' ? (
        <Solidarity />
      ) : type === 'Producteur du marché (Cultive ses produits et les vend)' ? (
        <MarketProducer />
      ) : type === 'Vente à la ferme' ? (
        <FarmSale />
      ) : (
        ''
      )}
    </span>
  );
};
