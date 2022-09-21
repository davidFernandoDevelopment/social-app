import { Link, NavLink } from 'react-router-dom';

import './c-sidebar.scss';
import Profile from '.././../images/profile-1.jpg';
import { Avatar } from '../../bemit/components';
import { notifications, sidebarList } from '../../data';

const Sidebar = () => {
    return (
        <div className="c-sidebar">
            <Link to="/" className="c-sidebar__profile">
                <Avatar image={Profile} alt="Sidebar image profile" />
                <div className="c-sidebar__profile-name">
                    <h4>David Sanchez</h4>
                    <p className='u-text-muted'>
                        @davidsanchez
                    </p>
                </div>
            </Link>
            <ul className='c-sidebar__list'>
                {
                    sidebarList.map(({ icon, name, popup, badge, path }, index) => (
                        <li className={`c-sidebar__item`} key={index}>
                            <NavLink
                                end
                                to={path}
                                className={({ isActive }) =>
                                    `c-sidebar__link ${isActive ? 'c-sidebar__link--active' : ''}`
                                }
                            >
                                <i className={`c-sidebar__icon ${icon}`}>
                                    {
                                        badge
                                            ? <small className='c-sidebar__badge c-badge'>4+</small>
                                            : null
                                    }
                                </i>
                                <h3 className='c-sidebar__name'>{name}</h3>
                            </NavLink>
                            {
                                popup
                                    ? (
                                        <div className="c-sidebar__popup" key={index}>
                                            {
                                                notifications.map(({ desc, image, name, time }, index) => (
                                                    <div className="c-sidebar__popup-item" key={index}>
                                                        <Avatar image={image} alt={`popup-${name}`} />
                                                        <div className="sidebar__popup-body">
                                                            <b> {name}</b> {desc}
                                                            <small className='c-sidebar__popup-time u-text-muted'>{time}</small>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>

                                    )
                                    : null
                            }
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Sidebar;