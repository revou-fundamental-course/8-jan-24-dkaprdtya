function square( )
{
var side,area;
side = parseInt(document.getElementById("first").value);
area = side*side;
document.getElementById("num").innerHTML= side + " x " + side
document.getElementById("num").innerHTML="Luas Persegi adalah : "+area;
}

function keliling( )
{
var sisi,perimeter;
sisi = parseInt(document.getElementById("second").value);
perimeter = 4*sisi;
document.getElementById("num1").innerHTML="Keliling Persegi adalah : "+perimeter;
}

function fun1() {
    const first = document.querySelector('#first')
    first.value = null;
  }

  function fun2() {
    const first = document.querySelector('#second')
    first.value = null;
  }