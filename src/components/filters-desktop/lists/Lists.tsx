import { useEffect, useState } from 'react';
import { useDispatch, connect } from 'react-redux';
import { setFilter } from 'erasme-kepler.gl/actions';
import { Checkbox, ButtonSelect, ButtonIcon, ButtonDefault } from '../../buttons/button-type';
import { ListSelect, ButtonWrapper, ListIconButton, ListCheckbox } from './style';

export type ListProps = {
  idFilter?: number | string;
  listNames?: string[];
  width?: any;
  backgroundColor?: string;
  theme?: string;
  btnType?: string;
  layerId?: number;
  className?: string;
  text?: string;
};
export const List = ({ listNames = [], idFilter, theme, text }: ListProps) => {
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

  // return based on theme name
  if (theme === 'industries') {
    return (
      <div>
        {listNames?.map((item, index) => (
          <li onClick={() => setFilterValue(item)}>
            <ButtonDefault
              className=""
              key={index}
              textSize="12px"
              text={item}
              bg={undefined}
              btnType={undefined}
              listNames={undefined}
              layerId={undefined}
              iconName={undefined}
            />
          </li>
        ))}
      </div>
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
