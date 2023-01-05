import { useEffect, useState } from 'react';
import { useDispatch, connect } from 'react-redux';
import { setFilter } from 'kepler.gl/actions';
import { ButtonSelect, ButtonDay, ButtonIcon, Checkbox } from '../../buttons/button-type';
import { reorderDayList } from '../../../utils/reoderDayList';
import { ListSelect, ButtonWrapper, ListIconButton, ListCheckbox, ListDay } from './style';

export type ListProps = {
  idFilter?: number | string;
  listNames?: string[];
  width?: any;
  text?: string | undefined;
  dayList?: string[] | any;
};
export const List = ({ listNames = [], idFilter, text, dayList, ...props }: ListProps) => {
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

  const newDayList = reorderDayList(dayList, 0, 6, 0, 3, 5, 4);

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
              <ButtonWrapper key={i}>
                <Checkbox text={item} setFilterValue={() => setFilterValue(item)} />
              </ButtonWrapper>
            );
        }
      })}
    </ListCheckbox>
  ) : !!text && text[0] === 'joursouverture' ? (
    <ListDay>
      {newDayList.map((item: string, i: number) => {
        switch (idFilter) {
          case 5:
            return (
              <ButtonWrapper key={i} onClick={() => setFilterValue(item)}>
                <ButtonDay text={item} />
              </ButtonWrapper>
            );
        }
      })}
    </ListDay>
  ) : null;
};

export default connect()(List);
