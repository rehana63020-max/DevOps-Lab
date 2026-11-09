from selenium import webdriver
from selenium.webdriver.common.by import By

def test_home_page():
    driver = webdriver.Chrome()

    try:
        driver.get("http://localhost:5000")

        assert "Welcome to Docker Containerized Application!" in driver.page_source

        print("Test Passed Successfully")

    finally:
        driver.quit()