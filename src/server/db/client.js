const { Client } = require("pg");
const connectionString =
    process.env.DATABASE_URL ||
    "http://localhost:5432/group2_capstone_database";

const db = new Client({
    user: "postgres",
    password: "76779",
    host: "localhost",
    port: "5432",
    database: "capstone",
    ssl: false,
    //  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : undefined, //WILL NEED FOR DEPLOYING LATER and running in "start" mode
});

module.exports = db;
