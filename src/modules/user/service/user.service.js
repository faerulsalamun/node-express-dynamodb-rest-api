const UserRepository = require(`../repository/user.repository`);

class UserService {

    async findByID(UserID) {
        const data = await UserRepository.findByID(UserID);

        if (data) {
            return data.Item;
        }

        return data;
    }

    async create(data) {
        return await UserRepository.create({
            Username: data.Username
        });
    }

    async update(UserID, data) {
        return await UserRepository.update(UserID, {
            Username: data.Username
        });
    }

    async deleteByID(UserID) {
        return await UserRepository.deleteByID(UserID);
    }

}

module.exports = new UserService()
