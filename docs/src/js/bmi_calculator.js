function BMICalculator(){

};



BMICalculator.prototype.bmi = function(obj) {
    let weight = obj.weight;
    let height = obj.height;

    let weight_stone = obj.weight_stone;
    let weight_pounds = obj.weight_pounds;
    let height_feet = obj.height_feet;
    let height_inches = obj.height_inches;

    let full_height_inches = (height_feet  * 12) + height_inches;
    let full_weight_pounds = (weight_stone * 14) + weight_pounds;

    if (weight > 0 && height > 0) {
      var finalBmi = weight / (height / 100 * height / 100);
      obj.bmiValue =  parseFloat(finalBmi.toFixed(2));
      setBMIMessage(obj) 
    }

    else if (full_height_inches > 0 && full_weight_pounds > 0) {
      let BMI = (full_weight_pounds / (full_height_inches * full_height_inches)) * 703;
      obj.bmiValue = parseFloat(BMI.toFixed(2));
      setBMIMessage(obj);
      }
    
  };

  
  function setBMIMessage (obj){
    if (obj.bmiValue < 18.5) {
      obj.bmiMessage = "Underweight"
    }
    if (obj.bmiValue > 18.5 && obj.bmiValue < 25) {
      obj.bmiMessage = "Healthy"
    }
    if (obj.bmiValue > 25 && obj.bmiValue < 30) {
      obj.bmiMessage = "Overweight"
    }
    if (obj.bmiValue > 30) {
      obj.bmiMessage = "Obese"
    }
  }

 

if (typeof module !== 'undefined' && module.exports) {
    module.exports = BMICalculator;
}

