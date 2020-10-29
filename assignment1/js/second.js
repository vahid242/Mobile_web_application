$(document).ready(function(){
	let name = localStorage.getItem("name");
	let number = localStorage.getItem("studentNumber");
	let login = localStorage.getItem("login");
	$("#name").html(`My name is ${name}`)
	$("#studentNumber").html(`My Student Number is ${number}`);
	$("#login").html(`My Sheridan Login is ${login}`);
});