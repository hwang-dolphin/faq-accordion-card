let invite = document.querySelector(".team-invite");
let maxFile = document.querySelector(".max-file");
let password = document.querySelector(".password");
let cancel = document.querySelector(".cancel");
let support = document.querySelector(".support");

let inviteQuestion = document.querySelector(".team-invite-question");
let maxFileQuestion = document.querySelector(".max-file-question");
let passwordQuestion = document.querySelector(".password-question");
let cancelQuestion = document.querySelector(".cancel-question");
let supportQuestion = document.querySelector(".support-question");

let inviteArrow = document.querySelector(".team-invite .arrow");
let maxFileArrow = document.querySelector(".max-file .arrow");
let passwordArrow = document.querySelector(".password .arrow");
let cancelArrow = document.querySelector(".cancel .arrow");
let supportArrow = document.querySelector(".support .arrow");


invite.addEventListener("mouseenter", function(event)
{
	invite.classList.add("expand");
	inviteArrow.classList.add("arrowUp");

	inviteQuestion.classList.add("dark");
	document.querySelector(".team-invite-answer").classList.add("accordion"); 
});

invite.addEventListener("mouseout", function(event)
{
	
	invite.classList.remove("expand");
	inviteArrow.classList.remove("arrowUp");

	inviteQuestion.classList.remove("dark");
	document.querySelector(".team-invite-answer").classList.remove("accordion"); 


});



maxFile.addEventListener("mouseenter", function(event)
{
	maxFile.classList.add("expand");
	maxFileArrow.classList.add("arrowUp");

	maxFileQuestion.classList.add("dark");
	document.querySelector(".max-file-answer").classList.add("accordion"); 
});

maxFile.addEventListener("mouseout", function(event)
{
	maxFile.classList.remove("expand");
	maxFileArrow.classList.remove("arrowUp");

	maxFileQuestion.classList.remove("dark");
	document.querySelector(".max-file-answer").classList.remove("accordion"); 
});



password.addEventListener("mouseenter", function(event){

	password.classList.add("expand");
	passwordArrow.classList.add("arrowUp");

	passwordQuestion.classList.add("dark");
	document.querySelector(".password-answer").classList.add("accordion"); 
});

password.addEventListener("mouseout", function(event){
	password.classList.remove("expand");
	passwordArrow.classList.remove("arrowUp");

	passwordQuestion.classList.remove("dark");
	document.querySelector(".password-answer").classList.remove("accordion"); 
});



cancel.addEventListener("mouseenter", function(event){
	cancel.classList.add("expand");
	cancelArrow.classList.add("arrowUp");

	cancelQuestion.classList.add("dark");
	document.querySelector(".cancel-answer").classList.add("accordion"); 
});

cancel.addEventListener("mouseout", function(event){
	cancel.classList.remove("expand");
	cancelArrow.classList.remove("arrowUp");

	cancelQuestion.classList.remove("dark");
	document.querySelector(".cancel-answer").classList.remove("accordion"); 
});



support.addEventListener("mouseenter", function(event){
	support.classList.add("expand");
	supportArrow.classList.add("arrowUp");

	supportQuestion.classList.add("dark");
	document.querySelector(".support-answer").classList.add("accordion"); 
});

support.addEventListener("mouseout", function(event){
	support.classList.remove("expand");
	supportArrow.classList.remove("arrowUp");

	supportQuestion.classList.remove("dark");
	document.querySelector(".support-answer").classList.remove("accordion"); 
});


