import Guest from "../models/guest.model.js";

export const getGuests = async (req, res) => {
    try {
        const guests = await Guest.find();
        res.status(200).json({success: true, guests});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Algo ha ocurrido, danos un momento para solucionarlo" });
    }
}
export const createGuest = async (req, res) => {
    try {
        const {name, isComing, companion, message} = req.body;
        if (!name || typeof isComing !== 'boolean') {
            return res.status(400).json({ error: "Faltan datos requeridos" });
        }
        const existingGuest = await Guest.findOne({name});
        if(existingGuest){
            return res.status(400).json({ error: "El invitado ya existe" });
        }
        const newGuest = new Guest({
            name,
            isComing,
            companion,
            message: !isComing ? message : "",
        });
        const savedGuest = await newGuest.save();
        return res.status(201).json({ success: true, guest: savedGuest});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Algo ha ocurrido, danos un momento para solucionarlo" });
    }
}