import React, { useContext } from 'react';
import { ConfContext } from '../providers/ConfProvider';
import Button from './filter-side-panel/Button';

const BottomRightSection = () => {
  const config = useContext(ConfContext).bottomRightButtons;

  return (
    <div className="crowdsourcing">
      <a href='https://carto.erasme.org/Mazagran'>
       <Button bg="black" fontSize="10" iconName="plus" text="mise en action" />
       </a>
       </div>
  );
};

export default BottomRightSection;
