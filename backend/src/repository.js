const database = require('./database');

const executeQuery = function (query, params, resolve, reject) {
    database.connection.query(query, params, (error, result, fields) => {
        if (!error) return resolve(result);

        console.error(error);
        reject('Database error.');
    });
}

exports.get = () => new Promise((resolve, reject) => {
    const query = 'select id, description, isDone from task';
    executeQuery(query, {}, resolve, reject);
});

exports.create = (task) => new Promise((resolve, reject) => {
    const query = 'insert into task set ?';
    executeQuery(query, task, result => resolve(result.insertId), reject);
});

exports.update = (id, task) => new Promise((resolve, reject) => {
    const query = 'update task set ? where id = ?';
    executeQuery(query, [task, id], () => resolve(), reject);
});

exports.delete = (id) => new Promise((resolve, reject) => {
    const query = 'delete from task where id = ?';
    executeQuery(query, id, () => resolve(), reject);
});

exports.deleteAll = () => new Promise((resolve, reject) => {
    const query = 'delete from task';
    executeQuery(query, {}, () => resolve(), reject);
});