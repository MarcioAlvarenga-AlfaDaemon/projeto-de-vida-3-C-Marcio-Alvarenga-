const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

// Controle das abas
for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {

        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    };
}

// Datas dos objetivos
const tempoObjetivo1 = new Date("2026-04-03T00:00:00");
const tempoObjetivo2 = new Date("2026-10-17T00:00:00");
const tempoObjetivo3 = new Date("2026-06-25T00:00:00");
const tempoObjetivo4 = new Date("2026-12-25T00:00:00");

const tempos = [
    tempoObjetivo1,
    tempoObjetivo2,
    tempoObjetivo3,
    tempoObjetivo4
];

const contadores = document.querySelectorAll(".contador");

// Função que calcula o tempo restante
function calculaTempo(tempoObjetivo) {

    const tempoAtual = new Date();
    const tempoFinal = tempoObjetivo - tempoAtual;

    if (tempoFinal <= 0) {
        return [0, 0, 0, 0];
    }

    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos = segundos % 60;
    minutos = minutos % 60;
    horas = horas % 24;

    return [dias, horas, minutos, segundos];
}

// Atualiza os cronômetros
function atualizaCronometro() {

    for (let i = 0; i < contadores.length; i++) {

        const tempo = calculaTempo(tempos[i]);

        document.getElementById("dias" + i).textContent = tempo[0];
        document.getElementById("horas" + i).textContent = tempo[1];
        document.getElementById("min" + i).textContent = tempo[2];
        document.getElementById("seg" + i).textContent = tempo[3];
    }
}

// Inicia o cronômetro
function comecaCronometro() {
    atualizaCronometro();
    setInterval(atualizaCronometro, 1000);
}

comecaCronometro();