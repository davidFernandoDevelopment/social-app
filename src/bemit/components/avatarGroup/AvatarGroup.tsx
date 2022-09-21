import "./avatarGroup.scss";


interface Props {
    className?: string;
    children: React.ReactNode;
}

const AvatarGroup = ({ children, className }: Props) => {
    return (
        <div className={`c-avatarGroup ${className}`}>
            {children}
        </div>
    );
};

export default AvatarGroup;