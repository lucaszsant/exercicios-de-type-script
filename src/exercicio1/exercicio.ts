type produto={
    nome:string;
    preco:number;
    estoque: number;
}
const produto:produto={
    nome:"máquina de lavar roupa",
    preco: 90000,
    estoque:34
}

if(produto.estoque>=1){
    console.log(`A ${ produto.nome} custa em torno de ${produto.preco}R$ e estar disponivel para compra, pois tem ${produto.estoque} estoques`)
}
else{
    console.log(`A ${produto.nome} custa em torno de ${produto.preco}R$ e estar indisponivel pois não tem ${produto.estoque} estoque`)
}

if(produto.preco<=100){
    console.log(`${produto.preco}R$ estar bem barato para comprar a ${produto.nome}`)
}
else{
    console.log(`${produto.preco}R$ está um pouco cara para comprar a ${produto.nome}`)
}