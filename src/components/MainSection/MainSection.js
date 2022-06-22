import React, { useCallback, useState } from 'react';
import GridItem from '../GridItem/GridItem';
import './MainSection.css'

const MainSection = () => {
    const initialItmes = [
        {image: 1, group: 'Design', title: 'Work Media'},
        {image: 2, group: 'Motion', title: 'Work Media'},
        {image: 3, group: 'Design', title: 'Work Media'},
        {image: 4, group: 'Illustration', title: 'Work Media'},
        {image: 5, group: 'Branding', title: 'Work Media'},
        {image: 6, group: 'Motion', title: 'Work Media'},
        {image: 7, group: 'Design', title: 'Work Media'},
        {image: 8, group: 'Illustration', title: 'Work Media'},
        {image: 9, group: 'Branding', title: 'Work Media'},
    ]

    const gridMenuContent = [
        'Show All',
        'Design',
        'Branding',
        'Illustration',
        'Motion'
    ]

    const [items, setItems] = useState(initialItmes)
    const [currentGroup, setCurrentGroup] = useState(gridMenuContent[0])
    const [selectedItem, setSelectedItem] = useState(-1)

    // рандомно генерируем 9 новых кратинок и добавляем их в items 
    const addNewItems = () => {
        let allNewItems = []

        for (let i = 0; i < 9; i++) {
            const item = {
                image: i + Math.floor(Math.random()*10),
                group: gridMenuContent[Math.floor(Math.random() * (gridMenuContent.length - 1)) + 1],
                title: 'Title ' + i + Math.floor(Math.random()*10)
            }

            allNewItems.push(item)
        }

        setItems(prev => [...prev, ...allNewItems])
    }

    // фильтруем по необходимости картинки и их данные для последующего рендеринга в сетке
    const selectGroup = () => {
        let itemsCopy = items
        if (currentGroup === 'Show All') {
            return itemsCopy
        } else {
            return itemsCopy.filter(item => item.group === currentGroup)
        }
    }

    // обновляем состояние items путем удаления одного элемента
    const handleDeleteItem = useCallback((item) => {
        const index = items.indexOf(item)
        let itemsCopy = items
        itemsCopy.splice(index, 1)
        setItems([...itemsCopy])
    }, [items])


    // обработка выделения элемента
    const handleSelection = useCallback((itemIndex) => {
        setSelectedItem(prev => prev === itemIndex ? -1 : itemIndex)
    }, [])

    return (
        <div className='grid'>
            <div className='grid-menu-row'>
                {gridMenuContent.map((item, index) => <p 
                    key={index} 
                    className={`${currentGroup === item ? 'selected' : false}`}
                    onClick={() => {setCurrentGroup(item)}}
                >
                    {item}
                </p>
                )}
            </div>
            <div className='grid-menu-select'>
                <select value={currentGroup} onChange={e => {setCurrentGroup(e.target.value)}}>
                    {gridMenuContent.map((item, index) => <option
                        key={index} 
                        value={item}
                    >
                        {item}
                    </option>
                )}
                </select>
            </div>
            <div className='main-grid'>
                {selectGroup().map((item, index) => {
                    return (
                        <GridItem 
                            itemData={item} 
                            onDelete={handleDeleteItem} 
                            key={index}
                            index={index}
                            selected={selectedItem === index}
                            setSelection={handleSelection}
                            setGroup={setCurrentGroup}
                        />
                    )
                })}
            </div>
            <div className='add-items-button-wrapper'>
                <button onClick={addNewItems}>Load More</button>
            </div>
        </div>
    );
}

export default MainSection;
