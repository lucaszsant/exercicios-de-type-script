async function CriarUsuário() {
    const resposta= await fetch("https://reqres.in/api/users",{
        method: "POST",

        headers: {
            "content-type": "application/json"
        },
        body:JSON.stringify({
        nome:"Lucas",
        job: "teste de qa"
    }) 
});
 
 if(resposta.status===201){
    console.log("Produto criado")
 }
 else{
    console.log("Teste não passou")
 }
}
CriarUsuário()
