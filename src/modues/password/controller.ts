import password_service from './password.service';
import { PasswordController } from './interfaces';

const password_controller: PasswordController = {
    forgot: async (req, res, next) => {
        try {
            await password_service.forgot(req.body.email);

            res.status(201).json({ message: 'success', code: 201 });
        } catch (error) {
            next(error);
        }
    },
    update: async (req, res, next) => {
        try {
            await password_service.update(req.body.user_id, req.body.password);

            res.status(201).send({ message: 'success', code: 201 });
        } catch (error) {
            next(error);
        }
    }
};

export default password_controller;
