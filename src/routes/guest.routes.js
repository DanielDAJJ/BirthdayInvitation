import express from 'express';
import { getGuests, createGuest, updateGuest } from '../controller/guest.controller.js';

const router = express.Router();

router.get("/", getGuests);
router.post("/", createGuest);
router.put("/", updateGuest)

export default router;