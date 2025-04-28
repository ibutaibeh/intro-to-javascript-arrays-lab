//Homework 2 -- Jasim Butaiba
//Exercise 1
const foods=[];
console.log(`Exercise 1 result:${foods}`);
//----------------------------------------------------------------
//Exercise 2
const foods2=["pizza","cheeseburger"];
console.log(`Exercise 2 result:${foods2}`);
//----------------------------------------------------------------
//Exercise 3
const foods3=["pizza","cheeseburger"];
foods3.splice(0,0,"taco");
console.log(`Exercise 3 result:${foods3}`);
//----------------------------------------------------------------
//Exercise 4
const foods4=foods3;
let favFood= foods4[1];
console.log(`Exercise 4 result:${favFood}`);
//----------------------------------------------------------------
//Exercise 5
const food5=foods2;
food5.splice(1,0,'tofu');
console.log(`Exercise 5 result:${food5}`);
//----------------------------------------------------------------
//Exercise 6
food5.splice(0,1,"sushi","cupcake");
console.log(`Exercise 6 result:${food5}`);
//----------------------------------------------------------------
//Exercise 7
const yummy= food5.slice(0,2);
console.log(`Exercise 7 result:${yummy}`);
//----------------------------------------------------------------
//Exercise 8
const soyIdx= food5.indexOf("tofu");
console.log(`Exercise 8 result:${soyIdx}`);
//----------------------------------------------------------------
//Exercise 9
const food9=["taco","sushi","cupcake","tofu","cheeseburger"];
allFoods= food9.join(" -> ");
console.log(`Exercise 9 result:${allFoods}`);
//----------------------------------------------------------------
//Exercise 10
hasSoup= food9.includes("soup");
console.log(`Exercise 10 result:${hasSoup}`);
//----------------------------------------------------------------
//Exercise 11
const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];
const odds=[];

let numsNumber;
let test;
nums.forEach((numsNumber)=>{
    // console.log(numsNumber);
    test=numsNumber%2;
    // console.log(test);

    if(test===1){
//console.log('its odds')
//console.log(numsNumber);
odds.push(numsNumber)
    }else{
//console.log('its even')
    }
    // console.log(odds)
})
console.log(`Exercise 11 result:${odds}`);
//----------------------------------------------------------------
//Exercise 12
let test3;
let test5;
let x;
const fizz=[] //divided by 3
const buzz=[] //divided by 5
const fizzbuzz=[] //divided by 3 and 5
nums.forEach((x)=>{
test3=x%3;
test5=x%5;

if(test3===0){
    fizz.push(x);
}
if(test5===0){
    buzz.push(x);
}
if(test5===0&&test3===0){
    fizzbuzz.push(x);
}

})
console.log('Exercise 12 Results:');
console.log('  fizz:', fizz);
console.log('  buzz:', buzz);
console.log('  fizzbuzz:', fizzbuzz);
//----------------------------------------------------------------
//Exercise 13
const numArrays = [
	[100, 5, 23],
	[15, 21, 72, 9],
	[45, 66],
	[7, 81, 90]
];
const numList=[];
numList.push(numArrays[numArrays.length-1]);
//console.log(numList);
//console.log(numArrays[numArrays.length-1]);
console.log('Exercise 13 result:', numList);
//----------------------------------------------------------------
//Exercise 14
let num;
num= numArrays[2][1];
//console.log(num);
console.log('Exercise 14 result:', num);
//----------------------------------------------------------------
//Exercise 15
let total=0;
let sum=0;
for(let i=0;i<numArrays.length;i++){
    for(let j=0; j<numArrays[i].length;j++){
        sum=numArrays[i][j];
        total +=sum;
    }

}
console.log('Exercise 15 result:\n', total);
//-----------------------------------------------------------------
