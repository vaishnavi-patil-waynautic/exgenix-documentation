---
title: Test Case & Configuration
sidebar_position: 6
hide_table_of_contents: true
---

# Test Case & Configuration Module – User Guide

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
The Test Case & Configuration module is where complete test workflows are constructed in Exgenix. It allows you to sequence API requests, integrate Test Action Units, attach datasheets, and apply execution logic that defines how a test runs end-to-end.

### Key Capabilities
- **Flow Design**: Create sequential or iterative workflow logic
- **Session Management**: Execute with shared or isolated sessions
- **Data Handling**: Apply SAME_ROW or NEXT_ROW patterns from datasheets
- **Execution Control**: Add delays, retries, and stop conditions
- **Reusability**: Use Test Action Units & shared API configurations

---

## Module Structure

| Component | Purpose |
|----------|---------|
| **Collections** | Organize test cases by domain, project, or workflow |
| **Test Cases** | Define executable test scenarios |
| **Steps** | Ordered operations executed inside a test case |

---

## Test Cases
A **Test Case** represents a complete, executable scenario consisting of sequential steps that simulate a real exchange or service interaction.

Typical step types include:
- Socket Connection
- Session Login / Logout flows
- Business API Requests & Responses
- Test Action Units (Reusable grouped flows)
- Validation & Assertions

---

## Creating a Test Case

### Step 1 — Navigate to Test Cases
1. Go to **Test Configuration** in the left menu
2. Select **Test Cases**
3. Click **+ Create Test Case**

### Step 2 — Provide Basic Information
| Field | Description |
|-------|-------------|
| Name (Required) | Unique identifier for the test |
| Description | Purpose, flow summary, and assumptions |

### Step 3 — Add Steps
Click **+ Add Step** → Choose from:
- API Configuration
- Test Action Unit
- Custom Steps (Data, Delay, Variables)

---

## Step Settings

| Setting | Description |
|--------|-------------|
| **Wait Time** | Pause execution for synchronization |
| **Datasheet** | Source dataset for step parameters |
| **Row Pattern** | SAME_ROW / NEXT_ROW behavior |
| **Assertions** | Validate expected vs actual response |
| **Stop on Fail** | Continue or abort test on failure |

---

## Advanced Features

### Iterative Execution
Repeat steps across multiple rows of datasheet data.

### Session Control
- **Single Session**: All steps share same connection context
- **Multi Session**: Each test instance forms its own session

### Conditional Flow (If/Then Logic)
Supported through:
- Separate branching Test Cases
- Multiple Test Action Units

---

## Best Practices

| Area | Recommendation |
|------|---------------|
| Naming | Use meaningful operation-based names |
| Flow Design | Keep steps focused and logically grouped |
| Data Management | Store reusable values in shared datasheets |
| Reusability | Prefer **Test Action Units** for shared operations |

---

## Managing Test Cases

- **Edit** to update step ordering or add validations
- **Clone** to create variations quickly
- **Delete** only allowed when unused in Execution suites

Execution history is stored and viewable for analysis.

---

## Common Scenarios

| Scenario | Pattern |
|---------|---------|
| Login → Business Request → Logout | Use Login_TAU + Business API + Logout_TAU |
| Multi-Order Execution | NEXT_ROW datasheet iteration |
| Market Data Subscription | Connect → Subscribe → Validate |

---

## Troubleshooting

| Issue | Resolution |
|-------|------------|
| Step fails to execute | Check datasheet values & API config |
| Incorrect response | Validate assertions and expected fields |
| Wrong dataset used | Confirm Row Pattern & row start index |
| Session issues | Ensure session start/end steps are included |

---

## Summary
The **Test Case & Configuration module** allows structured creation of complete automated test scenarios using reusable components and controlled data execution patterns.

**Key Takeaways**
- Use Test Action Units for repeatable flows
- Manage data patterns carefully (SAME_ROW / NEXT_ROW)
- Apply clear naming and step grouping for maintainability
