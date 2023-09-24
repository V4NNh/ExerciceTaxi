"use strict";

let chanson = ["KICK BACK - Kenshi Yonezu","Believer - Imagine Dragons","This fffire - Franz Ferdinand","Guns for Hire - Woodkid","Anissa - Wejdene"];
let sante=10;
let changement=0;
let feu=1;

function random(){
    return Math.floor(Math.random() * 5);
}

for(let i =30; i>=0; i--){
    let radio= chanson[random()];
    if(radio=="Anissa - Wejdene"){
        sante-=1;
        changement+=1;
        console.log("Feu Rouge - Anissa - Wejdene - John change de taxi (santé mentale en baisse) - Encore "+i+" feux rouge");
    }else{
        console.log("Feu Rouge - "+ radio+ " - Bonne musique - Encore "+i+" feux rouge");
    }if(sante==0){
        console.log("John est devenu fou en écoutant trop Wejdene alors qu'il restait "+i+" feux rouge");
        break;
    }
}
if(sante>0){
    console.log("John est arrivé à bon port après "+changement+" changements");
}