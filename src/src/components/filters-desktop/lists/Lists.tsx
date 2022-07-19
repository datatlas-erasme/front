import { useEffect, useState } from 'react';
import { useDispatch, connect } from 'react-redux';
import { setFilter } from 'erasme-kepler.gl/actions';
import { Checkbox, ButtonSelect, ButtonIcon, ButtonDefault } from '../../buttons/button-type';
// import { Ouverture } from '../../buttons/button-type/button-day/style';
import { ListSelect, ButtonWrapper, ListIconButton, ListCheckbox } from './style';
// import { ListCheckbox, LabelCheckbox } from './style';

export type ListProps = {
  idFilter?: number | string;
  listNames?: string[];
  width?: any;
  backgroundColor?: string;
  theme?: string;
};
export const List = ({ listNames = [], idFilter, theme }: ListProps) => {
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
  console.log(listNames);

  // return based on theme name
  if (theme === 'industries') {
    return (
      <div>
        {listNames?.map((item, index) => (
          <li onClick={() => setFilterValue(item)}>
            <ButtonDefault className="" key={index} textSize="12px" text={item} />
          </li>
        ))}
      </div>
    );
  } else {
    return (
      <>
        <ListSelect>
          {listNames.map((item: string, i: number) => {
            switch (idFilter) {
              case 1:
                return (
                  <ButtonWrapper key={i} onClick={() => setFilterValue(item)}>
                    <ButtonSelect text={item} />
                  </ButtonWrapper>
                );
            }
          })}
        </ListSelect>
        <ListIconButton>
          {listNames.map((item: string, i: number) => {
            switch (idFilter) {
              case 3:
                return (
                  <ButtonWrapper key={i} onClick={() => setFilterValue(item)}>
                    <ButtonIcon text={item} />
                  </ButtonWrapper>
                );
            }
          })}
        </ListIconButton>
        <ListCheckbox>
          {listNames.map((item: string, i: number) => {
            switch (idFilter) {
              case 4:
                return (
                  <ButtonWrapper key={i} onClick={() => setFilterValue(item)}>
                    <Checkbox text={item} />
                  </ButtonWrapper>
                );
            }
          })}
        </ListCheckbox>
      </>
    );
  }
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
