function interest()
{
    let p=eval(document.getElementById('t1').value)
    let t =eval(document.getElementById('t2').value)
    let r=eval(document.getElementById('t3').value)
     let result=(p*t*r)/100
     document.getElementById('t4').value=result
}
function erase()
{
    document.getElementById('t1').value=''
     document.getElementById('t2').value=''
      document.getElementById('t3').value=''
       document.getElementById('t4').value=''
}