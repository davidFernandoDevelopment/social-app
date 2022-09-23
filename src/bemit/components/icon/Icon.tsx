import './c-icon.scss';

interface Props {
    p?: string;
    icon: string;
    badge?: string;
}

const Icon = ({ p: parent, icon, badge = '' }: Props) => {
    const p = parent ? `${parent}-icon` : '';

    return (
        <i className={[`c-icon ${icon}`, p].join(' ')}>
            {
                badge ?
                    <small
                        className={['c-icon__badge', `${p}__badge`].join(' ')}>
                        {badge}
                    </small>
                    : null
            }
        </i>
    );
};

export default Icon;