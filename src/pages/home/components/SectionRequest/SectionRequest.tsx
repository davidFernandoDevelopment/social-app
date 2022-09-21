import './section-request.scss';
import Request from '../Request/Request';
import { requests } from '../../../../data';



const SectionRequest = () => {
    return (
        <div className='c-section-request'>
            <h4 className='c-section-request__title'>Request</h4>
            {
                requests.map((req, index) => (
                    <Request key={index} {...req} />
                ))
            }
        </div>
    );
};

export default SectionRequest;