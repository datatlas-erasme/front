import { useEffect, useState } from 'react';
import { useDispatch, connect, useSelector } from 'react-redux';
import { setFilter } from 'erasme-kepler.gl/actions';
import { Checkbox, ButtonSelect, ButtonIcon, ButtonDefault } from '../../buttons/button-type';
// import { Ouverture } from '../../buttons/button-type/button-day/style';
import { getThemeName } from '../../../store/app';
import { ListSelect, ButtonWrapper, ListIconButton, ListCheckbox } from './style';
// import { ListCheckbox, LabelCheckbox } from './style';

export type ListProps = {
  idFilter?: number | string;
  listNames?: string[];
  width?: any;
  backgroundColor?: string;
  btnType?: string;
  layerId?: number;
  className?: string;
  text?: string;
};
export const List = ({ listNames = [], idFilter, text, backgroundColor }: ListProps) => {
  // Get the theme name
  const theme = useSelector(getThemeName);

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

  // return based on theme name change text color based if filter is active or not
  if (theme === 'industries') {
    return (
      <ul>
        {listNames?.map((item, index) => (
          <li onClick={() => setFilterValue(item)} key={index}>
            <ButtonDefault
              className=""
              textSize="12px"
              text={item}
              bg={backgroundColor}
              btnType="sub-child"
              listNames={undefined}
              layerId={undefined}
              iconName={undefined}
              textColor={filtersArray.includes(item) ? 'white' : 'grey'}
            />
          </li>
        ))}
      </ul>
    );
  } else {
    return !!text && text[0] === 'type' ? (
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
    ) : !!text && text[0] === 'produits' ? (
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
    ) : !!text && text[0] === 'label' ? (
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
    ) : null;
  }
};

export default connect()(List);
