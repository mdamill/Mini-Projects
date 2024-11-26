const express = require('express')
const app = express();

const cors = require('cors')

const connect = require('./connectMongo')

// const bodyParser = require('body-parser');
// app.use(bodyParser.json());
app.use(express.json())
app.use(cors());

const User = require('./schema')

app.post('/', async (req,res)=>{

    const reqBody = req.body
    
    const newNotes = new User({
        author:reqBody.author,
        notes:reqBody.notes
    })

    await newNotes.save()
    return res.json(true)
})

app.get('/', async(req,res)=>{
    const noteList = await User.find();
    return res.json(noteList)
})

app.listen(4300);