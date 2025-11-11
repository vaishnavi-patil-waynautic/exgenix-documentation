---
title: Scenatio 1 woking
sidebar_position: 2
hide_table_of_contents: true
---

# Scenario 1: ETI API Definition to Automated Script

## Table of Contents
1. [Overview](#overview)  
2. [Prerequisites](#prerequisites)  
3. [Phase 1: Create API Configuration Collection](#phase-1-create-api-configuration-collection)  
4. [Phase 2: Configure New Order Single API (Request)](#phase-2-configure-new-order-single-api-request)  
5. [Phase 3: Configure New Order Response API](#phase-3-configure-new-order-response-api)  
6. [Phase 4: Create Test Action Unit (Login TAU)](#phase-4-create-test-action-unit--login-tau)  
7. [Phase 5: Create Test Case](#phase-5-create-test-case)  
8. [Phase 6: Create Test Suite & Execute](#phase-6-create-test-suite--execute)  
9. [Verification Checklist](#verification-checklist)  
10. [Key Learnings](#key-learnings)

---

## Overview

This scenario demonstrates how to convert an **ETI API specification** into a fully executable automated test using **Exgenix**.

It covers:

- Importing message layouts from PDF  
- Creating positive/negative/edge case datasheets  
- Designing reusable Test Action Units  
- Building automated end-to-end test cases  
- Executing test suites and validating responses  

---

## Prerequisites

Ensure the following before starting:

| Requirement | Details |
|------------|---------|
| ETI API Specification | PDF format |
| Exgenix Access | Login credentials |
| Workspace | Example: **Exchange 1** |

---

## Phase 1: Create API Configuration Collection

### Step 1: Navigate
- Login to Exgenix
- Select project (**Exchange 1**)
- Go to **Automation → API Configuration**

### Step 2: Create Collection

| Field | Value |
|------|-------|
| Name | `ETI_Trading_APIs` |
| Description | ETI protocol trading API configurations |

**Result:** Collection `ETI_Trading_APIs` is created.

---

## Phase 2: Configure New Order Single API (Request)

### Step 1: Create API Config
- Open collection
- Click **+ Create API Config**

#### Basic Info

| Field | Value |
|------|-------|
| Action Type | `TCP_IP_REQUEST` |
| Name | `New Order Single (short layout)` |
| Unique ID | `101251` |
| Description | Submit new limit order using short layout format |

### PDF Import

| Setting | Value |
|--------|--------|
| Page Number | 71 |
| Table Name | New Order Single (short layout) |
| Max Continuation Pages | 5 |

Click **Import PDF → Select File → Import → Save and Proceed**

### Create Datasheets

#### Positive Datasheet
```
Name: DS_positive_nos_01
Description: Positive test cases for limit orders

Price: ${random_decimal(100.0, 500.0, 2)}
SimpleSecurityID: ${pick_random([12345,12346,12347])}
OrderQty: ${random_int(10,1000)}
MinQuantity: ${random_numeric(2)}
```

#### Negative Datasheet examples:
- Price = 999999, OrderQty = 100
- OrderQty = 0
- Side = 9

#### Edge Case Datasheet:
- Boundary values for price and quantity

---

## Phase 3: Configure New Order Response API

| Field | Value |
|------|-------|
| Action Type | `TCP_IP_RESPONSE` |
| Name | `New Order Response (Lean Order)` |
| Unique ID | `10102` |

### PDF Import

| Setting | Value |
|--------|--------|
| Page Number | 101 |
| Table Name | New Order Response (Lean Order) |
| Max Continuation Pages | 3 |

### Validation Datasheet Example
```
MsgSeqNum: ${validate_or_capture(msg_seq)}
ClOrdID: ${validate_or_capture(order_id)}
OrderID: ${capture(order_id)}
ExecID: ${capture(exec_id)}
OrderStatus: 2
ExecType: 0
```

---

## Phase 4: Create Test Action Unit — Login TAU

| Field | Value |
|------|-------|
| Name | Login APIs |
| Type | API Test Action Unit |

#### Steps in TAU:
1. Socket Connection
2. Session Logon
3. Session Logon Response
4. User Logon
5. User Logon Response

---

## Phase 5: Create Test Case

| Field | Value |
|------|-------|
| Name | `ETI_NewOrder_Positive` |
| Description | Validate successful new order workflow |

#### Steps

| Step | Type | API/TAU | Datasheet | Pattern | Session |
|------|------|---------|----------|---------|---------|
| 1 | TEST ACTION UNIT | Login TAU | - | SAME_ROW | session1 |
| 2 | TCP_IP_REQUEST | New Order Single (short layout) | DS_positive_nos_01 | NEXT_ROW (Row 1) | session1 |
| 3 | TCP_IP_RESPONSE | New Order Response (Lean Order) | validation_datasheet | NEXT_ROW (Row 1) | session1 |

---

## Phase 6: Create Test Suite & Execute

| Field | Value |
|------|-------|
| Name | `ETI Order Validation Suite` |
| Schedule | On Demand |
| Parallel Execution | Disabled |

- Add test case: `ETI_NewOrder_Positive`
- Click **Execute Suite**
- Monitor execution
- View reports

---

## Verification Checklist

| Check | Status |
|------|:------:|
| PDF imported correctly | ✅ |
| Datasheets prepared | ✅ |
| Login TAU working | ✅ |
| Test case sequence correct | ✅ |
| Suite executed successfully | ✅ |
| Response validations passed | ✅ |

---

## Key Learnings

- **PDF import eliminates manual field configuration**
- **Base row inheritance** reduces redundant data entry
- **Capture functions** create true end-to-end API chaining
- Full test automation can be completed **within minutes**

