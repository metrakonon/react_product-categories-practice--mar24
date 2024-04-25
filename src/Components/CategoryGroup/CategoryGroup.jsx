import categories from '../../api/categories';

export const CategoryGroup = () => {
  return (
    <div className="panel-block is-flex-wrap-wrap">
      <a
        href="#/"
        data-cy="AllCategories"
        className="button is-success mr-6 is-outlined"
      >
        All
      </a>
      {categories.map(category => {
        return (
          <a
            href="#/"
            data-cy="Category"
            key={category.id}
            className="button mr-2 my-1 is-info"
          >
            {category.title}
          </a>
        );
      })}
    </div>
  );
};
