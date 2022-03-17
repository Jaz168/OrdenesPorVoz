const texts = document.querySelector('.texts');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement('p');
let bulb = document.getElementById('bulb');
let bulb2 = document.getElementById('bulb2');
let bulb3 = document.getElementById('bulb3');
let bulb4 = document.getElementById('bulb4');
let bulb5 = document.getElementById('bulb5');

recognition.addEventListener('result', (e)=>{
  texts.appendChild(p);
  const text = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');

  p.innerText = text;
  if(e.results[0].isFinal){
    if (text.includes('encender')) {
      p = document.createElement('p');
      p.classList.add('replay');
      p.innerText = 'Encendido';
      texts.appendChild(p)
      bulb.style.background = "url(bulb_on.jpg)";
    }
      if (text.includes('Apagar')) {
        p = document.createElement('p');
        p.classList.add('replay');
        p.innerText = 'Apagado';
        texts.appendChild(p)
        bulb.style.background = "url(bulb_off.jpg)";
      }

      if (text.includes('encender 2')) {
        p = document.createElement('p');
        p.classList.add('replay');
        p.innerText = 'Encendido';
        texts.appendChild(p)
        bulb2.style.background = "url(bulb_on.jpg)";
      }
        if (text.includes('Apagar 2')) {
          p = document.createElement('p');
          p.classList.add('replay');
          p.innerText = 'Apagado';
          texts.appendChild(p)
          bulb2.style.background = "url(bulb_off.jpg)";
        }


        if (text.includes('encender 3')) {
          p = document.createElement('p');
          p.classList.add('replay');
          p.innerText = 'Apagado';
          texts.appendChild(p)
          bulb3.style.background = "url(bulb_on.jpg)";
        }
          if (text.includes('Apagar 3')) {
            p = document.createElement('p');
            p.classList.add('replay');
            p.innerText = 'Apagado';
            texts.appendChild(p)
            bulb3.style.background = "url(bulb_off.jpg)";
          }

          if (text.includes('encender 4')) {
            p = document.createElement('p');
            p.classList.add('replay');
            p.innerText = 'Apagado';
            texts.appendChild(p)
            bulb4.style.background = "url(bulb_on.jpg)";
          }
            if (text.includes('Apagar 4')) {
              p = document.createElement('p');
              p.classList.add('replay');
              p.innerText = 'Apagado';
              texts.appendChild(p)
              bulb4.style.background = "url(bulb_off.jpg)";
            }

            if (text.includes('encender 5')) {
              p = document.createElement('p');
              p.classList.add('replay');
              p.innerText = 'Encendido';
              texts.appendChild(p)
              bulb5.style.background = "url(bulb_on.jpg)";
            }
              if (text.includes('Apagar 5')) {
                p = document.createElement('p');
                p.classList.add('replay');
                p.innerText = 'Apagado';
                texts.appendChild(p)
                bulb5.style.background = "url(bulb_off.jpg)";
              }


    p = document.createElement('p');
    }
}
);


recognition.addEventListener('end', ()=>{
  recognition.start();
})

recognition.start();


