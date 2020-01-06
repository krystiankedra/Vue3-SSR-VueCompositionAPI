export const sortByPropertyKey = (prev, next, key) => prev[key].toLocaleLowerCase() > next[key].toLocaleLowerCase() ? 1 : -1
