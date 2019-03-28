require('../spec.helper')

describe("Person", () => {

    let person = new Person({
        weight: 90,
        height: 186,
        height_feet: 5,
        height_inches: 9,
        weight_stone: 11,
        weight_pounds: 4
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

    it("should have height of 5 feet and 9 inches", () => {
        expect(person.height_feet, person.height_inches ).to.equal(5,9);
    })

    it("should have weight of 11 stones and 4 pounds", () => {
        expect(person.weight_stone, person.weight_inches).to.equal(11,4);
    })


});




