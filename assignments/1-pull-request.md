# Assignment 1: Pull Request

The source files for this project are called a _repository_. The repository currently exists in two places:

1. **Github's servers** (_remote repository_; "origin")
2. **Berti's Macbook** (_local repository_)

When collaborating with other programmers, we often _pull_ repositories to our own computer (creating a new _local repository_), make some changes, then _push_ the changes to the _remote repository_. These changes are then approved and merged into the _remote repository_ in a process called a _pull request_. Anyone can then go and _pull_ the updated code into their own repository, then make changes and repeat the process. The resulting code is a collaboration between all those who pushed changes to the repository.

For this assignment, you will be making changes to the _remote repository_ only.

## Prerequisites: Register a Github account

1. Go to [github.com](https://github.com) and register an account
2. Navigate to [this remote repository](https://github.com/dr-spaceman/apcsp-final-project) on your browser.
3. Click the Star ⭐ to save the repository to your favorites.

## Instructions

1. **_Fork_ this repository.** This creates a new _remote_ copy of the repository under your GitHub user account with a URL like `https://github.com/your-user-name/apcsp-final-project`. There are now two remote repositories: the original (_origin_) and yours. You can make changes to your forked code without affecting _origin_.
2. **Make some changes to the code.** For this part, you will write a message to someone. Open the `messages` folder and then click `Add File` to create a new file called `to-NAME-from-ME.txt`, where `NAME` is the recipient of the message and `ME` is your name. For example, `to-jerry-zha-from-tom-mao.txt`. Then in the text file contents, write your message. Keep it clean, please.
3. **_Commit_ (save) the new file.** In the top input field, add a summary of the changes, such as "Added a new message to Jerry". The changes are now saved in your own repository, but not in the original main repository.
4. **Create the _pull request_**. Click `Pull requests` then click `New pull request`. Ensure you are requesting to push your code to _origin_ (`dr-spaceman/apcsp-final-project`). Review the changes that you are proposing, then click `Create pull request`. You should now add some information in the input fields to go along with your pull request, such as what you are suggesting to change and why the change will improve the codebase. Then submit the request.

Congratulations! You have just contributed to an open source project! If dr-spaceman approves your _pull request_, your message will appear on _origin_ (`dr-spaceman/apcsp-final-project`). After that, you can `pull` any changes made to your own forked version (`your-username/apcsp-final`).

## Grading Rubric

This is a graded classwork assignment worth 5 Points:

- Stay awake during the whole class (2 Point)
- Successfully submit a pull request (1 Point)
- Proper format of message file (1 Point)
- Constructive commit and pull request messages (1 Point)
