import React, { useState } from 'react';
import classnames from 'classnames';
import { Override } from '../../../../types/Override';
import { queryIcon } from '../../../../utils/queryIcon';
import { Badge } from './style';

export type ButtonProps = Override<React.ComponentPropsWithoutRef<'button'>, { text: string }>;
export default function ButtonIcon({ text, className, ...props }: ButtonProps) {
  // Toggle the visibility of buttons parent list
  const [isActive, setIsActive] = useState(false);
  const isActiveState = () => {
    setIsActive(!isActive);
  };

  return (
    <Badge onClick={isActiveState} className={classnames(isActive ? 'active' : '')} {...props}>
      <img src={queryIcon(text)} alt={text} />
      <p>{text}</p>
    </Badge>
  );
}
