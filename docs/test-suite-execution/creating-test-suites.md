---
id: creating-test-suites
title: 'Creating Test Suites'
sidebar_position: 5
hide_table_of_contents: true
sidebar_label: Creating Test Suites
slug: /test-suite-execution/creating-test-suites
description: 'Step-by-step guide to creating test suites'
---

# Creating Test Suites
---

<div class="step-block">
  <div class="step-text">
    ## Create Collection
    
    1. Navigate to **Execution** in the left menu
    2. Click **`+ Create Collection`**
    3. Provide:
       - **Name**: Descriptive identifier (e.g., `TEST_EXECUTION`, `Regression_Suite`)
       - **Description**: Purpose and scope
    
    Collections help you organize test suites logically, making it easier to manage large test repositories.
  </div>

  <div class="step-image">
    <h4 class="image-title">Create Collection</h4>
    <img src="/exgenix-documentation/img/test_suite_and_execution/1.png" alt="Create Test Execution Collection" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

---

<div class="step-block">
  <div class="step-text">

    > ## Step 1: Navigate to Test Suites
    
    1. Go to **Execution → [Collection Name]**
    2. Click **`+ Create Test Suite`**

  
  </div>

  <div class="step-image">
    <h4 class="image-title">Test Collection View</h4>
    <img src="/exgenix-documentation/img/test_suite_and_execution/test_collection.png" alt="Open Test Collection" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

---
> ## Step 2: Configure Basic Information
    
    **Name** (Required)
    - Meaningful identifier for the suite (e.g., Test Suite Testing, Daily Smoke Tests)
    
    **Description** (Optional but Recommended)
    - Document the suite's purpose, covered scenarios, and execution requirements

---

> ## **Step 3: Configure Schedule**


<div class="step-block">
  <div class="step-text">
Suites can run **`On Demand`** or be **`Scheduled`**.

| Option | Description | Use Case |
|--------|-------------|----------|
| **On Demand** | `Manual execution only` | Development, debugging, ad-hoc |
| **Scheduled** | `Automated at specific times` | Regression, nightly builds, continuous testing |

For **Scheduled** runs, set frequency (Daily/Weekly/Monthly), specific times, and recurrence.


  </div>
  <div class="step-image">
    <h4 class="image-title">Parallel Execution Configuration</h4>
    <img src="/exgenix-documentation/img/test_suite_and_execution/2.png" alt="Configure Parallel Execution" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>
---

> ## Step 4: **Configure Parallel Execution**
    
    | Setting | Description | Benefits | Considerations |
    |---------|-------------|----------|----------------|
    | **Enabled** | Cases run `simultaneously` | Faster runs | Needs resources; cases must be independent |
    | **Disabled** | Cases run `sequentially` | Easier debugging, deterministic order | Longer total time |
    
    > **`Enable`** when cases are independent and resources suffice.  
    > **`Disable`** when cases depend on shared state/resources or order matters.

---
<div class="step-block">
  <div class="step-text">
      > ## Step 5: Add Test Cases
    
    Click **`+ Add Test Cases`** to select them for the suite.
    
    **Add Test Cases Dialog Features:**
    - Search functionality to find specific test cases
    - View test case details (name, collection, steps, execution status)
    - Select multiple test cases at once
    - See selection count before adding
    - Preview test case descriptionstor (✓)
    - Description preview
  </div>
  <div class="step-image">
    <h4 class="image-title">Add Test Cases Dialog</h4>
    <img src="/exgenix-documentation/img/test_suite_and_execution/3.png" alt="Add Test Cases to Suite" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

---