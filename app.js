/*

Name = Muhammad Nasir
roll = 7240


*/



/*-------------- Question 1-----------*/




// var a = prompt("Enter your Name ");
// alert("hi," + a); 




/*-------------- Question 2-----------*/


// var a = +prompt("Enter a number to print its Multipilication table" , 5);
// for(i=1;i<=10;i++)
// {
//     console.log(a + "X" + i + " =" + (a*i));
// }



/*-------------- Question 3-----------*/


// var a = prompt("Please Enter your city Name");
// if(a==='karachi')
// {
//     console.log("Welcome to the city of light");
// }



/*-------------- Question 4-----------*/


// var a = prompt("Enter Your Grnder !");
// if(a==='male')
// {
//     console.log("Good morning sir");
// }
// if(a==='female')
// {
//     console.log("Good morning Ma'am");
// }


/*-------------- Question 5-----------*/


// var a =prompt("Enter a Color of road Traffic signal");
// if(a==='red')
// {
//     console.log("vehicles must stop");
// }
// if(a==='yellow')
// {
//     console.log("vehicles should get ready to move");
// }
// if(a==='green')
// {
//      console.log("vehicles can move now");
// }



/*-------------- Question 6-----------*/


// var maxAge = prompt("Enter your Max age");
// var currentAge= prompt("Enter your Max age");
// if(currentAge <=maxAge)
// {
//     console.log("You are Welcome");
// }



/*-------------- Question 7-----------*/




// var a = prompt("Enter Your  remaining fuel in car (in litres) ");
// if(a <=0.25)
// {
//     console.log( "Please refill the fuel in your car");
// }




/*-------------- Question 8-----------*/



    // ---> part (a)



// var a = 4;
// if (++a === 5){
//  alert("given condition for variable a is true");
// } 

//Answer is true Becasue value of 'a' is updated(increse by 1) in if condition
//so thereFore 5===5 in condition that is true then alert is excuted 


    // --> part (b)






// var b = 82;
// if (b++ === 83){
//  alert("given condition for variable b is true");
// }


//condition is not true 82 not equal to 83
//Answer is nothing because else is not defined 





  // --> part (c)




//   var c = 12;
//     if (c++ === 13){
//     alert("condition 1 is true");
//     }
//     if (c === 13){
//     alert("condition 2 is true");
//     }
//     if (++c < 14){
//     alert("condition 3 is true");
//     }
//     if(c === 14){
//     alert("condition 4 is true");
//     }


//answer is 'condition 2 is true' and 'condition 4 is true' 
// 1). because  in 2nd condition value of is increse by 1 value will be 13 so 2nd condition is true
// 2). condition 4 is true , bcoz value of c is increment by 1 in 3rd condition so in a next step 
// value becom 14 so there Fore 3rd condition is true



    // --> part (d)






    // var materialCost = 20000;
    // var laborCost = 2000;
    // var totalCost = materialCost + laborCost;
    // if (totalCost === laborCost + materialCost){
    // alert("The cost equals");
    // }



    // answer is The cost is Equal 
    //because 
    //totalcost = materialCost + laborCost 
    //totalcost =  20000 + 2000 = 22000 
    //22000  = 22000
    // so thereFore in if conditon true then alert is excuted 






    // --> part (e)





    // if (true){
    // alert("True");
    // }
    // if (false){
    // alert("False");
    // }




    // --> part (f)



        // if("car" < "cat")
        // {
        // alert("car is smaller than cat");
        // }
    


    


  /*-------------- Question 9 -----------*/




//   var  m1 = +prompt("Enter Your 1st mark out of 100");
//   var  m2 = +prompt("Enter Your 2nd mark out of 100");
//   var  m3 = +prompt("Enter Your 3rd mark out of 100");
//   var grade , remarks ;
//   if((m1 > 100 || m2 > 100 || m3 > 100) && (m1 < 0 || m2 < 0 || m3 < 0))
//   {
//     console.log("Invalid marks please input a correct marks");
//   }else
//   {

//     var per =(((m1+m2+m3)/(300))*100);

//     if(per >=80)
//     {
//        grade ="A-one" ;
//        remarks="Excelent";
//     }
//     if(per >= 70 && per <=79)
//     {
//         grade ="A" ;
//         remarks="Good";    }
//     if(per >= 60 && per <=69)
//     {
//         grade ="B" ;
//         remarks="Need to Improve";
//     }
//     if(per < 60)
//     {
//        grade ="Fail" ;
//        remarks="Sorry";
//     }

//     console.log("ToTal marks :"+"300");
//     console.log("Obtained Marks :"+(m1 + m2 + m3));
//     console.log("Your percentage :"+ per + "%");
//     console.log("Grade :"+grade);
//     console.log("Remarks :"+ remarks);
    

//   }
  








    /*-------------- Question 10 -----------*/





// var item1 = prompt("Name of item1 ");
// var item2 = prompt("Name of item2 ");
// var prize1 = prompt("Price of item 1 ");
// var prize2 = prompt("Price of item 2 ");
// var quantity1 = prompt("Ordered quantity of item 1");
// var quantity2 = prompt("Ordered quantity of item 2");
// var charges = prompt("Shipping Charges ");

// console.log("Shopping Cart");
// console.log("Price of " + item1 + " : " + prize1);
// console.log("Quantity of " + item1 + " : " + quantity1);
// console.log("Price of " + item2 + " : " + prize2);
// console.log("Quantity of " + item2 + " : " + quantity2);
// console.log("Shipping Charges :"+ charges);
// var totalCost = (prize1*quantity1)+ (prize2*quantity2);
// console.log("Total Cost of your order is  :" + totalCost);
// if(totalCost >= 2000)
// {
//     var dic = ((totalCost/100)*10); 
    
//     console.log("Discount Prize is "+ (totalCost - dic));
    
// }








    /*-------------- Question 11 -----------*/







// var a = +prompt("Guess a number");
// var b =4;
// if(a== (4))
// {
//     console.log("Bingo !");
// }
// else if(a == (4-1) || a== (4+1))
// {
//     console.log("Close enoght to Correct answer ");
// }







    /*-------------- Question 12 -----------*/






// var a = +prompt("Give A number ");
// if(a%3==0)
// {
//     console.log("Your number is divisible by 3");
// }








    /*-------------- Question 13 -----------*/







    // var t1 = prompt("Team Name");
    // var s1 = +prompt("Your Score");
    // var t2 = prompt("Team Name");
    // var s2 = +prompt("Your Score");
    // if(s1>s2)
    // {
    //     console.log(t1 +"have won the Game ");
    // }else if(s2 > s1)
    // {
    //     console.log(t2 +"have won the Game ");
    // }
    // else if(s1 == s2)
    // {
    //     console.log("There is a tie !");
        
    // }
    






    /*-------------- Question 14 -----------*/









// var a = prompt("input");
// var num = +prompt("input");
// var b = prompt("input");

// if(a)
// {
//     console.log(a+ "is a "+typeof(a));
// }
// if(num)
// {
//     console.log(num+ "is a "+typeof(num));
// }
// if(b=='true')
// {
//     console.log(b+ "is a Booleon");
// }else if(b == 'false')
// {
//     console.log(b+" is a Booleon" );
// }









    /*-------------- Question 15 -----------*/




    


// var a=+prompt("Enter a number");
// if((a%2)==0){
//     console.log("Even Number");
// }
// else{
//     console.log("ODD Number");
// }










    /*-------------- Question 16 -----------*/








// var t=+prompt("Enter a temprature");
// if(t>40){
//     console.log("It is too hot outside.");
// }
// else if( t > 30){
//     console.log("The Weather today is Normal.");
// }
// else if( t > 20){
//     console.log("Today’s Weather is cool.");
// }
// else if( t > 10){
//     console.log("OMG! Today’s weather is so Cool.");
// }





/*-------------- Question 17 -----------*/

// var a=+prompt("Enter a  first number");
// var b=+prompt("Enter a second number");

// var o=prompt("Enter a oprator +,-,*,/,%");
// if(o=='+'){
//     console.log(a+b);
// }
// else if(o=='-'){
//     console.log(a-b);
// }

// else if(o=='*'){
//     console.log(a*b);
// }
// else if(o=='/'){
//     console.log(a/b);
// }
// else if(o=='%'){
//     console.log(a%b);
// }





/*-------------- Question 18 -----------*/


// var day=prompt("Enter a day");
// if(day=='monday'||day=='tuesday'||day=='wednesday'||day=='thusday'||day=='friday'){
//     console.log("It’s a week day");
// }
// else if(day=='saturday'){
//     console.log("Weekend");
// }
// else if(day=='sunday'){
//     console.log("Yay! It’s a holiday");
// }








/*-------------- Question 19 -----------*/





//  var marks=+prompt("Enter a day");
// if(marks>50){
//     console.log("you are passed");
// }
// else{
//     console.log("try again");
// }




/*-------------- Question 20 -----------*/







// var a=+prompt("enter a first number");
// var b=+prompt("enter a second number");

// if(a>b){
//     console.log(a+" is Greater");
// }

// else if(b>a){
//     console.log(b+" is Greater");
// }
// else if(a=b){
//     console.log(a+" and "+""+b+" are equals");
// }








/*-------------- Question 21 -----------*/







// var a=prompt('Enter a language code  "es", "de", "en"')
// if(a=='es'){
//     console.log("Hola Mundo");
// }
// else if(a=='de'){
//     console.log("Hallo Welt");
// }
// else if(a=='en'){
//     console.log("Hello world");
// }








/*-------------- Question 22 -----------*/





// var a=+prompt('Enter a Number');
// if(a<0){
//     console.log("Negative");
// }
// else{
//     console.log("Positive");
// }









/*-------------- Question 23 -----------*/



// var a=prompt('Enter a Noun');
// var b=+prompt('Enter a Number');
// if(b>1){
//     console.log(b+" "+a+"s");
// }
// else if(b==1){
//     console.log(b+" "+a);
// }













