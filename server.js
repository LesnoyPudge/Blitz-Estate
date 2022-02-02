const express = require('express');
const config = require('config');
const path = require('path');
const mongoose = require('mongoose');

const app = express();
const PORT = config.get('port') || 5000;

app.use(express.json({ extended: true }));

app.use('/api/apartments', require('./routes/apartments.routes'));
app.use('/api/appointment', require('./routes/appointment.routes'));
app.use('/api/call', require('./routes/call.routes'));
app.use('/api/question', require('./routes/question.routes'));
// app.use('/api/parse', require('./routes/parse.routes'));

if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.join(__dirname, 'client', 'build')))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

async function start() {
    try {
        await mongoose.connect((config.get('dbconnection')), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        app.listen(PORT, () => console.log(`started: ${PORT}`));
    } catch (error) {
        console.log('Error: ', error);
        process.exit(1);
    }
}

start();