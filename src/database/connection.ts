import { Sequelize } from 'sequelize';

const db_connection = new Sequelize({
    dialect: 'sqlite',
    storage: 'db.sqlite',
    define: {
        timestamps: true
    }
})

export default db_connection;