# DevOps Tasks

| Title | Description | Priority | Type | Acceptance Criteria |
|-------|-------------|----------|------|---------------------|
|Project Setup|Configure Node.js and Angular CLI versions in `.nvmrc` or similar.|High|Chore|Developers can run `npm install` and `ng build` without errors.|
|Linting & Formatting|Set up ESLint and Prettier rules.|Medium|Chore|Running `npm run lint` reports no violations.|
|CI Pipeline|Add GitHub Actions workflow to install dependencies, run lint, build, and test.|High|Chore|Workflow passes on new pull requests.|
|Docker Container|Create Dockerfile to build and serve both portals and API.|Medium|Feature|`docker compose up` starts frontend and backend containers.|
|Deployment Config|Prepare basic deployment scripts for a cloud environment.|Low|Chore|Applications can be deployed to staging with single command.|
