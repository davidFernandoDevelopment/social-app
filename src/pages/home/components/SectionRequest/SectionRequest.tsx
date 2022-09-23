import './section-request.scss';
import Request from '../Request/Request';
import { requests } from '../../../../data';



const SectionRequest = () => {
    return (
        <div className='c-section-request'>
            <h4 className='c-section-request__title'>Request</h4>
            <div className="c-section-request__requests">
                {
                    requests.map((req, index) => (
                        <Request key={index} {...req} />
                    ))
                }
            </div>
        </div>
    );
};

export default SectionRequest;