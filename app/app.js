const express = require('express');
const data = require('./data/data.json');

const app = express();
app.set('port', process.env.PORT || 3000);
app.get('/', (req, res)=>{
    res.send(`
        <h1>Hello world</h1>
    `);
});
app.get('/speakers', (req, res)=>{
    let info='';
    data.speakers.forEach((item)=>{
       info += `<li>
            <h2>${item.name}</h2>
            <p>${item.summary}</p>
        </li>
        `
    });
    res.send(`
        ${info}
    `);
});
app.get('/speakers/:speakerId', (req, res)=>{
    let speaker = data.speakers[req.params.speakerId];
    res.send(`
        <h1>${speaker.title}</h1>
        <h2>${speaker.name}</h2>
        <p>${speaker.summary}</p>
    `);
});

app.listen(app.get('port'), ()=>{
    console.log(`server getting start with port ${app.get('port')}`);
});