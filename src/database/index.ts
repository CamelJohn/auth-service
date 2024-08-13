import db_connection from './connection';

const db = {
    $connect: async () => {
        await db_connection.sync();
    },

    $disconnect: async () => {
        await db_connection.close();
    },
    $test_connection: async () => {
        await db_connection.authenticate();
    }
}

export default db;