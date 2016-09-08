var http=require("http");

function timeJSON(time){

var unix;
var natural;

if(parseInt(time)){
	unix=parseInt(time);
	unixToNatural();
}else{
	natural=time;
	naturalToUnix();
}
function unixToNatural(){
	var date=new Date();
	date.setTime(time*1000);
	var y=date.getFullYear();
	var m=date.getMonth()+1;
	var d=date.getDate();
	natural=monthToEng(m)+" "+d+", "+y;
}

function naturalToUnix(){
	var i1=time.search(" ");
	var i2=time.search(",");
	var m=time.slice(0,i1);
	m=engToMonth(m);
	var y=time.slice(-4);
	var d=time.slice(i1+1,i2);
	var date=new Date(y,m-1,d);
	console.log(y+m+d);
	unix=Date.parse(date)/1000;
}


function monthToEng(month){
	switch (month){
		case 1:return "January";
		break;
		case 2:return "February";
		break;
		case 3:return "March";
		break;
		case 4:return "April";
		break;
		case 5:return "May";
		break;
		case 6:return "June";
		break;
		case 7:return "July";
		break;
		case 8:return "August";
		break;
		case 9:return "September";
		break;
		case 10:return "October";
		break;
		case 11:return "November";
		break;
		case 12:return "December";
		break;
		default:break;
	}
}
function engToMonth(eng){
	switch (eng){
		case "January":return 1;
		break;
		case "February":return 2;
		break;
		case "March":return 3;
		break;
		case "April":return 4;
		break;
		case "May":return 5;
		break;
		case "June":return 6;
		break;
		case "July":return 7;
		break;
		case "August":return 8;
		break;
		case "September":return 9;
		break;
		case "October":return 10;
		break;
		case "November":return 11;
		break;
		case "December":return 12;
		break;
		default:break;
	}
}
var result='{"unix":'+unix+',"natural":"'+natural+'"}'
return result;
}

http.createServer(function(req,res){
	var time=timeJSON(decodeURI(req.url).slice(1));
	res.end(time);
	
}).listen(process.env.PORT || 5000); 





