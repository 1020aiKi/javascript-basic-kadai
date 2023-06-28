const addBtn = document.getElementById("btn");
const childtext = document.getElementById("text")
addBtn.addEventListener("click",()=>{
    childtext.textContent = "ボタンをクリックしました";
})
