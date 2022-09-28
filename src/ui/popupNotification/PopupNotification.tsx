import { Link } from 'react-router-dom';

import './c-popup-notification.scss';
import { notifications } from '../../data';
import { Avatar, Card } from '../../bemit/components';


const PopupNotification = () => {
  return (
    <Card className="c-popup-notification">
      {
        notifications.map(({ desc, image, name, time }, index) => (
          <div className="c-popup-notification-item" key={index}>
            <Avatar image={image} alt={`popup-${name}`} />
            <div className="c-popup-notification-body">
              <b> {name}</b> {desc}
              <small className='c-popup-notification-time u-text-muted'>{time}</small>
            </div>
          </div>
        ))
      }
      <Link
        to="/notifications"
        className='c-popup-notification__all'
      >
        Ver todos
      </Link>
    </Card >
  );
};

export default PopupNotification;