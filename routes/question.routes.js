const {Router} = require('express')
const Question = require('../models/Question')
const router = Router();



router.get('/', async (req, res) => {
    try {
        const Questions = await Question.find();
        res.json(Questions);
    } catch (error) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
    }
});

router.post('/add', async (req, res) => {
    const { clientName, clientEmail, questionText, requestTime} = req.body;

    try {
        // console.log(req.body);
        const question = new Question({ clientName, clientEmail, questionText, requestTime });
        await question.save();

        res.status(201).json({ message: 'Вопрос задан' });
    } catch (error) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
    }
});

router.post('/delete', async (req, res) => {
    const {QuestionId} = req.body.form;

    try {
        const candidate = await Question.findOne({ QuestionId });

        if (!candidate) {
            res.status(400).json({ message: 'Вопрос не найден' });
        }

        const response = await Question.deleteOne({ QuestionId });

        res.status(200).json({ message: 'Вопрос удалён' });
    } catch (error) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
    }
});

router.post('/update', async (req, res) => {
    const {questionId, ...newData} = req.body.form;

    try {
        const candidate = await Question.findOne({ questionId });

        if (!candidate) {
            res.status(400).json({ message: 'Вопрос не найден' });
        }

        const response = await Question.updateOne({ questionId }, {$set: newData});

        res.status(200).json({ message: 'Вопрос обнавлён' });
    } catch (error) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
    }
});

module.exports = router;