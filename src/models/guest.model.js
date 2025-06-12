import mongoose from "mongoose";

const guestSchema = new mongoose.Schema({
    name: {type: String, required: true},
    isComing: {type: Boolean, required: true, default: false},
    companions: [{type: String, default: ""}],
    message: {type: String, default: ""},
}, {timestamps: true});

export default mongoose.model("Guest", guestSchema);