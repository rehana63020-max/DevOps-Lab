# Experiment 7
## Develop a Simple Containerized Application Using Docker

### Aim
To develop and run a simple web application inside a Docker container.

### Software Required
- Python
- Flask
- Docker Desktop
- Visual Studio Code

### Procedure
1. Create a Python Flask application.
2. Create a requirements.txt file.
3. Create a Dockerfile.
4. Open the VS Code terminal.
5. Build the Docker image.
6. Run the Docker container.
7. Open the application in a web browser.

### Docker Commands

Build Docker Image:
docker build -t flask-app .

Run Docker Container:
docker run -d -p 5000:5000 --name my-container flask-app

Check Running Containers:
docker ps

Stop Container:
docker stop my-container

### Result
Successfully developed and executed a simple containerized web application using Docker.