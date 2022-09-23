import './request.scss';
import { Avatar, Button, Card } from '../../../../bemit/components';


interface Props {
  avatar: string;
  name: string;
  desc: string;
}

const Request = ({ avatar, name, desc }: Props) => {
  return (
    <Card className='c-request'>
      <div className="c-request__info">
        <Avatar image={avatar} />
        <div className="c-request__data">
          <h5>{name}</h5>
          <p className='c-request__extra u-text-muted'>{desc}</p>
        </div>
      </div>
      <div className="c-request__action">
        <Button>Aceptar</Button>
        <Button variant='secondary'>Rechazar</Button>
      </div>
    </Card>
  );
};

export default Request;