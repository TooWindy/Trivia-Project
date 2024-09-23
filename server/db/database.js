const Sequelize = require('sequelize');

const config = {
    logging: false,
};

if (process.env.DATABASE_URL) {
    config.dialectOptions = {
        ssl: {
            rejectUnauthorized: false,
        },
    };
}

const db = new Sequelize('postgres://localhost:5432/BoilerPlate_db', config);

module.exports = db;
