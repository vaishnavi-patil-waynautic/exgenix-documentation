---
title: Test Suite & Execution Module - User Guide
sidebar_position: 7
hide_table_of_contents: true
---

# Test Suite & Execution Module – User Guide

---

## Table of Contents
- [Overview](#overview)
- [Module Structure](#module-structure)
- [Components](#components)
- [Creating Test Execution Collections](#creating-test-execution-collections)
- [Creating Test Suites](#creating-test-suites)
- [Test Suite Information Panel](#test-suite-information-panel)
- [Executing Test Suites](#executing-test-suites)
- [Execution Monitoring](#execution-monitoring)
- [Reports](#reports)
- [Scheduled Execution](#scheduled-execution)
- [Managing Test Suites](#managing-test-suites)
- [Best Practices](#best-practices)
- [Troubleshooting](#troubleshooting)
- [Summary](#summary)

---

## Overview

The **Test Suite & Execution** module lets you organize, schedule, and run your test cases with full control over sequencing, parallelism, and reporting. It supports on-demand and scheduled runs, real-time monitoring, and automatic report generation for every execution.The format below mirrors the structure used in the API Configuration guide for consistency across Exgenix docs.

### Key Capabilities
- **Test Organization:** Group related test cases into suites
- **Batch Execution:** Run many test cases together
- **Parallel Execution:** Execute test cases simultaneously
- **Scheduling:** Automate runs at specific times
- **Execution Monitoring:** Real-time status tracking
- **Report Generation:** Detailed, sharable post-execution reports

---

## Module Structure

<div class="step-block">
  <div class="step-text">
    The execution module follows a hierarchical structure:
    
    **Test Execution Collection**  

    - └── **Test Suite**  

        - └── **Test Case**  

            - └── **Test Steps**
    
    This three-tier structure provides logical organization and efficient execution management.
  </div>
</div>

---

## Components

| Component | Purpose | Contains |
|-----------|---------|----------|
| **Test Execution Collection** | Top-level organizer | Multiple Test Suites |
| **Test Suite** | Logical grouping of tests | Multiple Test Cases |
| **Test Case** | Individual test scenario | Multiple Test Steps |

---

## Creating Test Execution Collections

**Purpose:** Organize test suites by project, feature, or test cycle.

<div class="step-block">
  <div class="step-text">
    ### Steps
    
    1. Navigate to **Execution** in the left menu
    2. Click **+ Create Collection**
    3. Provide:
       - **Name**: Descriptive identifier (e.g., TEST_EXECUTION, Regression_Suite)
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

## Creating Test Suites

<div class="step-block">
  <div class="step-text">
    ### Step 1: Navigate to Test Suites
    
    1. Go to **Execution → [Collection Name]**
    2. Click **+ Create Test Suite**

    
    ### Step 2: Configure Basic Information
    
    **Name** (Required)
    - Meaningful identifier for the suite (e.g., Test Suite Testing, Daily Smoke Tests)
    
    **Description** (Optional but Recommended)
    - Document the suite's purpose, covered scenarios, and execution requirements
  </div>
</div>


### Step 3: Configure Schedule

Suites can run **On Demand** or be **Scheduled**.

| Option | Description | Use Case |
|--------|-------------|----------|
| **On Demand** | Manual execution only | Development, debugging, ad-hoc |
| **Scheduled** | Automated at specific times | Regression, nightly builds, continuous testing |

For **Scheduled** runs, set frequency (Daily/Weekly/Monthly), specific times, and recurrence.


<div class="step-block">
  <div class="step-text">
    ### Step 4: Configure Parallel Execution
    
    | Setting | Description | Benefits | Considerations |
    |---------|-------------|----------|----------------|
    | **Enabled** | Cases run simultaneously | Faster runs | Needs resources; cases must be independent |
    | **Disabled** | Cases run sequentially | Easier debugging, deterministic order | Longer total time |
    
    **Enable** when cases are independent and resources suffice.  
    **Disable** when cases depend on shared state/resources or order matters.
  </div>
  <div class="step-image">
    <h4 class="image-title">Parallel Execution Configuration</h4>
    <img src="/exgenix-documentation/img/test_suite_and_execution/2.png" alt="Configure Parallel Execution" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>


<div class="step-block">
  <div class="step-text">
    ### Step 5: Add Test Cases
    
    Click **+ Add Test Cases** to select them for the suite.
    
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

## Test Suite Information Panel

After suite creation, the panel shows:

**📅 Schedule**
- Displays execution schedule type (On Demand/Scheduled)
- Shows configured frequency and timing

**🕐 Last Run**
- Timestamp of most recent execution
- Quick access to last execution report

**👤 Created By**
- User who created the suite
- Creation timestamp

**⚡ Parallel Execution**
- Current parallel execution status (Enabled/Disabled)
- Configuration details

---

## Executing Test Suites



<div class="step-block">
  <div class="step-text">
    ### On-Demand Execution

**From Suite View**
1. Open the suite
2. Click **Execute Suite** (green, top-right)

**From Collection View**
1. Open the execution collection
2. Click the execute icon for the suite
  </div>
  <div class="step-image">
    <h4 class="image-title">Execute Suite</h4>
    <img src="/exgenix-documentation/img/test_suite_and_execution/4.png" alt="Execute Test Suite" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

---

## Execution Process

**Step 1: Initialization**
- Validate test cases, datasheets, and API configs
- Prepare environment and connections

<div class="step-block">
  <div class="step-text">
    **Step 2: Execution**
    
    The execution phase includes:
    - Sequential or parallel test case execution
    - Step-by-step progress tracking
    - Real-time status updates
    - Validation of responses
    - Log generation
    
    **Step 3: Monitoring**
    - Real-time status updates
    - Per-case progress tracking
    - Live error detection and logging
    
    **Step 4: Completion**
    - Reports generated automatically
    - Automatic redirect to **Reports** module
    - Results stored for historical analysis
  </div>
</div>

---

### Execution Status Indicators

| Icon | Status | Meaning |
|------|--------|---------|
| 🟡 | Running | Currently executing |
| 🟢 | Passed | All steps successful |
| 🔴 | Failed | One or more steps failed |
| ⏸️ | Pending | Waiting to execute |
| ⏭️ | Skipped | Skipped due to prior failure |

---

## Execution Monitoring

<div class="step-block">
  <div class="step-text">
    ### Real-Time Progress
    
    **Suite Level**
    - Total / completed / failed / remaining cases
    - Estimated time remaining (ETA)
    
    **Test Case Level**
    - Current step being executed
    - Steps completed vs remaining
    - Per-step pass/fail status
    
    ### Execution Controls
    - **Pause**: Temporarily halt execution
    - **Resume**: Continue paused execution
    - **Abort**: Terminate execution immediately
    - **View Logs**: Access real-time execution logs
  </div>
</div>

---

## Reports

<div class="step-block">
  <div class="step-text">
    After completion, you're automatically redirected to **Reports**.
    
    ### Access
    - **From Execution**: Auto-redirect or **View Report** link
    - **From Reports Module**: Navigate to **Reports** → filter by suite, date, status, user
    
    Reports provide comprehensive execution details and are generated automatically after each run.
  </div>
  <div class="step-image">
    <h4 class="image-title">Reports Dashboard</h4>
    <img src="/exgenix-documentation/img/test_suite_and_execution/5.png" alt="Test Execution Reports Dashboard" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

---

<div class="step-block">
  <div class="step-text">
    ### Reports List View
    
    The reports module displays:
    - Execution history with timestamps
    - Suite names and collections
    - Execution status (Pass/Fail)
    - Duration of each execution
    - User who triggered the execution
    - Quick access to detailed reports
    - Filter and search capabilities
  </div>
  <div class="step-image">
    <h4 class="image-title">Reports List</h4>
    <img src="/exgenix-documentation/img/test_suite_and_execution/6.png" alt="List of Execution Reports" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

---

### Report Contents

<div class="step-block">
  <div class="step-text">
    **Summary**
    
    The report summary provides:
    - Overall execution status
    - Total test cases executed
    - Pass/Fail counts and percentages
    - Execution duration
    - Start and end timestamps
    - Suite configuration details
    - Environment information
  </div>
</div>


<div class="step-block">
  <div class="step-text">
    **Test Case Details**
    
    Detailed view for each test case includes:
    - Test case name and description
    - Individual step results
    - Pass/Fail status for each step
    - Execution time per step
    - Error messages and stack traces
    - Datasheet values used
  </div>
  <div class="step-image">
    <h4 class="image-title">Test Case Details</h4>
    <img src="/exgenix-documentation/img/test_suite_and_execution/7.png" alt="Detailed Test Case Results" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>


<div class="step-block">
  <div class="step-text">
    **Request / Response Logs**
    
    Comprehensive logging includes:
    - Complete request payloads
    - Response data received
    - Message headers and metadata
    - Timestamps for each interaction
    - Field-level validation results
    - Error details and codes
    
    These logs are essential for debugging and compliance requirements.
  </div>
</div>


<div class="step-block">
  <div class="step-text">
    **Execution Timeline**
    
    Visual timeline representation:
    - Chronological execution flow
    - Duration for each test case
    - Parallel execution visualization
    - Waiting/idle times
    - Bottleneck identification
    - Resource utilization patterns
  </div>
</div>

<div class="step-block">
  <div class="step-text">
    **Timeline Details View**
    
    The detailed timeline provides:
    - Step-by-step execution sequence
    - Time taken for each operation
    - Dependencies and waiting periods
    - Parallel execution threads
    - Critical path analysis
    
    
  </div>

</div>

---

### **Report Export**
    
    Reports can be exported in multiple formats:
    - **PDF**: For sharing and documentation
    - **Excel**: For data analysis
    - **JSON**: For integration with other tools
    - **HTML**: For web publishing

---

## Scheduled Execution

### Configuring Schedules

When creating or editing a suite:

1. Set **Schedule** = **Scheduled**
2. Configure frequency:

<div class="step-block">
  <div class="step-text">
    **Daily Schedule**
    
    Configure daily execution:
    - Specific time of day
    - Timezone settings
    - Days to run (weekdays, weekends, all)
    - Notification preferences
  </div>
</div>

---

<div class="step-block">
  <div class="step-text">
    **Weekly Schedule**
    
    Configure weekly execution:
    - Select specific days of the week
    - Set execution time
    - Configure recurrence pattern
    - Set notification recipients
  </div>
</div>

---

<div class="step-block">
  <div class="step-text">
    **Monthly Schedule**
    
    Configure monthly execution:
    - Select specific date(s) of the month
    - Choose execution time
    - Handle month-end scenarios
    - Set up recurring patterns
  </div>
</div>

---

### Schedule Management

- **View** scheduled suites: Execution module → filter **Scheduled**
- **Modify**: Edit suite → update schedule → Save
- **Disable**: Change to **On Demand** → Save

### Notifications

Available notification channels:
- **Email**: Send results to stakeholders
- **Webhook**: Integrate with external systems
- **Dashboard**: Real-time updates in Exgenix

---

## Managing Test Suites

### Editing

1. Open the suite → **Edit** (pencil icon)
2. Modify name/description, schedule, parallelism, test cases
3. **Save** changes

Changes to test suites affect all future executions but do not impact historical reports.

---

<div class="step-block">
  <div class="step-text">
    ### Execution History
    
    1. Open the suite → **Execution History**
    2. View detailed execution records:
       - Date and time of execution
       - Duration
       - Status (Pass/Fail)
       - Direct links to reports
       - User who triggered execution
       - Environment details
    
    The execution history provides valuable insights into test stability and trends over time.
  </div>
</div>

---

### Deleting

1. From the execution collection, locate the suite
2. Click **Delete** → Confirm

> ⚠️ **Warning**: Deleting a suite removes only the suite container and its history—**not** the test cases themselves.

---

## Best Practices

<div class="step-block">
  <div class="step-text">
    ### Suite Organization
    
    Organize by:
    - **Functionality**: Group by feature area
    - **Priority**: Critical, High, Medium, Low
    - **Test Type**: Smoke, Regression, Performance
    - **Release Cycle**: Sprint, Release, Hotfix
    - **Environment**: Dev, QA, Staging, Production
  </div>
</div>

---

<div class="step-block">
  <div class="step-text">
    ### Example Structure
    
    A well-organized test execution structure:
    
    **📂 Regression_Tests**
    - ✅ Daily_Smoke_Tests
    - ✅ Weekly_Full_Regression
    - ✅ Critical_Path_Tests
    
    **📂 Feature_Tests**
    - ✅ Order_Management
    - ✅ Market_Data
    - ✅ Risk_Management
    
    **📂 Performance_Tests**
    - ✅ Load_Tests
    - ✅ Stress_Tests
    - ✅ Endurance_Tests
  </div>
</div>

---

### Parallel Execution Guidelines

**Enable** when:
- Cases are independent
- Data isn't shared between cases
- Infrastructure can handle concurrent load
- Faster results are needed

**Disable** for:
- Sequential dependencies
- Shared resources or sessions
- Debugging scenarios
- Resource constraints

---

### Scheduling Strategy

- **Daily:** Smoke tests, quick regression, post-deploy checks
- **Weekly:** Full regression, performance testing, comprehensive feature validation
- **On-Demand:** Development testing, bug verification, pre-production checks

---

### Report Management

- **Review** failures daily for quick fixes
- **Analyze** trends weekly for quality insights
- **Track** quality metrics monthly for strategic planning
- **Archive**: Keep recent 30 days active; archive 90 days; delete per retention policy

---
## Troubleshooting
### 1. Suite Won’t Execute
Causes: No test cases, invalid configs, missing datasheets, connectivity.  
Fix: Add cases; validate each case; ensure datasheets exist; verify connectivity.

### 2. Parallel Execution Failures
Causes: Resource contention, shared data, infra limits.  
Fix: Reduce concurrency; ensure independence; re-allocate resources.

### 3. Scheduled Execution Not Running
Causes: Misconfigured schedule, maintenance, permissions.  
Fix: Recheck schedule; verify system status; confirm permissions; view logs.

### 4. Reports Not Generated
Causes: Interrupted run, storage limits, generation error.  
Fix: Let runs complete; free storage; contact support if persistent.


---

## Summary

The **Test Suite & Execution** module provides:

✓ **Organized Test Collections** – Logical grouping of suites  
✓ **Flexible Execution** – On-demand or scheduled  
✓ **Parallelism** – Faster completion for independent cases  
✓ **Real-Time Monitoring** – Track progress live  
✓ **Detailed Reporting** – Sharable, exportable results  
✓ **Execution History** – Trend analysis over time  

### Key Takeaways

- Organize suites by function, priority, or cadence
- Use parallel execution for independent cases
- Schedule critical and recurring runs
- Monitor in real time and review reports regularly
- Maintain execution history for insights and quality trends


---