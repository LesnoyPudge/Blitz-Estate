const {Router} = require('express')
const Apartment = require('../models/Apartment')
const router = Router();



router.get('/', async (req, res) => {
    try {
        const apartments = await Apartment.find();
        res.json(apartments);
    } catch (error) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
    }
});

router.post('/add', async (req, res) => {
    const {label, image, lot, price, area, floor} = req.body.form;

    try {
        const candidate = await Apartment.findOne({ lot });
        
        if (candidate) {
            res.status(400).json({ message: 'Такой лот уже занят' });
        }

        const apartment = new Apartment({ label, image, lot, price, area, floor });
        await apartment.save();

        res.status(201).json({ message: 'Лот добавлен' });
    } catch (error) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
    }
});

router.post('/delete', async (req, res) => {
    const {lot} = req.body.form;

    try {
        const candidate = await Apartment.findOne({ lot });

        if (!candidate) {
            res.status(400).json({ message: 'Лот не найден' });
        }

        const response = await Apartment.deleteOne({ lot });

        res.status(200).json({ message: 'Лот удалён' });
    } catch (error) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
    }
});

router.post('/update', async (req, res) => {
    const {lot, ...newData} = req.body.form;

    try {
        const candidate = await Apartment.findOne({ lot });

        if (!candidate) {
            res.status(400).json({ message: 'Лот не найден' });
        }

        const response = await Apartment.updateOne({ lot }, {$set: newData});

        res.status(200).json({ message: 'Лот обнавлён' });
    } catch (error) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
    }
});

module.exports = router;