let countEL=document.getElementById("count-el")
let saveEL= document.getElementById("save-el")
let count = 0
function increment()
{
   count++
   countEL.textContent = count 

}
function save()
{
    let saved = count + " - "
    saveEL.textContent += saved
    countEL.textContent=0 
    count = 0

}