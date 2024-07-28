let a
let sign
let b

function input(){
  a = prompt("첫번째 값 입력")
  sign = prompt("계산 부호")
  b = prompt("두번쨰 값 입력")

  a = parseInt(a)
  b = parseInt(b)
}

function calc(a,b,sign){
  if(sign == '+')
    alert(a+sign+b+'='+(a+b))
  else if(sign == '-')
    alert(a+sign+b+'='+(a-b))
  else if(sign == '*')
    alert(a+sign+b+'='+(a*b))
  else if(sign == '/')
    alert(a+sign+b+'='+(a/b))
  else if(sign == '%')
    alert(a+sign+b+'='+(a%b))
}

input()
calc(a,b,sign)