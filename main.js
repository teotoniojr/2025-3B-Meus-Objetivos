const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");
const contadores = document.querySelectorAll(".contador");

const tempoObjetivo01 = new Date("2025-04-15T00:00:00");
const tempoObjetivo02 = new Date("2025-06-05T00:00:00");
const tempoObjetivo03 = new Date("2025-07-02T00:00:00");
const tempoObjetivo04 = new Date("2025-11-10T00:00:00");

const tempos = [tempoObjetivo01, tempoObjetivo02, tempoObjetivo03, tempoObjetivo04];

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {
        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove('ativo');
            textos[j].classList.remove('ativo');
        }

        botoes[i].classList.add('ativo');
        textos[i].classList.add('ativo');
    }
}

function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;

    if (tempoFinal <= 0) {
        return null;
    }

    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;

    return [dias, horas, minutos, segundos];
}

function atualizaCronometro() {
    for (let i = 0; i < contadores.length; i++) {
        let tempo = calculaTempo(tempos[i]);
        
        if (tempo) {
            document.getElementById("dias" + i).textContent = tempo[0];
            document.getElementById("horas" + i).textContent = tempo[1];
            document.getElementById("min" + i).textContent = tempo[2];
            document.getElementById("seg" + i).textContent = tempo[3];
        } else {
            document.getElementById("dias" + i).textContent = "-";
            document.getElementById("horas" + i).textContent = "-";
            document.getElementById("min" + i).textContent = "-";
            document.getElementById("seg" + i).textContent = "-";
        }
    }
}
atualizaCronometro();
setInterval(atualizaCronometro, 1000);
