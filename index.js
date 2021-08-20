var charData = " ";
var resultData = " ";
var historyData = [];

function evaluates(a) {
  forms.screen.value += a;
  character = forms.screen.value;
  charData = character;
}
function del() {
  var num = forms.screen.value;
  forms.screen.value = num.substring(0, num.length - 1);
}
function ac() {
  forms.screen.value = " ";
}
function equal() {
  var calc = forms.screen.value;
  var result = eval(calc);
  forms.screen.value = result;
  resultData = result;
  historyData.push({ character: charData, results: resultData });
  showLogData();
}
function sin() {
  var trigon = forms.screen.value;
  var res = Math.sin(trigon);
  forms.screen.value = res;
}
function cos() {
  var trigon = forms.screen.value;
  var res = Math.cos(trigon);
  forms.screen.value = res;
}
function tan() {
  var trigon = forms.screen.value;
  var res = Math.tan(trigon);
  forms.screen.value = res;
}
function pi() {
  var pai = forms.screen.value * 3.141;
  forms.screen.value = pai;
}
function showLogData() {
  localStorage.setItem("textInput", JSON.stringify(historyData));
}
