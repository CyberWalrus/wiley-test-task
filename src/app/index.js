import {useState} from 'react';

import useTaskList from './use-task-list';
import TaskList from '../task-list';
import useIsOpen from './use-is-open';
import Modal from '../modal';
import './style.css';

const App = () => {
    const [task, setTask] = useState({});
    const {isOpen, handleIsOpenSet} = useIsOpen();
    const {taskList, handleTaskAdd, handleTaskListChange, handleTaskRemove} = useTaskList();

    const handleTaskNew = () => {
        setTask({});
        handleIsOpenSet(true);
    };

    const handleTaskEdit = (value) => {
        setTask(value);
        handleIsOpenSet(true);
    };

    const handleTaskCreate = (value) => {
        handleTaskAdd(value);
        handleIsOpenSet(false);
    };

    const handleTaskChange = (value) => {
        handleTaskListChange(value);
        handleIsOpenSet(false);
    };

    return (
        <div className="app">
            <button className="app__add" type="button" onClick={handleTaskNew}>
                Add
            </button>
            <TaskList
                taskList={taskList}
                onRemove={handleTaskRemove}
                onEdit={handleTaskEdit}
                onTaskListChange={handleTaskListChange}
            />
            { isOpen &&
                <Modal
                    task={task}
                    onChange={handleTaskChange}
                    onCreate={handleTaskCreate}
                    onClose={() => handleIsOpenSet(false)}
                />
            }
        </div>
    )
};


export default App;
