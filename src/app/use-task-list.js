import {useState} from 'react';

import {LocalStorageKey} from '../constants';
import useId from './use-id';

const useTaskList = () => {
    const localTaskList = JSON.parse(localStorage.getItem(LocalStorageKey.taskList));

    const [taskList, setTaskList] = useState(localTaskList || {});
    const {id, nextId} = useId();

    const handleTaskAdd = (task) => {
        nextId();
        setTaskList((taskListOld) => {
            const taskWithId = {...task, id};
            const taskListNew = {...taskListOld, [id]: taskWithId}

            localStorage.setItem(LocalStorageKey.taskList, JSON.stringify(taskListNew));

            return taskListNew;
        });
    }

    const handleTaskListChange = (task) => {
        setTaskList((taskListOld) => {
            const taskListNew = {...taskListOld, [task?.id]: task}

            localStorage.setItem(LocalStorageKey.taskList, JSON.stringify(taskListNew));

            return taskListNew;
        });
    }

    const handleTaskRemove = (task) => {
        setTaskList((taskListOld) => {
            const taskListNew = {...taskListOld};
            delete taskListNew[task.id];

            localStorage.setItem(LocalStorageKey.taskList, JSON.stringify(taskListNew));

            return taskListNew;
        });
    }

    return {taskList, handleTaskAdd, handleTaskListChange, handleTaskRemove};
}

export default useTaskList;
