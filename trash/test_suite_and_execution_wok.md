---
title: Test Suite & Execution mod
sidebar_position: 7
hide_table_of_contents: true
---

# Test Suite & Execution Module – User Guide

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
The **Test Suite & Execution** module allows you to organize, schedule, and execute test cases with complete control over flow, parallel execution, and reporting. It supports real-time monitoring and automatic report generation.

### Key Capabilities
- **Test Organization** – Group related test cases
- **Batch Execution** – Run multiple test cases at once
- **Parallel Execution** – Execute test cases simultaneously
- **Scheduling** – Automate test runs
- **Execution Monitoring** – Track execution in real time
- **Report Generation** – View and export detailed results

---

## Module Structure
The execution module follows this hierarchy:

| Level | Purpose |
|------|---------|
| **Test Execution Collection** | Top-level organizer for execution groups |
| **Test Suite** | Logical grouping of test cases |
| **Test Case** | Individual executable scenario |

---

## Components

| Component | Purpose | Contains |
|----------|---------|----------|
| **Test Execution Collection** | High-level execution group | Multiple Test Suites |
| **Test Suite** | Organized set of test cases | Multiple Test Cases |
| **Test Case** | Single executable scenario | Sequenced Test Steps |

---

## Creating Test Execution Collections

### Purpose
To organize test suites by project, feature, release cycle, or test objective.

### Steps
1. Navigate to **Execution**
2. Click **+ Create Collection**
3. Provide:
   - **Name**
   - **Description**

---

## Creating Test Suites

### Step 1: Open Collection
Go to **Execution → [Collection Name]** and click **+ Create Test Suite**.

### Step 2: Configure Basic Information
- **Name (Required)**
- **Description (Optional)**

### Step 3: Configure Schedule
| Mode | Description | Use Case |
|------|-------------|---------|
| **On Demand** | Run manually | Development / Debugging |
| **Scheduled** | Run automatically | Regression / Daily runs |

### Step 4: Configure Parallel Execution
| Mode | Benefit | When to Use |
|------|--------|------------|
| **Enabled** | Faster execution | Independent test cases |
| **Disabled** | Deterministic order | Shared state / Debugging |

### Step 5: Add Test Cases
Use **Add Test Cases** dialog to select cases.

---

## Test Suite Information Panel
Displays:
- Schedule
- Last Run
- Created By
- Parallel Execution Status

---

## Executing Test Suites

### On-Demand Execution
You can execute:
- From **Suite View**: Click **Execute Suite**
- From **Collection View**: Use the **Execute** icon

### Execution Process
1. **Initialization**
2. **Execution**
3. **Monitoring**
4. **Completion → Reports**

### Execution Status Indicators
| Status | Meaning |
|-------|---------|
| 🟡 Running | Execution in progress |
| 🟢 Passed | All test cases passed |
| 🔴 Failed | One or more test cases failed |
| ⏸️ Pending | Waiting to start |
| ⏭️ Skipped | Skipped due to conditions |

---

## Execution Monitoring
Track:
- Suite-level progress
- Test case status
- Step-by-step execution logs

---

## Reports
Each execution generates a report containing:
- Summary results
- Per-test-case details
- Logs and validations
- Execution timeline

**Export Formats:** PDF, Excel, JSON, HTML

---

## Scheduled Execution
Configure automated runs:
- Daily
- Weekly
- Monthly

Notification options available.

---

## Managing Test Suites
- **Edit**: Update configuration, schedule, or parallelism
- **Execution History**: View past run logs & reports
- **Delete**: Only allowed if not required by other workflows

---

## Best Practices
- Group suites by functionality or release cycle
- Enable parallel execution only when cases are independent
- Schedule recurring runs for regression stability
- Review reports frequently to track test trends

---

## Troubleshooting

| Issue | Possible Cause | Solution |
|------|----------------|---------|
| Suite won’t run | Invalid configuration | Validate datasheets & APIs |
| Parallel execution fails | Shared session/data conflict | Disable parallel mode |
| Scheduled run didn’t trigger | Schedule misconfigured | Re-check schedule settings |
| Report missing | Execution interrupted | Re-run suite and ensure completion |

---

## Summary
The **Test Suite & Execution** module provides structured execution flow, real-time monitoring, automation scheduling, and detailed reporting, forming the core operational layer of testing in Exgenix.

