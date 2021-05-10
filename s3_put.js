var AWS = require("aws-sdk");
AWS.config.region = "ap-northeast-2";
var fs = require('fs');
var s3 = new AWS.S3();

var param = {
    'Bucket':'unowbucket',//required 버킷명
    'Key':'pangsu3.png',//required 저장될 파일의 이름을 다음으로 지정
    'ACL':'public-read',//optional, 업로파일은 소유자는 쓰기, 모든사람은 읽기가 가능하게 한다. 설정참고
    'Body':fs.createReadStream('img.png'),//new Buffer(...), STRING_VALUE, streamObject중 사용
    'ContentType':'image/png'//이미지파일을 브라우저에 표시하기 위해 작성
}
//putObject와 upload의 차이? 업로드 주소가 필요한 경우에는 upload를 사용라하고 한다.s

s3.upload(param, function(err, data){
	console.log(err);
	console.log(data);
})















