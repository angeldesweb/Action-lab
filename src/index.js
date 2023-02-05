import express from 'express';

const app = express();

app.get('/',(req,res) => res.json({message:'Hello'}));

app.listen(3000,(err) => {
    if(err) return console.log(`App failed: ${err}`);

    console.log('Everything OK...');
})