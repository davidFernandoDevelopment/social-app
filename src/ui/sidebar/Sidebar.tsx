import { useRef, useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

import './c-sidebar.scss';
import { sidebarList } from '../../data';
import Profile from '.././../images/profile-1.jpg';
import { Avatar, Card, Icon } from '../../bemit/components';
import PopupNotification from '../popupNotification/PopupNotification';

const Sidebar = () => {
    const [value, setValue] = useState(0);
    const indicator = useRef<HTMLSpanElement>(null);
    const location = useLocation();

    useEffect(() => {
        indicator.current!.style.transform = `translateY(${value * 100}%)`;
        indicator.current!.style.borderRadius = '0';

        if (value === 0) indicator.current!.style.borderTopLeftRadius = 'var(--card-border-radius)';
        if (value === sidebarList.length - 1) indicator.current!.style.borderBottomLeftRadius = 'var(--card-border-radius)';

    }, [value]);

    useEffect(() => {
        indicator.current!.style.backgroundColor = 'var(--color-primary)';
        console.log({ location: location.pathname });
        if (location.pathname.includes('notifications')) {
            indicator.current!.style.backgroundColor = 'transparent';
        }
    }, [location]);


    return (
        <div className="c-sidebar">
            <Card className='c-sidebar__user'>
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
            <div className="c-sidebar__wrapper">
                <Card className='c-sidebar__list'>
                    {
                        sidebarList.map(({ icon, name, popup, badge, path }, index) => (
                            <li className={`c-sidebar__item`} key={index}>
                                {
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
                                }
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
        </div>
    );
};

export default Sidebar;