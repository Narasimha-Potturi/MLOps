# **MLOps** 

## **What is MLops?**


Machine Learning Operations in short “MLOps“ refers to a set of practices that help automate and streamline the process of developing, deploying and managing machine learning models. It combines machine learning development with operations to create an efficient workflow. MLOps allows organisations to automate various steps in the machine learning lifecycle such as model development, testing, integration, deployment and infrastructure management.

For somebody who is already familar with “Devops “ can better understand MLOps in this way. MLOps is an ML culture and practice that unifies ML application development (Dev) with ML system deployment and operations (Ops). Your organization can use MLOps to automate and standardize processes across the ML lifecycle.

MLOps can be considered an evolution of DevOps, and is based on the same foundational concepts of collaboration, automation, and continuous improvement applied to developing ML models.

Steps Included in a standard machine learning lifecycle

* Planning
* Data Preparation 
* Model Engineering
* Model Evaluation
* Model Deployment
* Monitoring and Maintenance

![image](https://github.com/user-attachments/assets/65147dd4-f0e8-47e4-a8cb-8b879d1f2077)

----


# **Using this repo build your first Machine Learning Model and deploy your model into a Kubernetes Cluster**




# 🩺 Diabetes Prediction Model

We’ve seen what **MLOps** is — the process of taking a machine learning model beyond development and into production with automation, monitoring, and scalability.

This repository is a practical demonstration of **MLOps in action**:  
It contains an ML model that is containerized, deployed to a **Kubernetes cluster**.
<!--, and fully automated using **GitHub Actions** for CI/CD.-->


## 📦 What's in this repo?

- A trained **Diabetes Prediction model** (using scikit-learn)
- REST API built using **FastAPI**
- Containerized with **Docker**
- Deployed to **Kubernetes** (minikube/kind/GKE)
- Clean and interactive UI for users to input values
<!--- Automated builds & deployments using **GitHub Actions**-->

## 🚀 How to Run Locally (Docker)

### 1. Clone the repo

```bash
git clone https://github.com/your-username/diabetes-predictor-mlops.git
cd diabetes-predictor-mlops
```

### 2. Build the docker image

```bash
docker build -t diabetes-predictor .
```

### 3. Run the container
```bash
docker run -p 8000:8000 diabetes-predictor
```
Verify the webisite on your localhost
`http://localhost:8000/`

### 4. Deploy to Kubernetes (Minikube/Kind/cluster of your choice)

```bash
kubectl apply -f deploy.yaml
```


## 📸 UI Preview

![Screenshot_1-7-2025_183148_localhost](https://github.com/user-attachments/assets/29b39892-13f8-49a3-9410-bceda6101bec)

<!-- Add screenshot if needed -->

---

## 🧪 Sample Input Values

You can use the following sample values when testing the application:

| Parameter         | Sample Value | Ideal Healthy Range               |
|------------------|--------------|-----------------------------------|
| **Pregnancies**   | `1`          | 0 – 15                            |
| **Glucose**       | `100`        | 70 – 140 mg/dL                    |
| **Blood Pressure**| `80`         | 60 – 120 mm Hg                    |
| **BMI**           | `22.5`       | 18.5 – 24.9                       |
| **Age**           | `30`         | 18 – 60                           |

These values simulate a healthy person's vitals and can be used for quick testing.  
When you open the web UI, you can enter the desired values.

---


## Technologies Used

* Python + scikit-learn

* FastAPI

* Docker

* Kubernetes

* HTML + Tailwind CSS

The repo is designed to be beginner-friendly, with clear instructions and a simple UI for testing the model. It’s a great starting point for anyone looking to learn about MLOps and how to take machine learning models into production. The CI/CD is stil in progress and will be udpated soon. Keep an eye on the repo for Updates!

### Want to Learn MLOps Hands-on?

**Follow this repo to see how to take ML models all the way to production — and stay tuned for upcoming CI/CD, monitoring, and logging features.**


