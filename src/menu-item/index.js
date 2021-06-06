import './style.css';

const MenuItem = ({title, keyValue, order, onSelect, activeKey}) => (
    <div
        className={`menu-item${keyValue && keyValue === activeKey ? ' menu-item_active' : ''}`}
        onClick={() => keyValue && onSelect(keyValue)}
    >
        <div>
            {title}
        </div>
    </div>
);

export default MenuItem;