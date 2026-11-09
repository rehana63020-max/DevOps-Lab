from selenium import webdriver
from selenium.webdriver.common.by import By

driver = webdriver.Chrome()

driver.get("https://www.google.com")

print("Title:", driver.title)

search_box = driver.find_element(By.NAME, "q")
search_box.send_keys("Selenium Automation")
search_box.submit()

print("Search completed successfully")

driver.quit()