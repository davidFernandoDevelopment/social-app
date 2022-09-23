import { useRef, useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

import './c-sidebar.scss';
import { sidebarList } from '../../data';
import Profile from '.././../images/profile-1.jpg';
import { Avatar, Card, Icon } from '../../bemit/components';
import PopupNotification from '../popupNotification/PopupNotification';

const Sidebar = () => {
    const indicator = useRef<HTMLSpanElement>(null);
    const [value, setValue] = useState(0);

    useEffect(() => {
        indicator.current!.style.transform = `translateY(${value * 100}%)`;
    }, [value]);

    return (
        <div className="c-sidebar">
            <Card>
                <Link to="/" className="c-sidebar__profile">
                    <Avatar image={Profile} alt="Sidebar image profile" />
                    <div className="c-sidebar__profile-name">
                        <h4>David Sanchez</h4>
                        <p className='u-text-muted'>
                            @davidsanchez
                        </p>
                    </div>
                </Link>
            </Card>
            <Card className='c-sidebar__list'>
                {
                    sidebarList.map(({ icon, name, popup, badge, path }, index) => (
                        <li className={`c-sidebar__item`} key={index}>
                            <NavLink
                                end
                                to={path}
                                className={({ isActive }) =>
                                    `c-sidebar__link ${isActive ? 'c-sidebar__link--active' : ''}`
                                }
                                onClick={() => setValue(index)}
                            >
                                <Icon p='c-sidebar' icon={icon} badge={badge ? '4+' : ''} />
                                <h3 className='c-sidebar__name'>{name}</h3>
                            </NavLink>
                            {
                                popup
                                    ? <PopupNotification />
                                    : null
                            }
                        </li>
                    ))
                }
                <span className='c-sidebar__indicator' ref={indicator}></span>
            </Card>
        </div>
    );
};

export default Sidebar;