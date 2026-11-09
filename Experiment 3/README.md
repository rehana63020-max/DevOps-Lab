# Experiment 3: Practice Source Code Management on GitHub

## AIM

To practice source code management on GitHub using the source code developed in Experiment 1.

## DESCRIPTION

GitHub is a platform used to store, manage, and share source code. Git helps track changes made to files and maintain different versions of a project.

In this experiment, the Flask-based user registration application developed in Experiment 1 is managed using Git and GitHub.

## PROCEDURE

### 1. Create a GitHub Account

Create an account on GitHub if you do not already have one.

### 2. Create a Repository

Create a repository on GitHub to store the source code.

### 3. Clone the Repository

```bash
git clone <repository-url>
```

This command downloads the remote repository to the local machine.

### 4. Move to the Repository Directory

```bash
cd <repository-name>
```

This command changes the current directory to the repository folder.

### 5. Add Source Code

Create the necessary source-code files using the Flask application from Experiment 1.

The application contains:

* `app.py`
* `requirements.txt`
* `Dockerfile`
* `templates/register.html`
* `templates/success.html`

### 6. Stage the Changes

```bash
git add .
```

This command stages the new and modified files for committing.

### 7. Commit the Changes

```bash
git commit -m "Added source code for a simple user registration form"
```

This command saves the staged changes in the local repository.

### 8. Push Changes to GitHub

```bash
git push origin main
```

This command uploads the committed changes to the remote GitHub repository's main branch.

### 9. Verify the Changes

Open the GitHub repository in a web browser and check that the source-code files are visible.

## RESULT

Thus, source code management was practiced using Git and GitHub. The Flask user registration application's source code was organized, committed, and uploaded to the remote repository.
