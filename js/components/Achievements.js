"use strict";
import data from '../data/achievements-data.js';

class Achievements {
    constructor(target){
        this.target = target;
        this.numbersAnimated = false;

        this.render();
        //this.updateCount();
        this.scroll();
    }

    render(){
        const DOM = document.querySelector(this.target);
        if(!DOM){
            throw 'ERROR: OMG... go fix Achievements!!!';
        }
        let HTML = '';

        for(let i=0; i<data.length; i++){
            const ach = data[i];
            HTML += `
                <div class="col-3 achievements">
                <i class="fa fa-${ach.icon}"></i>
                <div class="number" data-num=${ach.number}>${ach.number}</div>
                <p>${ach.title}</p>
                </div>`
        }
        DOM.innerHTML = HTML;
        this.DOMnumbers = DOM.querySelectorAll('.number');
    }

    scroll() {
        window.addEventListener('scroll', () => {
            const height = this.DOMnumbers[0].offsetTop + window.innerHeight;
            if ( height+200 < window.scrollY && !this.numbersAnimated ) {

                const totalTime = 3000;
                const framesPerSecond = 24;
                const framesCount = (totalTime / 1000) * framesPerSecond;
                let count = 0;

                const clock = setInterval(() => {
                    for ( let i=0; i<this.DOMnumbers.length; i++ ) {
                        this.DOMnumbers[i].innerText = Math.ceil(count * parseInt(this.DOMnumbers[i].dataset.num) / framesCount);
                    }
                    count++;
                    if ( count > framesCount ) {
                        clearInterval(clock);
                    }
                }, 1000 / framesPerSecond);

                this.numbersAnimated = true;

            }
        })
    }
}

export default Achievements;

/*  updateCount(){
        
        let counter = [0, 0, 0, 0];
        let step = 100;
        let increment = 0;
        const query = document.querySelectorAll('.number'); 
        const numbersSection = document.querySelector('.achievements');
    
        let counterFunction = function() {
           if (window.scrollY + window.innerHeight > numbersSection.offsetTop){
                for(let i=0; i<data.length; i++){
                    query[i].textContent = counter[i];
                    increment = Math.round(data[i].number / step);
                    if (counter[i] >= data[i].number){
                        counter[i] = data[i].number;
                    clearInterval(this);
                    } else {
                        counter[i] += increment;
                    }
                }
            }
        }
        setInterval(counterFunction, 20);
        
    }

export default Achievements;

function offset(elem) {
    if(!elem) elem = this;

    var y = elem.offsetTop;

    while (elem = elem.offsetParent) {
        y += elem.offsetTop;
    }

    return { top: y };
}*/
