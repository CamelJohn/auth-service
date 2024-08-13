import UserModel, { UserCreationAttributes } from './schemas/user.schema';

const userDao = {
    findOne: async (user_id: string) => {
        try {
            const user = await UserModel.findOne({ where: { id: user_id } });

            return user;
        } catch (error) {
            // TODO: add winston logger herer
            throw error;
        }
    },
    create: async (user: UserCreationAttributes) => {
        try {
            const created_user = await UserModel.create(user); 

            return created_user;
        } catch (error) {
            // TODO: add winston logger herer
            throw error;
        }
    },
    update: async (user_id: string, user: UserCreationAttributes) => {
        try {
            const updated_user = await UserModel.update(user, { where: { id: user_id } });
            
            return updated_user;
        } catch (error) {
            // TODO: add winston logger herer
            throw error;
        }
    }
}

export default userDao;