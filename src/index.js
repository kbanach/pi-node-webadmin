const express = require('express');
const app = express();

const port = process.env.PORT || 4001;

app.get('/', (req, res) => {
    require('child_process').exec('sudo shutdown -r now', (err, stdout, stderr) => {
        if (err) {
            return res.status(500).send({body: err.message});
        }

        res.send({body: stdout});
    });
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});