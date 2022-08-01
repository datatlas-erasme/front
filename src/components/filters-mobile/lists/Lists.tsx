import { useEffect, useState } from 'react';
import { useDispatch, connect } from 'react-redux';
import { setFilter } from 'erasme-kepler.gl/actions';
import { ButtonSelect, ButtonDay, ButtonIcon } from '../../buttons/button-type';
// import { Ouverture } from '../../buttons/button-type/button-day/style';
import { ListSelect, ButtonWrapperTypes, ButtonWrapperIcon } from './style';
// import { ListCheckbox, LabelCheckbox } from './style';

export type ListProps = {
  idFilter?: number | string;
  listNames?: string[];
  width?: any;
  text?: string | undefined;
};
export const List = ({ listNames = [], idFilter, text }: ListProps) => {
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
    <>
      <ListSelect>
        {listNames.map((item: string, i: number) => {
          switch (idFilter) {
            case 2:
              return (
                <>
                  <ButtonWrapperTypes key={i} onClick={() => setFilterValue(item)}>
                    <ButtonSelect text={item} />
                  </ButtonWrapperTypes>
                </>
              );
            case 3:
              return (
                <ButtonWrapperIcon key={i} onClick={() => setFilterValue(item)}>
                  <ButtonIcon text={item} />
                </ButtonWrapperIcon>
              );
            case 5:
              return (
                <ButtonWrapperIcon key={i} onClick={() => setFilterValue(item)}>
                  <ButtonDay text={item} />
                </ButtonWrapperIcon>
              );
          }
        })}
      </ListSelect>
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
