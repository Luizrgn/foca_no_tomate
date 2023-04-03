// Define as variáveis globais necessárias
let workDuration = 25; // Duração do tempo de trabalho em minutos
let breakDuration = 5; // Duração do tempo de descanso em minutos
let timeLeft = workDuration * 60; // Tempo restante em segundos
let breakTime = false; // Indica se é tempo de trabalho ou de descanso
let timerId; // Identificador do intervalo do temporizador

// Seleciona os elementos do DOM
const label = document.querySelector('#label');
const minutesLabel = document.querySelector('#minutes');
const secondsLabel = document.querySelector('#seconds');
const startButton = document.querySelector('#start');
const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', resetTimer);


// Atualiza o temporizador com o tempo restante
function updateTimer() {
  // Divide o tempo restante em minutos e segundos
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  // Atualiza as etiquetas do temporizador com os valores de minutos e segundos
  minutesLabel.innerText = minutes.toString().padStart(2, '0');
  secondsLabel.innerText = seconds.toString().padStart(2, '0');
}

// Executa a contagem regressiva
function countdown() {
  // Verifica se o tempo restante é igual a zero
  if (timeLeft == 0) {
    clearInterval(timerId); // Limpa o intervalo do temporizador
    breakTime = !breakTime; // Alterna o tempo de trabalho/descanso
    if (breakTime) {
      // Se for tempo de descanso, define o tempo restante para a duração do descanso
      timeLeft = breakDuration * 60;
      label.innerText = ''; // mensagem 'Break time!' Altera a etiqueta para "Break time!"
    } else {
      // Se for tempo de trabalho, define o tempo restante para a duração do trabalho
      timeLeft = workDuration * 60;
      label.innerText = ''; // mensagem 'Work time!' Altera a etiqueta para "Work time!"
    }
    startButton.innerText = 'Start'; // Altera o texto do botão para "Start"
    updateTimer(); // Atualiza o temporizador com o tempo restante
  } else {
    timeLeft -= 1; // Subtrai 1 segundo do tempo restante
    updateTimer(); // Atualiza o temporizador com o tempo restante
  }
}

// Inicia ou pausa a contagem regressiva
function startTimer() {
  // Verifica se o temporizador já está em execução
  if (!timerId) {
    // Se não estiver, define o identificador do intervalo do temporizador
    timerId = setInterval(countdown, 1000); // Executa a função countdown() a cada segundo
    startButton.innerText = 'Pause'; // Altera o texto do botão para "Pause"
  } else {
    // Se estiver, limpa o intervalo do temporizador e redefine o identificador para null
    clearInterval(timerId);
    timerId = null;
    startButton.innerText = 'Start'; // Altera o texto do botão para "Start"
  }
}

function resetTimer() {
    clearInterval(timerId);
    timerId = null;
    breakTime = false;
    timeLeft = workDuration * 60;
    label.innerText = ''; // local de mensagem 'work time!', removido para poder não quebrar o codigo do css e bagunçar o estilo da pagina*
    startButton.innerText = 'Start';
    updateTimer();
}





