import bcrypt from 'bcrypt';
import crypto from 'node:crypto';
import userDao from '../../database/user.dao';
import { CompareInputs } from './interfaces';
import { Unauthorized } from 'http-errors';

const password_service = {
    obfuscate: async (clear_text_password: string) => {
        const salt = await bcrypt.genSalt(10);
        const hashed_password = await bcrypt.hash(clear_text_password, salt);

        return hashed_password;
    },
    compare: ({ clear_text, hashed }: CompareInputs) => {
        return bcrypt.compare(clear_text, hashed);
    },
    forgot: async (email: string) => {
        const user = await userDao.findBy(email);

        if (!user) {
            throw new Unauthorized();
        }

        const parsed_user = user.toJSON();

        const new_pasword = crypto.randomBytes(4).toString('hex').slice(0, 8);

        const password = await password_service.obfuscate(new_pasword);
        
        await userDao.update(parsed_user.id, { password });

        return new_pasword;
    },
    update: async (user_id: string, clear_text_password: string) => {
        const password = await password_service.obfuscate(clear_text_password);
        await userDao.update(user_id, { password });
    }
};

export default password_service;
