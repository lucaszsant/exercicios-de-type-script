async function criarProduto() {

    const resposta = await fetch("https://dummyjson.com/products/add", {
        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            title: "Notebook",
            price: 2500
        })
    });

    console.log("Status:", resposta.status);

    if (resposta.status === 201) {

        const dados = await resposta.json();

        console.log("Produto criado:");
        console.log(dados);

    } else {
        console.log("Falha ao criar produto");
    }
}

criarProduto();