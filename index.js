const prompt = require("prompt-sync")();
console.clear();

console.log(`Você é um jogador de super mario na década de 80, porém além de zerar o jogo, resgatando a princesa, você precisa fazer mais coisas para chegar ao seu objetivo de 
jogador e triunfar.`)

resposta1 = prompt("Você Resgatou a Princesa?");
while (resposta1.toLowerCase() != "sim" && resposta1.toLowerCase() != "nao") {
  console.log("Responda somente com Sim ou Nao");
  resposta1 = prompt("Você Resgatou a Princesa?");
}

resposta2 = prompt("Você derrotou todos os monstros possíveis?");
while (resposta2.toLowerCase() != "sim" && resposta2.toLowerCase() != "nao") {
  console.log("Responda somente com Sim ou Nao");
  resposta2 = prompt("Você derrotou todos os monstros possíveis?");
}

resposta3 = prompt("Você concluiu todos os níveis extras?")
while (resposta3.toLowerCase() != "sim" && resposta3.toLowerCase() != "nao") {
  console.log("Responda somente com Sim ou Nao");
  resposta3 = prompt("Você concluiu todos os níveis extras?")
}

resposta4 = prompt("Você morreu menos de duas vezes?")
while (resposta4.toLowerCase() != "sim" && resposta4.toLowerCase() != "nao") {
  console.log("Responda somente com Sim ou Nao");
  resposta4 = prompt("Você morreu menos de duas vezes?");
}

resposta5 = prompt("Você coletou todos coletáveis(moedas, vidas)?");
while (resposta5.toLowerCase() != "sim" && resposta5.toLowerCase() != "nao") {
  console.log("Responda somente com Sim ou Nao");
  resposta5 = prompt("Você coletou todos coletáveis(moedas, vidas)?");
}

let array_de_repostas = [resposta1, resposta2, resposta3, resposta4, resposta5];
let respostas_sim = 0;

for (let contador = 0; contador <= 4; contador++) {
  if (array_de_repostas[contador] == "sim") {
    respostas_sim = respostas_sim + 1;
  }
}

if (respostas_sim == 0) {
  console.log("você falhou miseravelmente!");
} else if (respostas_sim == 1 || respostas_sim == 2) {
  console.log("Você falha, mas ainda consegue fugir da situação.");
} else if (respostas_sim == 3) {
  console.log(
    "Você chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco."
  );
} else if (respostas_sim == 4) {
  console.log(
    "Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita."
  );
} else if (respostas_sim == 5) {
  console.log(
    "Você triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações."
  );
}
console.log("Fim");