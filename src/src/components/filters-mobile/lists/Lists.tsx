import { useEffect, useState } from 'react';
import { useDispatch, connect } from 'react-redux';
import { setFilter } from 'erasme-kepler.gl/actions';
import { ButtonSelect, ButtonDay, ButtonIcon, Checkbox } from '../../buttons/button-type';
// import { Ouverture } from '../../buttons/button-type/button-day/style';
import { ListSelect, ButtonWrapper, ListIconButton, ListCheckbox, ListDay } from './style';
// import { ListCheckbox, LabelCheckbox,  } from './style';

export type ListProps = {
  idFilter?: number | string;
  listNames?: string[];
  width?: any;
  text?: string | undefined;
};
export const List = ({ 
  listNames = [], 
  idFilter,
  text,
}: ListProps) => {

  const dispatch = useDispatch();
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
  
  return (
    <>
      <ListSelect>
        {listNames.map((item : string, i: number) => {
          switch(idFilter) {
            case 1 : return (
              <ButtonWrapper key={i} onClick={() => setFilterValue(item)}>
                <ButtonSelect text={item}/>
              </ButtonWrapper>
              )
            }
        })}
      </ListSelect>
      
      <ListIconButton>
        {listNames.map((item : string, i: number) => {
          switch(idFilter) {
            case 3 : return (
              <ButtonWrapper key={i} onClick={() => setFilterValue(item)}>
                      <ButtonIcon text={item}/>
              </ButtonWrapper>
            )
          }
        })}
      </ListIconButton>

      <ListDay>
        {listNames.map((item : string, i: number) => {
          switch(idFilter) {
            case 5 : return (
               <ButtonWrapper key={i} onClick={() => setFilterValue(item)}>
                  <ButtonDay text={item}/>
                </ButtonWrapper>
            )
          } 
        })}
      </ListDay>

      <ListCheckbox>
        {listNames.map((item : string, i: number) => {
          switch(idFilter) {
            case 4 : return (
               <ButtonWrapper key={i} onClick={() => setFilterValue(item)}>
                  <Checkbox text={item}/>
                </ButtonWrapper>
            )
          } 
        })}
      </ListCheckbox>
 
    </>
      
  );
};

export default connect()(List);

/* <ListCheckbox role="group" aria-labelledby="checkbox-group">
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
    </ListCheckbox>  
*/