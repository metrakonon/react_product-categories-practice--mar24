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
            {/* eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/anchor-is-valid */}
            <a
              href="#"
              data-cy="ClearButton"
              type="button"
              className="delete"
              onClick={handleClearSearch}
            />
          </span>
        )}
      </p>
    </div>
  );
};
