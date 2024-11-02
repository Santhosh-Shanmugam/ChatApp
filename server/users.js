const Users = [];

const adduser = ({ id, name, room }) => {
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();

    const exists = Users.find((user) => user.name === name && user.room === room);

    if (exists) {
        return { error: 'A user with that name is already in this room' };
    }

    const user = { id, name, room };
    Users.push(user);

    return { user };
};

const removeuser = ({ id }) => {
    const index = Users.findIndex((user) => user.id === id);
    if (index !== -1) {
        return Users.splice(index, 1)[0];
    }
};

const getuser = ({ id }) => {
    return Users.find((user) => user.id === id);
};

const getUserInRoom = (room) => {
    return Users.filter((user) => user.room === room);
};

export default { adduser, removeuser, getuser, getUserInRoom };