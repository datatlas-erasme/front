import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from 'erasme-kepler.gl/actions';
import Button from './Button';

export type ListProps = {
  idFilter: number | string;
  listNames?: string[];
  backgroundColor?: string;
};

export const List = ({ listNames = ['1', '2'], idFilter = 0, backgroundColor }: ListProps) => {

  const dispatch = useDispatch();
  const [filtersArray, setFiltersArray] = useState<string[]>([]);

  //Fill the filters with all the element by default
  useEffect(() => {
    listNames?.map((item, index) => (setFiltersArray((filtersArray) => [...filtersArray, item])))
  }, [dispatch,listNames])

  const setFilterValue = (item: string) => {
    if (filtersArray.includes(item)) {
      //console.log('already in filters array');
      //console.log("Filters Array :", filtersArray)
      setFiltersArray((filtersArray) =>
        filtersArray.filter((cat) => {
          return cat !== item;
        }),
      );
    } else {
      setFiltersArray((filtersArray) => [...filtersArray, item]);
      //console.log("Filters Array :", filtersArray)
    }
  };

  useEffect(() => {
    //console.log('Filters Array :', filtersArray);
    dispatch(setFilter(idFilter, 'value', filtersArray));
  }, [dispatch, idFilter, filtersArray]);

  return (
    <div>
      {listNames?.map((item, index) => (
        <li onClick={() => setFilterValue(item)}>
          <Button className="" key={index} textSize="12px" bg={backgroundColor} text={item} />
        </li>
      ))}
    </div>
  );
};

export default List;
