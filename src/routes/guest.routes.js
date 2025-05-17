import express from 'express';
import Guest from '../models/guest.models.js';

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const guests = await Guest.find();
        if (!guests || guests.length === 0) {
            return res.status(404).json({error: "No hay invitados"});
        }
        res.status(200).json({success: true, guests});
    } catch (error) {
        console.error(error);
        res.status(500).json({error: "Algo ha ocurrido danos un momento para solucionarlo"});
    }
})
router.post("/", async (req, res) => {
    try {
        const { name, isComing, companions} =  req.body;
        if (!name || typeof isComing !== 'boolean'){
            return res.status(400).json({error: "Faltan datos requeridos"});
        }
        const existingGuest = await Guest.findOne({name});
        if (existingGuest) {
            return res.status(400).json({error: "El invitado ya existe"});
        }
        const newGest = new Guest({name, isComing, companions});
        const savedGuest = await newGest.save();
        res.status(201).json({success: true, guest: savedGuest});
    } catch (error) {
        console.error(error);
        res.status(500).json({error: "Algo ha ocurrido danos un momento para solucionarlo"});
    }
})

export default router;