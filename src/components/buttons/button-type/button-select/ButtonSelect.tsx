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
// import {FarmerIcon} from '../../../../assets/svg/FarmerIcon';
import { ButtonType } from './style';

export type ButtonProps = Override<
  React.ComponentPropsWithoutRef<'button'>,
  {
    text: string;
    bg?: string;
    textSize?: string;
    listNames?: string[];
    idFilter?: string;
    layerId?: string | '';
    src?: string;
  }
>;

export default function ButtonSelect({
  text,
  listNames,
  idFilter,
  layerId,
  className,
  src,
  ...props
}: ButtonProps) {
  // Toggle the visibility of buttons parent list
  const [isActive, setIsActive] = useState(false);
  const isActiveState = () => {
    setIsActive(!isActive);
  };

  // Toggle the button linked layer vibility
  // const [isLayerVisible, setIsLayerVisible] = useState(true);
  // const isLayerVisibleState = () => {
  //   setIsLayerVisible(!isLayerVisible);
  // };

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
