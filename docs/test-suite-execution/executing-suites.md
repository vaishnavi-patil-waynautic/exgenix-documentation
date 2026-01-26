---
id: executing-suites
title: 'Executing Test Suites'
sidebar_position: 7
hide_table_of_contents: true
sidebar_label: Executing Test Suites
slug: /test-suite-execution/executing-suites
description: 'How to execute test suites'
---

# Executing Test Suites

---

<div class="step-block">
  <div class="step-text">
    ## On-Demand Execution
#
> **From Suite View**
1. Open the suite
2. Click **`Execute Suite`** (green, top-right)

> **From Collection View**
1. Open the execution collection
2. Click the execute icon for the suite
  </div>
  <div class="step-image">
    <h4 class="image-title">Execute Suite</h4>
    <img src="/img/test_suite_and_execution/4.png" alt="Execute Test Suite" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

---

## Execution Process
#

> **Step 1: Initialization**
- Validate test cases, datasheets, and API configs
- Prepare environment and connections

<div class="step-block">
  <div class="step-text">
    > **Step 2: Execution**
    
    The execution phase includes:
    - Sequential or parallel test case execution
    - Step-by-step progress tracking
    - Real-time status updates
    - Validation of responses
    - Log generation
    
    > **Step 3: Monitoring**
    - Real-time status updates
    - Per-case progress tracking
    - Live error detection and logging
    
    > **Step 4: Completion**
    - Reports generated automatically
    - Automatic redirect to **Reports** module
    - Results stored for historical analysis
  </div>
</div>

---

## Execution Status Indicators
#
| Icon | Status | Meaning |
|------|--------|---------|
| 🟡 | `Running` | Currently executing |
| 🟢 | `Passed` | All steps successful |
| 🔴 | `Failed` | One or more steps failed |
| ⏸️ | `Pending` | Waiting to execute |
| ⏭️ | `Skipped` | Skipped due to prior failure |

---