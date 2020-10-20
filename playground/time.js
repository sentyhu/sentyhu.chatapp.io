var moment=require('moment');
//var date=new Date();
//console.log(date.getMonth());

//date.add(100,'year').subtract(9,'months');   //oct 19th 2020
//console.log(date.format('MMM Do , YYYY'))
//6:01 am

var someTimestamp= moment().valueOf();
console.log(someTimestamp)

var createdAt=1234;
var date=moment(createdAt);
console.log(date.format('h:mm a'))