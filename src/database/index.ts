import db_connection from './connection';

const db = {
    connection: db_connection,
    $connect: () => db_connection.sync(),
    $disconnect: () => db_connection.close(),
    $test_connection: () => db_connection.validate(),
}

export default db;