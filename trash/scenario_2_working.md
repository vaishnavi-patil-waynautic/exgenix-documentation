---
title: Scenatio 2 working
sidebar_position: 2
hide_table_of_contents: true
---

# Scenario 2: Complete Trade Flow Test Case Design

## Table of Contents
- [Overview](#overview)
- [Business Objective](#business-objective)
- [Prerequisites](#prerequisites)
- [Phase 1: Plan the Test Flow](#phase-1-plan-the-test-flow)
  - [Workflow Diagram](#workflow-diagram)
  - [Key Variables](#key-variables)
- [Phase 2: Prepare Datasheets](#phase-2-prepare-datasheets)
- [Phase 3: Create the Test Case](#phase-3-create-the-test-case)
- [Phase 4: Review Test Case Configuration](#phase-4-review-test-case-configuration)
- [Phase 5: Execute and Validate](#phase-5-execute-and-validate)
- [Phase 6: Extend Test Case (Optional Enhancements)](#phase-6-extend-test-case-optional-enhancements)
- [Verification & Best Practices](#verification--best-practices)
- [Key Learnings from Scenario 2](#key-learnings-from-scenario-2)
- [Comparison: Manual vs Exgenix Automation](#comparison-manual-vs-exgenix-automation)
- [Expanding the Test Suite](#expanding-the-test-suite)
- [Summary](#summary)

---

## Overview
This scenario demonstrates designing a comprehensive trade flow test case covering the full order lifecycle:
- Login
- Order placement
- Order confirmation
- Order cancellation
- Cancellation confirmation
- Logout

---

## Business Objective
Validate the workflow ensuring:
- Successful authentication
- Correct order placement & ID capture
- Correct cancellation and reference tracking
- Clean session termination

---

## Prerequisites

### Test Action Units
| TAU | Purpose |
|----|---------|
| **Login Tau** | Establish session & authenticate |
| **Logout Tau** | Clean session termination |

### API Configurations
| API Name | Type |
|---------|------|
| New Order Single (short layout)_10125 | Request |
| New Order Response (Lean Order)_10126 | Response |
| Cancel Order Single_10109 | Request |
| Cancel Order Response (Standard Order)_10110 | Response |

---

## Phase 1: Plan the Test Flow

### Workflow Diagram
```
1. Login Tau
2. New Order Request
3. New Order Response (Capture: order_id, exec_id)
4. Cancel Order Request (Uses order_id)
5. Cancel Order Response (Capture: cancel_id)
6. Logout Tau
```

### Key Variables
| Variable | Captured From | Used In |
|---------|--------------|--------|
| session_id | Login Tau | All APIs |
| auth_token | Login Tau | Requests |
| order_id | New Order Response | Cancel Request |
| exec_id | New Order Response | Reporting |
| cancel_id | Cancel Order Response | Audit |

---

## Phase 2: Prepare Datasheets
Prepare datasheets for:
- New Order Request & Response
- Cancel Order Request & Response

Use `capture()` and `validate_or_capture()` where appropriate.

---

## Phase 3: Create the Test Case
| Step | Type | Name |
|------|------|------|
| 1 | TEST ACTION UNIT | Login Tau |
| 2 | TCP_IP_REQUEST | New Order Request |
| 3 | TCP_IP_RESPONSE | New Order Response |
| 4 | TCP_IP_REQUEST | Cancel Order Request |
| 5 | TCP_IP_RESPONSE | Cancel Order Response |
| 6 | TEST ACTION UNIT | Logout Tau |

---

## Phase 4: Review Test Case Configuration
- Set session mode = **session1**
- Use **SAME_ROW** for Login/Logout Tau steps
- Ensure captured variables are referenced correctly

---

## Phase 5: Execute and Validate
**Expected Result:**  
- Execution Time: ~11 seconds  
- Status: **PASSED** ✅

---

## Phase 6: Extend Test Case (Optional Enhancements)
- Bulk execution loops
- Dynamic/randomized fields
- Error scenario validations

---

## Verification & Best Practices
- Always pair **Login** and **Logout**
- Capture identifiers once and reuse
- Validate responses after every request

---

## Key Learnings from Scenario 2
- End-to-end flows ensure process stability
- Reusable blocks reduce effort drastically
- Captured chaining improves robustness

---

## Comparison: Manual vs Exgenix Automation
| Approach | Duration |
|---------|----------|
| Manual Testing | ~100 minutes |
| Exgenix Automated Execution | ~11 seconds |

---

## Expanding the Test Suite
Next scenarios to implement:
- Modify Order
- Partial Fill Handling
- Stress Load Multi-Order Fire

---

## Summary
Scenario 2 shows how Exgenix supports scalable, fast, and reliable end-to-end trade workflow automation with optimal reuse and data-driven execution.

