import usersFromServer from '../../api/users';

export const UserGroup = ({ currentUser, handleSelectUser }) => {
  return (
    <>
      <p className="panel-heading">Filters</p>

      <p className="panel-tabs has-text-weight-bold">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a
          href="#"
          className={currentUser === 'All' ? 'is-active' : ''}
          onClick={() => handleSelectUser('All')}
        >
          All
        </a>

        {usersFromServer.map(user => {
          return (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a
              href="#"
              key={user.id}
              className={currentUser === user.id ? 'is-active' : ''}
              onClick={() => handleSelectUser(user.id)}
            >
              {user.name}
            </a>
          );
        })}
      </p>
    </>
  );
};
