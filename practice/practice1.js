// Mission 1
let a = prompt("첫번째 값 입력")
let sign = prompt("계산 부호")
let b = prompt("두번쨰 값 입력")

a = parseInt(a)
b = parseInt(b)

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