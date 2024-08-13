import { DataTypes, type Model } from 'sequelize';
import db_connection from '../connection';

enum TokenTypeEnum {
    REFRESH = 'refresh',
    ACCESS = 'access',
}

interface TokenCreationAttributes {
    token: string;
    type: TokenTypeEnum;
    created_at: Date;
}

interface TokenAttributes extends TokenCreationAttributes {
    id: string;
    updated_at: Date;
    deleted_at: Date | null;
}

interface TokenSchema extends Model<TokenAttributes, TokenCreationAttributes>, TokenCreationAttributes {}

const TokenModel = db_connection.define<TokenSchema>('token', {
    id: {
        type: DataTypes.UUIDV4,
        primaryKey: true,
        defaultValue: DataTypes.UUID,
        allowNull: true,
        unique: true,
    },
    token: {
        type: DataTypes.STRING,
        allowNull: false,
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

export default TokenModel;