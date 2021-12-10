const date1 = new Date();
// Data do Evento Senai
const dataEvento = new Date('2021-12-20 12:30:00');

// Verifição se a data do Evento Senai é igual, maior ou menor que a segunda
if (date1.getTime() === dataEvento.getTime()) {
	console.log('As datas são iguais');
}
else if (date1.getTime() > dataEvento.getTime()) {
	console.log("Cadastro não permitido. Data inválida");
}
else {
	console.log("Evento Disponível");
}
// Verificar se o participante é maior de 18 anos
let Idade = 33
if(Idade >= 18){
    console.log("Cadastro Permitido.")
}else {
    console.log("Cadastro não permitido pela idade.")
}
//Listar Participantes e Palestrantes
let listaParticipantes = ["Fulano", "Beltrano", "Ciclano","Etc", "Tal"];
let listaPalestrantes = ["Professor1", "Professor2"];
    console.log(`Relação de Participantes: ${listaParticipantes} `)
    console.log(`Relação de Palestrantes: ${listaPalestrantes} `)
if (listaParticipantes.length > 100){
    console.log("Cadastro não permitido. Número de cadastro excedido.")
} else{
    console.log("Cadastro Permitido.")
}
