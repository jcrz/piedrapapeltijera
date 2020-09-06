export function createRandomInteger() {
    const range = 3 - 1;
    const num = Math.round((Math.random() * range) + 1);
    if(num === 1){
        return 'piedra'
    } else if (num === 2) {
        return 'papel'
    } else {
        return 'tijera'
    }
}