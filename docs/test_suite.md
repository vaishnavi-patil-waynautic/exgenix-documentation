---
id: test_suite
title: Test Suite & Execution Module - User Guide
sidebar_position: 7
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

# Test Suite & Execution Module — User Guide

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

<FeatureGrid>
  <FeatureCard
    icon="layers"
    title="Test Organization"
    description="Group related test cases into suites for better management"
    color="#2563eb"
  />
  <FeatureCard
    icon="play"
    title="Batch Execution"
    description="Run many test cases together in a single execution"
    color="#10b981"
  />
  <FeatureCard
    icon="zap"
    title="Parallel Execution"
    description="Execute test cases simultaneously for faster results"
    color="#f59e0b"
  />
  <FeatureCard
    icon="calendar"
    title="Scheduling"
    description="Automate runs at specific times with flexible scheduling"
    color="#8b5cf6"
  />
  <FeatureCard
    icon="eye"
    title="Execution Monitoring"
    description="Real-time status tracking with detailed progress information"
    color="#ec4899"
  />
  <FeatureCard
    icon="chart"
    title="Report Generation"
    description="Detailed, sharable post-execution reports automatically generated"
    color="#06b6d4"
  />
</FeatureGrid>

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

  <div class="step-image">
    <h4 class="image-title">Test Execution</h4>
    <img src="/exgenix-documentation/img/test_suite_and_execution/test_execution.png" alt="Test Execution" />
    <p class="image-caption">🖱️ Click to expand image</p>
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
  
  </div>

  <div class="step-image">
    <h4 class="image-title">Test Collection View</h4>
    <img src="/exgenix-documentation/img/test_suite_and_execution/test_collection.png" alt="Open Test Collection" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

---

### Step 2: Configure Basic Information
    
**Name** (Required)
- Meaningful identifier for the suite (e.g., Test Suite Testing, Daily Smoke Tests)

**Description** (Optional but Recommended)
- Document the suite's purpose, covered scenarios, and execution requirements

---

### Step 3: Configure Schedule

<div class="step-block">
  <div class="step-text">
Suites can run **On Demand** or be **Scheduled**.

| Option | Description | Use Case |
|--------|-------------|----------|
| **On Demand** | Manual execution only | Development, debugging, ad-hoc |
| **Scheduled** | Automated at specific times | Regression, nightly builds, continuous testing |

For **Scheduled** runs, set frequency (Daily/Weekly/Monthly), specific times, and recurrence.

  </div>
  <div class="step-image">
    <h4 class="image-title">Parallel Execution Configuration</h4>
    <img src="/exgenix-documentation/img/test_suite_and_execution/2.png" alt="Configure Parallel Execution" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

---

### Step 4: Configure Parallel Execution
    
| Setting | Description | Benefits | Considerations |
|---------|-------------|----------|----------------|
| **Enabled** | Cases run simultaneously | Faster runs | Needs resources; cases must be independent |
| **Disabled** | Cases run sequentially | Easier debugging, deterministic order | Longer total time |

**Enable** when cases are independent and resources suffice.  
**Disable** when cases depend on shared state/resources or order matters.

---

<div class="step-block">
  <div class="step-text">
    ### Step 5: Add Test Cases
    
    Click **+ Add Test Cases** to select them for the suite.
    
    **Add Test Cases Dialog Features:**
    - Search functionality to find specific test cases
    - View test case details (name, collection, steps, execution status)
    - Select multiple test cases at once
    - See selection count before adding
    - Preview test case descriptions
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

**🕕 Last Run**
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
| <StatusBadge status="warning" text="Running" /> | Running | Currently executing |
| <StatusBadge status="success" text="Passed" /> | Passed | All steps successful |
| <StatusBadge status="error" text="Failed" /> | Failed | One or more steps failed |
| <StatusBadge status="pending" text="Pending" /> | Pending | Waiting to execute |
| <StatusBadge status="info" text="Skipped" /> | Skipped | Skipped due to prior failure |

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

### Report Export
    
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

<details class="green-collapsible">
<summary><strong>Editing Test Suites</strong></summary>

1. Open the suite → **Edit** (pencil icon)  
2. Modify name/description, schedule, parallelism, test cases  
3. Click **Save** to apply the changes  

Changes affect **future executions only** and do **not** modify historical reports.

</details>

---

<details class="green-collapsible">
<summary><strong>Execution History</strong></summary>

1. Open the suite → **Execution History**  
2. View detailed execution records:
   - Date and time  
   - Duration  
   - Pass/Fail status  
   - Links to reports  
   - User who triggered execution  
   - Environment details  

Execution history helps analyze **stability trends** and **long-term quality**.

</details>

---

<details class="green-collapsible">
<summary><strong>Deleting Test Suites</strong></summary>

1. Navigate to the execution collection  
2. Locate the suite  
3. Click **Delete** → Confirm  

<InfoBox type="danger" title="Warning">

Deleting a suite removes the suite and its history, **but not the test cases**.

</InfoBox>

</details>

---

## Best Practices

<details class="green-collapsible">
<summary><strong>Suite Organization</strong></summary>

Organize suites by:

- **Functionality** (feature area)  
- **Priority** (Critical, High, Medium, Low)  
- **Test Type** (Smoke, Regression, Performance)  
- **Release Cycle** (Sprint, Release, Hotfix)  
- **Environment** (Dev, QA, Staging, Prod)

</details>

---

<details class="green-collapsible">
<summary><strong>Example Suite Structure</strong></summary>

A clean and scalable structure:

**📂 Regression_Tests**  
- Daily_Smoke_Tests  
- Weekly_Full_Regression  
- Critical_Path_Tests  

**📂 Feature_Tests**  
- Order_Management  
- Market_Data  
- Risk_Management  

**📂 Performance_Tests**  
- Load_Tests  
- Stress_Tests  
- Endurance_Tests  

</details>

---

<details class="green-collapsible">
<summary><strong>Parallel Execution Guidelines</strong></summary>

### Enable when:
- Test cases are independent  
- No shared data  
- Infra supports concurrency  
- Faster results needed  

### Disable when:
- Sequential dependencies  
- Shared resources/sessions  
- Debugging scenarios  
- Limited infrastructure  

</details>

---

<details class="green-collapsible">
<summary><strong>Scheduling Strategy</strong></summary>

- **Daily:** Smoke, quick regression, post-deploy verification  
- **Weekly:** Full regression, performance tests  
- **On-Demand:** Dev testing, bug verification, pre-production checks  

</details>

---

<details class="green-collapsible">
<summary><strong>Report Management</strong></summary>

- **Review** failures daily  
- **Analyze** trends weekly  
- **Track** quality monthly  
- **Archive Strategy:**  
  - Keep 30 days active  
  - Archive 90 days  
  - Delete older per policy  

</details>

---

## Troubleshooting

<details class="green-collapsible">
<summary><strong>1. Suite Won't Execute</strong></summary>

**Causes:**  
- No test cases added  
- Invalid test suite configurations  
- Missing datasheets  
- Connectivity issues  

**Fix:**  
- Add at least one test case  
- Validate each test case configuration  
- Ensure datasheets exist and are linked  
- Verify system/network connectivity  

</details>

---

<details class="green-collapsible">
<summary><strong>2. Parallel Execution Failures</strong></summary>

**Causes:**  
- Resource contention  
- Shared/locked data  
- Infrastructure limitations  

**Fix:**  
- Reduce level of parallelism  
- Ensure test cases are fully independent  
- Allocate additional resources if needed  

</details>

---

<details class="green-collapsible">
<summary><strong>3. Scheduled Execution Not Running</strong></summary>

**Causes:**  
- Misconfigured schedule  
- System maintenance window  
- Missing permissions  
- Scheduler errors  

**Fix:**  
- Recheck schedule configuration  
- Verify system/service status  
- Confirm user or system permissions  
- Review scheduler logs for errors  

</details>

---

<details class="green-collapsible">
<summary><strong>4. Reports Not Generated</strong></summary>

**Causes:**  
- Interrupted execution  
- Storage limitations  
- Report generation error  

**Fix:**  
- Allow tests to finish fully  
- Free up storage or increase quota  
- Contact support if issue persists  

</details>

---

## Summary

The **Test Suite & Execution** module provides:

✓ **Organized Test Collections** — Logical grouping of suites  
✓ **Flexible Execution** — On-demand or scheduled  
✓ **Parallelism** — Faster completion for independent cases  
✓ **Real-Time Monitoring** — Track progress live  
✓ **Detailed Reporting** — Sharable, exportable results  
✓ **Execution History** — Trend analysis over time  

### Key Takeaways

- Organize suites by function, priority, or cadence
- Use parallel execution for independent cases
- Schedule critical and recurring runs
- Monitor in real time and review reports regularly
- Maintain execution history for insights and quality trends

---