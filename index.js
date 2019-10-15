var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var port = 8000, app = express();
var router = express.Router();
var mongoose = require('mongoose');
var userModel = require('./models/users.models');



router.route('/login').post(function (req, res) {
    if (req.body.Email && req.body.Password) {
        userModel.findOne({ Email: req.body.Email, Password: req.body.Password }, (err,res1) => {
                if(res1){
                    res.json({message:"User Found"});
                }

                else{
                    res.json({message:"User Not Found"});
                }
                console.log(err,res1);
        });
    }
});

router.route('/register').post(function (req, res) {


    userModel.create(req.body).finally(() => {
        console.log('done');
    }

    );
    // var reg = new userModel(req.body);
    // reg.save(function (err, product) {
    //     console.log(product);
    //     res.json({
    //         data:product
    //     });
    // });
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', router);
app.use(cors());


mongoose.connect('mongodb://localhost:27017/Pigi', { useNewUrlParser: true }, (err) => {
    if (err) {
        console.log(err);
    }

});

app.listen(port, function () {
    console.log("listening at port" + port);
});

