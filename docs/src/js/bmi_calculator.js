

function BMICalculator(){
};



BMICalculator.prototype.metric_bmi = function(obj) {
    let weight = obj.weight;
    let height = obj.height;

    if (weight > 0 && height > 0) {
      var finalBmi = weight / (height / 100 * height / 100);
      obj.bmiValue =  parseFloat(finalBmi.toFixed(2));
      setBMIMessage(obj);
    }
  };


 
  BMICalculator.prototype.imperial_bmi = function(obj) {
    
    let weight_stone = weight_stone;
    let weight_pounds = weight_pounds;
    let height_feet = height_feet;
    let height_inches = height_inches;
    
    let weight = ((weight_stone * 14) + weight_pounds) * 703;
    let height = (height_feet * 12) + height_inches;

    if (weight > 0 && height > 0) {
      var finalBmi = weight / (height / 100 * height / 100);
      obj.bmiValue =  23;
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