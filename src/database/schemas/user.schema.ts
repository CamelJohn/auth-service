import { DataTypes, type Model } from 'sequelize';
import db_connection from '../connection';
import { PASSWORD_LENGTH } from '../../constants';

export enum UserTypeEnum {
    ADMIN = 'admin',
    TRAINER = 'trainer',
    TRAINEE = 'trainee',
}

export interface UserCreationAttributes {
    name: string;
    email: string;
    password: string;
    type: UserTypeEnum;
    created_at: Date;
}

export interface UserAttributes extends UserCreationAttributes {
    id: string;
    updated_at: Date;
    deleted_at: Date | null;
}

export interface UserSchema extends Model<UserAttributes, UserCreationAttributes>, UserCreationAttributes {}

const UserModel = db_connection.define<UserSchema>('user', {
    id: {
        type: DataTypes.UUIDV4,
        primaryKey: true,
        defaultValue: DataTypes.UUID,
        allowNull: true,
        unique: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            min: PASSWORD_LENGTH,
        }
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date(),
    },
    deleted_at: {
        type: DataTypes.DATE,
        allowNull: false
    }
});

export default UserModel;