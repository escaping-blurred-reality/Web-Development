console.log("This is demonsraion of loops in javascrript:");
for(let i=1;i<=10;i++)
{
    console.log(i);
}
let j=10;
while(j>=1)
{
    console.log(j);
    j--;
}
let k=12
do
{
    console.log(k);
    k--;
}while(k>=13);
for(let i=0;i<=10;i++)
{
    if(i==4)
        continue;
    if(i==8)
        break;
    console.log("This is demonstration of break and continue statement in javascript."+ " "+i);
}
console.log("This is demonstration of for each loop in javascript:");
arr=[1,2,3,4,5,6,7,8,9,10];
arr.forEach(function(element,index,arr)
{
    console.log(element,index,arr);
});
let obj={
    name:"Riya Dhanwani",
    rollno:"19BCP160",
    branch:"Computer",
    profession:"SDE",
    company:"Microsoft"
};
for(let key in obj)
{
    console.log(`The ${key} of object is ${obj[key]}`);
}