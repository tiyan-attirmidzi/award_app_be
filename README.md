# AWARD APP (BACKEND)

This is a Rest API with [Node.js](https://nodejs.org/en/) using [Express](https://expressjs.com/) framework, database using `MySQL` and ORM with [Objection.js](https://vincit.github.io/objection.js/).

## Getting Started

Get All Dependency

```bash
npm install
# or
yarn install
```

Create `.env` based on `.env-sample` then complete the variables

```bash
cp .env.example .env
```

Run Migration and Seeder (make sure knex is installed globally)

```bash
# Migration
npm run migration

# Seeder
npm run seeder
```

Run the development server

```bash
npm run dev
# or
yarn dev
```

By default the server will run on `http://localhost:4000`.

## ENDPOINT

#### [POST] `/v1/auths/signin`
#### [GET] `/v1/awards`
