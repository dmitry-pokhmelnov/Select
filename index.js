const slider = document.getElementById("myRange");
const output = document.getElementById("demo");
const submit = document.getElementById("submit");

submit.onclick = function() {
  alert(slider.value);
}
