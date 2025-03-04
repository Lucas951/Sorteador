const botaoSortear = document.querySelector("button")

function sortear(){ 

    const inputMin = Math.ceil(document.querySelector(".input-Min").value) // ceil arrendondar para cima
    const inputMax = Math.floor(document.querySelector(".input-Max").value) // floor arredondar para baixo

    if(inputMin >= inputMax){
        alert("O número mínimo é maior que o número maior")
    }
    else{
        const result = Math.floor(Math.random() * (inputMax - inputMin + 1)) + inputMin 

        alert(result)
    }

    

   
}

botaoSortear.addEventListener("click", sortear)

