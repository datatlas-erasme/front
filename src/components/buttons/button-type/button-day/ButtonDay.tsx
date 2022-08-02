import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from 'erasme-kepler.gl/actions';
import classnames from 'classnames';
import { Override } from '../../../../types/Override';
import { Ouverture } from './style';

export type DayProps = Override<
  React.ComponentPropsWithoutRef<'button'>,
  {
    idFilter?: number | string;
    dayList?: string[];
    text?: string;
  }
>;

function Button({ day }) {
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

export default function ButtonDay({ dayList = [], idFilter, className }: DayProps) {
  const dispatch = useDispatch();

  // Toggle the visibility of buttons parent list

  // console.log(Ouverture);

  const [filtersArray, setFiltersArray] = useState<string[]>([]);

  const setFilterValue = (item: string) => {
    if (filtersArray.includes(item)) {
      // console.log('already in filters array');
      // console.log("Filters Array :", filtersArray)
      setFiltersArray((filtersArray) =>
        filtersArray.filter((cat) => {
          return cat !== item;
        }),
      );
    } else {
      setFiltersArray((filtersArray) => [...filtersArray, item]);
      // console.log("Filters Array :", filtersArray)
    }
  };

  useEffect(() => {
    // console.log('Filters Array :', filtersArray);
    dispatch(setFilter(idFilter, 'value', filtersArray));
  }, [dispatch, idFilter, filtersArray]);

  // Toggle the button linked layer vibility
  // const [isLayerVisible, setIsLayerVisible] = useState(true);
  // const isLayerVisibleState = () => {
  //   setIsLayerVisible(!isLayerVisible);
  // };

  return (
    <>
      <Ouverture>
        <h3>Ouvert</h3>
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
    </>
  );
}