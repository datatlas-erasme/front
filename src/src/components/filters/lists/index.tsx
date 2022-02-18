import { useEffect, useState } from 'react';
import { useDispatch, connect } from 'react-redux';
import { setFilter } from 'erasme-kepler.gl/actions';
import { Checkbox, ButtonSelect, ButtonIcon } from '../../buttons/button-type';
import { ListSelect, ButtonWrapper } from './style';
import { ListCheckbox, LabelCheckbox } from './style';

export type ListProps = {
  idFilter?: number | string;
  listNames?: string[];
  width?: any;
};
export const List = ({ 
  listNames = [], 
  idFilter,
  width
}: ListProps) => {

  const dispatch = useDispatch();
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
  
  // console.log(filtersArray);
  // console.log(idFilter);
  // console.log(listNames);
  
  return (
      <ListSelect>
          {listNames.map((item : string, i: number) => {
              if(idFilter === 2){
                return(
                  <ButtonWrapper key={i} onClick={() => setFilterValue(item)}>
                    <ButtonSelect text={item}/>
                  </ButtonWrapper>
                )
              } else if (idFilter === 3) {

                return(
                  <>
                  <ButtonWrapper key={i} onClick={() => setFilterValue(item)}>
                    <ButtonIcon text={item}/>
                  </ButtonWrapper>
                  <ButtonWrapper key={i} onClick={() => setFilterValue(item)}>
                    <Checkbox text={item}/>
                  </ButtonWrapper>
                  </>

                )
              } else if (idFilter === 2) {

                return (
                  <ButtonWrapper key={i} onClick={() => setFilterValue(item)}>
                    <Checkbox text={item}/>
                  </ButtonWrapper>
                  // <ListCheckbox key={i} role="group" aria-labelledby="checkbox-group">
                  //   <LabelCheckbox>
                  //       <input type="checkbox" />
                  //       Voir que les produits labélisés
                  //   </LabelCheckbox>
                  //   <ul>
                  //     {listNames.map((item, index) => (
                  //     <li key={index} onClick={() => setFilterValue(item)}>
                  //       <Checkbox text={item}/>
                  //     </li>
                  //     ))}
                  //   </ul>
                  // </ListCheckbox>
                )
              }
            })   
          }
      </ListSelect>
  );
};

export default connect()(List);