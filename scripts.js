const botaoSortear = document.querySelector("button")

function sortear(){ 

    const inputMin = Math.ceil(document.querySelector(".input-Min").value)
    const inputMax = Math.floor(document.querySelector(".input-Max").value)

    const result = Math.floor(Math.random() * (inputMax - inputMin + 1)) + inputMin

    alert(result)
}

botaoSortear.addEventListener("click", sortear)

