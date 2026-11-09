# Experiment 8
## To Integrate Kubernetes and Docker

### Aim
To integrate Docker and Kubernetes for deploying and managing containerized applications.

### Software Required
- Docker Desktop
- Kubernetes
- Visual Studio Code
- Python
- Flask

### Procedure
1. Create a simple Flask application.
2. Create a Dockerfile.
3. Build the Docker image.
4. Enable Kubernetes in Docker Desktop.
5. Create a Kubernetes deployment file.
6. Deploy the application using kubectl.
7. Check the running pods and services.

### Commands

Check Docker version:
docker --version

Check Kubernetes version:
kubectl version --client

Build Docker image:
docker build -t flask-k8s:latest .

Apply Kubernetes deployment:
kubectl apply -f deployment.yaml

Check pods:
kubectl get pods

Check services:
kubectl get services

Delete deployment:
kubectl delete -f deployment.yaml

### Result
Successfully integrated Docker and Kubernetes to deploy a containerized Flask application.s