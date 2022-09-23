import "./section-message.scss";
import { Card, Search, Tab, Tabs } from '../../../../bemit/components';
import { messages } from '../../../../data';
import Message from '../Message/Message';


const SectionMessage = () => {
    return (
        <Card className='c-section-message'>
            <div className="c-section-message__header">
                <h4>Messages</h4>
                <i className='c-section-message__icon uil uil-edit'></i>
            </div>
            <Search p='c-section-message' />
            <Tabs className='c-section-message__tabs'>
                <Tab id={0}>Primary</Tab>
                <Tab id={1}>General</Tab>
                <Tab id={2}>Request</Tab>
            </Tabs>
            <div className="c-section-message__messages">
                {
                    messages.map((message, index) => (
                        <Message key={index} {...message} />
                    ))
                }
            </div>
        </Card>
    );
};

export default SectionMessage;