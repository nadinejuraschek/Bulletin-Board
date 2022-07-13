const   express     = require('express'),
        mongoose    = require('mongoose');

const   app = express();

app.listen(process.env.PORT, function() {
    console.log('\x1b[32m', `Server is listening on PORT ${process.env.PORT}.`);
})