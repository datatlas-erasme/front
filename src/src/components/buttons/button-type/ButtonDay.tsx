import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { layerConfigChange } from 'kepler.gl/actions';
import classnames from 'classnames';
import { Override } from '../../../types/Override';
import { FishIcon } from '../../../utils/svg/FishIcon';
import { Ouverture } from './style';

export type DayProps = Override<
  React.ComponentPropsWithoutRef<'button'>,
  {
    text: string;
    listNames?: string[];
    idFilter?: string;
    layerId?: string | '';
    src?: string;
  }
>;

const dataDay = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim']

export default function ButtonIcon ({
  text,
  listNames,
  idFilter,
  layerId,
  className,
  src,
  ...props
}: DayProps){

  const dispatch = useDispatch();
  // Toggle the visibility of buttons parent list
  const [isActive, setIsActive] = useState(false);
  const isActiveState = () => {
    setIsActive(!isActive);
  };
  
  // Toggle the button linked layer vibility
  const [isLayerVisible, setIsLayerVisible] = useState(true);
  const isLayerVisibleState = () => {
    setIsLayerVisible(!isLayerVisible);
  };

    return (
      <Ouverture>
        <h3>Ouvert</h3>
        { dataDay.map((day, i) => {
          return <p key={i}>{day}</p>
        } )}
      </Ouverture>
    );
  };