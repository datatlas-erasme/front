import fuzzysort from 'fuzzysort';
import React from 'react';

const highlightMatch = (m, i) => <strong key={i}>{m}</strong>;

const highlightResult = (result) => fuzzysort.highlight(result, highlightMatch);

const SearchResult = ({ resultsByField }) => {
  const results = Object.values(resultsByField);
  if (results.length === 0) {
    return null;
  }

  return <span>{Object.values(results).map(highlightResult)}</span>;
};

export default SearchResult;
