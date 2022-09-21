import './message.scss';
import { Avatar } from '../../../../bemit/components';


interface Props {
    avatar: string;
    name: string;
    message: string;
    viewed: boolean;
    status?: 'none' | 'success' | 'danger';
}

const Message = ({ avatar, message, name, viewed, status }: Props) => {
    return (
        <div className='c-message'>
            <Avatar image={avatar} alt={name} status={status} />
            <div className="c-message__body">
                <h5 className='c-message__name'>{name}</h5>
                <p
                    className={`c-message__text u-text-${viewed ? 'muted' : 'bold'}`}
                >
                    {message}
                </p>
            </div>
        </div>
    );
};

export default Message;