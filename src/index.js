const express = require('express');
const app = express();

const port = process.env.PORT || 4001;

app.get('/', (req, res) => {
    require('child_process').exec('shutdown -r now', (err, stdout, stderr) => {
        if (err) {
            return res.send(500, err.message);
        }

        res.send(stdout);
    });
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});