const {Router} = require('express')
const Call = require('../models/Call')
const router = Router();



router.get('/', async (req, res) => {
    try {
        const Calls = await Call.find();
        res.json(Calls);
    } catch (error) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
    }
});

router.post('/add', async (req, res) => {
    const { clientName, clientPhone, time, requestTime} = req.body;

    try {
        // console.log(req.body);
        const call = new Call({ clientName, clientPhone, time, requestTime });
        await call.save();

        res.status(201).json({ message: 'Встреча назначена' });
    } catch (error) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
    }
});

router.post('/delete', async (req, res) => {
    const {CallId} = req.body.form;

    try {
        const candidate = await Call.findOne({ CallId });

        if (!candidate) {
            res.status(400).json({ message: 'Встреча не найдена' });
        }

        const response = await Call.deleteOne({ CallId });

        res.status(200).json({ message: 'Встреча удалена' });
    } catch (error) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
    }
});

router.post('/update', async (req, res) => {
    const {callId, ...newData} = req.body.form;

    try {
        const candidate = await Call.findOne({ callId });

        if (!candidate) {
            res.status(400).json({ message: 'Встреча не найдена' });
        }

        const response = await Call.updateOne({ callId }, {$set: newData});

        res.status(200).json({ message: 'Встреча обновлена' });
    } catch (error) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
    }
});

module.exports = router;