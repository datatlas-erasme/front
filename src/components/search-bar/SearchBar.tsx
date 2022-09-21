import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Select from 'react-select';
import { findMatches, Match } from '../../store/keplerGl/search';
import { onFeatureClick } from '../../store/keplerGl';
import useKeplerDispatch from '../../hooks/useKeplerDispatch';
import InstanceConfigurationInterface from '../../domain/InstanceConfigurationInterface';
import NoResults from './NoResults';
import SearchResult from './SearchResult';

interface SearchBarProps {
  filters: InstanceConfigurationInterface['searchFilters'];
}

const SearchBar = ({ filters }: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const matches = useSelector(findMatches(searchQuery, filters));
  const dispatch = useKeplerDispatch();

  const getOptionValue = ({
    obj: {
      properties: { index },
    },
  }: Match) => index.toString(10);

  const getOptionLabel = (match: Match) =>
    Object.values(match.resultsByField)
      .map(({ target }) => target)
      .join(' - ');

  const handleChange = (match: Match | null) => {
    if (match) {
      dispatch(onFeatureClick(match.obj, match.layer));
    }
  };

  return (
    <Select
      noOptionsMessage={NoResults}
      options={matches}
      inputValue={searchQuery}
      onInputChange={setSearchQuery}
      getOptionValue={getOptionValue}
      getOptionLabel={getOptionLabel}
      formatOptionLabel={SearchResult}
      onChange={handleChange}
      openMenuOnClick={false}
      closeMenuOnScroll={false}
      closeMenuOnSelect={false}
    />
  );
};

export default SearchBar;
