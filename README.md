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
It contains an ML model that is containerized, deployed to a **Kubernetes cluster**, and fully automated using **GitHub Actions** for CI/CD.

---

## 📦 What's in this repo?

- A trained **Diabetes Prediction model** (using scikit-learn)
- REST API built using **FastAPI**
- Containerized with **Docker**
- Deployed to **Kubernetes** (minikube/kind/GKE)
- Automated builds & deployments using **GitHub Actions**
- Clean and interactive UI for users to input values

---

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

## ☸️ Deploy to Kubernetes (Minikube)

```bash
kubectl apply -f diabetes-predictor.yaml
```


## 📸 UI Preview
<!-- Add screenshot if needed -->


## Technologies Used

* Python + scikit-learn

* FastAPI

* Docker

* Kubernetes

* GitHub Actions

* HTML + Tailwind CSS
  
### Want to Learn MLOps Hands-on?

**Follow this repo to see how to take ML models all the way to production — and stay tuned for upcoming CI/CD, monitoring, and logging features.**


