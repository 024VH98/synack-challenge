# Synack Challenge

### Overview

- In this repo you will find the solution for Synack challenge.
- This is built using Ruby on Rails and ReactJS, both are in the same repo, because Rails is rendering React views.

### Dependencies
- These are the dependecies with the installed version:

| Name          | Version |
| ------------- | ------- |
| Ruby          | 2.6.3   |
| Bundle        | 2.2.6   |
| Ruby On Rails | 6.0.3.6 |
| Node          | 15.11.0 |
| Yarn          | 1.22.10 |

### Run the project

- First you have to clone the repo and get into the folder

```
git clone git@github.com:024VH98/synack-challenge.git
cd synack-challenge
```

> **Note:** Here we are using SSH to clone the project in case you don't have it you can use HTTPS `https://github.com/024VH98/synack-challenge.git`

- Once you have to install npm packages and gems

```
yarn install
bundle install
```

- Now you need to set up the database

```
rails db:create
```

- Now you can run the project in dev mode

```
yarn dev
```
