import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from 'kepler.gl/actions';
import { Checkbox, ButtonSelect, ButtonIcon } from '../button-type';
import { ListSelect, ButtonWrapper } from './style';

export type ListProps = {
  idFilter?: number | string;
  listNames?: string[];
  listTypes?: string[];
  listProduits?: string[];
  textType: string;
  textProduits: string;
};
export const List = ({ 
  listNames = [], 
  idFilter = 0,
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
      console.log("Filters Array :", filtersArray)
    }
  };
  
  useEffect(() => {
    console.log('Filters Array :', filtersArray);
    dispatch(setFilter(idFilter, 'value', filtersArray));
  }, [dispatch, idFilter, filtersArray]);
  
  console.log(filtersArray);
  console.log(idFilter);
  console.log(listNames);

  // if (idFilter === 0){
  //   <ListSelect>
  //       {listTypes.map((item, i) => {
  //         // if (i === 0) {
  //         // console.log(i, item);
  //         // }
  //         // const itemType = item;
  //         return (
  //           <li key={i} onClick={() => setFilterValue(item)}>
  //           <ButtonSelect text={item}/>
  //         </li>
  //         )
  //       })}
  //     </ListSelect>
  // } else if (idFilter === 2) {

  //     <ListIconButton>
  //           {listNames.map((item, index) => (
  //             <li key={index} onClick={() => setFilterValue(item)}>
  //               <ButtonIcon text={item}/>
  //             </li>
  //           ))}
  //         </ListIconButton>

  // };
  
  return (
    <>
      <ListSelect>
          {listNames.map((item : string, i: number) => {
            if(idFilter === 0){
              return(
                 <ButtonWrapper key={i} onClick={() => setFilterValue(item)}>
                 <ButtonSelect text={item}/>
               </ButtonWrapper>
              )
            } else {

              return(
                <ButtonWrapper key={i} onClick={() => setFilterValue(item)}>
                  <ButtonIcon text={item}/>
                </ButtonWrapper>
              )}
            })   
          }
      </ListSelect>
             {/* <ListSelect>
             {listNames.map((item, i) => {
               return(
                 <li key={i} onClick={() => setFilterValue(item)}>
                 <ButtonSelect text={item}/>
               </li>
                )
               
             })}
              </ListSelect> */}

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

// if (idFilter === 0){
//   return (
//     <>
//       <ListSelect>
//         {listNames.map((item, index) => (
//           <li key={index} onClick={() => setFilterValue(item)}>
//             <ButtonSelect className="" textSize="12px" text={item}/>
//           </li>
//         ))}
//       </ListSelect>
//       </>
//   )
// } else if (idFilter === 1) {
//   return(
//     <ListIconButton>
//           {listNames.map((item, index) => (
//             <li key={index} onClick={() => setFilterValue(item)}>
//               <ButtonIcon text={item}/>
//             </li>
//           ))}
//         </ListIconButton>
//   )
// } else if (idFilter === 2){
//   return (
//     <>
//     <ListIconButton>
//           {listNames.map((item, index) => (
//             <li key={index} onClick={() => setFilterValue(item)}>
//               <ButtonIcon text={item}/>
//             </li>
//           ))}
//         </ListIconButton>
//         </>
//   )
// }