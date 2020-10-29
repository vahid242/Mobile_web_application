let fullName = "Vahid Ghaedsharaf";
let studentNumber = 991576881;
let login = "ghaedsha";
let firstlet = "7";

$(document).ready(function(){
	$(".exHead").html(`<h2> ${fullName} / A01/ SYST2444 </h2>`);
	$(".exFoot").html(`${studentNumber}/${login}`);

	localStorage.setItem("name", fullName);
	localStorage.setItem("studentNumber", studentNumber);
	localStorage.setItem("login", login);

	$("#firstLetter").click(function(){
	$(`div[title ^=${firstlet}]`).toggle();
	});

	$("#formatChange").click(function(){
	$("#list").toggleClass("newFormat");
	});

});

class myList{
	constructor (number, element, image){
		this.number=number; this.element=element; this.image=image;
	}
}


var myData = new Array();
myData.push(new myList("7", "Glass", "glass.jpg"));
myData.push(new myList("8", "Hoddy", "hoody.jpg"));
myData.push(new myList("1", "Apple", "apple.jpg"));
myData.push(new myList("5", "Egg", "egg.jpg"));
myData.push(new myList("4", "Door", "door.jpg"));
myData.push(new myList("19", "Snake", "snake.jpeg"));
myData.push(new myList("8", "Hand", "hand.png"));
myData.push(new myList("1", "Ant", "ant.jpeg"));


function createList(){
	document.getElementById("list").innerHTML = `<h1>MyData</h1>`
	for (let item of myData){
		document.getElementById("list").title
		document.getElementById("list").innerHTML += `<div title="${item.number}">
		<img src="image/${item.image}" width='25'> ${item.element}</div><br>`;
	}
}



