import express from 'express';
import { getGuests, createGuest } from '../controller/guest.controller.js';

const router = express.Router();

router.get("/", getGuests);
router.post("/", createGuest);

export default router;