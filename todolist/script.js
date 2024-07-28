function addTodolist() {
    let swt = true
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

    btn.addEventListener('click', () => {
        if (swt) {
            li.style.textDecoration = "line-through"
            btn.style.backgroundColor = "#e37e8e"
            swt=false
        } // 체크 안되어 있을 시 버튼 누르면 밑줄 긋기
        else{
            li.style.textDecoration = "none"
            btn.style.backgroundColor = "white"
            swt=true
        } // 체크 되어 있을 시 버튼 누르면 밑줄 삭제
        
    }) // 버튼 한번 클릭 시 텍스트에 줄 긋기

    text.addEventListener('dblclick', () => {
        todolist.removeChild(li)
    }) // 글자 더블클릭 시 할 일 목록에서 제거
}