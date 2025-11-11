---
title: Test Action Unit
sidebar_position: 5
hide_table_of_contents: true
---

# Test Action Unit – User Guide

## Table of Contents
- [Overview](#overview)
- [What Is a Test Action Unit](#what-is-a-test-action-unit)
- [Structure](#structure)
- [Creating a Test Action Unit](#creating-a-test-action-unit)
- [Example](#example)
- [Datasheet Configuration](#configuring-datasheets-for-test-action-units)
- [Using Test Action Units](#using-test-action-units-in-test-cases)
- [Common Patterns](#common-test-action-unit-patterns)
- [Best Practices](#best-practices)
- [Troubleshooting](#troubleshooting)
- [Summary](#summary)

---

## Overview
Test Action Units are reusable, modular components within Exgenix that encapsulate a sequence of related test steps into a single logical unit.

### Key Benefits
- Organize reusable flows (Login, Logout, Market Data, Order Validation)
- Improve maintainability and consistency
- Enable faster test case creation
- Standardize execution logic

---

## What Is a Test Action Unit?
A Test Action Unit groups together multiple API-based steps that logically belong together.

### Examples
- **Login Flow**: Socket connection → Session Logon → User Logon → Validation
- **Logout Flow**: User logout → Session logout → Connection close

---

## Structure

| Component       | Description |
|----------------|-------------|
| Name           | Descriptive identifier for the unit |
| Description    | Purpose and usage information |
| Test Steps     | API configurations executed sequentially |
| Execution Flow | The defined order of execution |

---

## Creating a Test Action Unit

### Step 1: Navigate to Test Action Units
1. Go to **Test Configuration**
2. Select **Test Action Unit**
3. Click **+ Create Test Action Unit**

### Step 2: Define Basic Information
| Field | Description |
|------|-------------|
| **Action Type (Required)** | Select **API Test Action Unit** |
| **Name (Required)** | Meaningful, consistent identifier |
| **Description** | Purpose, included steps, prerequisites |

### Step 3: Add Test Steps
Click **+ Add Step**, then choose from API components such as:
- Socket Connection
- TCP/IP Request / Response
- Custom Data Type

| Field | Description |
|------|-------------|
| Description | Short summary of the action |
| Wait Time | Delay before/after execution |
| Datasheet | Field data source |
| Row Pattern | SAME_ROW / NEXT_ROW |

---

## Example
*(Insert screenshot or example flow here, if available.)*

---

## Configuring Datasheets for Test Action Units

When adding a Test Action Unit inside a test case, configure the datasheet per step.

| Column | Description |
|--------|-------------|
| API Name | API included in the unit |
| Collection | API’s parent collection |
| Datasheet | Select data source |
| Row No. | Starting row index |
| Actions | Edit or Delete |

### Row Rules
- **SAME_ROW** → Entire unit uses the same dataset
- **NEXT_ROW** → Advance per iteration

---

## Using Test Action Units in Test Cases
1. Open/create a test case
2. Click **+ Add Step**
3. Select **TEST ACTION UNIT**
4. Choose the unit
5. Configure datasheets

---

## Common Test Action Unit Patterns

| Pattern | Description |
|--------|-------------|
| Authentication Flow | Login session and user authentication |
| Cleanup Flow | Logout + session termination |
| Order Validation | Pre-checks → submission → validation |
| Market Data Subscription | Subscription + confirmation handling |

---

## Best Practices

### Design Principles
- **Single purpose** per unit
- **High cohesion**, steps belong together
- **Include validations** inside the flow

### Naming Conventions
Format: `<Action>_<Component>_Tau`

Examples:
- `Login_User_Tau`
- `Logout_Session_Tau`

### Datasheet Strategy
- Consolidated sheet or per-step sheets depending on complexity

---

## Troubleshooting

| Issue | Resolution |
|-------|------------|
| Steps not executing | Check datasheets, API configs, connectivity |
| Variable capture failing | Verify syntax and validation rules |
| Unit cannot be added | Ensure unit is saved and valid |

---

## Summary
Test Action Units enhance reusability, maintainability, and clarity in test workflows.

**Key Takeaways**
- Build logical, reusable execution modules
- Configure datasheets per step for flexibility
- Reduce test case size and complexity

