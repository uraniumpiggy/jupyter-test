import React from 'react';
import './GridItem.css'

const GridItem = ({itemData, onDelete, selected, setSelection, setGroup, index}) => {
    // выделяем картинку при условии что ширина экрана не менее 1040 пикселей
    console.log('render')
    const handleSelect = () => {
        if (window.screen.width >= 1040) {
            setSelection(index)
        }
    }

    // если нажата клавиша Del (keyCode 46) и картинка выделена то удаляем ее
    const handleDeleteItem = (e) => {
        if (e.keyCode === 46 && selected) {
            setSelection(index)
            onDelete(itemData)
        }
    }

    return (
        <div 
            className={`grid-item ${selected ? 'selected' : ''}`} 
            tabIndex='0'
            onKeyDown={e => handleDeleteItem(e)}
        >
            <img 
                src={`https://picsum.photos/200?random=${itemData.image}`} 
                alt="item"
                onClick={handleSelect}
            />
            <div className='item-inner-content'>
                <div
                    onClick={() => {setGroup(itemData.group)}}
                >{itemData.group}</div>
                <h3>{itemData.title}</h3>
            </div>
        </div>
    );
}

export default React.memo(GridItem);
