import { Avatar, AvatarGroup } from '../../../../bemit/components';
import './feed.scss';

interface Props {
    avatar: string;
    name: string;
    place: string;
    time: string;
    photo: string;
    liked: string[];
}

const Feed = ({ avatar, name, place, time, photo, liked }: Props) => {
    return (
        <article className='c-feed'>
            <div className="c-feed__header">
                <div className="c-feed__header__user">
                    <Avatar image={avatar} alt='Card Header avatar' />
                    <div className="c-feed__header__data">
                        <h3>{name}</h3>
                        <small>{place}, {time}</small>
                    </div>
                </div>
                <div className="c-feed__header__action">
                    <i className="uil uil-ellipsis-h"></i>
                </div>
            </div>
            <div className="c-feed__photo">
                <img src={photo} alt="feed" />
            </div>
            <div className="c-feed__action-button">
                <div className="c-feed__interaction-button">
                    <i className="uil uil-heart"></i>
                    <i className="uil uil-comment-dots"></i>
                    <i className="uil uil-share-alt"></i>
                </div>
                <div className="c-feed__bookmark">
                    <span>
                        <i className="uil uil-bookmark-full"></i>
                    </span>
                </div>
            </div>
            <div className="c-feed__liked">
                <AvatarGroup className="c-feed__liked-avatarGroup">
                    {
                        liked.map((like, index) => (
                            <Avatar key={index} image={like} />
                        ))
                    }
                </AvatarGroup>
                <p>
                    Liked by
                    <b>Camila Sanchez</b>
                    and <b>100 others</b>
                </p>
            </div>
            <div className="c-feed__caption">
                <p>
                    <b>Camila sanchez</b>
                    Que bacan es el paisaje
                </p>
            </div>
            <div className="u-text-muted">
                View all 23 commnents
            </div>
        </article>
    );
};

export default Feed;