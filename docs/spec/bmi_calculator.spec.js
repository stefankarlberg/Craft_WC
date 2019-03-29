require('../spec.helper')

describe('BMICalculator', () => {
    let bmi_calculator
    let person
    let person1

    

    beforeEach(() => {
        person = new Person({weight: 90, height: 186});
        person1 = new Person({weight_stone: 11, weight_pounds: 9, height_feet: 5, height_inches: 9});

        bmi_calculator = new BMICalculator();
      
    });

    it('calculates BMI for a person using metric method', () => {
        bmi_calculator.bmi(person)
        expect(person.bmiValue).to.eql(26.01)
    })

    it("sets BMI message for a person using metric method", () => {
        bmi_calculator.bmi(person);
        expect(person.bmiMessage).to.equal('Overweight');
    });

    it('calculates BMI for a person using imperial method', () => {
        bmi_calculator.bmi(person1)
        expect(person1.bmiValue).to.eql(24.07)
    })

    it("sets BMI message for a person using imperial method", () => {
        bmi_calculator.bmi(person1);
        expect(person1.bmiMessage).to.equal('Healthy');
    });


  
  
})
