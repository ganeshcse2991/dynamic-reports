const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    password: 'tiger',
    user: 'root',
    database: 'datarun',
    host: 'localhost',
    port: 3306
});

/*create database*/
var dataruns = {};

dataruns.all = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM datarun', (err, res) => {
            if (err) {
                return reject(err);
            }
            return resolve(res);
        });
    });
};

dataruns.one = (id) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM datarun where id=?', id, (err, res) => {
            if (err) {
                return reject(err);
            }
            return resolve(res);
        });
    });
};


/*Applying the CRUD opertion Each ones*/



module.exports = dataruns;