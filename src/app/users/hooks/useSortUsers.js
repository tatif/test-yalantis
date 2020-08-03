import { useGetUsers } from './useGetUsers';

export const useSortUsers = () => {
    const { users } = useGetUsers();

    const countUsersByMonth = () => {
        if (users.length) {
            return users
                .map(user => new Date(user.dob).getMonth())
                .reduce((count, month) => {
                    count[month] = (count[month] || 0) + 1;
                    return count;
                }, {})
        }
    };

    const getUsersByMonth = (month) => {
        return users.filter(user => parseInt(month) === new Date(user.dob).getMonth())

    };

    return { sortedUsersByMonth: countUsersByMonth(), getUsersByMonth }
};
