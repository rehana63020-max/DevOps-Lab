# Experiment 9
## Automate the Process of Running Containerized Application Using Kubernetes

### Aim
To automate the deployment and management of a containerized application using Kubernetes.

### Software Required
- Docker Desktop
- Kubernetes
- Python
- Flask
- Visual Studio Code

### Procedure
1. Create a Flask application.
2. Create a Dockerfile.
3. Build a Docker image.
4. Create a Kubernetes deployment file.
5. Deploy the application using kubectl.
6. Check the running pods.
7. Access the application through the browser.

### Docker Command

Build Image:
docker build -t flask-k8s:latest .

### Kubernetes Commands

Deploy Application:
kubectl apply -f deployment.yaml

Check Deployment:
kubectl get deployments

Check Pods:
kubectl get pods

Check Services:
kubectl get services

Delete Application:
kubectl delete -f deployment.yaml

### Result
Successfully automated the deployment and running of a containerized application using Kubernetes.