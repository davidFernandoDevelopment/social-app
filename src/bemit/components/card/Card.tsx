import './c-card.scss';

interface Props {
    className?: string;
    children: React.ReactNode;
}

const Card = ({ children, className }: Props) => {
    return (
        <div className={`c-card ${className}`}>
            {children}
        </div>
    );
};

export default Card;