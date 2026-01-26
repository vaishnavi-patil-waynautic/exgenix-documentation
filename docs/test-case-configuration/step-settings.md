---
id: step-settings
title: 'Step Settings'
sidebar_position: 5
hide_table_of_contents: true
sidebar_label: Step Settings
slug: /test-case-configuration/step-settings
description: 'Configuring step settings'
---

import ExampleBlock from '@site/src/components/ExampleBlock';

# Step Settings


For each step, configure the following:

--- 

> ## Description

- Brief explanation of what this step does
- Example: "`Submit new order with limit price`"

---

> ## Session

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
        <td>All steps use the `same session`</td>
        <td>Standard workflow where all operations belong to one session</td>
      </tr>
      <tr>
        <td><strong>Different Sessions</strong></td>
        <td>Each iteration uses `a new session`</td>
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
    <img src="/img/testcase/session.png" alt="Configure Session Identifier" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

---

> ## Wait Time (seconds)

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

> ## Datasheet Selection

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
    <img src="/img/testcase/datasheet.png" alt="Configure Datasheets for Test Action Unit" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

<div class="step-block">
  <div class="step-text">

**For Test Action Unit Steps:**
1. Click **`Configure`**
2. A modal lists all APIs within the unit
3. Select a datasheet and row number for each API
4. Save configuration

  </div>

  <div class="step-image">
    <h4 class="image-title">Datasheet Configuration Modal</h4>
    <img src="/img/testcase/datasheet_selection.png" alt="Configure Datasheets for Test Action Unit" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

---

> ## Pattern (Datasheet Row Usage)

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
    <img src="/img/testcase/pattern.png" alt="NEXT_ROW Pattern Example" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>
---

> ## Row No. (Starting Row)

<div class="step-block">
  <div class="step-text">
  <p>Specifies which row from the datasheet to start with.</p>

  <p><strong>Usage:</strong></p>
  <ul>
    <li><strong>Row 1</strong> – Start at base row</li>
    <li><strong>Row 2</strong> – Skip to a specific row</li>
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

> ## On Error (Error Handling)

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
    <img src="/img/testcase/on_error.png" alt="Configure On Error Behavior" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

---