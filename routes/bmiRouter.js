const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const {  height,heightFTtoCm, weight,weightLbtoKg } = req.body;
    const heightInCm = heightFTtoCm === 'foot' ? height * 30.48 : height;
    const weightInKg = weightLbtoKg === 'lbs' ? weight * 0.453592 : weight;

    const bmi = weightInKg / Math.pow(heightInCm / 100, 2);


    let descriptionOfBMI;
        if (bmi < 17.5) {
            descriptionOfBMI = 'Underweight';
        } else if (bmi <= 23) {
            descriptionOfBMI = 'Normal weight';
        } else if (bmi <= 27) {
            descriptionOfBMI = 'Overweight';
        } else {
            descriptionOfBMI = 'Obese';
        }
     

    res.json({ bmiResult: bmi.toFixed(2), descriptionOfBMI });
});

module.exports = router;
