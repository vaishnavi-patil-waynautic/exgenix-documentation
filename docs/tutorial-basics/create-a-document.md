---
sidebar_position: 2
---

# Create Your First API Test

API tests in Exgenix are **structured test cases** that validate your exchange API endpoints through:

- **Functional validation** of request/response handling
- **Performance measurement** of response times and throughput
- **Automated execution** and result tracking
- **Integration** with your development workflow

## Create your first API Test

1. **Log into Exgenix** and navigate to the Test Suite dashboard
2. **Click "Create New Test"** and select "API Endpoint Test"
3. **Configure your test parameters**:

```json title="Sample API Test Configuration"
{
  "name": "BTC-USD Ticker Test",
  "endpoint": "https://api.exchange.com/v1/ticker/BTC-USD",
  "method": "GET",
  "headers": {
    "Authorization": "Bearer your-api-key",
    "Content-Type": "application/json"
  },
  "expectedStatusCode": 200,
  "responseValidation": {
    "symbol": "BTC-USD",
    "price": "> 0",
    "volume": ">= 0"
  }
}
```

Your new API test is now available in your test suite and can be executed immediately.

## Configure Test Settings

Customize your API tests with advanced settings:

- **Authentication**: API keys, OAuth, JWT tokens
- **Request Parameters**: Query strings, request bodies, headers
- **Response Validation**: JSON schema validation, custom assertions
- **Performance Thresholds**: Response time limits, throughput requirements
- **Test Scheduling**: One-time execution or recurring schedules

```json title="Advanced Test Configuration"
{
  "performanceThresholds": {
    "responseTimeMs": 500,
    "throughputPerSecond": 100
  },
  "schedule": {
    "frequency": "hourly",
    "timezone": "UTC"
  },
  "notifications": {
    "onFailure": true,
    "emailRecipients": ["team@company.com"]
  }
}
```
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
};
```
