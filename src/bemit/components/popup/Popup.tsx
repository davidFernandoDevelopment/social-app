import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import './c-popup.scss';
import { IconButton } from '..';


interface Props {
    path: string;
    icon: React.ReactNode;
    children: React.ReactNode;
}

const Popup = ({ children, icon, path }: Props) => {

    const location = useLocation();
    const popup = useRef<HTMLDivElement>(null);
    const popupContent = useRef<HTMLDivElement>(null);


    useEffect(() => {
        if (location.pathname.includes(path)) {
            if (popupContent.current?.classList.contains('is-expand')) {
                popupContent.current?.classList.remove('is-expand');
            }
            popup.current?.classList.add('is-active');
            return;
        }
        handleBackdrop();
    }, [location, path]);

    const togglePopup = () => {
        if (location.pathname.includes(path)) return;
        popup.current?.classList.toggle('is-active');
        popupContent.current?.classList.toggle('is-expand');
    };

    const handleBackdrop = () => {
        popup.current?.classList.remove('is-active');
        popupContent.current?.classList.remove('is-expand');
    };

    return (
        <div ref={popup} className="c-popup">
            <IconButton className='c-popup__button' onClick={togglePopup}>
                {icon}
            </IconButton>
            <div ref={popupContent} className="c-popup__content">
                {children}
            </div>
            <div className="c-popup__backdrop" onClick={handleBackdrop}></div>
        </div>
    );
};

export default Popup;