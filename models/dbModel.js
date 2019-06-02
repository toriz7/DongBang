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
/*
db.house_board.insert(
  {
    "type": "월세",
    "date": "2019-06-02",
    "room_area": "13.51 / 4평",
    "location": "서울특별시 중구 필동 3가",
    "title": "동국대 3분거리 원룸",
    "car": "unable",
    "price": "보증금 500 / 월세 45"
  }
)
db.house_board.insert(
  {
    "type": "전세",
    "date": "2019-00-02",
    "room_area": "20.62 / 6평",
    "location": "서울특별시 중구 필동 3가",
    "title": "오피스텔 파크원빌",
    "car": "able",
    "price": "보증금 1000 / 월세 60"
  }
)
db.house_board.insert(
  {
    "type": "전세",
    "date": "2019-06-02",
    "room_area": "30.54 / 9평",
    "location": "서울특별시 중구 필동 3가",
    "title": "오피스텔 파크원빌",
    "car": "able",
    "price": "보증금 1000 / 월세 70"
  }
)
db.house_board.insert(
  {
    "type": "전세",
    "date": "2019-05-30",
    "room_area": "30.54 / 9평",
    "location": "서울특별시 중구 필동 3가",
    "title": "동대입구역 분리형 원룸",
    "car": "unable",
    "price": "보증금 1000 / 월세 70"
  }
)
db.house_board.insert(
  {
    "type": "전월세",
    "date": "2019-05-30",
    "room_area": "48 / 14평",
    "location": "서울특별시 중구 필동 3가",
    "title": "동대입구역 투룸",
    "car": "unable",
    "price": "보증금 1억 / 월세 70"
  }
)
db.house_board.insert(
  {
    "type": "월세",
    "date": "2019-05-30",
    "room_area": "13.51 / 4평",
    "location": "서울특별시 중구 필동 3가",
    "title": "살기좋은 여성전용 원룸",
    "car": "unable",
    "price": "보증금 1000 / 월세 55"
  }
)
db.house_board.insert(
  {
    "type": "월세",
    "date": "2019-05-29",
    "room_area": "13.51 / 4평",
    "location": "서울특별시 중구 필동 3가",
    "title": "동대입구역 3분거리 원룸",
    "car": "able",
    "price": "보증금 1000 / 월세 60"
  }
)
db.house_board.insert(
  {
    "type": "월세",
    "date": "2019-05-29",
    "room_area": "19.8 / 5평",
    "location": "서울특별시 중구 필동 3가",
    "title": "3호선 동대입구역 3분 이내 원룸",
    "car": "unable",
    "price": "보증금 2500 / 월세 30"
  }
)
db.house_board.insert(
  {
    "type": "전세",
    "date": "2019-05-29",
    "room_area": "18.5 / 5평",
    "location": "서울특별시 중구 필동 3가",
    "title": "동대입구역 도보 1분 교통편한 원룸",
    "car": "unable",
    "price": "보증금 1000 / 월세 45"
  }
)
*/
