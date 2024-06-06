function area()
{
    let r=eval(document.getElementById('t2').value)
    let result=(Math.PI*r*r)
    document.getElementById('t3').value=result
}
function erase()
{
   
     document.getElementById('t2').value=''
      document.getElementById('t3').value=''
}