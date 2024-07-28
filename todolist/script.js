function addTodolist() {
    let swt = true
    let li = document.createElement('li')
    let text = document.createElement('span')
    let btn = document.createElement('button')
    let delbtn = document.createElement('button')

    delbtn.className = 'delbtn'
    delbtn.innerHTML = "삭제"

    li.appendChild(btn)
    li.appendChild(text)
    li.appendChild(delbtn)
    
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
            li.style.color = "#a1a1a1"
            btn.style.backgroundColor = "#e37e8e"
            swt = false
        } // 체크 안되어 있을 시 버튼 누르면 밑줄 긋기
        else {
            li.style.textDecoration = "none"
            li.style.color = "black"
            btn.style.backgroundColor = "white"
            swt = true
        } // 체크 되어 있을 시 버튼 누르면 밑줄 삭제
    }) // 버튼 한번 클릭 시 텍스트에 줄 긋기

    text.addEventListener('dblclick', () => {
        let newtext = prompt("변경할 내용을 입력해주세요")
        text.innerHTML = newtext
    }) // 텍스트 더블클릭 시 내용 수정

    delbtn.addEventListener('click', () => {
        todolist.removeChild(li)
    }) // 딜리트 버튼 누를 시 리스트 삭제
}