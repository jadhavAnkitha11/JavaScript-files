function cube()
{
    let a=eval(document.getElementById('t1').value)
    let b=eval(document.getElementById('t2').value)
    let result=(a*a*a)+(b*b*b)+(3*(a*a)*b)+(3*(b*b)*a)
    document.getElementById('t3').value=result
}
function erase()
{
    document.getElementById('t1').value=''
     document.getElementById('t2').value=''
      document.getElementById('t3').value=''
       
}