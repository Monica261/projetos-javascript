import Countdown from './countdown.js';

const tempoParaONatal = new Countdown('24 December 2021 23:59:59 GMT-0300');

console.log(`Faltam ${tempoParaONatal.days} dias para o natal`);
console.log(tempoParaONatal.total);//o obj tem dias, horas, minutos e segundos

const container = document.querySelector('.container');
container.innerHTML += `
    <p>Faltam ${tempoParaONatal.total.days} dias ${tempoParaONatal.total.hours} horas para o natal</p>
`