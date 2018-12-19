let x,y,text="";

function isOdd(num) { return num % 2;}

for (x=1; x <=6; x++) {
  for (y=1; y < x; y++) {
    if (isOdd(y)) {
      text = text + "&#129321";
    } else {
      text = text + "&#129392";
    }
  }
  document.getElementById('opgave1').innerHTML += text + "<br>";
  text='';
}