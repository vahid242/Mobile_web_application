var typeArray = new Array();
var animalArray = new Array();
var newAnimal;
var rowID;

class Animal {
	constructor (name, type, legs, colors, photoUrl){
		this.name=name; 
		this.type=type;
		this.legs=legs;
		this.colors = colors; 
		this.photoUrl=photoUrl;
	}
} 

$(document).ready(function(){
	  $.getJSON("data/A2-JSONFile.json", function(data) {
			  var fullName = data.personalInfo.fullName;
			  var studentNumber = data.personalInfo.studentNumber;
			  var login = data.personalInfo.loginName;
			  var sheridanProgram = data.personalInfo.sheridanProgram;
			  var homeCountry = data.personalInfo.homeCountry;
			  localStorage.setItem("name", fullName);
			  localStorage.setItem("studentNumber", studentNumber);
			  localStorage.setItem("login", login);
			  localStorage.setItem("sheridanProgram", sheridanProgram);
			  localStorage.setItem("homeCountry", homeCountry);

			  for(let i=0; i < data.animaltypes.length; i++){
				typeArray[i] = [data.animaltypes[i].atype, data.animaltypes[i].pic];
				$("#animalLink").append(`<a id='${i}' href="pages/animal.html">${data.animaltypes[i].atype}</a>`);
				$(".exPic").append(`<img src="images/${data.animaltypes[i].pic}">`);

			  }
			  for(let animal of data.animallist){
				newAnimal = new Animal(
					animal.name, animal.type, animal.legs,
					animal.colors, animal.photoUrl
				);
				animalArray.push(newAnimal);
			  }
			//   console.log(`${animalArray[2].colors}`);
			  localStorage.setItem("typeArray", JSON.stringify(typeArray));
			  localStorage.setItem("animalArray", JSON.stringify(animalArray));

			  $(".exHead").html(`Assignment #2 <br>
			  ${fullName} / ${studentNumber} / ${login} <hr>`);

			  $(".exFoot").html(`<hr> My Sheridan Program: ${sheridanProgram}
			  <br> ${homeCountry}`);
			  
		  });
});

$(document).on("click", "a", function() {
	localStorage.setItem(
	  "rowID",
	  $(this).closest("a").attr("id")
	);
});