# daily-pic

A demo nodejs project to demostraste how to setup a project with eslint & prettier(husky & lint-staged support).

## steps

1. init project

   ```bash
   npm init -y
   ```

2. add eslint support

   ```bash
   npx eslint --init
   ```

   options:

   - To check syntax, find problems, and enforce code style
   - CommonJS (require/exports)
   - None of these
   - No
   - Node
   - Use a popular style guide
   - Airbnb
   - JSON

3. add prettier support

   ```bash
   npm i -D eslint-config-prettier eslint-plugin-prettier prettier
   ```

4. update .eslintrc.json to support prettier

   ```
   "extends": ["prettier", "airbnb-base"],
   "plugins": ["prettier"],
   ```

5. add lint-staged & husky (before execute this, make sure git is initiated)

   ```bash
   npx mrm@2 lint-staged
   ```

6. update package.json to enable lint-staged

   ```javascript
   "lint-staged": {
       "*.js": [
            "eslint --cache --fix",
            "prettier --write"
       ]
   }
   ```
