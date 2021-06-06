import {useCallback} from 'react';

import TaskForm from '../task-form';
import useTask from './use-task';
import './style.css';

const Modal = ({task, onCreate, onChange, onClose}) => {
    const {task: taskEdit, handleTaskChange, handleClearTask} = useTask({task});

    const handleTaskSubmit = useCallback((value) => {
        handleClearTask();

        if (value?.id) {
            onChange?.(value);
        } else {
            onCreate?.(value);
        }
    }, [onCreate, onChange, handleClearTask]);

    const handleCancel = useCallback((value) => {
        handleClearTask();
        onClose();
    }, [handleClearTask, onClose]);

    return (
        <div className="modal">
            <TaskForm
                task={taskEdit}
                onChange={handleTaskChange}
                onCancel={handleCancel}
                onSubmit={handleTaskSubmit}
            />
        </div>
    )
};


export default Modal;
