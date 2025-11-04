---
sidebar_position: 2
---

# Performance Testing with Exgenix

Exgenix provides comprehensive performance testing capabilities to ensure your exchange APIs can handle real-world loads and maintain optimal response times.

## Types of Performance Tests

### Load Testing
Test your API under normal and peak load conditions:

```json title="Load Test Configuration"
{
  "testType": "load",
  "duration": "30m",
  "virtualUsers": 100,
  "rampUp": "5m",
  "endpoints": [
    {
      "url": "/api/v1/ticker",
      "method": "GET",
      "targetRPS": 50
    }
  ]
}
```

### Stress Testing
Push your API beyond normal limits to find breaking points:

```json title="Stress Test Configuration"
{
  "testType": "stress",
  "duration": "15m",
  "startUsers": 10,
  "maxUsers": 1000,
  "incrementStep": 50,
  "incrementInterval": "2m"
}
```

### Spike Testing
Simulate sudden traffic spikes:

```json title="Spike Test Configuration"
{
  "testType": "spike",
  "baselineUsers": 50,
  "spikeUsers": 500,
  "spikeDuration": "2m",
  "recoveryTime": "5m"
}
```

## Performance Metrics

Exgenix tracks key performance indicators:

- **Response Time**: Average, median, 95th percentile
- **Throughput**: Requests per second (RPS)
- **Error Rate**: Percentage of failed requests
- **Resource Usage**: CPU, memory, network utilization
- **Concurrent Users**: Number of simultaneous connections

## Setting Performance Thresholds

Define acceptable performance boundaries:

```json title="Performance Thresholds"
{
  "responseTime": {
    "average": "< 200ms",
    "p95": "< 500ms"
  },
  "throughput": {
    "minimum": "100 RPS"
  },
  "errorRate": {
    "maximum": "0.1%"
  }
}
```

