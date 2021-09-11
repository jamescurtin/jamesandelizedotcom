<p align="center">
    <img alt="Gatsby" src=".github/assets/rings.png" width="60" />
</p>
<h1 align="center">
  James & Elize's Wedding Website
</h1>

[![Node.js CI](https://github.com/jamescurtin/jamesandelizedotcom/actions/workflows/workflow.yml/badge.svg)](https://github.com/jamescurtin/jamesandelizedotcom/actions/workflows/workflow.yml)

Site Link: jamesandelize.com

## Developing

### Configuration

Docker can be used for all development, except Cypress tests.

To configure docker:

```bash
docker-compose build
```

To configure local development (for running cypress tests):

```bash
yarn install
```

### Local dev, linting, and testing

-   To start up app:

    ```bash
    docker-compose up app
    ```

    then navigate to `localhost:8000`.

-   To run all lints:

    ```bash
    docker-compose run --rm lint
    ```

-   To run `yarn` commands:

    ```bash
    docker-compose run --rm yarn <COMMAND>
    ```

-   To drop into a shell:

    ```bash
    docker-compose run --rm shell
    ```

-   To run Cypress end-to-end tests (not run in Docker):

    ```bash
    yarn test:e2e
    ```
