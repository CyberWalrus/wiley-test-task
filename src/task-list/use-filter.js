import {useMemo, useState, useCallback} from 'react';

import {SessionStorageKey} from '../constants';
import {sortArray, sortArrayBoolean} from "./helpers";

const useFilter = ({taskList}) => {
    const sessionFilterKeys = sessionStorage.getItem(SessionStorageKey.filterKey);
    const sessionFilterOrder = sessionStorage.getItem(SessionStorageKey.filterOrder);

    const [filterKey, setFilterKey] = useState(sessionFilterKeys);
    const [filterOrder, setFilterOrder] = useState(sessionFilterOrder || 'asc');

    const filterIds = useMemo(() => {
        if (!(taskList && Object.keys(taskList).length > 0)) {
            return [];
        }

        switch (filterKey) {
            case 'id':
            case 'title':
                return sortArray(taskList, filterKey, filterOrder);
            case 'isCompleted':
                return sortArrayBoolean(taskList, filterKey, filterOrder);
            default:
                return Object.keys(taskList);
        }
    }, [taskList, filterKey, filterOrder]);

    const handleKeyChange = useCallback((key) => {
        if (!(typeof key === 'string' || typeof key === 'number')) {
            return;
        }

        sessionStorage.setItem(SessionStorageKey.filterKey, key);

        if(filterKey === key){
            setFilterOrder((orderOld) => {
                const orderNew = orderOld === 'asc' ? 'desc' : 'asc';
                sessionStorage.setItem(SessionStorageKey.filterOrder, orderNew);
                return orderNew;
            })
        } else {
            sessionStorage.setItem(SessionStorageKey.filterOrder, 'asc');

            setFilterKey(key);
            setFilterOrder('asc');
        }
        
    }, [filterKey]);


    return {filterKey, handleKeyChange, filterOrder, filterIds};
}

export default useFilter;