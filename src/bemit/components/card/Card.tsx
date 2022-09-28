import React from 'react';

import './c-card.scss';

interface Props {
    className?: string;
    children: React.ReactNode;
}

const Card = React.forwardRef<HTMLDivElement, Props>(({ children, className }: Props, ref) => {
    return (
        <div className={`c-card ${className}`} ref={ref}>
            {children}
        </div>
    );
});

export default Card;