---
id: advanced-features
title: 'Advanced Features'
sidebar_position: 6
hide_table_of_contents: true
sidebar_label: Advanced Features
slug: /test-case-configuration/advanced-features
description: 'Advanced test case features'
---

import ExampleBlock from '@site/src/components/ExampleBlock';

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
