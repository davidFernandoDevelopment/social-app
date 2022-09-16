import './c-navbar.scss';
import { Search } from '../../bemit/components';
import ImageAvatar from '../../images/profile-1.jpg';

const Navbar = () => {
  return (
    <nav className='c-navbar'>
      <div className="c-navbar__container o-container">
        <h2 className="c-navbar__logo">
          socialStore
        </h2>
        <Search p='c-navbar' />
        <div className="c-navbar__create">
          <label
            className='c-button c-button--primary'
            htmlFor="create post"
          >
            Create post
          </label>
          <div className="c-navbar__profile">
            <img
              className="c-navbar__img"
              src={ImageAvatar}
              alt="avatar profile"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;