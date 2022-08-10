const changeBtns = document.querySelectorAll('.btn > button:last-child')
const cancelBtns = document.querySelectorAll('.change input:last-child')
const changes = document.querySelectorAll('.change')
for(let i=0;i<changeBtns.length;i++){
    changeBtns[i].onclick = ()=>{
        changes[i].style.display = 'flex'
    }
    cancelBtns[i].onclick = ()=>{
        changes[i].style.display = 'none'
    }
}