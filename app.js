const { query } = require('express');
const express=require('express');
const app=express();
const path =require('path');
const request=require('request');
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use(express.static('public'));
app.get('/results',(req,res)=>{
    let query=req.query.search;
    request('https://api.themoviedb.org/3/search/movie?api_key=98b6cbc2391369aa87fe123eae4f5275&query='+query,(error,response,body)=>{
         if(error){
             console.log(error);
         }
         let data=JSON.parse(body);
         //console.log(data);
         res.render('movies',{data:data,searchQuery:query});
    })
    
});
app.get('/search',(req,res)=>{
      res.render('search');
});
app.listen(3000,()=>{
    console.log('server started at port 3000');
});