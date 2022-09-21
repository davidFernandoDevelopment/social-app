import './story.scss';
import { Avatar } from '../../../../bemit/components';

interface Props {
    name: string;
    avatar: string;
    image: string;
}

const Story = ({ image, name, avatar }: Props) => {
    return (
        <article className='c-story'>
            <Avatar className='c-story__avatar' image={avatar} alt={name} />
            <p className='c-story__name'>{name}</p>
            <img className='c-story__bgImage' src={image} alt={name} />
        </article>
    );
};

export default Story;