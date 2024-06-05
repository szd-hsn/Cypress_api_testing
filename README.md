# Cypress API Tests using Cucumber
## Set Up/Install

1. Clone the Repo

```
git clone
```

2. Install the dependencies on your CI server or local

```
npm install
```

## To run the tests

### To run all the tests in the e2e and default folders

```
npx cypress run
```

### Specific Cucumber Tests

```
npm run cucumberTest
```

### The normal API Tests (not using Cucumber)

```
npm run defaultTest
```

## Test Reports

When the test run completes, the reports are saved in html format at the lcoation `cypress/reports/index.html`
