import dotenv from 'dotenv';
dotenv.config();


export default {
    port: process.env.PORT,
    databaseUrl: process.env.DATABASE_URL
}
