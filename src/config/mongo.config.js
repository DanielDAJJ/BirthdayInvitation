import mongoose from "mongoose";
import 'dotenv/config';

const connectDB = async () => {
    await mongoose.connect(process.env.MONGODB_URI, {
        dbName: process.env.DB_NAME,
    })
    .then(()=>{
        console.log("Conectado a la base de datos");
    })
    .catch((err) =>{
        console.log("Error al conectar a la base de datos: ", err);
    })
}
export default connectDB;