module.exports = async(client) => {

    client.user.setPresence({
        game: {
            name : "Faire ses Devoirs"
        }
    })
};
