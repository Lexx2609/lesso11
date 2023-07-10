let text = document.querySelector('.div')
let input = document.querySelector('.qwe')
let one = document.querySelector('.one')
let two = document.querySelector('.two')
let three = document.querySelector('.three')
let b = ['e', 'r' ,'i' ,'k', 't', 'h', 'e' ,'b', 'e', 's' ,'t']
let a = new Set(b)
one.onclick = function (){
    let e = input.value
    a.add(e)
    text.innerHTML = `<h1>Вывод из кнопки номер 1:${e}</h1>`
    console.log(a)
}
two.onclick = function (){
    let inp = input.value
    console.log(a.has(inp))

    text.innerHTML = `<h1>Вывод из кнопки номер 2:${inp}</h1>`
}
three.onclick = function () {
    let e = input.value
    text.innerHTML = `<h1>Вывод из кнопки номер 3:${e}</h1>`
    console.log('qwerty3')
}
let qwe = [1,2,3,4,5,6,7,8,9,10]
let arr = new Set(qwe)
console.log(arr)
for (let i of arr){
    if (i > 5){
        let test = new Set([i])
        console.log(test)
    } else {
        console.log(false)
    }
}