document.getElementById("predictForm").onsubmit = async function (e) {
  e.preventDefault();
  const data = {
    Pregnancies: parseInt(document.getElementById("Pregnancies").value),
    Glucose: parseFloat(document.getElementById("Glucose").value),
    BloodPressure: parseFloat(document.getElementById("BloodPressure").value),
    BMI: parseFloat(document.getElementById("BMI").value),
    Age: parseInt(document.getElementById("Age").value)
  };
  const response = await fetch("/predict", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  const result = await response.json();
  document.getElementById("result").innerText = result.diabetic
    ? "You may be diabetic 😟"
    : "You are likely not diabetic 😄";
};
