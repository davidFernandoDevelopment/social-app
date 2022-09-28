import classNames from 'classnames';

import './c-iconButton.scss';


interface Props {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

const IconButton = ({ children, className, ...rest }: Props) => {
    const classes = classNames(['c-iconButton', className]);

    return (
        <button className={classes} {...rest}>
            {children}
        </button>
    );
};

export default IconButton;