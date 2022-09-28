import { useState } from 'react';
import './c-switch.scss';


const Switch = () => {
    const [on, setOn] = useState(false);

    return (
        <label className='c-switch'>
            <input className='c-switch__input' type="checkbox" onClick={() => setOn(prev => !prev)} />
            <span className={`c-switch__btn ${on ? 'c-switch__btn--on' : 'c-switch__btn--off'}`}></span>
        </label>
    );
};

export default Switch;