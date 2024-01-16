document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const resultDiv = document.getElementById('resultHere');
  const BMI= document.getElementById('bmi-score');
  const DescriptionOfBmi = document.getElementById('description');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    try {

      const response = await fetch('/bmicalculator', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();


      BMI.textContent = `BMI: ${result.bmiResult}`;
      DescriptionOfBmi.textContent = `Description: ${result.descriptionOfBMI}`;
      resultDiv.style.display = 'block'; 
    } catch (error) {
      console.error('Error:', error.message);
    }
  });
});
