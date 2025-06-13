# Deployment Guide

## 1. Overview

This document explains how to build and deploy the **Sephora Accelerate Questionnaire Project**, which consists of two separate Angular 20 applications: the **Admin Portal** and the **Applicant Portal**. It describes typical build commands, recommended deployment targets, example workflows, and post-deployment strategies.

### Deployment Goals

- Produce reliable, versioned builds for both portals.
- Deploy to a modern hosting provider such as Vercel, Netlify, Firebase Hosting, AWS S3 + CloudFront, or Azure Static Web Apps.
- Keep deployments repeatable through CI/CD pipelines.

## 2. Build Process

Both portals are independent Angular 20 projects located under the `apps/` folder. Each project can be built with the Angular CLI.

### Build Admin Portal

```bash
# inside project root
npm run ng -- build apps/admin-portal --configuration production
```

### Build Applicant Portal

```bash
# inside project root
npm run ng -- build apps/applicant-portal --configuration production
```

Add convenient npm scripts to `package.json`:

```json
"scripts": {
  "build:admin": "ng build apps/admin-portal --configuration production",
  "build:applicant": "ng build apps/applicant-portal --configuration production",
  "build:all": "npm run build:admin && npm run build:applicant"
}
```

Running `npm run build:all` generates production bundles under `dist/apps/`.

## 3. Deployment Targets

Recommended hosting platforms for static Angular applications include:

- **Firebase Hosting** – free tier, built-in CDN, good for small projects.
- **Netlify** – simplified configuration and preview deployments.
- **Vercel** – zero‑config static site hosting, integrates well with GitHub.
- **AWS S3 + CloudFront** – scalable and configurable; ideal if you already use AWS.
- **Azure Static Web Apps** – integrates nicely with Azure DevOps and GitHub.

Choose a platform based on project scale, required features, and existing cloud infrastructure. For quick setup and previews, Netlify or Vercel are sufficient. For enterprise-level requirements, AWS or Azure may be better.

## 4. Example Deployment Workflows

### Workflow 1: Deploy Admin Portal to Firebase Hosting

1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```
2. Authenticate and initialize hosting in the `apps/admin-portal` directory:
   ```bash
   firebase login
   firebase init hosting
   # Choose "dist/apps/admin-portal" as the public directory
   ```
3. Build and deploy:
   ```bash
   npm run build:admin
   firebase deploy --only hosting
   ```

### Workflow 2: Deploy Applicant Portal to Netlify

1. Create a new site on Netlify and connect your Git repository.
2. Set the build command to:
   ```bash
   npm run build:applicant
   ```
3. Set the publish directory to `dist/apps/applicant-portal`.
4. Netlify will automatically build and deploy on every push.

### Workflow 3: Deploy Both Portals to AWS S3 + CloudFront

1. Build both portals:
   ```bash
   npm run build:all
   ```
2. Create two S3 buckets (e.g., `sephora-admin-portal` and `sephora-applicant-portal`).
3. Upload the contents of each `dist` folder to its respective bucket:
   ```bash
   aws s3 sync dist/apps/admin-portal s3://sephora-admin-portal --delete
   aws s3 sync dist/apps/applicant-portal s3://sephora-applicant-portal --delete
   ```
4. Attach CloudFront distributions to each bucket for CDN caching and HTTPS.
5. Update DNS records to point to the CloudFront distributions.

This workflow allows you to host both portals under separate domains or subdomains.

## 5. Environment Configuration

Angular projects use environment files stored in `src/environments/` or `apps/*/src/environments/`.

- `environment.ts` – development settings
- `environment.staging.ts` – staging settings (optional)
- `environment.prod.ts` – production settings

Adjust the `fileReplacements` section in `angular.json` so the correct environment file is used for each build configuration. Example:

```json
"configurations": {
  "production": {
    "fileReplacements": [
      { "replace": "src/environments/environment.ts", "with": "src/environments/environment.prod.ts" }
    ]
  }
}
```

Store sensitive information in environment variables rather than source control. Most hosting providers (Netlify, Vercel, etc.) allow defining build-time environment variables in their dashboard.

## 6. CI/CD Integration

Below is a sample GitHub Actions workflow that builds and deploys the Admin Portal to Firebase Hosting whenever the `main` branch is updated.

```yaml
name: Deploy Admin Portal
on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build:admin
      - run: npx firebase-tools deploy --only hosting --token ${{ secrets.FIREBASE_TOKEN }}
```

To deploy both portals, add separate jobs or steps in the workflow file. Each hosting provider typically offers a GitHub Action or CLI that can be invoked in a similar manner.

## 7. Versioning & Releases

- Increment the `version` field in `package.json` whenever you create a new release.
- Tag releases in Git with `git tag vX.Y.Z && git push --tags`.
- Optionally use a tool like [standard-version](https://github.com/conventional-changelog/standard-version) to update `CHANGELOG.md` automatically.

## 8. Post-Deployment Verification

1. Open the deployed URL and confirm that the portal loads without console errors.
2. Create a test questionnaire in the Admin Portal and publish it.
3. In the Applicant Portal, ensure the questionnaire renders and dynamic dependencies (show/hide logic) work correctly.
4. Submit a test response and verify it is recorded or sent to the correct endpoint.

## 9. Rollback Strategy

In the event that a deployment introduces issues, revert to a previous build.

- **Firebase Hosting** – use `firebase hosting:rollback` to restore the prior release.
- **Netlify** – visit the Deploys page and click **Rollback** on a previous deploy.
- **AWS S3** – re-upload the contents of a known-good `dist` folder version, or restore from a versioned S3 object if enabled.

Maintain backups of build artifacts or use the hosting provider's built-in release history for quick recovery.

## 10. Future Improvements

- **Visual Diff Testing** – integrate tools like Percy or Chromatic to detect visual regressions before deployment.
- **E2E Smoke Tests** – run Cypress or Playwright tests as part of the CI pipeline to verify critical user flows.
- **Deployment Notifications** – send Slack or email notifications on successful or failed deployments using your CI provider's notification features.

This guide should provide a starting point for building and deploying the Sephora Accelerate Questionnaire Project. Adapt the steps to your chosen hosting provider and incorporate additional security or performance enhancements as needed.

