
export const sortArray = (list, key, order) => {
    const arrayNew = Object.values(list).sort((itemA, itemB) => {
        if(itemA[key] > itemB[key]){
            return order === 'asc' ? 1 : -1;
        }

        if(itemA[key] < itemB[key]){
            return order === 'asc' ? -1 : 1;
        }

        return 0;
    });

    return arrayNew.map(({id}) => id);
}

export const sortArrayBoolean = (list, key, order) => {
    const arrayNew = Object.values(list).sort((itemA, itemB) => {
        const a = itemA[key] === true ? -1 : 1;
        const b = itemB[key] === true ? -1 : 1;

        if(a > b){
            return order === 'asc' ? 1 : -1;
        }

        if(a < b){
            return order === 'asc' ? -1 : 1;
        }

        return 0;
    });

    return arrayNew.map(({id}) => id);
}