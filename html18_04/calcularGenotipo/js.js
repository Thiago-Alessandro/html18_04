let tabelaHtml = document.querySelector('#tabela')

function calcularGenes(){
    let quantiaGenes = document.querySelector('#caracteristicas').value.length
    console.log('quantiaGenes = ' + quantiaGenes)

    let tamanhoTabela = Math.pow(2, quantiaGenes);
    console.log('tamanhoTabela = ' + tamanhoTabela)

    let tabela = new Array(tamanhoTabela)//linhas

    for (let i = 0; i < tamanhoTabela; i++){

        tabela[i] = new Array(tamanhoTabela)//colunas
    }

    for(let c = 0; c < tamanhoTabela;c++){
        for(let l = 0; l < tamanhoTabela;l++){
            let celula = document.createElement('div')
            celula.innerText='teste'
            tabela[l][c] = celula
            console.log(tabela[l][c])
            tabelaHtml.appendChild(tabela[l][c])
        }
    }


//property/event binding

//implements "onInit", "ondestroy" e ai criar uma funcao ngOnInit() p isso
}
