export default class Random {

  static getRandomRange(array, count) {
    return this.shuffleArray(array)
            .slice(0, count);
  }

  static shuffleArray(originalArray) {
    const array = originalArray.slice();
    for (let i = array.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  static getRandomItem(array) {
    return array[this.getRandomIntegerBetween(0, array.length - 1)];
  }

  static getRandomIntegerBetween(min, max) {
    return Math.floor(Math.random() * ((max - min) + 1)) + min;
  }

}
