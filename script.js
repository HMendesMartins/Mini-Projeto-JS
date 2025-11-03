const jogo = "Mini-Jogo de perguntas! ";
let pontos = 0;
let resposta = ["","","",""]
let pergunta = ["Qual a capital do brasil?(em sigla)","Qual a letra que representa o potássio na tabela períodica?","Você gosta do pible?(sim/claro)","Acha verdadeira a imaculada conceição de Maria?(sim/claro)","Qual o país que já canibalizou o próprio primeiro ministro?"];
let verdade = ["DF","K","CLARO","CLARO","HOLANDA"];
function perguntas(x){
    resposta[x] = prompt(pergunta[x]).toUpperCase();
};
function adpontos(y){
    if(resposta[y] == verdade[y]){
        alert("RESPOSTA CORRETA :) !");
        pontos = pontos + 1;
    }
    else{
        alert("Resposta incorreta!");
    };
};
perguntas(0);
adpontos(0);
perguntas(1);
adpontos(1);
perguntas(2);
adpontos(2);
perguntas(3);
adpontos(3);
perguntas(4);
adpontos(4);

alert("SUA PONTUAÇÃO: "+pontos+"/5 !!!!");

alert("Parabéns! Para tentar de novo: Reinicie a Página") 


