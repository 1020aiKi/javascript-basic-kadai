const addbtn = document.getElementById('btn');
const childtext = document.getElementById('text');
addbtn.addEventListener('click', () => {
    setTimeout(() =>{
        childtext.textContent = "ボタンをクリックしました";
    },2000);
});
