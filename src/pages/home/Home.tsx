import './home.scss';
import { feeds, stories } from '../../data';
import { Feed, FormPost, SectionRequest, Story } from './components';
import SectionMessage from './components/SectionMessage/SectionMessage';


const Home = () => {
    return (
        <div className='home'>
            <div className="home__main">
                <div className="home__stories">
                    {
                        stories.map((story, index) => (
                            <Story key={index} {...story} />
                        ))
                    }
                </div>
                <FormPost />
                <div className="home__feeds">
                    {
                        feeds.map((feed, index) => (
                            <Feed key={index} {...feed} />
                        ))
                    }
                </div>
            </div>
            <div className='home__sidebar'>
                <SectionMessage />
                <SectionRequest />
            </div>
        </div>
    );
};

export default Home;