
import {useCallback} from 'react';

import useFilter from './use-filter';
import MenuItem from '../menu-item';
import './style.css';

const TaskList = ({taskList, onEdit, onRemove, onTaskListChange}) => {
    const {filterKey, handleKeyChange, filterOrder, filterIds} = useFilter({taskList});

    const handleIsCompletedChange = useCallback((task) => {
        const taskNew = {...task, isCompleted: !task.isCompleted}
        onTaskListChange(taskNew);
    }, [onTaskListChange]);

    return (
        <div className="task-list">
            <div className="task-menu">
                <MenuItem
                    title="Completed"
                    keyValue="isCompleted"
                    activeKey={filterKey}
                    activeOrder={filterOrder}
                    onSelect={handleKeyChange}
                />
                <MenuItem
                    title="Id"
                    keyValue="id"
                    activeKey={filterKey}
                    activeOrder={filterOrder}
                    onSelect={handleKeyChange}
                />
                <MenuItem
                    title="Title"
                    keyValue="title"
                    activeKey={filterKey}
                    activeOrder={filterOrder}
                    onSelect={handleKeyChange}
                />
                <MenuItem title="Controls"/>
            </div>
            {filterIds.map((key) => {
                const item = taskList[(key)];

                if (!item) {
                    return null;
                }
                const {title, isCompleted, id} = item;
                return (
                    <div className="task" key={id}>
                        <div className="task__item">
                            <input 
                                type="checkbox"
                                checked={isCompleted}
                                onClick={() => handleIsCompletedChange(item)}/>
                        </div>
                        <div className="task__item">
                            {id}
                        </div>
                        <div className="task__item">
                            {title}
                        </div>
                        <div className="task__item">
                            <button className="task__edit" type="button" onClick={() => onEdit(item)}>
                                edit
                            </button>
                            <button className="task__delete" type="button" onClick={() => onRemove(item)}>
                                delete
                            </button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
};

export default TaskList;