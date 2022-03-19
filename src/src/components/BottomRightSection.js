import React, { useContext } from 'react';
import { ConfContext } from '../providers/ConfProvider';
import Button from './filter-side-panel/Button';

const BottomRightSection = () => {
  const config = useContext(ConfContext).bottomRightButtons;

  return (
    <div className="crowdsourcing">
      {config.map((buttonConf, index) => (
        <a key={index} href={buttonConf.url} target="_blank" rel="noreferrer">
          <Button bg="black" fontSize="10" iconName="plus" text={buttonConf.text} />
        </a>
      ))}
    </div>
  );
};

export default BottomRightSection;
