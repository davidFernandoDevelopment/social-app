import './c-button.scss';

interface Props {
    className?: string;
    children?: React.ReactNode;
    variant?: 'primary' | 'secondary';
}

const Button = ({ children, className, variant = 'primary' }: Props) => {
    return (
        <button
            className={`c-button c-button--${variant} ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;