import React, {useState} from 'react';
import './Menu.scss'
import Block from "../Block/Block";
const menuItemsIcon=[
    'home',
    'balance',
    'stats',
    'message'
]

const Menu = () => {
    const [activeIdx, setActiveIdx] = useState(0);

    const setActive = (idx) => () => setActiveIdx(idx)

    const renderItem = (item, idx) => {
        const cls = idx === activeIdx
            ? "Menu__item active"
            : "Menu__item"

        return (
            <div className="Menu__item" onClick={setActive(idx)}>
            <i className={`icon-${item}`}/>
            {idx === activeIdx && (
                <div className="Menu__item-dot"></div>
            )}
        </div>
        )
}
        return (
        <Block className="Menu" big>
            {menuItemsIcon.map(renderItem)}
        </Block>
    );
};

export default Menu;