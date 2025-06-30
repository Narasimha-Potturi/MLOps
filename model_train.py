# This model predicts diabetes based on features like Glucose, Pregnancies, BMI, Blood Pressure and Age.
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
import joblib

# Load dataset from a source (Kaggle/hosted)
url = "https://raw.githubusercontent.com/plotly/datasets/master/diabetes.csv"
df = pd.read_csv(url)

print("✅ Columns:", df.columns.tolist())  # Debug print

# Prepare data for training the model
# Features and target variable
X = df[["Pregnancies", "Glucose", "BloodPressure", "BMI", "Age"]]
y = df["Outcome"]

# Split
# using train_test_split to create training and testing datasets
# this is crucial for evaluating model performance
# Ensuring that model is trained on one set and tested on another

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train model based on Random Forest Classifier
# Random Forest is a robust model used for classification tasks
# It works well with tabular data and can handle non-linear relationships

model = RandomForestClassifier()
model.fit(X_train, y_train)

# Save the trained model using joblib
# joblib is a library for saving Python objects efficiently, this is useful for deploying models and later we can use them without retraining.

joblib.dump(model, "diabetes_model.pkl")
print("✅ Model saved as diabetes_model.pkl")
