var express = require('express');
var router = express.Router();
/*
여기서 세션설정가지 코드 없으면 세션에러가 난다...왜?
아마도 세션 선언 user가 여기서 이루어지기 때문에인듯하다
*/
var bodyParser=require("body-parser");
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

var session=require('express-session');
router.use(session({
  secret: 'secret key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false, maxAge: 60*5000 }
  //using secure flag means that the cookie will be set on Https only
}))

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

router.get('/categories',function(req,res){
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mylab");
    dbo.collection("house_board").find({})
      .sort({"date":1}).toArray(function(err, result) {
        if(req.session.user){
          res.render('categories',{email:req.session.user.email, name:req.session.user.name, board:result})
          //console.log(req.session.user.email);
        }else{
          res.render('categories',{email:null, name:null,board:result})
        }

    })
  })
});




module.exports=router
