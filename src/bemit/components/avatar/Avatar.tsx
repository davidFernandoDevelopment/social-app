import './avatar.scss';

interface Props {
    alt?: string;
    image: string;
    className?: string;
    status?: 'none' | 'success' | 'danger';
}


const Avatar = ({ alt, image, className, status = 'none' }: Props) => {
    return (
        <div className={`c-avatar ${className}`}>
            <img className='c-avatar__img' src={image} alt={alt} />
            {
                status !== 'none'
                    ? <span className={`c-avatar__status c-avatar__status--${status}`}></span>
                    : null
            }
        </div>
    );
};

export default Avatar;