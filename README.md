# <p align = "center">CoC Beyond</p>

<p align="center">
   <img src="./logo.png" alt="logo" height="200"/>
</p>

## :clipboard: Description

Playing RPG is a very enjoyable activity, and it is really nice to meet with your friends and play together. But it is a litte boring to create a character sheet, mark it with pencil so you can change the inputs, and managing the character sheet in general. For very popular sytems like D&D there is a lot of online tools that helps you to do this tasks, such as [D&D Beyond](https://www.dndbeyond.com/). But simpler systems like _Call of Cthulhu_ there aren't a lot of tools available. Thinking on that i decided to create my own character sheet creator and manager. I Hope that in a near future i will be able to create such an amazing and complete tool as _D&D Beyond_ wich is obviously my inpiration. This is a learning project thogh, so feel free to clone or fork this repository, create your own manager with you favourite RPG system, and learn as much as you can.

---

## :mag: Table of Contents

- [Technologies and Concepts](#computer-technologies-and-concepts)
- [Routes](#rocket-routes)
- [Running the Application](#checkered_flag-running-the-application)
- [Running tests](#test_tube-running-tests)

---

## :computer: Technologies and Concepts

- REST APIs
- Node.js
- TypeScript
- PostgreSQL with Prisma
- Integration and unit tests with jest
- Env variables
- Layared Architecture

I opted to use this technologies because i'm currently studying it and because i'm more confident with them, since i'm more familiar with.

---

## :rocket: Routes

```yml
POST /signup
  - Create a new account
  - headers: {}
  - body: {
    "email": "coc_beyond@gmail.com",
    "password": "its_secret_ssshh",
    "confirmPassword": "its_secret_ssshh"
  }
  - The return is
  - body: {
    "id": 1,
    "email": "coc_beyond@gmail.com"
  }
```

---

## :checkered_flag: Running the Application

This project was created using `node` on version `v16.15.1` and `npm` on version `8.11.0`, so it is recommended to use this versions. It also uses `postgres` on version `14.5` on your machine so you'll need to install that too.

First, clone this repository in your machine:

```
git clone https://github.com/GabrielCmrg/coc-beyond-back
```

I do recommend configuring SSH and cloning with SSH, look at [this page](https://docs.github.com/pt/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account) to learn how to do so. After the clone, inside the folder, run this command to install the dependencies:

```
npm install
```

On this repo there is a `.env.example` file wich you can use to create your own `.env` file and fill it as you need. With the `.env` file created run:

```
npx prisma migrate dev
```

With all this ready, you can run the application on development mode with:

```
npm run dev
```

Or, if you wish, you can build and run the production version with:

```
npm run build && npm start
```

---

<!-- ## :test_tube: Running tests

For you to run the tests you will need to create a `.env.test` file with the same variables as your `.env` file, but with a `DATABASE_URL` pointing to your test database. Then, run the command:

```
npm run test
```

There is also a collection with the important requests, and you can run then all at once to see exactly what is needed on each route, and exactly what it responds. In order for them to work you will need to configure a environment on your thunder client. The variables needed are on `.env.example`, the `token` can be left blank.

:stop_sign: The tests that comes with the collection only works one. If you want to re-do the tests of the collection you will need to run:

```
npx prisma migrate reset
``` -->