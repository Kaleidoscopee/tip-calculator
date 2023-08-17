const express = require('express');
const app = express();
const port = 3000; //windows 5000 for mac users

app.get('/tip/:total/:tipPercentage', (req, res)=> {
    const tipAmount = req.params.total * req.params.tipPercentage / 100;
    res.send(`Tip is $${tipAmount}.`);
})



//find port
app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
});