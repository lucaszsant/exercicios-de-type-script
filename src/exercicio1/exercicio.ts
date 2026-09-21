let nome:[
    {
    nome:"Lucas",
    idade: 20,
    curso: "Desenvolvimento de Sistema"
    },
    
    {
        nome:"Pedro",
        idade: 16,
        curso: "Desenhista"
    },
];

function buscaraluno():Promise<string>{

 return new Promise((resolve)=>{
     setTimeout(()=> {
        resolve("Aluno Encontrado!!");
     }, 2000);
    
 })
};

async function executar(){
    let resultado= await buscaraluno();
    console.log(resultado)
}

executar()



function somar(a:number, b:number): number{
    return a + b;
}
export{somar}