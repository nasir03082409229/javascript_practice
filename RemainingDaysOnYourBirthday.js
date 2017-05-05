var a = new Date("November 2 2017");
var ttime = (a.getTime());
var b = new Date();
var c = ((ttime- b.getTime())/(1000*60*60*24));
c = Math.ceil(c);
console.log(c); 


