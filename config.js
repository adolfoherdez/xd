const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_USER = process.env.DB_USER || 'root';
const DB_PASSWORD = process.env.DB_PASSWORD || 'Hellomoto1';
const DB_NAME = process.env.DB_NAME || 'logistica';
const DB_PORT = process.env.DB_PORT || 3306;
const PORT = process.env.PORT || 3000;

//mysql://root:ZJdiQpNRcQewRLqQWAvcNaksXIGfwAbi@autorack.proxy.rlwy.net:10285/railway

module.exports = {
    DB_HOST,
    DB_USER,
    DB_PASSWORD,
    DB_NAME,
    DB_PORT,
    PORT
};