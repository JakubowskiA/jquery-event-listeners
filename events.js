//define functions here

function getIt() {
$("p").on("click", function () {
alert("Hey!");
})}

function frameIt() {
$("img").on("load", function () {
  $("img").addClass('tasty');
})}

function pressIt() {
$("input").on("keydown", function pressIt(key) {
  if(key.which === 71){
alert('G was pressed');
}})}

function submitIt() {
$("form").on("submit", function submitIt() {
alert("Your form is going to be submitted now.");
})}

$(document).ready(function(){

$("p").on("click", function getIt() {
alert("Hey!");
})

$("img").on("load", function frameIt() {

})

$("input").on("keydown", function pressIt() {
alert('G was pressed');
})

$("form").on("submit", function submitIt() {
alert("Your form is going to be submitted now.");
})



// call functions here

});
getIt();
frameIt();
pressIt();
submitIt();
