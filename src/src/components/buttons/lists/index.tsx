import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from 'kepler.gl/actions';
import { Checkbox, ButtonSelect, ButtonIcon } from '../button-type';
import { ListSelect, ListIconButton, ListCheckbox, LabelCheckbox } from './style';

export type ListProps = {
  idFilter?: number | string;
  listNames?: string[];
};
export const List = ({ listNames = [], idFilter = 0 }: ListProps) => {
  const dispatch = useDispatch();
  const [filtersArray, setFiltersArray] = useState<string[]>([]);
    
  const setFilterValue = (item: string) => {
    if (filtersArray.includes(item)) {
      // console.log('already in filters array');
      console.log("Filters Array :", filtersArray)
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
    console.log('Filters Array :', filtersArray);
    dispatch(setFilter(idFilter, 'value', filtersArray));
  }, [dispatch, idFilter, filtersArray]);
  
  // console.log(idFilter);
  // console.log(listNames);

  const CheckboxValue = listNames[1]

  // console.log(CheckboxValue);
  
  return (
    <>
      <ListSelect>
        {listNames.map((item, index) => (
          <li key={index} onClick={() => setFilterValue(item)}>
            <ButtonSelect className="" textSize="12px" text={item}/>
          </li>
        ))}
      </ListSelect>

         {/* <ListIconButton>
            {listNames.map((item, index) => (
              <li key={index} onClick={() => setFilterValue(item)}>
                <ButtonIcon text={item}/>
              </li>
            ))}
          </ListIconButton> */}

      {/* <ListCheckbox role="group" aria-labelledby="checkbox-group">
          <LabelCheckbox>
            <input type="checkbox" />
            Voir que les produits labélisés
          </LabelCheckbox>
          <ul>
            {listNames.map((item, index) => (
            <li key={index} onClick={() => setFilterValue(item)}>
              <Checkbox text={item}/>
            </li>
            ))}
          </ul>
      </ListCheckbox> */}

               {/* <ListIconButton>
            {listNames.map((item, index) => (
              <li key={index} onClick={() => setFilterValue(item)}>
                <ButtonIcon text={item}/>
              </li>
            ))}
          </ListIconButton> */}
    </>
  );
};

export default List;
