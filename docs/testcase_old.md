---
title: Test Case & Configuration
sidebar_position: 6
hide_table_of_contents: true
---
import {
  FeatureCard,
  FeatureGrid,
  StatusBadge,
  InfoBox,
  StepIndicator,
  QuickLinks
} from '@site/src/components/DocumentationComponents';
import ExampleBlock  from '@site/src/components/ExampleBlock';

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

<FeatureGrid>
  <FeatureCard
    icon="flow"
    title="Flow Design"
    description="Create sequential or iterative test workflows for precise automation control"
    color="#2563eb"
  />
  <FeatureCard
    icon="server"
    title="Session Management"
    description="Configure single or multiple session executions to simulate real scenarios"
    color="#10b981"
  />
  <FeatureCard
    icon="database"
    title="Data Handling"
    description="Control how test data is consumed from datasheets for dynamic testing"
    color="#f59e0b"
  />
  <FeatureCard
    icon="clock"
    title="Timing Control"
    description="Add wait times or delays between steps for accurate test sequencing"
    color="#8b5cf6"
  />
  <FeatureCard
    icon="alert-circle"
    title="Error Handling"
    description="Define step failure behavior to ensure predictable and robust test execution"
    color="#ec4899"
  />
  <FeatureCard
    icon="package"
    title="Reusability"
    description="Leverage Test Action Units and API configurations for modular testing"
    color="#14b8a6"
  />
  <FeatureCard
    icon="shuffle"
    title="Flexibility"
    description="Mix and match components to create any test scenario efficiently"
    color="#f87171"
  />
</FeatureGrid>

---

## Module Structure

<div class="step-block">
  <div class="step-text">

The Test Case & Configuration module follows a clear hierarchy:

| Component | Purpose |
|-----------|---------|
| **Collections** | `Group` related test cases for organization and collaboration |
| **Test Cases** | Define end-to-end, `executable test flows` |
| **Steps** | `Ordered actions` within a test case (`TAU`s or `individual API`s) |

  </div>
</div>

---

## Test Cases
#
A **Test Case** represents a complete, executable test scenario that validates specific functionality. Each test case consists of:

1. **Identification** – Name and description
2. **Test Steps** – Ordered sequence of actions
3. **Data Configuration** – Datasheets for each step
4. **Execution Settings** – Session type, patterns, timing
5. **Error Handling** – Response to failures

<ExampleBlock title="Test Case Structure (Example)">

<div className="step-block">
    <div className="step-text">
      <p>A typical test case includes:</p>

      <ul>
            <li>Login/Authentication steps</li>
            <li>Business logic operations (Orders, Modifications, Cancellations)</li>
            <li>Response validations</li>
            <li>Cleanup/Logout steps</li>
        </ul>

          <p>Each step can be either:</p>

          <ul>
            <li><strong>Test Action Unit</strong> (pre-configured group of APIs)</li>
            <li><strong>Individual API</strong> (single request or response)</li>
          </ul>

      </div>

    <div className="step-image">
        <h4 className="image-title">Test Case Structure Example</h4>
        <img
          src="/exgenix-documentation/img/testcase/example.png"
          alt="Example Test Case Structure"
          style={{
            width: "100%",
            maxWidth: "500px",
            borderRadius: "8px",
            border: "1px solid #c3eccc",
          }}
        />
        <p className="image-caption">🖱️ Click to expand image</p>
      </div>
  </div>
</ExampleBlock>

<p>The test case view provides a comprehensive overview of all configured steps, including:</p>

  <ul>
    <li>Step sequence and numbering</li>
    <li>Step type (TAU or individual API)</li>
    <li>Associated datasheets</li>
    <li>Execution patterns</li>
    <li>Error handling configuration</li>
  </ul>
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

   <div class="step-image">
    <h4 class="image-title">Navigate To Test Cases</h4>
    <img src="/exgenix-documentation/img/testcase/testcase.png" alt="Navigate To Test Cases" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>

</div>

---

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

---

### Step 3: Add Test Steps

You can add two step types:
#
> #### Type 1: Test Action Unit

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

---



<div class="step-block">
  <div class="step-text">
      > #### Type 2: Individual API Configuration

      Single API call as a test step.

      **Configuration:**
      1. Click **+ Add Step**
      2. Select **Type**: TCP_IP_REQUEST or TCP_IP_RESPONSE or Socket_Connection
      3. Choose the API configuration from dropdown
      4. Configure settings
   </div>


  <div class="step-image">
    <h4 class="image-title">Action Type Configuration</h4>
    <img src="/exgenix-documentation/img/testcase/add_step_normal.png" alt="Step Type Configuration" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>


---

### Step 4: Configure Step Settings
#
> #### Step Settings

For each step, configure the following:

--- 

> #### Description

- Brief explanation of what this step does
- Example: "Submit new order with limit price"

---

> #### Session

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

  :::note
  <p><strong>Configuration Notes:</strong></p>
  <ul>
    <li>Enter a session identifier (e.g., <code>session1</code>, <code>session2</code>)</li>
    <li>Steps with the same identifier share session context</li>
    <li>Captured variables (session IDs, tokens) are shared within a session</li>
  </ul>
  :::

  
</div>


  <div class="step-image">
    <h4 class="image-title">Session Configuration</h4>
    <img src="/exgenix-documentation/img/testcase/session.png" alt="Configure Session Identifier" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

---

> #### Wait Time (seconds)

<div class="step-block">
  <div class="step-text">
  <p>Delay before executing this step.</p>
  #

  > <p><strong>Use Cases:</strong></p>
  <ul>
     <li><strong>0 seconds</strong> – Immediate execution</li>
     <li><strong>1–5 seconds</strong> – Short processing delays</li>
    <li><strong>5+ seconds</strong> – Asynchronous operations / market data updates</li>
  </ul>
</div>

</div>

---

> #### Datasheet Selection

<div class="step-block">
  <div class="step-text">

Associate a datasheet with the step.

 **For Individual API Steps:**
1. Open the datasheet dropdown
2. Select an available datasheet for that API
3. Datasheet values populate fields at runtime

  </div>

  <div class="step-image">
    <h4 class="image-title">Datasheet Configuration Modal</h4>
    <img src="/exgenix-documentation/img/testcase/datasheet.png" alt="Configure Datasheets for Test Action Unit" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

<div class="step-block">
  <div class="step-text">

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

---

> #### Pattern (Datasheet Row Usage)

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
        <td>Uses the `same row` for all iterations</td>
        <td>Retry logic, idempotency testing, consistent data</td>
      </tr>
      <tr>
        <td><strong>NEXT_ROW</strong></td>
        <td>Advances to `next row` per iteration</td>
        <td>Varied data, multi-scenario, load testing</td>
      </tr>
    </tbody>
  </table>

<ExampleBlock title="Iteration Examples">
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
</ExampleBlock>
</div>


  <div class="step-image">
    <h4 class="image-title">Pattern Configuration</h4>
    <img src="/exgenix-documentation/img/testcase/pattern.png" alt="NEXT_ROW Pattern Example" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>
---

> #### Row No. (Starting Row)

<div class="step-block">
  <div class="step-text">
  <p>Specifies which row from the datasheet to start with.</p>

  <p><strong>Usage:</strong></p>
  <ul>
    <li><strong>Row 1</strong> – Start at base row</li>
    <li><strong>Row 2+</strong> – Skip to a specific row</li>
  </ul>

  <ExampleBlock title="Examples">
  <ul>
    <li>Start at Row 1: Uses base configuration</li>
    <li>Start at Row 3: Skips the first two rows, useful for specific test scenarios</li>
  </ul>
</ExampleBlock>

</div>
</div>
---

> #### On Error (Error Handling)

<div class="step-block">
  <div class="step-text">
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
        <td>`Log error`; proceed to `next` step</td>
        <td>Non-critical steps</td>
      </tr>
      <tr>
        <td><strong>Abort</strong></td>
        <td>`Stop` execution immediately</td>
        <td>Critical failures</td>
      </tr>
      <tr>
        <td><strong>Retry</strong></td>
        <td>`Retry` failed step (configurable)</td>
        <td>Transient/network issues</td>
      </tr>
    </tbody>
  </table>

  :::tip
  <strong>Best Practices:</strong>
  <ul>
    <li>Use <strong>Abort</strong> for critical steps: Login, Authentication, Order Acceptance</li>
    <li>Use <strong>Continue</strong> for optional operations: Notifications, Non-critical subscriptions</li>
    <li>Use <strong>Retry</strong> for network-dependent operations: Connection establishment, External API calls</li>
  </ul>
  :::

  
</div>


  <div class="step-image">
    <h4 class="image-title">Error Handling Configuration</h4>
    <img src="/exgenix-documentation/img/testcase/on_error.png" alt="Configure On Error Behavior" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

---

## Advanced Features
#
### 1. Adding Loops

<div class="step-block">
  <div class="step-text">
  <strong>Loop Steps</strong>
<p>Loops let you repeat a section of your test case multiple times.</p>

---

  <strong>Configuration:</strong>
  <ol>
    <li>Click <strong>+ Add Loop</strong></li>
    <li>A loop container is added with <strong>Loop Start</strong> and <strong>Loop End</strong></li>
    <li>Add steps within the loop and configure properties</li>
  </ol>

---

  <strong>Loop Properties:</strong>
  <ul>
    <li><strong>Loop Pattern</strong> – NEXT_ROW / SAME_ROW</li>
    <li><strong>Iterations</strong> – Fixed count or dynamic (e.g., datasheet size)</li>
  </ul>

  <ExampleBlock title="Example: Multiple Order Placement">
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

  <p><em>Result:</em> Places 10 different orders using rows 1–10 from the datasheet.</p>
</ExampleBlock>

</div>


  <div class="step-image">
    <h4 class="image-title">Loop Configuration</h4>
    <img src="/exgenix-documentation/img/testcase/add_loop.png" alt="Configure Loop for Repeated Execution" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

---

### 2. Session Management Patterns

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

> **Use Case:** Standard workflow where all operations belong to one user session

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

> **Use Case:** Multi-user scenarios, parallel user testing

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

> **Use Case:** Session lifecycle testing, load testing with isolated sessions

  </div>

  <!-- <div class="step-image">
    <h4 class="image-title">Session Per Iteration Pattern</h4>
    <img src="/exgenix-documentation/img/testcase/session-per-iteration.png" alt="Session Per Iteration Configuration" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div> -->
</div>

---

### 3. Datasheet Row Configuration Strategies
#
**Strategy 1: Incremental Row Usage**

<div class="step-block">
  <div class="step-text">

```
Step 1: Row 1, Pattern: NEXT_ROW
Step 2: Row 1, Pattern: NEXT_ROW
Step 3: Row 1, Pattern: NEXT_ROW
```

Each step advances to the next row in its datasheet.

> **Use Case:** Testing with varied data across steps

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

> **Use Case:** Idempotency testing, retry scenarios

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

> **Use Case:** Request-response validation, maintaining data correlation

  </div>

  <!-- <div class="step-image">
    <h4 class="image-title">Datasheet Synchronization Strategy</h4>
    <img src="/exgenix-documentation/img/testcase/datasheet-sync.png" alt="Synchronized Datasheet Strategy" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div> -->
</div>

---


<ExampleBlock title="Example Test Case: Complete Trade Flow">
  <div className="step-block" style={{ display: "flex", gap: "20px" }}>
    
  <div className="step-text" style={{ flex: 1 }}>
      <p><strong>Step 1:</strong> Login Test Action Unit</p>
      <p><strong>Step 2:</strong> New Order Request</p>
      <p><strong>Step 3:</strong> New Order Response</p>
      <p><strong>Step 4:</strong> Cancel Order Request</p>
      <p><strong>Step 5:</strong> Cancel Order Response</p>
      <p><strong>Step 6:</strong> Logout Test Action Unit</p>

<br />

  <p><strong>Expected Results:</strong></p>
      <ul>
        <li>All steps pass successfully</li>
        <li>Order is placed and cancelled correctly</li>
        <li>Variables are captured and used accurately</li>
        <li>Session is maintained throughout</li>
        <li>Clean logout is completed</li>
      </ul>
    </div>

<div className="step-image" style={{ flex: "0 0 300px", textAlign: "center" }}>
      <h4 className="image-title">Trade Flow</h4>
      <img
        src="/exgenix-documentation/img/testcase/trade_flow.png"
        alt="Trade Flow"
        style={{
          width: "100%",
          borderRadius: "8px",
          border: "1px solid #c3eccc"
        }}
      />
      <p className="image-caption">🖱️ Click to expand image</p>
    </div>

  </div>
</ExampleBlock>


---

## Best Practices

<div class="collapsible-card-div">

  <details class="green-collapsible">
  <summary><strong>1. Naming Conventions</strong></summary>

  Use descriptive, action-oriented names:

  **Good Examples:**
  - `Trade_PlaceAndCancelOrder`
  - `User_LoginWithInvalidCredentials`
  - `Market_SubscribeToMultipleSymbols`
  - `Risk_ExceedPositionLimit`

  **Avoid:**
  - `Test1`
  - `MyTest`
  - `TestCase`
  - `Flow`

  </details>


  <details class="green-collapsible">
  <summary><strong>2. Step Organization</strong></summary>

  **Logical Grouping:**

  1. **Setup** (Login, connections)  
  2. **Preconditions** (Data setup, subscriptions)  
  3. **Main Actions** (Core test operations)  
  4. **Validations** (Response checks)  
  5. **Cleanup** (Logout, disconnections)

  </details>


  <details class="green-collapsible">
  <summary><strong>3. Error Handling Strategy</strong></summary>

  **Abort** for critical path:
  - Authentication  
  - Mandatory validations  
  - Order acceptance/rejection  

  **Continue** for optional operations:
  - Notifications  
  - Non-critical subscriptions  
  - Logging operations  

  **Retry** for transient issues:
  - Network timeouts  
  - Temporary unavailability  
  - External service calls  

  </details>


  <details class="green-collapsible">
  <summary><strong>4. Datasheet Management</strong></summary>

  - **Data Independence** – Each test case should have its own data  
  - **Data Reusability** – Use base row inheritance; override minimally  
  - **Data Clarity** – Use meaningful values; document expected outcomes  

  </details>


  <details class="green-collapsible">
  <summary><strong>5. Session Design Patterns (Selection Guide)</strong></summary>

  | Scenario | Session Type | Pattern | Rationale |
  |----------|-------------|---------|-----------|
  | Single user workflow | Continuous | SAME_ROW | Stable, consistent context |
  | Multi-user testing | Different per user | NEXT_ROW | Isolated sessions |
  | Load testing | Different per iteration | NEXT_ROW | Simulate many users |
  | Idempotency testing | Continuous | SAME_ROW | Same session/data |
  | Session lifecycle | Different per iteration | SAME_ROW | Creation/destruction focus |

  </details>

</div>
---

## Managing Test Cases
#

<div class="collapsible-card-div">
  <details class="green-collapsible">
  <summary><strong>Viewing Test Cases</strong></summary>

  1. Navigate to **Test Configuration → Test Case**  
  2. Select a collection  
  3. View all test cases within that collection  

  **Display Information:**
  - Test case name  
  - Description  
  - Number of steps  
  - Last execution status  
  - Last modified date  

  </details>


  <details class="green-collapsible">
  <summary><strong>Editing Test Cases</strong></summary>

  1. Click the test case name or **Edit** icon  
  2. Modify step configuration  
  3. Add or remove steps  
  4. Update datasheets  
  5. Click **Update** to save changes  

  </details>


  <details class="green-collapsible">
  <summary><strong>Executing Test Cases</strong></summary>

  **Option 1: Direct Execution**  
  - Open the test case → **Execute**

  **Option 2: Via Test Suite**  
  - Add test case to a test suite → Execute the suite (sequential or parallel)

  </details>


  <details class="green-collapsible">
  <summary><strong>Cloning Test Cases</strong></summary>

  1. Open an existing test case  
  2. Modify name/description  
  3. Adjust steps  
  4. **Save as New** test case  

  </details>

</div>
---

## Common Scenarios
#

<div class="collapsible-card-div">

  <details class="green-collapsible">
    <summary><strong>Authentication Testing</strong></summary>

      <pre>
      Test Case: User_Authentication
      ├── Valid Credentials Test
      ├── Invalid Password Test
      ├── Locked Account Test
      └── Session Timeout Test
      </pre>

  **Configuration:**
  - Pattern: NEXT_ROW (test different credentials)
  - On Error: Continue (test all scenarios)

  </details>

    
  <details class="green-collapsible">
  <summary><strong>Order Lifecycle</strong></summary>

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

    **Configuration:**
    - Session: session1 (continuous)
    - Pattern: SAME_ROW (same order throughout)
    - On Error: Abort (critical flow)

  </details>

    <details class="green-collapsible">
    <summary><strong>Negative Testing</strong></summary>

  <pre>
  Test Case: Negative_Order_Scenarios
  ├── Invalid Price
  ├── Invalid Quantity
  ├── Invalid Security ID
  ├── Duplicate Order ID
  └── Unauthorized User
  </pre>

  **Configuration:**
  - Datasheet: DS_negative_nos
  - Pattern: NEXT_ROW (test each scenario)
  - On Error: Continue (collect all failures)

  </details>

    <details class="green-collapsible">
    <summary><strong>Stress Testing</strong></summary>

  <pre>
  Test Case: Stress_Multiple_Orders
  ├── Login
  ├── Loop (100 iterations)
  │   ├── Place Order (NEXT_ROW)
  │   └── Validate Response
  └── Logout
  </pre>

  **Configuration:**
  - Loop: 100 iterations
  - Pattern: NEXT_ROW (unique orders)
  - Session: Different per iteration
  - Wait Time: 0 seconds (maximum throughput)

  </details>



    <details class="green-collapsible">
    <summary><strong>Multi-User Scenario</strong></summary>

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

  **Configuration:**
  - Sessions: session1 and session2
  - Pattern: NEXT_ROW (different users)
  - On Error: Abort (per session)

  </details>

</div>

---

# Troubleshooting
#

<div class="collapsible-card-div">
  <details class="green-collapsible">
  <summary><strong>1. Step Execution Skipped</strong></summary>

  **Causes:**
  - Missing datasheet  
  - Previous step aborted  
  - Invalid session reference  

  **Solutions:**
  - Select the correct datasheet  
  - Check status of previous step  
  - Unify session names  

  </details>


  <details class="green-collapsible">
  <summary><strong>2. Variable Not Found</strong></summary>

  **Causes:**
  - Variable not captured  
  - Session mismatch  
  - Typographical error  

  **Solutions:**
  - Verify capture syntax  
  - Ensure step uses same session  
  - Check variable name and casing  

  </details>


  <details class="green-collapsible">
  <summary><strong>3. Datasheet Row Mismatch</strong></summary>

  **Causes:**
  - Wrong row pattern  
  - Incorrect starting row  
  - Not enough rows in datasheet  

  **Solutions:**
  - Review and correct pattern (NEXT_ROW / SAME_ROW)  
  - Adjust starting row  
  - Add more rows to the datasheet  

  </details>

  <details class="green-collapsible">
  <summary><strong>4. Test Action Unit Not Executing</strong></summary>

  **Causes:**
  - TAU datasheet not configured  
  - Invalid configurations  
  - Required fields left empty  

  **Solutions:**
  - Open Configure and set datasheets  
  - Validate and correct configuration  
  - Populate mandatory data fields  

  </details>

</div>
---

## Summary
The Test Case & Configuration module enables:  
✓ **Flexible Step Sequencing** – Mix Test Action Units and individual APIs  
✓ **Advanced Session Management** – Single or multiple sessions  
✓ **Intelligent Data Handling** – Control row consumption patterns  
✓ **Timing Control** – Wait times for synchronization  
✓ **Robust Error Handling** – Continue, Abort, or Retry  
✓ **Loop Support** – Repeat steps with different data
#

<div class="takeaway-panel">
  <div class="panel-header"><strong>Key Takeaways</strong></div>
  <div class="panel-body">
    <ul>
      <li>Design test cases with clear objectives</li>
      <li>Use Test Action Units for common workflows</li>
      <li>Configure datasheets carefully for each step</li>
      <li>Leverage session management for complex scenarios</li>
      <li>Apply appropriate error handling per step</li>
      <li>Document test intent in descriptions</li>
    </ul>
  </div>
</div>
  
#
Mastering test case configuration lets you validate complex business workflows with precision and maintainability.

---