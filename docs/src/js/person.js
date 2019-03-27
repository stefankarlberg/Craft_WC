if (typeof module !== 'undefined' && module.exports) {
    module.exports = Person;
} 

function Person(attr) {
    this.weight = attr.weight;
    this.height = attr.height;
    this.weight_stone = attr.weight_stone;
    this.weight_pounds = attr.height_pounds;
    this.height_feet = attr.height_feet;
    this.height_inches = attr.height_inches;

    this.calculate_bmi = function () {
        calculator = new BMICalculator();
        calculator.metric_bmi(this);
        calculator.imperial_bmi(this);
    };
};
