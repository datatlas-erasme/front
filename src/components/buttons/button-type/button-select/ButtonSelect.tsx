import React, { useState } from 'react';
import classnames from 'classnames';
import { Override } from '../../../../types/Override';
import {
  Amap,
  FarmSale,
  MarketDealer,
  MarketProducer,
  ProducerShop,
  Solidarity,
} from '../../../../assets/svg/types';
import { ButtonType } from './style';

export type ButtonProps = Override<React.ComponentPropsWithoutRef<'button'>, { text: string }>;

export default function ButtonSelect({ text, className, ...props }: ButtonProps) {
  // Toggle the visibility of buttons parent list
  const [isActive, setIsActive] = useState(false);
  const isActiveState = () => {
    setIsActive(!isActive);
  };

  // Override text data type
  function TextCollaps() {
    if (!!text && text === 'Producteur du marché (Cultive ses produits et les vend)') {
      return 'Producteur du marché';
    } else if (text === 'Revendeur du marché (Achète des produits et les revend)') {
      return 'Revendeur du marché';
    } else {
      return text;
    }
  }

  console.log(text);

  return (
    <ButtonType
      onClick={isActiveState}
      className={classnames('active', className, { selected: isActive })}
      {...props}
    >
      <div className={isActive ? 'active' : 'inactive'}>
        {text === 'AMAP' ? (
          <Amap />
        ) : text === 'Magasin de producteurs' ? (
          <ProducerShop />
        ) : text === 'Revendeur du marché (Achète des produits et les revend)' ? (
          <MarketDealer />
        ) : text === 'Epicerie sociale et solidaire' ? (
          <Solidarity />
        ) : text === 'Producteur du marché (Cultive ses produits et les vend)' ? (
          <MarketProducer />
        ) : text === 'Vente à la ferme' ? (
          <FarmSale />
        ) : (
          ''
        )}
      </div>

      <p>{TextCollaps()}</p>
    </ButtonType>
  );
}
