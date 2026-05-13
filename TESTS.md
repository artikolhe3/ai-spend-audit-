# TESTS.md

# Automated Tests

The project includes automated tests focused primarily on the audit engine and savings calculation logic.

The tests validate:
- pricing optimization recommendations
- annual savings calculations
- downgrade logic
- already-optimized scenarios
- multi-tool aggregation behavior

---

# Test Files

## __tests__/audit-engine.test.ts

### Covered Cases

### 1. Cursor Business downgrade recommendation

Validates that small teams using Cursor Business receive a recommendation to downgrade to Cursor Pro when enterprise admin functionality is unnecessary.

---

### 2. Annual savings calculation

Ensures annual savings are calculated correctly using:

```txt
monthlySavings * 12
```

---

### 3. No-savings scenario

Validates that users already on optimal plans receive honest recommendations rather than artificial savings suggestions.

---

### 4. Enterprise recommendation handling

Ensures enterprise-scale teams are not incorrectly downgraded to lower-tier plans.

---

### 5. Multi-tool stack aggregation

Validates that savings across multiple AI tools are combined correctly into total monthly and annual savings.

---

# Running Tests

## Run all tests

```bash
npm run test
```

---

# Linting

## Run lint checks

```bash
npm run lint
```

---

# CI Workflow

GitHub Actions automatically runs:
- linting
- automated tests

on every push to the main branch.

---

# Future Testing Improvements

Potential future additions:
- integration testing
- E2E browser tests
- API failure simulation
- load testing for high audit volume
- accessibility testing automation