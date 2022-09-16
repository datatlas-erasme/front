import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from 'erasme-kepler.gl/actions';
import classnames from 'classnames';
import { useViewport } from '../../../../utils/ViewportConext';
import { Override } from '../../../../types/Override';
import { Ouverture } from './style';

export type DayProps = Override<
  React.ComponentPropsWithoutRef<'button'>,
  {
    idFilter?: number;
    dayList?: string[];
    text?: string;
  }
>;

function Button({ day }: { day: any }) {
  const [isActive, setIsActive] = useState(false);
  const isActiveState = () => {
    setIsActive(!isActive);
  };

  return (
    <button onClick={isActiveState} className={classnames(isActive ? 'active' : '')}>
      {' '}
      {day}
    </button>
  );
}

export default function ButtonDay({ dayList = [], idFilter, text }: DayProps) {
  const { width } = useViewport();
  const breakpoint = 1024;

  const dispatch = useDispatch();
  // Toggle the visibility of buttons parent list
  const [filtersArray, setFiltersArray] = useState<string[]>([]);

  const setFilterValue = (item: string) => {
    if (filtersArray.includes(item)) {
      setFiltersArray((filtersArray) =>
        filtersArray.filter((cat) => {
          return cat !== item;
        }),
      );
    } else {
      setFiltersArray((filtersArray) => [...filtersArray, item]);
    }
  };

  useEffect(() => {
    if (filtersArray) {
      dispatch(setFilter(idFilter, 'value', filtersArray));
    }
  }, [dispatch, idFilter, filtersArray]);

  return width < breakpoint ? (
    <Ouverture>
      <Button day={text} />
    </Ouverture>
  ) : (
    <Ouverture>
      <h3>Quand ?</h3>
      {dayList?.map((day, i) => (
        <div
          key={i}
          onClick={() => {
            setFilterValue(day);
          }}
        >
          <Button day={day} />
        </div>
      ))}
    </Ouverture>
  );
}
