function average()
{
let a= eval(document.getElementById('t1').value)
let b= eval(document.getElementById('t2').value)
let c= eval(document.getElementById('t3').value)
let d= eval(document.getElementById('t4').value)
let e= eval(document.getElementById('t5').value)
let f=eval(document.getElementById('t6').value)
let avg=(a+b+c+d+e+f)/6
document.getElementById('t7').value=avg
}
function erase()
{
    document.getElementById('t1').value=''
    document.getElementById('t2').value=''
    document.getElementById('t3').value=''
    document.getElementById('t4').value=''
    document.getElementById('t5').value=''
    document.getElementById('t6').value=''
    document.getElementById('t7').value=''
    document.getElementById('t8').value=''
}