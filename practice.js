
// let yob = 2005
// let age = 2025 - yob
// age >= 13 && age <= 19 ? console.log("Teenage") : age >= 20 && age <= 29 ? console.log("Twenties") : console.log("NA");


// let day  = "Mon";

// switch (day){
//     case "Sun": console.log("Sunday");
//     break;
//     case "Mon": console.log("Monday");
//     break;
//     case "Tue": console.log("Tuesday");
//     break;
//     case "Wed": console.log("Wednesday");
//     break;
//     case "Thur": console.log("Thursday");
//     break;
//     case "Fri": console.log("Friday");
//     break;
//     case "sat": console.log("Saturday");
//     break;
//     default: console.log("Worng input")
// }

// let i = 0;
// while(i<=10){
// console.log("Piyush Suthar",i)
// if(i == 5){
//   break
// }
// i++
// }

// let bag = 0

// for(let i=1 ; i<=5 ; i++){
//   bag=bag+i
// }
// console.log(bag)


// let count = 0
// let sum = 0
// for(let i=1; i<=15; i++){
//   if(i%2==1){
//   sum = sum+i;
//    count++;
//   }
// }
// console.log(sum/count);

// let arr = [1,2,3]
// let arr2 =[...arr,4,5,6]
// console.log(arr2)

// let friends = ["piyush","Piyoosh","ajju","kaku"];

// for(let i =0 ; i<=friends.length-1; i++){
//   if(friends[i]=="piyush"|| friends[i]=="Piyoosh" ){
//     continue;
//   }
//   console.log(friends[i])
// }


// let marks = [ 78,14,77,12,69];

// let total_marks = 0;

// for(let i = 0; i<=marks.length-1; i++){
//   total_marks=total_marks+marks[i];
// }
// console.log(total_marks);



// let arry = [-1,-10,-2,-4,50,-3,-2];
// let current = -Infinity
// for(let i=0; i<=arry.length-1; i++){

//   if( current <arry[i]){
//     current = arry[i]

//   }
// }
// console.log(current)


// righ angled triangle pattern

// for(let i=1; i<=5; i++){
// let bag = "";
//     for(let j=1; j<=i;j++){
//         bag=bag+"*"+" "
//     }
//     console.log(bag)
// }

// square pattern of number

// for(let i=1; i<=4;i++){
//     let bag ="";
// for(let j=1; j<=4; j++){
//     bag=bag+i+" "
// }
// console.log(bag)
// }

// number peramid

// for(let i=1; i<=5; i++){
//     let bag = "";
//         for(let j=1; j<=i;j++){
//         bag+="*"+" "
//         }
//         console.log(bag)
//     }



// for (let i = 5; i > 0; i--) { // Outer loop for rows
//     let stars = "";
//     for (let j = 0; j < i; j++) { // Inner loop for stars
//         stars += "*"+" ";
//     }
//     console.log(stars); // Print the row
// }

// for(let i=1; i<=5; i++){
// let bag = "";
// let bag2 = ""
//     for(let j=1; j<=i;j++){
//         bag2=bag2+j+" "
//         bag=bag+"*"+" "
//     }
//     console.log(bag2)

//     console.log(bag)
// }

// let arr =["Aman","Amrit","Piyush","Vansh"];
// let count=0;
// for(let x=0; x<=arr.length-1; x++){

//     for(let y=0; y<=arr[x].length-1;y++){

//         if(arr[x][y]=="A"||arr[x][y]=="a"){
//            count++;
//            }
//     }
// }
// console.log(count);

// let obj ={
//     name:"piyush",
//     class:12,
//     rollno:21,
//     hobbies:["Carraceing","Muscal Training"],
//     profession: "Developer"
// }
// obj.class=7814771269
// obj["name"]="ajay"
// delete obj["rollno"]
// obj["contact"]="piyush@gmail.com"
// console.log(obj)


// for(let x in obj){
//     console.log(x,obj[x])



// let arr = [1,2,3,4,5,61,12,77,78,14]
// let flag = "NO"
// for(let i=0; i<=arr.length; i++){
//   if(arr[i]=="12"){
//     flag = "YES"
//     break
//   }
// }
// console.log(flag);

// let n = 100 ;
// n = n - 80
// console.log(n)
// if(n <= 150){
//     console.log(n/3)
// }
// else if(n <= 650 ){
//     console.log(50+(n-150)/5)
// }
// else(
//     console.log(150+(n-650)/10)
// )

// let v = 100;
// let p = 101 ;

// if(p>v){
//     console.log("Congrats")
// }
// else if(p<v){
//     console.log("not yet")
// }
// else{
//     console.log("wow")
// }


// let array = [1,2,4,53,5,34,61,];
// let current = -Infinity;

// for(let i = 0; i<array.length;i++){
//     if(array[i]>current){
//         current = array[i];
//  break
//     }
// }
// console.log(current)

// let num = 4 ;
//  for(let i = 1; i<=num; i++){
// let sum =0
//     for(let j =1; j<=i; j++){
//         if(j%2==0){
//             sum = sum +j;
//         }
//     }
//    console.log(sum)
//  }

// let arr = [1,2];
// let sum = 0;
// for(let i=0; i<=arr.length-1; i++){
// sum += arr[i];
// }
// console.log(sum);

// let arr = [1,2,3,4,5,6,7];
// let sum = 0 ;
// for(let i=0; i<arr.length; i++){
//     if(arr[i]%2==0){
//         sum+=arr[i]
//     }
// }
// console.log(sum)

// let arr = [3,5,4,7,9,8,100,10];
// let count =0
// for(let i=1; i<arr.length; i++){
//     if(arr[i] > arr[i+1]&&arr[i] > arr[i-1] ){
//         count++;
//     }
// }
// console.log(count)

// let arr =[1,2,3,4,5]
// let count = 0;
// for(let i = 0 ; i<arr.length;i++ ){
//   if((arr[i] %2==1) && (arr[i-1]%2==0 || arr[i+1]%2==0 )){
//     count++
//   }
// }
// console.log(count);

// let arr =[2,6,7,12,19,10];
// let count =0 ;
// for(let i=0;i<arr.length;i++){
//     if(arr[i-1]%i===0||arr[i+1]%i===0 ){
//         count++
//     }
// }
// console.log(count);

// let str = "vapinsyuhishka";
// let flags = "no"
// for(let i =0; i<str.length; i++){
//     if(str[i]=="a"){
//     flags = "yes"
//     }
// }
// console.log(flags)

// let str ="unicef";
// let bag = ""
// for(let i=0; i<str.length; i++){
//     if(str[i+1]=="a"||str[i+1]=="e"||str[i+1]=="i"||str[i+1]=="o"||str[i+1]=="u"){
//         bag += str[i]
//     }
// }
// console.log(bag)

// let str = "vansh";
// let obj ={};

// for(let i=0;i<str.length;i++){
//     if(obj[str[i]]==undefined){
// obj[str[i]]=1;
//     }
//     else{
//         obj[str[i]]++;
//     }
// }
// console.log(obj);


// let arr = [1,4,4,5,6,5,2,6]
// let obj ={}

// for(let i=0; i<arr.length; i++){
//     if(obj[arr[i]]==undefined){
//         obj[arr[i]]=1;
//     }
//     else{
//         obj[arr[i]]++;
//     }
// }
// console.log(obj);
// let sum =0;

// for(let key in obj){
//     if(obj[key]==2){
//    sum += Number(key);
//     }
// }
// console.log(sum);


// let obj={
//     name:"piyuhs",
//     class:12,
//     rollno:21,
//     phone:7814771269,
//     other:{
//         hobbies:["Racing","Shouting","Traveling"]
//     }
// }
// console.log(obj.other.hobbies[2])

// let apple_pro =[
//     {name:"iphone",rating:4.6 , price:120990 },
//     {name:"ipad",rating:3.6 , price:56000 },
//     {name:"mac",rating:2, price:180999 },
//     {name:"airpod",rating:1.6 , price:22000 },
// ]
// for(let i=0; i<apple_pro.length; i++){
//     if(apple_pro[i].rating <= 2){
//         console.log(apple_pro[i].name+" "+apple_pro[i].rating)
//     }
// }


// let product =["iphone","ipad","airpod","mac"]
// let price = [80000,40000,22000,120000]

// let arr=[];
// for(let i=0; i<product.length; i++){
// let obj={}
// obj.name=product[i];
// obj.price=price[i];
// arr.push(obj)
// }
// console.log(arr)

// function  sum_number(){
//     let a = 10;
//     let b = 10;
//     console.log(a+b)
// }

// for(let i=0; i<=10;i++){
//     sum_number()
// }

// function print(x,y){
// return x+y
// }
// let sum = print(2,2);
// console.log(sum-2)

// let arr = [1,-2,-5,0,2,4,]
// let container = "";

// for(let i=0; i<arr.length; i++){
//     if(arr[i]<0){
//         container+= 0
//     }
//     else{
//         container+= arr[i]
//     }
// }
// console.log(container)

// let N = 5;
// let str ="hElLO";

// let lower = "qwertyuiopasdfghjklzxcvbnm"
// let upper = "QWERTYUIOPASDFGHJKLZXCVBNM"

// let ans ="";

// for(let i=0; i<N; i++){
//     for(let j=0; j<26;j++){
//         if(str[i]==lower[j]){
//             ans+=upper[j];
//         }
//         if(str[i]==upper[j]){
//             ans+=lower[j];
//         }
//     }
// }
// console.log(ans);

// let N = 5 ;

// for(let i=0; i<N; i++){
//     let ans = "";
//     for(let j = 0 ; j<N; j++){
//         if(j%2==0 ){
//             ans+=i+" "
//         }
//         else{
//             ans+=j+" "
//         }
//     }
//     console.log(ans)
// }

// let str = "piyush";
// let count = 0;
// for(let j=0;j<str.length;j++){
//     let bag = ""
//     for(let i=j; i<str.length; i++){
//         bag+= str[i];
//         if(bag ==  bag[bag.length-1]){
//             count++
//         }
//     }
// }
// console.log(count);


// function adding(p,v){
// console.log(p+v);
// }
// adding(100,1)

// function divsion (n){
// if(n% 3 === 0){
//     return true;
// }
// else{
//  return false;
// }
// }
// let ans = divsion(2)
// console.log(ans);



// function divsion (n){
//     if(n% 3 === 0){
//         return true;
//     }
//     else{
//      return false;
//     }
//     }
// let count =0 ;
//     for(let i=0; i<=50; i++){
//         let ans = divsion(i)
// if(ans==true){
//     console.log(i,"this is divisible by 3")
//     count++;
// }
// }
// console.log(count)

// function reverse(str){
//     let new_str =""
//     for(let i= str.length-1;i>=0; i--){
//         new_str+=str[i];
//     }
//     console.log(new_str)
// }
// reverse("piyush")