import mongoose, { mongo } from "mongoose";

mongoose.set('strictQuery', true);
mongoose.connect('');

const db = mongoose.connection;

export default db;