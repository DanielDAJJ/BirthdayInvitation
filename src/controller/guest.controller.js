import Guest from "../models/guest.model.js";

export const getGuests = async (req, res) => {
    try {
        const guests = await Guest.find();
        return res.status(200).json({success: true, guests});
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
        const normalizedName = name.trim().toLowerCase();
        const existingGuest = await Guest.findOne({name: normalizedName});
        if(existingGuest){
            return res.status(400).json({ error: "El invitado ya existe" });
        }
        const newGuest = new Guest({
            name: normalizedName,
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
export const updateGuest = async (req, res) =>{
    try {
        const {name, message} = req.body;
        if(!name || !message){
            return res.status(400).json({ error: "Faltan datos requeridos" });
        }
        const normalizedName = name.trim().toLowerCase();
        const updatedGuest = await Guest.findOneAndUpdate({name: normalizedName},{isComing: false, message}, {new: true});
        if(!updatedGuest){
            return res.status(404).json({ error: "El invitado no existe" });
        }
        return res.status(200).json({ success: true, guest: updatedGuest });
    } catch (error) {
        console.error("Error al actualizar el invitado:", error);
        res.status(500).json({ error: "Error al actualizar el invitado" });
    }
}