import mongoose from "mongoose";

const guestSchema = new mongoose.Schema({
    name: {type: String, required: true},
    isComing: {type: Boolean, required: true, default: false},
    companion: {type: String, default: ""},
    message: {type: String, default: "", maxlength:[1000, "El mensaje no puede exceder los 1000 caracteres"]},
}, {timestamps: true});

export default mongoose.model("Guest", guestSchema);