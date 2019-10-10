var express=require('express');
var cors=require('cors');
var bodyParser=require('body-parser');
var port=8000,app=express();
var router=express.Router();


router.route('/newOTP').get(function(req,res) {
    res.json({
        hello:'hey guys'
    })
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/api',router);


app.listen(port,function(){
    console.log("listening at port"+port);
});
