import { useContext, useEffect } from 'react';

import './tab.scss';
import { ContextTabs } from '../tabs/Tabs';


interface Props {
    id: number;
    children: React.ReactNode;
}

const Tab = ({ id, children }: Props) => {
    const { value, setValue, indicator } = useContext(ContextTabs);

    useEffect(() => {
        indicator.current!.style.transform = `translateX(${100 * value}%)`;
        //eslint-disable-next-line
    }, [value]);

    return (
        <div
            className='c-tab'
            onClick={() => setValue(id)}
        >
            {children}
        </div>
    );
};

export default Tab;