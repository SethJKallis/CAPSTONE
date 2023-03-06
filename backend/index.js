const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3500;

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use((req,res,next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
});

app.get('/', (req,res) => {
    res.send({message: "This is a test!"})
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});