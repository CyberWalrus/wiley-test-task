import {useEffect, useState} from 'react';

import {SessionStorageKey} from '../constants';

const useTask = ({task: taskInit}) => {
    const sessionTask = JSON.parse(sessionStorage.getItem(SessionStorageKey.task));

    const [task, setTask] = useState(taskInit || sessionTask || {});

    const handleTaskChange = (key, value) => setTask((taskOld) => {
        console.log(key, value);
        const taskNew = {...taskOld, [key]: value};

        sessionStorage.setItem(SessionStorageKey.task, JSON.stringify(taskNew));

        return taskNew;
    })

    const handleClearTask = () => {
        sessionStorage.removeItem(SessionStorageKey.task);

        setTask({});
    }

    useEffect(() => {
        if(taskInit) {
        setTask(taskInit)
    }}, [taskInit]);

    return {task, handleTaskChange, handleClearTask};
}

export default useTask;