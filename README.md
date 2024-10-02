# GitHub User Repo Fetcher

This project uses the GitHub API to fetch details about users and their repositories.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload if you make changes.\
You may also see any lint errors in the console.

## Project Overview

This app interacts with the [GitHub API](https://docs.github.com/en/rest) to:

- Search for GitHub users by their username.
- Display basic profile information about the user.
- Fetch and display the user's public repositories.

---

## Features

- Search for any GitHub user.
- View a list of public repositories for the user.
- See detailed information about each repository, including:
  - Repository name
  - Description
  - Stars, forks, and watchers count
  - Language used
  - Link to the repository

---

## GitHub API

The app uses the following GitHub API endpoints:

- **Search users**: `GET https://api.github.com/search/users?q={username}`
- **Get user repos**: `GET https://api.github.com/users/{username}/repos`

For more details, visit the [GitHub API documentation](https://docs.github.com/en/rest).

---

## How to Use

1. Run the app locally by using `npm start`.
2. Enter a GitHub username in the search field.
3. View the user’s profile information and list of repositories.

