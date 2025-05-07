
function print(element){
 var bar_content = document.getElementById('bar');
 bar_content.value = bar_content.value + element.innerText;
}

function calc(){
  var input = document.getElementById('bar');
  var calculate = input.value;
  var result = eval(calculate);
  if (result == 'undefined' || result == ' ' ){
    input.value = 'smth is wrong';

  } else{
    input.value = result;
  }

}

function erase(){
  var bar_content = document.getElementById('bar');
  bar_content.value = " ";

}