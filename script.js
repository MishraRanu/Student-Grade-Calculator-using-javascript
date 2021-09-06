const btn=document.getElementById('btn')

const calculate=0=>{
  let web=document.getElementById('web').value
  let phy=document.getElementById('phy').value
  let chem=document.getElementById('chem').value
  let maths=document.getElementById('maths').value
  let obtainedMarks=parseFloat(web)+parseFloat(phy)+parseFloat(chem)+parseFloat(maths)
  
  let percentage=(obtainedMarks/400)*100
  let grade=' '
  if(percentage<=100 && percentage>=80)
  {
    grade='A'
  }
  else if(percentage<=79 && percentage>=60)
  {
    grade='B'
  }
  else if(percentage<=59 && percentage>=40)
  {
    grade='C'
  }
  else if(percentage<=39 && percentage>=33)
  {
    grade='D'
  }
  else{
grade='F'
  }
  if(percentage>=33)
  {
let showResult=document.getElementById('showResult')
showResult.innerHTML="You have obtained $(obtainedMarks)out of 400 $(percentage)% and $(grade). You are pass."
}
  else{
    let showResult=document.getElementById('showResult')
    showResult.innerHTML="You have obtained $(obtainedMarks) out of 400 with $(percentage)% and $(grade). You are Fail"
  }
}






btn.addEventListener('click',calculate)
