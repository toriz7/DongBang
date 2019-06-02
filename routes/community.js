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

router.get('/community',function(req,res){
    var perPage = 5//페이지당 5개
    var page = req.params.page || 1 //파라미터로 값 받기.

    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("mylab");
      dbo.collection("student_board").find({})
      .skip((perPage * page) - perPage) //이렇게 해야 첫 페이지에서도 출력됨
      .limit(perPage)
      .sort({"date":1}).toArray(function(err, result) {
        if (err) throw err;
        if(req.session.user){
          res.render('community', { email:req.session.user.email, name:req.session.user.name, board: result,page:page });
          db.close();
        }
        else{
          res.render('community', { email:null, name:null, board: result,page:page });
          db.close();
        }
      });
    });
    //console.log(req.session.user.email);
});

router.get('/community/:page',function(req,res){
    var perPage = 5//페이지당 5개
    var page = req.params.page || 1 //파라미터로 값 받기.

    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("mylab");
        dbo.collection("student_board").find({})
        .skip((perPage * page) - perPage) //이렇게 해야 첫 페이지에서도 출력됨
        .limit(perPage)
        .sort({"date":1}).toArray(function(err, result) {
        if (err) throw err;
        if(req.session.user){
          res.render('community', { email:req.session.user.email, name:req.session.user.name, board: result, page:page });
          db.close();
        }
        else{
          res.render('community', { email:null, name:null, board: result, page:page });
          db.close();
        }
      });
    });
    //console.log(req.session.user.email);
});

router.get('/community_write',function(req,res){
  if(req.session.user){
    res.render('community_write',{email:req.session.user.email, name:req.session.user.name})

    //console.log(req.session.user.email);
  }else{
    res.render('community_write',{email:null, name:null})
  }
});

module.exports=router
