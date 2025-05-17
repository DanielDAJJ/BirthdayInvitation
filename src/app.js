import express from 'express';
import mongoose, { connect } from 'mongoose';
import guestRoutes from './routes/guest.routes.js';
import connectDB from './config/mongo.config.js';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use("/api/guests", guestRoutes);

connectDB();

app.listen(PORT, () => {
    console.log(`Servidor en linea en el puerto:  http://localhost:${PORT}`);
});