const express=require('express');
const app=express();
const PORT=3000;
app.get('/',(req,res)=>{
    res.send('<h1>Welcome SVECW!</h1><p>You have reached the home page.</p>');
});
app.get('/about',(req,res)=>{
    res.send('this server was built as a learning exercise for express.js by SVECW AI Department');
});
app.get('/api/status',(req,res)=>{
    res.json({
        active:true,
        version:"1.0.0",
        message:"the server is healthy and responding!"
    });
});
app.listen(PORT,()=>{
    console.log(`sucess!server is running at http://localhost:${PORT}`);
    console.log('press Ctrl+C to stop the server');
});

