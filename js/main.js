class Hecmathlon {
    getMaxValue(input) {
        return input.split(",").reduce(([max], v) => [Math.max(max, v) || max]);        
    };

    getGreaterThan(input) {
        const greaterValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        return greaterValues.filter(value => value >= parseInt(input))
    };

    fizzBuzz(input) {
        let output = [...Array(parseInt(input)).keys()].map(x => {
            if (x===0){
                return 0
            }
            else if (x % 5 === 0 && x % 3 === 0){
                return "</br>FizzBuzz";
            }
            else if (x%3 === 0){
                return "</br>Fizz";
            }
            else if (x%5 === 0){
                return "</br>Buzz"
            }
            else { 
                return "</br>" + x
            }
        })
        return output
    }
}

export default Hecmathlon;