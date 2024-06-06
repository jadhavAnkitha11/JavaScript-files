
function doSum()
{
    let x=eval(document.getElementById('b1').value)
     let y=eval(document.getElementById('b2').value)
     let sum=eval(x)+eval(y)
     document.getElementById('b3').value=sum
}
function doSquare()
{
    let x=eval(document.getElementById('b1').value)
     let y=eval(document.getElementById('b2').value)
     let square=x*x+y*y+2*(x*y)
     document.getElementById('b3').value=square
}
