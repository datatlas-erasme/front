import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from 'erasme-kepler.gl/actions';
import classnames from 'classnames';
import {useViewport} from '../../../../utils/ViewportConext';
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

function Button ({day}) {
  const [isActive, setIsActive] = useState(false);
  const isActiveState = () => {
    setIsActive(!isActive);
  };

  console.log(day);
  
  return (
    <button 
    onClick={isActiveState}  
    className={classnames( isActive ? 'active' : 'no-active' )}
    > {day}
    </button>
  )
} 

export default function ButtonDay ({
  dayList = [],
  idFilter,
  text,
}: DayProps){

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
    dispatch(setFilter(idFilter, 'value', filtersArray));
  }, [dispatch, idFilter, filtersArray]);

  console.log(text);
  console.log(dayList);
  
  // const newOrder = [...dayList];
  // newOrder.splice(6, 0, newOrder.splice(0, 1)[0]);
  // newOrder.splice(3, 0, newOrder.splice(0, 1)[0]);
  // newOrder.splice(5, 0, newOrder.splice(4, 1)[0]);
  // console.log(newOrder);

    return (
      width < breakpoint ? 
      <Ouverture>
        <Button day={text}/>
      </Ouverture>

      :
        <Ouverture>
        <h3>Quand ?</h3>
        {dayList?.map((day, i) => (
            <div  key={i} onClick={() => { setFilterValue(day); }}>
              <Button day={day}/>
            </div>
          )
        )}
        </Ouverture>
    );
  };