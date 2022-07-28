document.getElementById('7').addEventListener("click", addText);
document.getElementById('8').addEventListener("click", addText);
document.getElementById('9').addEventListener("click", addText);
document.getElementById('+').addEventListener("click", addText);
document.getElementById('4').addEventListener("click", addText);
document.getElementById('5').addEventListener("click", addText);
document.getElementById('6').addEventListener("click", addText);
document.getElementById('-').addEventListener("click", addText);
document.getElementById('1').addEventListener("click", addText);
document.getElementById('2').addEventListener("click", addText);
document.getElementById('3').addEventListener("click", addText);
document.getElementById('*').addEventListener("click", addText);
document.getElementById('0').addEventListener("click", addText);
document.getElementById('.').addEventListener("click", addText);
document.getElementById('/').addEventListener("click", addText);
document.getElementById('c').addEventListener("click", addText);
document.getElementById('<').addEventListener("click", addText);


document.getElementById('=').addEventListener("click", calc);

function addText() {
    if(this.value=='c') {
        document.getElementById('tb1').value='';
        document.getElementById('tb2').value='';
    }
    else if(this.value=='<')
        document.getElementById('tb2').value=document.getElementById('tb2').value.substr(0,document.getElementById('tb2').value.length-1)
    else
        document.getElementById('tb2').value+=this.value;
}

function calc() {
    document.getElementById('tb1').value=document.getElementById('tb2').value;
    document.getElementById('tb2').value=eval(document.getElementById('tb2').value);
}