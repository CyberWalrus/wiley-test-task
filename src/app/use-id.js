import {useState} from 'react';

import {LocalStorageKey} from '../constants';

const useId = () => {
    const localId = Number(localStorage.getItem(LocalStorageKey.taskId));
    const [id, setId] = useState(localId || 0);

    const nextId = () => setId((idOld) => {
        const idNew = idOld + 1;

        localStorage.setItem(LocalStorageKey.taskId, String(idNew));

        return idNew;
    });


    return {id, nextId};
}

export default useId;