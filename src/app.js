import getRandomColor from "./utils";

export default class initApp {
    #button;
    constructor() {
        this.#button = document.createElement('button');
        this.getRandomColor = new getRandomColor;
    }
    render(){
        this.#button.className = 'button';
        this.#button.textContent = 'Изменить цвет страницы';
        document.body.append(this.#button);

        this.#button.addEventListener('click', (e)=> {
            if (e.target.classList.contains('button')) {
                const body = document.querySelector('body');
                body.style.backgroundColor = this.getRandomColor.color();
            }
        });
    }
}