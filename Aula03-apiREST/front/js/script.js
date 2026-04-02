function carregarProdutos(){
    var req = new XMLHttpRequest()

    req.onreadystatechange = function(){
        if( this.readyState == 4 && this.status == 200){
            var produtos = JSON.parse( this.responseText )
            var txt =   '<div class="row"> '
            txt +=      '   <div class="col"> <strong> Código </strong></div>'
            txt +=      '   <div class="col"> <strong> Nome </strong></div>'
            txt +=      '   <div class="col"> <strong> Preço </strong></div>'
            txt +=      '   <div class="col"> <strong> Categoria </strong></div>'
            txt +=      '</div> '

            produtos.forEach( prod => {
                txt +=      '<div class="row"> '
                txt +=      '   <div class="col"> ' + prod.id + ' </div>'
                txt +=      '   <div class="col"> ' + prod.nome + ' </div>'
                txt +=      '   <div class="col"> ' + prod.preco + ' </div>'
                txt +=      '   <div class="col"> ' + prod.categoria + '</div>'
                txt +=      '</div> '
            })
            document.getElementById("divConteudo").innerHTML = txt
                  
        }
    }
    req.open("GET", "http://localhost:8001/product", true)
    req.send()
}

function carregarCategorias(){
    var req = new XMLHttpRequest()

    req.onreadystatechange = function(){
        if( this.readyState == 4 && this.status == 200){
            var produtos = JSON.parse( this.responseText )
            var txt =   '<div class="row"> '
            txt +=      '   <div class="col"> <strong> Código </strong></div>'
            txt +=      '   <div class="col"> <strong> Nome </strong></div>'
            txt +=      '</div> '

            produtos.forEach( prod => {
                txt +=      '<div class="row"> '
                txt +=      '   <div class="col"> ' + prod.id + ' </div>'
                txt +=      '   <div class="col"> ' + prod.nome + ' </div>'
                txt +=      '</div> '
            })
            document.getElementById("divConteudo").innerHTML = txt
                  
        }
    }
    req.open("GET", "http://localhost:8001/category", true)
    req.send()
}