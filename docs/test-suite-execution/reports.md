---
id: reports
title: 'Reports'
sidebar_position: 9
hide_table_of_contents: true
sidebar_label: Reports
slug: /test-suite-execution/reports
description: 'Understanding test execution reports'
---

# Reports

---

<div class="step-block">
  <div class="step-text">
    After completion, you're automatically redirected to **``Reports``**.
    
    ## Access
    - **From Execution**: Auto-redirect or **`View Report`** link
    - **From Reports Module**: Navigate to **Reports** → filter by suite, date, status, user
    
    Reports provide comprehensive execution details and are generated automatically after each run.
  </div>
  <div class="step-image">
    <h4 class="image-title">Reports Dashboard</h4>
    <img src="/img/test_suite_and_execution/5.png" alt="Test Execution Reports Dashboard" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

---

<div class="step-block">
  <div class="step-text">
    ## Reports List View
    #
    The reports module displays:
    - `Execution history` with timestamps
    - `Suite names` and `collections`
    - Execution `status` (Pass/Fail)
    - `Duration` of each execution
    - `User` who triggered the execution
    - Quick access to detailed `reports`
    - `Filter` and `search` capabilities
  </div>
  <div class="step-image">
    <h4 class="image-title">Reports List</h4>
    <img src="/img/test_suite_and_execution/6.png" alt="List of Execution Reports" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

---

## Report Contents

<div class="step-block">
  <div class="step-text">
    **1. Summary**
    
    The report summary provides:
    - Overall execution `status`
    - `Total` test cases executed
    - `Pass/Fail` counts and percentages
    - Execution `duration`
    - `Start` and `end` timestamps
    - Suite `configuration details`
    - `Environment` information
  </div>
</div>


<div class="step-block">
  <div class="step-text">
    **2. Test Case Details**
    
    Detailed view for each test case includes:
    - `Test case` name and description
    - Individual `step results`
    - `Pass/Fail` status for each step
    - `Execution time` per step
    - `Error messages` and stack traces
    - `Datasheet values` used
  </div>
  <div class="step-image">
    <h4 class="image-title">Test Case Details</h4>
    <img src="/img/test_suite_and_execution/7.png" alt="Detailed Test Case Results" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>


<div class="step-block">
  <div class="step-text">
    **3. Request / Response Logs**
    
    Comprehensive logging includes:
    - Complete request `payloads`
    - `Response data` received
    - Message `headers` and `metadata`
    - `Timestamps` for each interaction
    - Field-level `validation results`
    - `Error` details and codes
    
    These logs are essential for debugging and compliance requirements.
  </div>
</div>


<div class="step-block">
  <div class="step-text">
    **4. Execution Timeline**
    
    Visual timeline representation:
    - `Chronological` execution flow
    - `Duration` for each test case
    - Parallel execution `visualization`
    - `Waiting/idle` times
    - `Bottleneck` identification
    - `Resource utilization` patterns
  </div>
</div>

<div class="step-block">
  <div class="step-text">
    **5. Timeline Details View**
    
    The detailed timeline provides:
    - Step-by-step execution `sequence`
    - `Time taken` for each operation
    - `Dependencies` and `waiting periods`
    - Parallel execution threads
    - Critical path analysis
    
    
  </div>

</div>

---

## **Report Export**
    
    Reports can be exported in multiple formats:
    - **PDF**: For sharing and documentation
    - **Excel**: For data analysis
    - **JSON**: For integration with other tools
    - **HTML**: For web publishing

    ---