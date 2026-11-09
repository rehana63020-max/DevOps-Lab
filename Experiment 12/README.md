# Experiment 12
## Develop Test Cases for Containerized Application Using Selenium

### Aim
To develop and execute test cases for a containerized application using Selenium.

### Software Required
- Python
- Flask
- Docker
- Selenium
- Pytest
- Google Chrome
- Visual Studio Code

### Procedure
1. Create a Flask application.
2. Create a Dockerfile.
3. Build a Docker image.
4. Run the Docker container.
5. Install Selenium and Pytest.
6. Create test cases using Selenium.
7. Execute the test cases.
8. Verify the application output.

### Commands

Build Docker Image:
docker build -t flask-test .

Run Container:
docker run -d -p 5000:5000 --name test-container flask-test

Install Testing Tools:
pip install selenium pytest

Run Test Cases:
pytest -v test_app.py

Stop Container:
docker stop test-container

Remove Container:
docker rm test-container

### Result
Successfully developed and executed test cases for a containerized application using Selenium.