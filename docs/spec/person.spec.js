require('../spec.helper')

describe("Person", () => {

    let person = new Person({
        weight: 90,
        height: 186,
       
    })

    let person1 = new Person({
        height_feet: 5,
        height_inches: 9,
        weight_stone: 11,
        weight_pounds: 9,
    })

    it("should have weight of 90", () => {
        expect(person.weight).to.equal(90);
    })

    it("should have height of 186", () => {
        expect(person.height).to.equal(186);
    })

    it("should calculate BMI value", () => {
        person.calculate_bmi();
        expect(person.bmiValue).to.equal(26.01);
    });

    it("333should have height of 5 feet and 9 inches", () => {
        expect(person1.height_feet, person1.height_inches ).to.equal(5,9);
    })

    it("should have weight of 11 stones and 9 pounds", () => {
        expect(person1.weight_stone, person1.weight_pounds).to.equal(11,9);
    })

    it("should calculate Imperial BMI value", () => {
        person1.calculate_bmi();
        expect(person1.bmiValue).to.equal(24.07);
    });



});




