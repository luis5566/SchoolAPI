const express = require('express');

const app = express();
const PORT = 8080;

app.get('/api/info', (req, res) => {
    res.status(200).send({
        name: 'Faculdade de Ciências',
        studentsNumber: 100,
        fees: 1500
    });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));