export default class getRandomColor{
    #r;
    #g;
    #b;
    constructor() {
        this.#r = 0;
        this.#g = 0;
        this.#b = 0;
    }
    color(){
        this.#r = Math.floor(Math.random() * 256);
        this.#r = Math.floor(Math.random() * 256);
        this.#r = Math.floor(Math.random() * 256);
        return `rgb(${this.#r},${this.#g},${this.#b})`;
    }
}