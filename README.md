# WebAppTemplate

This is a template for common Web Application.

|              |                                   |
| ------------ | ----------------------------------|
| Framework    | React, Next                       |
| Language     | Typescript, Sass                  |
| Store        | Redux                             |
| Style        | styled-components, Tailwind CSS   |
| Format       | ESLint, Prettier                  |
| CI/CD        | GitHub Actions                    |
| Architecture | Atomic Design, re-ducks, REST API |

## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Environment Variables

### Role of env files

| Filename               | What to define                             | When to load               | Priority |
| ---------------------- | ------------------------------------------ | -------------------------- | -------- |
| .env                   | Environment-independent default values     | always                     | 4        |
| .env.local             | Environment-independent secret values      | always                     | 2        |
| .env.development       | Default values ​​used in the development env | `yarn dev`                 | 3        |
| .env.development.local | Secret values ​​used in the development env  | `yarn dev`                 | 1        |
| .env.production        | Default values ​​used in the production env  | `yarn start`, `yarn build` | 3        |
| .env.production.local  | Secret values ​​used in the production env   | `yarn start`, `yarn build` | 1        |

### Pass environment variables to the client

To pass environment variables, open `.env` and add the variables:

``` dotenv:.env.development
APP_BASE_URL=https://localhost:3000
```

To add environment variables to the JavaScript bundle, open `next.config.js` and add the `env` config:

``` javascript:next.config.js
module.exports = {
  env: {
    appUrl: process.env.APP_BASE_URL,
  },
}
```

Now you can access `process.env.appUrl` in your code. For example:

``` typescript
function Page() {
  return <h1>The value of appUrl is: {process.env.appUrl}</h1>
}
export default Page
```
