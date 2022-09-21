import React, { createContext, useEffect, useRef, useState } from 'react';
import './tabs.scss';


interface TabsContext {
    value: number;
    indicator: React.RefObject<HTMLSpanElement>;
    setValue: React.Dispatch<React.SetStateAction<number>>;
}
export const ContextTabs = createContext<TabsContext>({} as any);

interface Props {
    className?: string;
    children: React.ReactNode;
}

const Tabs = ({ children, className }: Props) => {
    const indicator = useRef<HTMLSpanElement>(null);
    const [value, setValue] = useState(0);

    useEffect(() => {
        let n = React.Children.toArray(children).length;
        let newWidth = 100 / n;

        if (indicator.current) {
            indicator.current!.style.width = `${newWidth}%`;
        }
        //eslint-disable-next-line
    }, []);

    return (
        <div className={`c-tabs ${className}`}>
            <ContextTabs.Provider value={{ value, setValue, indicator }}>
                {children}
                <span ref={indicator} className='c-tabs__indicator'></span>
            </ContextTabs.Provider>
        </div>
    );
};

export default Tabs;