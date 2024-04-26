import React from 'react';

export const SearchInput = ({
  handleSearchString,
  searchQuery,
  handleClearSearch,
}) => {
  return (
    <div className="panel-block">
      <p className="control has-icons-left has-icons-right">
        <input
          data-cy="SearchField"
          type="text"
          className="input"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearchString}
        />

        {searchQuery && (
          <span className="icon is-right">
            {/* eslint-disable-next-line */}
            <a
              href="#/"
              data-cy="ClearButton"
              className="delete"
              onClick={handleClearSearch}
            />
          </span>
        )}
      </p>
    </div>
  );
};
