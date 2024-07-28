function addTodolist() {
    let li = document.createElement('li')
    let text = document.createElement('span')
    let btn = document.createElement('button')

    li.appendChild(btn)
    li.appendChild(text)

    const todo = document.querySelector('#textcontainer')
    if (!todo.value)
        alert("해야할 일을 작성해주세요!")
    else {
        text.innerHTML = todo.value //li안에 들어갈 span 태그 안에 텍스트박스 value 값 넣어주기
        const todolist = document.querySelector('#todolist')
        todolist.appendChild(li) // ul에 li 연결
        todo.value = '' // 텍스트 박스 비우기
    }
    console.log(todolist)

    li.addEventListener('click',()=>{
        li.style.textDecoration="line-through"
    }) // 한번 클릭 시 텍스트에 줄 긋기

    li.addEventListener('dblclick',()=>{
        todolist.removeChild(li)
    }) // 더블클릭하면 할 일 목록에서 제거
}