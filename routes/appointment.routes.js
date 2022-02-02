const {Router} = require('express')
const Appointment = require('../models/Appointment')
const router = Router();



router.get('/', async (req, res) => {
    try {
        const appointments = await Appointment.find();
        res.json(appointments);
    } catch (error) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
    }
});

router.post('/add', async (req, res) => {
    const { clientName, clientPhone, time, apartmentId, requestTime} = req.body;

    try {
        const appointment = new Appointment({ clientName, clientPhone, time, apartmentId, requestTime });
        await appointment.save();

        res.status(201).json({ message: 'Встреча назначена' });
    } catch (error) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
    }
});

router.post('/delete', async (req, res) => {
    const {appointmentId} = req.body.form;

    try {
        const candidate = await Appointment.findOne({ appointmentId });

        if (!candidate) {
            res.status(400).json({ message: 'Встреча не найдена' });
        }

        const response = await Appointment.deleteOne({ appointmentId });

        res.status(200).json({ message: 'Встреча удалена' });
    } catch (error) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
    }
});

router.post('/update', async (req, res) => {
    const {apartmentId, ...newData} = req.body.form;

    try {
        const candidate = await Appointment.findOne({ apartmentId });

        if (!candidate) {
            res.status(400).json({ message: 'Встреча не найдена' });
        }

        const response = await Appointment.updateOne({ apartmentId }, {$set: newData});

        res.status(200).json({ message: 'Встреча обновлена' });
    } catch (error) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
    }
});

module.exports = router;