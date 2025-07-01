# We are using FastAPI to create a simple API for our diabetes prediction model
# This code is the main entry point for the API and it handles incoming requests to predict diabetes based on user input.

from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
import joblib
import numpy as np

# We are using the FastAPI to get the data from the user and use our model to predict
app = FastAPI()
model = joblib.load("diabetes_model.pkl")

class DiabetesInput(BaseModel):
    Pregnancies: int
    Glucose: float
    BloodPressure: float
    BMI: float
    Age: int

@app.get("/")
def read_root():
    return {"message": "Diabetes Prediction API is live"}

@app.post("/predict")
def predict(data: DiabetesInput):
    input_data = np.array([[data.Pregnancies, data.Glucose, data.BloodPressure, data.BMI, data.Age]])
    prediction = model.predict(input_data)[0]
    return {"diabetic": bool(prediction)}

# Mounting the static files directory to serve the HTML file
# This allows us to serve a simple HTML interface the api

app.mount("/static", StaticFiles(directory="static"), name="static")