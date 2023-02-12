import mongoose from "mongoose";

mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://resilia-event-project:159357ab@events.wjtzbt5.mongodb.net/?retryWrites=true&w=majority');

const db = mongoose.connection;

export default db;