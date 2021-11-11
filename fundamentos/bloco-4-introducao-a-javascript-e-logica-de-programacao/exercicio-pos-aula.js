let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'sim',
};

function boasVindas(){
    console.log('Boas vindas', info.personagem)
}
// boasVindas()

// for(let key in info){
//     console.log(key)
// }

// for(let key in info){
//     console.log(info[key])
// }

let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'sim',
}
    for(let key in info ){
    console.log(info[key],' e ', info2[key])
    }
    