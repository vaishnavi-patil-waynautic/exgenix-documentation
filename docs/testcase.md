---
title: Test Case & Configuration
sidebar_position: 6
hide_table_of_contents: true
---

# Test Case & Configuration Module – User Guide

---

- 🎥 **Test Case Configuration** — See: [Test Case Configuration](/videos#testcase)

---

## Table of Contents
- [Overview](#overview)
- [Module Structure](#module-structure)
- [Test Cases](#test-cases)
- [Creating a Test Case](#creating-a-test-case)
- [Step Settings](#step-settings)
- [Advanced Features](#advanced-features)
- [Best Practices](#best-practices)
- [Managing Test Cases](#managing-test-cases)
- [Common Scenarios](#common-scenarios)
- [Troubleshooting](#troubleshooting)
- [Summary](#summary)

---

## Overview

The **Test Case & Configuration** module is where you design and orchestrate complete test execution flows in Exgenix. It enables you to sequence API calls, incorporate Test Action Units, manage test data, configure session behavior, and define execution patterns to create comprehensive test scenarios.

### Key Capabilities

- **Flow Design** – Create sequential or iterative test workflows
- **Session Management** – Configure single or multiple session executions
- **Data Handling** – Control how test data is consumed from datasheets
- **Timing Control** – Add wait times between steps
- **Error Handling** – Define behavior on step failures
- **Reusability** – Leverage Test Action Units and API configurations
- **Flexibility** – Mix and match components to create any test scenario

---

## Module Structure

<div class="step-block">
  <div class="step-text">

The Test Case & Configuration module follows a clear hierarchy:

| Component | Purpose |
|-----------|---------|
| **Collections** | Group related test cases for organization and collaboration |
| **Test Cases** | Define end-to-end, executable test flows |
| **Steps** | Ordered actions within a test case (TAUs or individual APIs) |

  </div>
</div>

---

## Test Cases

A **Test Case** represents a complete, executable test scenario that validates specific functionality. Each test case consists of:

1. **Identification** – Name and description
2. **Test Steps** – Ordered sequence of actions
3. **Data Configuration** – Datasheets for each step
4. **Execution Settings** – Session type, patterns, timing
5. **Error Handling** – Response to failures

### Test Case Structure (Example)

<div class="step-block">
  <div class="step-text">

A typical test case includes:
- Login/Authentication steps
- Business logic operations (Orders, Modifications, Cancellations)
- Response validations
- Cleanup/Logout steps

Each step can be either:

<ul>
  <li>**Test Action Unit** (pre-configured group of APIs)</li>
  <li>**Individual API** (single request or response)</li>
</ul>


  </div>

  <div class="step-image">
    <h4 class="image-title">Test Case Structure Example</h4>
    <img src="/exgenix-documentation/img/testcase/testcase.png" alt="Example Test Case Structure" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

<div class="step-block">
  <div class="step-text">

The test case view provides a comprehensive overview of all configured steps, including:

<ul>
      <li>Step sequence and numbering</li>
      <li>Step type (TAU or individual API)</li>
      <li>Associated datasheets</li>
      <li>Execution patterns</li>
      <li>Error handling configuration</li>
    </ul>

  </div>
</div>

---

## Creating a Test Case

### Step 1: Navigate to Test Cases

<div class="step-block">
  <div class="step-text">

  <ol>
    <li>Go to <strong>Test Configuration</strong> in the left navigation menu</li>
    <li>Expand and select <strong>Test Case</strong></li>
    <li>Choose a collection or create a new one</li>
    <li>Click <strong>+ Create Test Case</strong></li>
  </ol>

  </div>
</div>

### Step 2: Define Basic Information

<div class="step-block">
  <div class="step-text">
  <p><strong>Name (Required)</strong></p>
  <ul>
    <li>Descriptive identifier for the test case</li>
    <li>Examples: <code>Trade_Flow_Order_Placement</code>, <code>User_Authentication_Success</code></li>
  </ul>

  <p><strong>Description (Optional but Recommended)</strong></p>
  <ul>
    <li>Document the test objective</li>
    <li>List expected outcomes</li>
    <li>Note any prerequisites or dependencies</li>
  </ul>
</div>


  <div class="step-image">
    <h4 class="image-title">Test Case Basic Information</h4>
    <img src="/exgenix-documentation/img/testcase/main_tab.png" alt="Test Case Name and Description" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

### Step 3: Add Test Steps

You can add two step types:

#### Type 1: Test Action Unit

Reusable component containing multiple APIs configured together.


<div class="step-block">
  <div class="step-text">
  **Configuration:**
1. Click **+ Add Step**
2. Select **Type**: TEST ACTION UNIT
3. Choose the Test Action Unit from dropdown
4. Configure settings (see Step Settings)
5. Click **Configure** to set datasheets for each API within the unit
</div>


  <div class="step-image">
    <h4 class="image-title">Action Type Configuration</h4>
    <img src="/exgenix-documentation/img/testcase/type.png" alt="Action Type Configuration" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>



#### Type 2: Individual API Configuration

Single API call as a test step.

**Configuration:**
1. Click **+ Add Step**
2. Select **Type**: TCP_IP_REQUEST or TCP_IP_RESPONSE
3. Choose the API configuration from dropdown
4. Configure settings (see Step Settings)

### Step 4: Configure Step Settings

(See full details in **Step Settings** section below.)

---

## Step Settings

For each step, configure the following:

### Description

- Brief explanation of what this step does
- Example: "Submit new order with limit price"

### Session

<div class="step-block">
  <div class="step-text">
  <p>Specify the session identifier for this step.</p>

  <p><strong>Session Types:</strong></p>

  <table>
    <thead>
      <tr>
        <th>Session Type</th>
        <th>Description</th>
        <th>Use Case</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Continuous (Same Session)</strong></td>
        <td>All steps use the same session</td>
        <td>Standard workflow where all operations belong to one session</td>
      </tr>
      <tr>
        <td><strong>Different Sessions</strong></td>
        <td>Each iteration uses a new session</td>
        <td>Session isolation or multi-user scenarios</td>
      </tr>
    </tbody>
  </table>

  <p><strong>Configuration Notes:</strong></p>
  <ul>
    <li>Enter a session identifier (e.g., <code>session1</code>, <code>session2</code>)</li>
    <li>Steps with the same identifier share session context</li>
    <li>Captured variables (session IDs, tokens) are shared within a session</li>
  </ul>
</div>


  <div class="step-image">
    <h4 class="image-title">Session Configuration</h4>
    <img src="/exgenix-documentation/img/testcase/session.png" alt="Configure Session Identifier" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

### Wait Time (seconds)

<div class="step-block">
  <div class="step-text">
  <p>Delay before executing this step.</p>

  <p><strong>Use Cases:</strong></p>
  <ul>
    <li><strong>0 seconds</strong> – Immediate execution</li>
    <li><strong>1–5 seconds</strong> – Short processing delays</li>
    <li><strong>5+ seconds</strong> – Asynchronous operations / market data updates</li>
  </ul>

  <p><strong>Examples:</strong></p>
  <ul>
    <li>Login: 0 seconds (immediate)</li>
    <li>After order placement: 2 seconds (processing time)</li>
    <li>Market data subscription: 5 seconds (data propagation)</li>
  </ul>
</div>

</div>

### Datasheet Selection

<div class="step-block">
  <div class="step-text">

Associate a datasheet with the step.

**For Individual API Steps:**
1. Open the datasheet dropdown
2. Select an available datasheet for that API
3. Datasheet values populate fields at runtime

**For Test Action Unit Steps:**
1. Click **Configure**
2. A modal lists all APIs within the unit
3. Select a datasheet and row number for each API
4. Save configuration

  </div>

  <div class="step-image">
    <h4 class="image-title">Datasheet Configuration Modal</h4>
    <img src="/exgenix-documentation/img/testcase/datasheet_selection.png" alt="Configure Datasheets for Test Action Unit" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

### Pattern (Datasheet Row Usage)

<div class="step-block">

<div class="step-text">
  <p>Controls how datasheet rows are consumed during execution.</p>

  <table>
    <thead>
      <tr>
        <th>Pattern</th>
        <th>Behavior</th>
        <th>Use Case</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>SAME_ROW</strong></td>
        <td>Uses the same row for all iterations</td>
        <td>Retry logic, idempotency testing, consistent data</td>
      </tr>
      <tr>
        <td><strong>NEXT_ROW</strong></td>
        <td>Advances to next row per iteration</td>
        <td>Varied data, multi-scenario, load testing</td>
      </tr>
    </tbody>
  </table>

  <p><strong>Iteration Examples:</strong></p>

  <p><strong>NEXT_ROW (3 iterations):</strong></p>
  <ul>
    <li>Iteration 1 → Row 1</li>
    <li>Iteration 2 → Row 2</li>
    <li>Iteration 3 → Row 3</li>
  </ul>

  <p><strong>SAME_ROW (3 iterations):</strong></p>
  <ul>
    <li>Iterations 1–3 → Row 1</li>
  </ul>
</div>


  <div class="step-image">
    <h4 class="image-title">Pattern Configuration</h4>
    <img src="/exgenix-documentation/img/testcase/pattern.png" alt="NEXT_ROW Pattern Example" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

### Row No. (Starting Row)

<div class="step-block">
  <div class="step-text">
  <p>Specifies which row from the datasheet to start with.</p>

  <p><strong>Usage:</strong></p>
  <ul>
    <li><strong>Row 1</strong> – Start at base row</li>
    <li><strong>Row 2+</strong> – Skip to a specific row</li>
  </ul>

  <p><strong>Examples:</strong></p>
  <ul>
    <li>Start at Row 1: Uses base configuration</li>
    <li>Start at Row 3: Skips first two rows, useful for specific test scenarios</li>
  </ul>
</div>
</div>

### On Error (Error Handling)

<div class="step-block">
  <div class="step-text">
  <strong>On Error Behavior</strong>
  <p>Defines what happens when a step fails.</p>
  <table>
    <thead>
      <tr>
        <th>Option</th>
        <th>Behavior</th>
        <th>Use Case</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Continue</strong></td>
        <td>Log error; proceed to next step</td>
        <td>Non-critical steps</td>
      </tr>
      <tr>
        <td><strong>Abort</strong></td>
        <td>Stop execution immediately</td>
        <td>Critical failures</td>
      </tr>
      <tr>
        <td><strong>Retry</strong></td>
        <td>Retry failed step (configurable)</td>
        <td>Transient/network issues</td>
      </tr>
    </tbody>
  </table>

  <strong>Best Practices:</strong>
  <ul>
    <li>Use <strong>Abort</strong> for critical steps: Login, Authentication, Order Acceptance</li>
    <li>Use <strong>Continue</strong> for optional operations: Notifications, Non-critical subscriptions</li>
    <li>Use <strong>Retry</strong> for network-dependent operations: Connection establishment, External API calls</li>
  </ul>
</div>


  <div class="step-image">
    <h4 class="image-title">Error Handling Configuration</h4>
    <img src="/exgenix-documentation/img/testcase/on_error.png" alt="Configure On Error Behavior" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

---

## Advanced Features

### Adding Loops

<div class="step-block">
  <div class="step-text">
  <strong>Loop Steps</strong>
  <p>Loops let you repeat a section of your test case multiple times.</p>

  <strong>Configuration:</strong>
  <ol>
    <li>Click <strong>+ Add Loop</strong></li>
    <li>A loop container is added with <strong>Loop Start</strong> and <strong>Loop End</strong></li>
    <li>Add steps within the loop and configure properties</li>
  </ol>

  <strong>Loop Properties:</strong>
  <ul>
    <li><strong>Loop Pattern</strong> – NEXT_ROW / SAME_ROW</li>
    <li><strong>Iterations</strong> – Fixed count or dynamic (e.g., datasheet size)</li>
  </ul>

  <strong>Example: Multiple Order Placement</strong>
  <p><em>Loop Configuration:</em></p>
  <ul>
    <li>Pattern: NEXT_ROW</li>
    <li>Iterations: 10</li>
  </ul>

  <p><em>Steps inside loop:</em></p>
  <ol>
    <li>New Order Request (Step 2)</li>
    <li>New Order Response (Step 3)</li>
  </ol>

  <p><em>Result:</em> Places 10 different orders using rows 1-10 from the datasheet.</p>
</div>


  <div class="step-image">
    <h4 class="image-title">Loop Configuration</h4>
    <img src="/exgenix-documentation/img/testcase/add_loop.png" alt="Configure Loop for Repeated Execution" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

### Session Management Patterns

**Pattern 1: Single Session for Entire Test**

<div class="step-block">
  <div class="step-text">

All steps use the same session identifier:
```
Step 1 (Login): session1
Step 2 (Order Request): session1
Step 3 (Order Response): session1
Step 4 (Logout): session1
```

**Use Case:** Standard workflow where all operations belong to one user session

  </div>

  <!-- <div class="step-image">
    <h4 class="image-title">Single Session Pattern</h4>
    <img src="/exgenix-documentation/img/testcase/single-session.png" alt="Single Session Configuration" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div> -->
</div>

**Pattern 2: Multiple Sessions**

<div class="step-block">
  <div class="step-text">

Different steps use different sessions:
```
Step 1 (User A Login): session1
Step 2 (User B Login): session2
Step 3 (User A Order): session1
Step 4 (User B Order): session2
```

**Use Case:** Multi-user scenarios, parallel user testing

  </div>

  <!-- <div class="step-image">
    <h4 class="image-title">Multiple Sessions Pattern</h4>
    <img src="/exgenix-documentation/img/testcase/multiple-sessions.png" alt="Multiple Session Configuration" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div> -->
</div>

**Pattern 3: Session Per Iteration**

<div class="step-block">
  <div class="step-text">

Each iteration creates a new session:
```
Iteration 1: session_${iteration_1}
Iteration 2: session_${iteration_2}
Iteration 3: session_${iteration_3}
```

**Use Case:** Session lifecycle testing, load testing with isolated sessions

  </div>

  <!-- <div class="step-image">
    <h4 class="image-title">Session Per Iteration Pattern</h4>
    <img src="/exgenix-documentation/img/testcase/session-per-iteration.png" alt="Session Per Iteration Configuration" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div> -->
</div>

### Datasheet Row Configuration Strategies

**Strategy 1: Incremental Row Usage**

<div class="step-block">
  <div class="step-text">

```
Step 1: Row 1, Pattern: NEXT_ROW
Step 2: Row 1, Pattern: NEXT_ROW
Step 3: Row 1, Pattern: NEXT_ROW
```

Each step advances to the next row in its datasheet.

**Use Case:** Testing with varied data across steps

  </div>

  <!-- <div class="step-image">
    <h4 class="image-title">Incremental Row Strategy</h4>
    <img src="/exgenix-documentation/img/testcase/incremental-rows.png" alt="Incremental Row Usage Strategy" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div> -->
</div>

**Strategy 2: Consistent Row Usage**

<div class="step-block">
  <div class="step-text">

```
Step 1: Row 1, Pattern: SAME_ROW
Step 2: Row 1, Pattern: SAME_ROW
Step 3: Row 1, Pattern: SAME_ROW
```

All steps use the same row throughout execution.

**Use Case:** Idempotency testing, retry scenarios

  </div>

  <!-- <div class="step-image">
    <h4 class="image-title">Consistent Row Strategy</h4>
    <img src="/exgenix-documentation/img/testcase/consistent-rows.png" alt="Consistent Row Usage Strategy" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div> -->
</div>

**Strategy 3: Datasheet Synchronization**

<div class="step-block">
  <div class="step-text">

```
Step 1: Row 1, Pattern: NEXT_ROW (Request)
Step 2: Row 1, Pattern: SAME_ROW (Response - validates request)
Step 3: Row 1, Pattern: NEXT_ROW (Next Request)
```

Synchronize request-response pairs while advancing requests.

**Use Case:** Request-response validation, maintaining data correlation

  </div>

  <!-- <div class="step-image">
    <h4 class="image-title">Datasheet Synchronization Strategy</h4>
    <img src="/exgenix-documentation/img/testcase/datasheet-sync.png" alt="Synchronized Datasheet Strategy" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div> -->
</div>

---

## Example Test Case: Complete Trade Flow

### Scenario Description

Validates the complete order lifecycle:
1. Authentication
2. New order placement
3. Order confirmation
4. Cancellation request
5. Cancellation confirmation
6. Logout

<div class="step-block">
  <div class="step-text">

<strong>Step 1: Login Test Action Unit</strong>
<ul>
  <li><strong>Type:</strong> TEST ACTION UNIT</li>
  <li><strong>Session:</strong> session1</li>
  <li><strong>Pattern:</strong> SAME_ROW</li>
  <li><strong>On Error:</strong> Abort</li>
</ul>

<p><strong>Contains:</strong></p>
<ul>
  <li>Socket Connection</li>
  <li>Session Logon</li>
  <li>User Logon</li>
</ul>

</div>


  <!-- <div class="step-image">
    <h4 class="image-title">Trade Flow - Step 1 (Login)</h4>
    <img src="/exgenix-documentation/img/testcase/trade-flow-step1.png" alt="Login TAU Configuration" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div> -->
</div>

<div class="step-block">
  <div class="step-text">
  <strong>Step 2: New Order Request</strong>
  <ul>
    <li><strong>Type:</strong> TCP_IP_REQUEST</li>
    <li><strong>API:</strong> New Order Single (short layout)</li>
    <li><strong>Session:</strong> session1</li>
    <li><strong>Datasheet:</strong> DS_NOS_01</li>
    <li><strong>Pattern:</strong> NEXT_ROW</li>
    <li><strong>Row:</strong> 1</li>
    <li><strong>On Error:</strong> Abort</li>
  </ul>
  <p>Submits a new order with parameters from datasheet.</p>
</div>


  <!-- <div class="step-image">
    <h4 class="image-title">Trade Flow - Step 2 (New Order Request)</h4>
    <img src="/exgenix-documentation/img/testcase/trade-flow-step2.png" alt="New Order Request Configuration" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div> -->
</div>

<div class="step-block">
  <div class="step-text">
  <strong>Step 3: New Order Response</strong>
  <ul>
    <li><strong>Type:</strong> TCP_IP_RESPONSE</li>
    <li><strong>API:</strong> New Order Response (Lean Order)</li>
    <li><strong>Session:</strong> session1</li>
    <li><strong>Datasheet:</strong> DS_NOR_01</li>
    <li><strong>Pattern:</strong> NEXT_ROW</li>
    <li><strong>Row:</strong> 1</li>
    <li><strong>On Error:</strong> Abort</li>
  </ul>
  <p>Validates order acceptance and captures order_id for use in cancellation.</p>
</div>


  <!-- <div class="step-image">
    <h4 class="image-title">Trade Flow - Step 3 (New Order Response)</h4>
    <img src="/exgenix-documentation/img/testcase/trade-flow-step3.png" alt="New Order Response Configuration" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div> -->
</div>

<div class="step-block">
  <div class="step-text">
  <strong>Step 4: Cancel Order Request</strong>
  <ul>
    <li><strong>Type:</strong> TCP_IP_REQUEST</li>
    <li><strong>API:</strong> Cancel Order Single</li>
    <li><strong>Session:</strong> session1</li>
    <li><strong>Datasheet:</strong> DS_COS_01</li>
    <li><strong>Pattern:</strong> SAME_ROW</li>
    <li><strong>Row:</strong> 1</li>
    <li><strong>On Error:</strong> Abort</li>
  </ul>
  <p>Uses captured order_id from Step 3 to cancel the order.</p>
</div>


  <!-- <div class="step-image">
    <h4 class="image-title">Trade Flow - Step 4 (Cancel Request)</h4>
    <img src="/exgenix-documentation/img/testcase/trade-flow-step4.png" alt="Cancel Order Request Configuration" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div> -->
</div>

<div class="step-block">
  <div class="step-text">
  <strong>Step 5: Cancel Order Response</strong>
  <ul>
    <li><strong>Type:</strong> TCP_IP_RESPONSE</li>
    <li><strong>API:</strong> Cancel Order Response (Standard Order)</li>
    <li><strong>Session:</strong> session1</li>
    <li><strong>Datasheet:</strong> DS_COR_01</li>
    <li><strong>Pattern:</strong> NEXT_ROW</li>
    <li><strong>Row:</strong> 1</li>
    <li><strong>On Error:</strong> Abort</li>
  </ul>
  <p>Validates successful cancellation.</p>
</div>


  <!-- <div class="step-image">
    <h4 class="image-title">Trade Flow - Step 5 (Cancel Response)</h4>
    <img src="/exgenix-documentation/img/testcase/trade-flow-step5.png" alt="Cancel Order Response Configuration" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div> -->
</div>

<div class="step-block">
  <div class="step-text">
  <strong>Step 6: Logout Test Action Unit</strong>
  <ul>
    <li><strong>Type:</strong> TEST ACTION UNIT</li>
    <li><strong>Session:</strong> session1</li>
    <li><strong>Pattern:</strong> SAME_ROW</li>
    <li><strong>On Error:</strong> Continue</li>
  </ul>
  <p>Cleanly terminates the session.</p>
</div>


  <!-- <div class="step-image">
    <h4 class="image-title">Trade Flow - Step 6 (Logout)</h4>
    <img src="/exgenix-documentation/img/testcase/trade-flow-step6.png" alt="Logout TAU Configuration" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div> -->
</div>

### Execution Flow Visualization

<div class="step-block">
  <div class="step-text">

<strong>Complete Trade Flow</strong>

<pre>
1. Login Test Action Unit (Establish connection & authenticate)
   ↓
2. New Order Request (Submit order)
   ↓
3. New Order Response (Validate & capture order_id)
   ↓
4. Cancel Order Request (Cancel using order_id)
   ↓
5. Cancel Order Response (Validate cancellation)
   ↓
6. Logout Test Action Unit (Terminate session)
</pre>

<strong>Expected Results:</strong>
<ul>
  <li>All steps pass successfully</li>
  <li>Order is placed and cancelled correctly</li>
  <li>Variables are captured and used accurately</li>
  <li>Session is maintained throughout</li>
  <li>Clean logout is completed</li>
</ul>

</div>


  <!-- <div class="step-image">
    <h4 class="image-title">Complete Test Case Execution Flow</h4>
    <img src="/exgenix-documentation/img/testcase/execution-flow.png" alt="Trade Flow Execution Visualization" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div> -->
</div>

<div class="step-block">
  <div class="step-text">

<strong>Post-Execution Review</strong>

After execution, review the detailed results to ensure correctness:

<ul>
  <li>Step-by-step execution status</li>
  <li>Request and response payloads</li>
  <li>Captured variable values</li>
  <li>Validation results</li>
  <li>Execution timing</li>
</ul>

</div>


  <!-- <div class="step-image">
    <h4 class="image-title">Execution Results Overview</h4>
    <img src="/exgenix-documentation/img/testcase/execution-results.png" alt="Detailed Execution Results" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div> -->
</div>

---

## Best Practices

### Naming Conventions

Use descriptive, action-oriented names:

✅ **Good Examples:**
- `Trade_PlaceAndCancelOrder`
- `User_LoginWithInvalidCredentials`
- `Market_SubscribeToMultipleSymbols`
- `Risk_ExceedPositionLimit`

❌ **Avoid:**
- `Test1`, `MyTest`, `TestCase`, `Flow`

### Step Organization

<div class="step-block">
 <div class="step-text">

<strong>Logical Grouping:</strong>

<ol>
    <li><strong>Setup</strong> (Login, connections)</li>
    <li><strong>Preconditions</strong> (Data setup, subscriptions)</li>
    <li><strong>Main Actions</strong> (Core test operations)</li>
    <li><strong>Validations</strong> (Response checks)</li>
    <li><strong>Cleanup</strong> (Logout, disconnections)</li>
</ol>

<strong>Example Structure:</strong>
<pre>
Test Case: Order_Management_Flow
├── Setup
│   └── Login TAU
├── Main Actions
│   ├── New Order Request
│   ├── New Order Response
│   ├── Modify Order Request
│   └── Modify Order Response
├── Validations
│   └── Verify Order Status
└── Cleanup
    └── Logout TAU
</pre>

</div>


  <!-- <div class="step-image">
    <h4 class="image-title">Organized Test Case Structure</h4>
    <img src="/exgenix-documentation/img/testcase/organized-structure.png" alt="Well-Organized Test Case" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div> -->
</div>

### Error Handling Strategy

- **Abort** for critical path:
  - Authentication
  - Mandatory validations
  - Order acceptance/rejection

- **Continue** for optional operations:
  - Notifications
  - Non-critical subscriptions
  - Logging operations

- **Retry** for transient issues:
  - Network timeouts
  - Temporary unavailability
  - External service calls

### Datasheet Management

- **Data Independence** – Each test case should have its own data
- **Data Reusability** – Use base row inheritance; override minimally
- **Data Clarity** – Use meaningful values; document expected outcomes

### Session Design Patterns (Selection Guide)

| Scenario | Session Type | Pattern | Rationale |
|----------|-------------|---------|-----------|
| Single user workflow | Continuous | SAME_ROW | Stable, consistent context |
| Multi-user testing | Different per user | NEXT_ROW | Isolated sessions |
| Load testing | Different per iteration | NEXT_ROW | Simulate many users |
| Idempotency testing | Continuous | SAME_ROW | Same session/data |
| Session lifecycle | Different per iteration | SAME_ROW | Creation/destruction focus |

---

## Managing Test Cases

### Viewing Test Cases

1. Navigate to **Test Configuration → Test Case**
2. Select a collection
3. View all test cases within that collection

**Display Information:**
- Test case name
- Description
- Number of steps
- Last execution status
- Last modified date

### Editing Test Cases

1. Click the test case name or **Edit** icon
2. Modify step configuration
3. Add or remove steps
4. Update datasheets
5. Click **Update** to save changes

### Executing Test Cases

**Option 1: Direct Execution**
- Open the test case → **Execute**

**Option 2: Via Test Suite**
- Add test case to a test suite → Execute the suite (sequential or parallel)

### Cloning Test Cases

1. Open an existing test case
2. Modify name/description
3. Adjust steps
4. **Save as New** test case

---

## Common Scenarios

### Authentication Testing

<div class="step-block">
  <div class="step-text">

<pre>
Test Case: User_Authentication
├── Valid Credentials Test
├── Invalid Password Test
├── Locked Account Test
└── Session Timeout Test
</pre>

<strong>Configuration:</strong>
<ul>
    <li>Pattern: NEXT_ROW (test different credentials)</li>
    <li>On Error: Continue (test all scenarios)</li>
</ul>

</div>

<!-- 
  <div class="step-image">
    <h4 class="image-title">Authentication Test Case</h4>
    <img src="/exgenix-documentation/img/testcase/auth-testing.png" alt="Authentication Testing Scenario" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div> -->
</div>

### Order Lifecycle

<div class="step-block">
  <div class="step-text">

<pre>
Test Case: Order_Complete_Lifecycle
├── Login
├── Place Order
├── Validate Placement
├── Modify Order
├── Validate Modification
├── Cancel Order
├── Validate Cancellation
└── Logout
</pre>

<strong>Configuration:</strong>
<ul>
    <li>Session: session1 (continuous)</li>
    <li>Pattern: SAME_ROW (same order throughout)</li>
    <li>On Error: Abort (critical flow)</li>
</ul>

</div>

<!-- 
  <div class="step-image">
    <h4 class="image-title">Order Lifecycle Test Case</h4>
    <img src="/exgenix-documentation/img/testcase/order-lifecycle.png" alt="Order Lifecycle Scenario" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div> -->
</div>

### Negative Testing

<div class="step-block">
  <div class="step-text">

<pre>
Test Case: Negative_Order_Scenarios
├── Invalid Price
├── Invalid Quantity
├── Invalid Security ID
├── Duplicate Order ID
└── Unauthorized User
</pre>

<strong>Configuration:</strong>
<ul>
    <li>Datasheet: DS_negative_nos</li>
    <li>Pattern: NEXT_ROW (test each scenario)</li>
    <li>On Error: Continue (collect all failures)</li>
</ul>

</div>

<!-- 
  <div class="step-image">
    <h4 class="image-title">Negative Testing Scenario</h4>
    <img src="/exgenix-documentation/img/testcase/negative-testing.png" alt="Negative Testing Configuration" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div> -->
</div>

### Stress Testing

<div class="step-block">
  <div class="step-text">

<pre>
Test Case: Stress_Multiple_Orders
├── Login
├── Loop (100 iterations)
│   ├── Place Order (NEXT_ROW)
│   └── Validate Response
└── Logout
</pre>

<strong>Configuration:</strong>
<ul>
    <li>Loop: 100 iterations</li>
    <li>Pattern: NEXT_ROW (unique orders)</li>
    <li>Session: Different per iteration</li>
    <li>Wait Time: 0 seconds (maximum throughput)</li>
</ul>

</div>


<!-- 
  <div class="step-image">
    <h4 class="image-title">Stress Testing Scenario</h4>
    <img src="/exgenix-documentation/img/testcase/stress-testing.png" alt="Stress Testing Configuration" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div> -->
</div>

### Multi-User Scenario

<div class="step-block">
  <div class="step-text">

<pre>
Test Case: Multi_User_Trading
├── User A Login (session1)
├── User B Login (session2)
├── User A Place Order (session1)
├── User B Place Order (session2)
├── User A Cancel Order (session1)
├── User B Cancel Order (session2)
├── User A Logout (session1)
└── User B Logout (session2)
</pre>

<strong>Configuration:</strong>
<ul>
    <li>Sessions: session1 and session2</li>
    <li>Pattern: NEXT_ROW (different users)</li>
    <li>On Error: Abort (per session)</li>
</ul>

</div>

<!-- 
  <div class="step-image">
    <h4 class="image-title">Multi-User Testing Scenario</h4>
    <img src="/exgenix-documentation/img/testcase/multi-user.png" alt="Multi-User Test Configuration" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div> -->
</div>

---

## Troubleshooting

### Step Execution Skipped

**Causes:**
- Missing datasheet
- Previous step aborted
- Invalid session reference

**Solutions:**
- Verify datasheet is selected for the step
- Check previous step status and fix issues
- Ensure session identifiers match across steps

### Variable Not Found

**Causes:**
- Variable not captured in previous step
- Session mismatch between capture and usage
- Typo in variable name

**Solutions:**
- Verify capture syntax: `${capture(variable_name)}`
- Ensure same session identifier for related steps
- Check variable name and case sensitivity

### Datasheet Row Mismatch

**Causes:**
- Wrong pattern selected (SAME_ROW vs NEXT_ROW)
- Wrong starting row number
- Insufficient rows in datasheet

**Solutions:**
- Review and adjust pattern based on test requirements
- Verify starting row number is correct
- Add more rows to datasheet if needed

### Test Action Unit Not Executing

**Causes:**
- Missing TAU datasheet configuration
- Invalid API configurations within TAU
- Required fields empty in datasheets

**Solutions:**
- Click **Configure** and set datasheets for all APIs
- Test TAU independently before adding to test case
- Populate all required fields in datasheets

---

## Summary

The Test Case & Configuration module enables:

✅ **Flexible Step Sequencing** – Mix Test Action Units and individual APIs  
✅ **Advanced Session Management** – Single or multiple sessions  
✅ **Intelligent Data Handling** – Control row consumption patterns  
✅ **Timing Control** – Wait times for synchronization  
✅ **Robust Error Handling** – Continue, Abort, or Retry  
✅ **Loop Support** – Repeat steps with different data  

### Key Takeaways

1. **Design with Clear Objectives**
   - Define what functionality you're testing
   - Document expected outcomes
   - Plan test data requirements

2. **Use Test Action Units for Common Workflows**
   - Login/Logout flows
   - Repeated operations
   - Standard protocol sequences

3. **Configure Datasheets Carefully**
   - Ensure all required fields have values
   - Use dynamic functions for varied data
   - Maintain base row for inheritance

4. **Leverage Session Management**
   - Use same session for continuous workflows
   - Use different sessions for isolation
   - Plan session lifecycle carefully

5. **Apply Appropriate Error Handling**
   - Abort for critical operations
   - Continue for non-blocking steps
   - Retry for transient failures

6. **Document Test Intent**
   - Write clear descriptions
   - Comment complex logic
   - Maintain traceability to requirements

### Benefits of Proper Test Case Configuration

| Benefit | Impact |
|---------|--------|
| **Reusability** | Create once, use multiple times |
| **Maintainability** | Easy to update and modify |
| **Scalability** | Handle simple to complex scenarios |
| **Reliability** | Consistent, repeatable results |
| **Speed** | Rapid test execution |
| **Coverage** | Comprehensive validation |

---

## Next Steps

After mastering test case configuration:

1. **Create Test Suites** – Group related test cases for organized execution
2. **Schedule Executions** – Set up automated test runs
3. **Analyze Reports** – Review execution results and metrics
4. **Optimize Performance** – Fine-tune patterns and configurations
5. **Expand Coverage** – Add more scenarios and edge cases

---

**Mastering test case configuration enables you to validate complex business workflows with precision, efficiency, and maintainability.**

---

**End of Test Case & Configuration Module Guide**