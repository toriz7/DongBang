const mongoose = require('mongoose');

// Define Schemes
const BoardSchema = new mongoose.Schema({
  userid: { type: String, required: true, unique: true },//네이버 id
  date: { type: Date, required: true, default: Date.now()},//작성일
  room_area: { type: Number, required: true },//소수점 까지 내려가는 방 크기
  location: { type: String, default: true }, //맵 api 로 보내야 하는 내용. 위치
  content: { type: String, default: false },//후기
  isGood:{ type: Boolean, default: true} //좋은지 안 좋은지
},
{
  timestamps: true
});

// Create Model & Export
module.exports = mongoose.model('student_board', BoardSchema);

//db.student_board.insert({"userid":"toriz7","date":"2019-05-08","room_area":"17.5","location":"서울특별시 중구 필동 3가","title":"강추","content":"굿굿","imgLoc":"./template/img/bg.img","isGood":"true","howmayGood":"0"})
//db.student_board.insert({"userid":"zipJoa","date":"2019-05-10","room_area":"19.5","location":"서울특별시 중구 필동 3가","title":"가앙추","content":"굿굿2","imgLoc":"./template/img/bg.img","isGood":"true","howmayGood":"0"})
//db.student_board.insert({"userid":"zipSiru","date":"2019-05-11","room_area":"15","location":"서울특별시 중구 필동 3가","title":"그닥","content":"나빠","imgLoc":"./template/img/bg.img","isGood":"false","howmayGood":"0"})
//db.student_board.insert({"userid":"hahaha","date":"2019-05-12","room_area":"16.5","location":"서울특별시 중구 필동 3가","title":"굿ㅋㅋㅋㅋㅋㅋ","content":"굿굿3","imgLoc":"./template/img/bg.img","isGood":"true","howmayGood":"0"})
//db.student_board.insert({"userid":"onichan","date":"2019-05-13","room_area":"19.5","location":"서울특별시 중구 필동 3가","title":"좋은ㄷ?","content":"굿굿4","imgLoc":"./template/img/bg.img","isGood":"true","howmayGood":"0"})
//db.student_board.insert({"userid":"icyTail","date":"2019-05-13","room_area":"20","location":"서울특별시 중구 필동 3가","title":"별로","content":"나빠2,"imgLoc":"./template/img/bg.img","isGood":"false","howmayGood":"0"})
//db.student_board.insert({"userid":"whatsup","date":"2019-05-14","room_area":"17.5","location":"서울특별시 중구 필동 3가","title":"쓰지마","content":"나빠3","imgLoc":"./template/img/bg.img","isGood":"false","howmayGood":"0"})
//db.student_board.insert({"userid":"sowhat","date":"2019-05-15","room_area":"17.5","location":"서울특별시 중구 필동 3가","title":"히히1","content":"굿굿5","imgLoc":"./template/img/bg.img","isGood":"true","howmayGood":"0"})
//db.student_board.insert({"userid":"chanchan","date":"2019-05-16","room_area":"18","location":"서울특별시 중구 필동 3가","title":"히히2","content":"굿굿6","imgLoc":"./template/img/bg.img","isGood":"true","howmayGood":"0"})
//db.student_board.insert({"userid":"hithere","date":"2019-05-18","room_area":"16.5","location":"서울특별시 중구 필동 3가","title":"히히3","content":"굿굿7","imgLoc":"./template/img/bg.img","isGood":"true","howmayGood":"0"})
//db.student_board.insert({"userid":"Chris.P.Bacon","date":"2019-05-19","room_area":"17.5","location":"서울특별시 중구 필동 3가","title":"히히4","content":"굿굿8","imgLoc":"./template/img/bg.img","isGood":"true","howmayGood":"0"})
