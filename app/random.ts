export class Random {

    static getRandomRange(array: any[], count: number): any[] {
        return this.shuffleArray(array)
            .slice(0, count);
    };

    static shuffleArray(array: any[]): any[] {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    };

    static getRandomItem(array: any[]): any {
        return array[this.getRandomIntegerBetween(0, array.length - 1)];
    };

    static getRandomIntegerBetween(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

}
