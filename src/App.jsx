/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from 'react';
import './App.scss';

import usersFromServer from './api/users';
import categoriesFromServer from './api/categories';
import productsFromServer from './api/products';

import { ProductsList } from './Components/ProductsList/ProductsList';
import { UserGroup } from './Components/UserGroup/UserGroup';
import { SearchInput } from './Components/SearchInput/SearchInput';
import { CategoryGroup } from './Components/CategoryGroup/CategoryGroup';

const products = productsFromServer.map(product => {
  const category = categoriesFromServer.find(c => c.id === product.categoryId);
  const user = usersFromServer.find(u => u.id === category.ownerId);

  return {
    ...product,
    category,
    user,
  };
});

export const App = () => {
  const [currentUser, setCurrentUser] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSelectUser = userId => {
    setCurrentUser(userId);
  };

  const handleSearchString = event => {
    setSearchQuery(event.target.value);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
  };

  const handleReset = () => {
    setCurrentUser('All');
    setSearchQuery('');
  };

  const visibleProducts = products.filter(product => {
    if (currentUser === 'All' && searchQuery === '') {
      return true;
    }

    if (currentUser !== 'All' && searchQuery === '') {
      return product.user.id === currentUser;
    }

    if (currentUser === 'All' && searchQuery !== '') {
      return product.name.toLowerCase().includes(searchQuery.toLowerCase());
    }

    return (
      product.user.id === currentUser &&
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Product Categories</h1>

        <div className="block">
          <nav className="panel">
            <UserGroup
              handleSelectUser={handleSelectUser}
              currentUser={currentUser}
            />

            <SearchInput
              handleSearchString={handleSearchString}
              searchQuery={searchQuery}
              handleClearSearch={handleClearSearch}
            />

            <CategoryGroup />

            <div className="panel-block">
              <button
                type="button"
                data-cy="ResetAllButton"
                className="button is-link is-outlined is-fullwidth"
                onClick={handleReset}
              >
                Reset all filters
              </button>
            </div>
          </nav>
        </div>

        <ProductsList products={visibleProducts} />
      </div>
    </div>
  );
};
