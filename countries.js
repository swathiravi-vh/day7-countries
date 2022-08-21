//Get all the countries from Asia continent /region using Filter function

let abd=new XMLHttpRequest();
abd.open('GET','https://restcountries.com/v2/all');
abd.send();
abd.responseType="json";
abd.onload=function (){
    let countryData=abd.response;
    let asia=countryData.filter((element)=>{
        if(element.region==='Asia'){
            return element.name;
        }
    })
    console.log(asia);}

//Get all the countries with population of less than 2 lacs using Filter function

let pop2=new XMLHttpRequest();
pop2.open('GET','https://restcountries.com/v2/all');
pop2.send();
pop2.responseType="json";
pop2.onload=function (){
    let countryData=pop2.response;
    const popu=countryData.filter((element)=>{
        return element.population<200000;
    })
    console.log(popu);}

//Print the following details name, capital, flag using forEach function.

let req=new XMLHttpRequest();
req.open('GET','https://restcountries.com/v2/all');
req.send();
req.responseType="json";
req.onload=function (){
    let countryData=req.response;  
    countryData.forEach((element)=>{
        console.log(element.name,element.capital,element.flag);
    })}

//Print the total population of countries using reduce function 


let requ=new XMLHttpRequest();
requ.open('GET','https://restcountries.com/v2/all');
requ.send();
requ.responseType="json";
requ.onload=function (){
    let countryData=requ.response;  
    const population=countryData.reduce((acc,element)=>{
        return acc+element.population;
    },0)
    console.log(population);}

//Print the country which use US Dollars as currency.

let us = new XMLHttpRequest();
us.open('Get', 'https://restcountries.com/v2/all');
us.send();
us.responseType="json";
us.onload = function () {
        let countryData=us.response;
        let cur=[];
        for(i=0;i<data.length;i++){
            if(data[i].currencies[0].code==="USD")
            {
                console.log("name:",data[i].name,"==>",data[i].currencies[0].code)
            }}}
