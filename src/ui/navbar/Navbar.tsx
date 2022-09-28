import './c-navbar.scss';
import ImageAvatar from '../../images/profile-1.jpg';
import PopupNotification from '../popupNotification/PopupNotification';
import { Icon, IconButton, Search, Popup, Switch } from '../../bemit/components';
import Theme from '../../pages/theme/Theme';


const Navbar = () => {

  const openModal = () => {
    console.log('OPEN MODAL !!!');


  };

  return (
    <nav className='c-navbar'>
      <div className="c-navbar__container o-container">
        <h2 className="c-navbar__logo">
          social
        </h2>
        <Search p='c-navbar' />
        <ul className="c-navbar__list">
          <li className='c-navbar__item'>
            <Popup
              icon={<Icon p='c-navbar' icon='uil uil-envelope-alt' badge='4+' />}
              path='/messages'
            >
              <div style={{ padding: '1rem', backgroundColor: 'var(--color-white)', boxShadow: '0 0 2rem var(--color-primary)' }}>
                Messages
              </div>
            </Popup>
          </li>
          <li className='c-navbar__item'>
            <Popup
              icon={<Icon p='c-navbar' icon='uil uil-bell' badge='4+' />}
              path="/notifications"
            >
              <PopupNotification />
            </Popup>
          </li>
          <li>
            <Switch />
          </li>
          <li className="c-navbar__item">
            <img
              className="c-navbar__profile"
              src={ImageAvatar}
              alt="avatar profile"
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;