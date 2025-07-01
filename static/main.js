document.getElementById("predictForm").onsubmit = async function (e) {
  e.preventDefault();

  const data = {
    Pregnancies: parseInt(document.getElementById("Pregnancies").value),
    Glucose: parseFloat(document.getElementById("Glucose").value),
    BloodPressure: parseFloat(document.getElementById("BloodPressure").value),
    BMI: parseFloat(document.getElementById("BMI").value),
    Age: parseInt(document.getElementById("Age").value)
  };

  const error = validateInput(data);
  const resultDiv = document.getElementById("result");

  if (error) {
    resultDiv.innerText = error;
    resultDiv.style.color = "red";
    return;
  }

  try {
    const response = await fetch("/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const result = await response.json();
    resultDiv.style.color = "#1f2937";
    resultDiv.innerText = result.diabetic
      ? "You may be diabetic 😟"
      : "You are likely not diabetic 😄";
  } catch (err) {
    resultDiv.innerText = "Server error. Please try again.";
    resultDiv.style.color = "red";
  }
};

function validateInput(data) {
  if (data.Pregnancies < 0 || data.Pregnancies > 15) return "Pregnancies should be between 0 and 15.";
  if (data.Glucose < 70 || data.Glucose > 180) return "Glucose should be between 70 and 180.";
  if (data.BloodPressure < 60 || data.BloodPressure > 120) return "Blood Pressure should be between 60 and 120.";
  if (data.BMI < 18.5 || data.BMI > 24.9) return "BMI should be between 18.5 and 24.9.";
  if (data.Age < 18 || data.Age > 120) return "Age should be between 18 and 120.";
  return null;
}
