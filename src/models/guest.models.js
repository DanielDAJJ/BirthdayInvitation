import mongoose from "mongoose";

const guestSchema = new mongoose.Schema({
    name: {type: String, required: true},
    inComing: {type: Boolean, required: true, default: false},
    companions: [{type: String}]
}, {timestamps: true});

export default mongoose.model("Guest", guestSchema);