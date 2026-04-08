# Cypress MCP Project

This repository is an end-to-end test automation project built with Cypress for the OrangeHRM demo application. It uses the Page Object Model pattern so tests stay readable, maintainable, and easy to extend.

## Project Overview

The repository currently covers these core application areas:

- Login
- Admin
- My Info
- PIM

Test cases live in `cypress/e2e`, while UI selectors and user flows are organized in page objects under `cypress/pages`.

## Folder Structure

- `cypress/e2e/` contains Cypress spec files.
- `cypress/pages/` contains page objects for selectors and UI actions.
- `cypress/support/` contains custom commands and shared support setup.
- `cypress/fixtures/` contains test data.
- `cypress/screenshots/` stores screenshots created during test runs.

## Key Features

- Successful and failed login scenarios.
- Logout after authentication.
- Admin menu access and user search.
- My Info access and personal details updates.
- PIM menu access and employee search.
- A custom `assertSuccessToast` command for success notification validation.

## Tech Stack

- Cypress
- TypeScript
- Node.js

## Requirements

Before running the project, make sure you have:

- Node.js 24 or later
- npm
- Git
- A GitHub account if you want to push changes or run the GitHub Actions pipeline
- GitHub Pages enabled for the repository if you want to publish the deployment output

## Installation

Install dependencies with:

```bash
npm install
```

## Running Tests Locally

Run the full test suite:

```bash
npm test
```

Run tests in Chrome:

```bash
npm run cy:run:chrome
```

Run only the login spec:

```bash
npm run cy:run:spec
```

## CI/CD Pipeline

This repository includes a GitHub Actions workflow in `.github/workflows/ci-cd.yml`.

The pipeline runs on:

- `push` to `main`
- `pull_request` to `main`
- manual trigger through `workflow_dispatch`

The workflow performs the continuous integration stage: installs dependencies with `npm ci` and runs Cypress headless.

The CI job also uploads screenshots as artifacts for debugging failed tests when needed.

## Cypress Configuration

The main Cypress configuration lives in `cypress.config.ts`.

Current settings include:

- `baseUrl` pointing to the OrangeHRM demo site.
- `specPattern` targeting all specs in `cypress/e2e/**/*.cy.ts`.
- Fixed viewport dimensions for consistent runs.

## About MCP

MCP, or Model Context Protocol, is a standard way to provide project context, tools, and data to an AI assistant or coding agent. In this workflow, MCP helps the assistant understand the repository, inspect the right files, and act with much better context instead of guessing the project structure.

### Benefits of Using MCP

- The assistant reads project context faster and more accurately.
- File navigation, symbol search, and repo structure understanding become more efficient.
- Debugging guidance is more precise because the assistant sees the actual files instead of relying only on a prompt.
- Documentation updates, code changes, and review support are more aligned with the repository's real patterns.
- It is especially useful for test automation projects that have many page objects and spec files.

### Using MCP vs Not Using MCP

#### With MCP

- The assistant gets structured access to repository context.
- File discovery, component lookup, and cross-file reasoning are faster.
- Suggestions are more relevant to the codebase.
- Documentation and code changes can follow the project's existing style more closely.

#### Without MCP

- The assistant depends mostly on the prompt and manually shared snippets.
- The risk of misunderstanding the repository structure is higher.
- Searching for files, selectors, and test flows is slower.
- Documentation and code changes tend to be more generic and less specific to the repository.

### In Short

- Cypress runs the automated tests.
- MCP helps the AI work with the correct project context.
- If Cypress is the execution layer, MCP is the context layer that makes AI assistance much more effective.

## Integrating MCP with VS Code

To use MCP with this repository in VS Code, you need to configure VS Code's AI assistant (such as GitHub Copilot) to access your project context. Here's how:

### Setup Steps

1. **Ensure GitHub Copilot is installed**: Install the `GitHub Copilot Chat` extension from the VS Code marketplace.
2. **Open this project folder** in VS Code.
3. **Activate Copilot Chat**: Press `Ctrl+Shift+I` (or `Cmd+Shift+I` on Mac) to open Copilot Chat.
4. **MCP context is automatic**: VS Code's MCP support will automatically provide Copilot with access to your project files, folder structure, and test files.

### What MCP Enables

Once MCP is active, Copilot can:

- Understand your test structure and page objects automatically.
- Suggest fixes based on actual test failures and selectors.
- Provide context-aware code completion for Cypress commands.
- Recommend test improvements aligned with your project's patterns.

## Prompting Without MCP vs With MCP

### Example 1: Adding a New Test

**Without MCP** (you must manually provide context):

```
User: "I want to add a test for Admin menu. What selector should I use?"
```

AI responds generically without knowing your actual selectors or patterns, might suggest incorrect XPath or class names.

---

**With MCP** (AI sees your files):

```
User: "Add a test for checking if the Admin menu search works with multiple users"
```

AI can:

- Read `cypress/pages/AdminPage.ts` and see the exact `.oxd-form .oxd-input` selector.
- Understand the `searchByUsername()` pattern already exists.
- Suggest test code that follows your existing pattern and reuses your custom methods.
- Return accurate suggestions immediately.

### Example 2: Debugging a Test Failure

**Without MCP** (guessing based on error message):

```
User: "My test fails with 'element not found'. How do I fix it?"
```

AI guesses generic solutions like "use cy.wait()" or change selectors blindly without seeing your actual code.

---

**With MCP** (AI inspects actual code):

```
User: "My 'Should edit personal details successfully' test is failing"
```

AI can:

- Open `cypress/e2e/myinfo.cy.ts` and see the exact assertion.
- Check `cypress/pages/MyInfoPage.ts` for the `updatePersonalDetails()` method.
- Identify if the selector changed, the timing is wrong, or the data validation is off.
- Suggest the precise fix with line numbers and actual code context.

### Example 3: Best Practices

**Without MCP**:

```
User: "How should I structure my Cypress tests?"
```

AI provides generic advice (use Page Object Model, separate concerns, etc.) but cannot tailor it to your project.

---

**With MCP**:

```
User: "Should I add a new custom command or a method in MyInfoPage?"
```

AI can:

- See that `assertSuccessToast()` is already a custom command in `cypress/support/commands.ts`.
- Understand your pattern: Custom commands for reusable UI actions, Page Object methods for page-specific flows.
- Recommend the right approach for the specific usecase.

## Why MCP Matters for This Project

This Cypress project has:

- **Multiple page objects** (`AdminPage`, `LoginPage`, `MyInfoPage`, `PimPage`) — MCP helps track which selectors belong where.
- **Custom commands** (`assertSuccessToast`) — MCP knows about them and suggests using them.
- **Repeating patterns** in test structure — MCP can detect and suggest consistent improvements.
- **Specific selectors** (`.oxd-form`, `.oxd-toast-content--success`) — MCP sees the real selectors, not generic guesses.

Without MCP, AI suggestions are generic and often miss your project's nuances. **With MCP, AI becomes a true project-aware assistant**.

## Typical Workflow

1. Read the relevant spec file in `cypress/e2e`.
2. Inspect selectors and actions in `cypress/pages`.
3. Add a custom command in `cypress/support/commands.ts` when a pattern repeats.
4. Run the tests to validate the change.
5. Use MCP to help the AI understand the change and provide more accurate guidance.

## Notes

This repository is intentionally simple and can be expanded later with:

- more flexible fixture data,
- deeper assertions,
- test reporting,
- a richer CI/CD pipeline.
