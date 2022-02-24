import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
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

  const dispatch = useDispatch();
  // Toggle the visibility of buttons parent list
  const [isActive, setIsActive] = useState(false);
  const isActiveState = () => {
    setIsActive(!isActive);
  };
  
  const query_icon= (() => {
     switch(text){
           case 'Légumes': return icons[`icon-vegetables.png`].default;
           case 'Miel' : return icons['icon-honey.png'].default;
           default       : return icons[`icon-bulle.png`].default;}
    })();

    return (
      <Badge
        onClick={isActiveState}
        className={classnames( isActive ? 'active' : '' )}
        {...props}
      >
        <img src={query_icon} alt="" />
        <p>{text.substring(0, 30)}</p>
      </Badge>
    );
  };