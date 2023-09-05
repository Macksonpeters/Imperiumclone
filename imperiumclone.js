

let typed = new Typed('.typewriter_text', {
    strings: ['Imperium', 'Sustainable', 'Renewable'],
    typeSpeed: 150,
    backSpeed: 0,
    loop: true
}
);

let generatorBased = document.querySelector('#generatorbased');
let deviceBased = document.querySelector('#devicebased');
let generatorBasedcontent = document.querySelector('#generatorbasedcontent');
let deviceBasedcontent = document.querySelector('#devicebasedcontent');

deviceBased.addEventListener('click', (e) => {
    generatorBasedcontent.style.display = 'none';
    deviceBasedcontent.style.display = 'block';
});

generatorBased.addEventListener('click', (e) => {
    generatorBasedcontent.style.display = 'block';
    deviceBasedcontent.style.display = 'none';
});