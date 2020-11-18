/*Q2. Scoping*/
let profession="accountant";
if(f_name==="Monica"){
    let profession = "chef";
    console.log("Profession value inside the block: "+profession);
}
else{
    let profession = "actor";
    console.log("Profession value inside the block: "+profession);
}
console.log("Profession value outside the block: "+profession);