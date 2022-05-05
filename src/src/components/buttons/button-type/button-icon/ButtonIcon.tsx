import React, { useState } from 'react';
import classnames from 'classnames';
import { Override } from '../../../../types/Override';
import { importAll } from '../../../../utils/import-png';
import { Badge } from './style';

export type ButtonProps = Override<
  React.ComponentPropsWithoutRef<'button'>,
  {
    text: string;
    listNames?: string[];
    idFilter?: string;
    src?: string;
    item?:any;
  }
>;

// Import icons products
const icons = importAll(require.context('../../../../assets/icon', false, /\.(png)$/));

export default function ButtonIcon ({
  text,
  listNames,
  idFilter,
  className,
  src,
  item,
  ...props
}: ButtonProps){

  // Toggle the visibility of buttons parent list
  const [isActive, setIsActive] = useState(false);
  const isActiveState = () => {
    setIsActive(!isActive);
  };
  
  const query_icon= (() => {
     switch(text){
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
          case 'Épicerie': return icons['icon-cookie.png'].default;
          case 'Traiteur': return icons['icon-caterer.png'].default;
          case 'Boissons': return icons['icon-wine.png'].default;
          default : return icons[`icon-bulle.png`].default;}
    })();

    return (
      <Badge
        onClick={isActiveState}
        className={classnames( isActive ? 'active' : '' )}
        {...props}
      >
        <img src={query_icon} alt="" />
        <p>{text}</p>
      </Badge>
    );
  };