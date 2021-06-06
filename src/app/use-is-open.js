import {useState} from 'react';

import {SessionStorageKey} from '../constants';

const useIsOpen = () => {
    const localIsOpen = sessionStorage.getItem(SessionStorageKey.isOpen) === 'true';
    const [isOpen, setIsOpen] = useState(localIsOpen);

    const handleIsOpenSet = (value) => {
        setIsOpen(value);
        sessionStorage.setItem(SessionStorageKey.isOpen, String(value))
    };

    return {isOpen, handleIsOpenSet};
}

export default useIsOpen;
