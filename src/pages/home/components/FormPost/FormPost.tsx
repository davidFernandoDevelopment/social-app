import './formPost.scss';
import Profile from '../../../../images/profile-1.jpg';
import { Avatar, Button } from '../../../../bemit/components';

const FormPost = () => {
    return (
        <form className='formPost'>
            <Avatar className='formPost__avatar' image={Profile} alt="" />
            <input
                type="text"
                className='formPost__input'
                placeholder="What's on your mind, David ?"
            />
            <Button className='formPost__button' variant='primary'>
                Post
            </Button>
        </form>
    );
};

export default FormPost;