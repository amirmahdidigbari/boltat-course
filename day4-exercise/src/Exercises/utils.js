export const setMembers = members => {
    return members.reduce((prev, current) => {
        return { ...prev, [current.id]: current };
    }, {});
};
export const getUser = (members, id) => {
    return setMembers(members)[id];
};
