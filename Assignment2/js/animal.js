$(document).ready(function(){
	let name = localStorage.getItem("name");
	let number = localStorage.getItem("studentNumber");
    let login = localStorage.getItem("login");
    let sheridanProgram = localStorage.getItem("sheridanProgram");
    let homeCountry = localStorage.getItem("homeCountry");
    typeArray = JSON.parse(localStorage.getItem("typeArray"));
    animalArray = JSON.parse(localStorage.getItem("animalArray"));
    rowID = localStorage.getItem("rowID");

    $("header").html(`Assignment #2 <br> 
    ${name} / ${number} / ${login} <hr>`);
        
    $(".exFoot").html(`<hr> My Sheridan Program: ${sheridanProgram}<br> ${homeCountry}`);

    $("#animalType").html(`${typeArray[rowID][0]}`);  

//     for(let i=0; i < animalArray.length; i++){
//         if(animalArray[i].type.toUpperCase() == typeArray[rowID][0].toUpperCase()){
//             console.log(animalArray[i].name);
//         }
//         // console.log(typeArray[rowID][0]);
//    }
    $("#animalList").html("");
    for(let animal of animalArray){
        if(animal.type.toUpperCase() == typeArray[rowID][0].toUpperCase()){
            $("#animalList").append(`<span class="name">${animal.name}</span><br> <img src="${animal.photoUrl}"> <br>
            legs:${animal.legs} <br> colors:${animal.colors} <br><br>`);
        }
    };
    // $("#animalList").html(`${animalArray[0].name}`);  
    // console.log(`${animalArray[0].name}`);
});