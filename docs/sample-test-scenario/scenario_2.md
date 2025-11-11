---
title: Scenario 2
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

This scenario demonstrates how to design a **comprehensive trade flow test case** covering the complete order lifecycle:

- Login  
- Order placement  
- Order confirmation  
- Order cancellation  
- Cancellation confirmation  
- Logout  

---

## Business Objective

Validate the end-to-end workflow to ensure:

- Successful authentication  
- Correct order placement  
- Accurate capture of order identifiers  
- Correct order cancellation  
- Proper cancellation confirmation  
- Clean session logout  

---

## Prerequisites

### Test Action Units

| TAU | Purpose |
|------|---------|
| **Login Tau** | Establish session & authenticate |
| **Logout Tau** | Clean session termination |

### API Configurations

| API Name | Type | Unique ID |
|-----------|------|-----------|
| New Order Single (short layout) | Request | 10125 |
| New Order Response (Lean Order) | Response | 10126 |
| Cancel Order Single | Request | 10109 |
| Cancel Order Response (Standard Order) | Response | 10110 |

---

## Phase 1: Plan the Test Flow

### Workflow Diagram


```
┌──────────────────────────────────────────────────────────────┐
│                    Trade Flow Test Case                       │
└──────────────────────────────────────────────────────────────┘

1. [Login Tau]
   ├─ Establish Connection
   ├─ Create Session (Capture: session_id)
   └─ Authenticate User (Capture: auth_token)

2. [New Order Request]
   └─ Submit order: AAPL, BUY, 100 @ 150.50

3. [New Order Response]
   ├─ Validate: ACCEPTED
   └─ Capture: order_id, exec_id

4. [Cancel Order Request]
   └─ Cancel using captured order_id

5. [Cancel Order Response]
   ├─ Validate: CANCELLED
   └─ Capture: cancel_id

6. [Logout Tau]
   ├─ Terminate Session
   └─ Close Connection

✓ Test Complete
```

### Key Variables in Flow

| Variable | Captured From | Used In |
|---------|--------------|---------|
| `session_id` | Login Tau | All subsequent APIs (Steps 2-6) |
| `auth_token` | Login Tau | Request authentication |
| `order_id` | New Order Response | Cancel Order Request |
| `exec_id` | New Order Response | Audit trail |
| `cancel_id` | Cancel Order Response | Cancellation audit |

---

## Phase 2: Prepare Datasheets

### Step 2.1: New Order Request Datasheet

<div class="step-block">
  <div class="step-text">

**Name:** `DS_NOS_01`  
**Description:** Valid limit orders for trade flow testing

**Row 1 (Base Row):**

| Field | Value |
|-------|-------|
| BodyLen | 56 |
| TemplateID | 10125 |
| MsgSeqNum | `${sequence(msg_seq)}` |
| SenderSubID | `${session_id}` |
| Price | 15050 |
| SenderLocationID | 1001 |
| ClOrdID | `${sequence(order_id, prefix="ORD", start=1000)}` |
| OrderQty | 100 |
| SimpleSecurityID | 12345 |
| Side | 1 |

  </div>
</div>

### Step 2.2: New Order Response Datasheet

<div class="step-block">
  <div class="step-text">

**Name:** `DS_NOR_01`  
**Description:** Response validation for new order acceptance

**Row 1:**

| Field | Value |
|-------|-------|
| BodyLen | 56 |
| TemplateID | 10126 |
| MsgSeqNum | `${validate_or_capture(msg_seq)}` |
| SenderSubID | `${session_id}` |
| ClOrdID | `${validate_or_capture(order_id)}` |
| OrderID | `${capture(order_id)}` |
| ExecID | `${capture(exec_id)}` |
| OrderStatus | 2 |
| ExecType | 0 |
| OrdType | 2 |
| Side | 1 |
| TimeInForce | 0 |

  </div>
</div>

### Step 2.3: Cancel Order Request Datasheet

<div class="step-block">
  <div class="step-text">

**Name:** `DS_COS_01`  
**Description:** Cancel order using captured order ID

**Row 1:**

| Field | Value |
|-------|-------|
| BodyLen | 56 |
| TemplateID | 10109 |
| MsgSeqNum | `${sequence(msg_seq)}` |
| SenderSubID | `${session_id}` |
| ClOrdID | `${sequence(cancel_id, prefix="CXL", start=5000)}` |
| OrigClOrdID | `${order_id}` |
| OrderID | `${order_id}` |
| SimpleSecurityID | 12345 |
| SenderLocationID | 1001 |
| AccountType | 1 |
| Side | 1 |

**Note:** The `order_id` captured from Step 3 (New Order Response) is used here.

  </div>
</div>

### Step 2.4: Cancel Order Response Datasheet

<div class="step-block">
  <div class="step-text">

**Name:** `DS_COR_01`  
**Description:** Validation for successful cancellation

**Row 1:**

| Field | Value |
|-------|-------|
| BodyLen | 56 |
| TemplateID | 10110 |
| MsgSeqNum | `${validate_or_capture(msg_seq)}` |
| SenderSubID | `${session_id}` |
| OrderID | `${order_id}` |
| ClOrdID | `${validate_or_capture(cancel_id)}` |
| OrigClOrdID | `${order_id}` |
| ExecID | `${capture(cancel_exec_id)}` |
| OrderStatus | 4 |
| ExecType | 4 |
| OrdType | 2 |
| Side | `${validate_or_capture(side)}` |
| TimeInForce | 0 |

  </div>
</div>

---

## Phase 3: Create the Test Case

### Step 3.1: Navigate & Create

<div class="step-block">
  <div class="step-text">
    - Navigate to **Test Configuration → Test Case**
    - Click **+ Create Test Case**
  </div>
</div>

### Step 3.2: Basic Info

<div class="step-block">
  <div class="step-text">

| Field | Value |
|------|-------|
| Name | `Trade_Test` |
| Description | End-to-end trade flow validation covering order placement and cancellation |

  </div>
</div>

### Step 3.3: Step 1 - Login Tau

<div class="step-block">
  <div class="step-text">

| Field | Value |
|------|-------|
| Type | TEST ACTION UNIT |
| Test Step | Login Tau |
| Session | session1 |
| Pattern | SAME_ROW |
| On Error | Abort |

**Note:** Configure datasheets for each API inside Login Tau (Socket Connection, Session Logon, User Logon, etc.)

  </div>
</div>

### Step 3.4: Step 2 - New Order Request

<div class="step-block">
  <div class="step-text">

| Field | Value |
|------|-------|
| Type | TCP_IP_REQUEST |
| Test Step | New Order Single (short layout)_10125 |
| Session | session1 |
| Datasheet | DS_NOS_01 (Associate Related Datasheet) |
| Pattern | NEXT_ROW |
| Row | 1 |
| On Error | Abort |

  </div>
</div>

### Step 3.5: Step 3 - New Order Response

<div class="step-block">
  <div class="step-text">

| Field | Value |
|------|-------|
| Type | TCP_IP_RESPONSE |
| Test Step | New Order Response (Lean Order)_10126 |
| Session | session1 |
| Datasheet | DS_NOR_01 (Associate Related Datasheet) |
| Pattern | NEXT_ROW |
| Row | 1 |
| On Error | Abort |

**Critical:** This step captures `order_id` and `exec_id` for use in subsequent steps.

  </div>
</div>

### Step 3.6: Step 4 - Cancel Order Request

<div class="step-block">
  <div class="step-text">

| Field | Value |
|------|-------|
| Type | TCP_IP_REQUEST |
| Test Step | Cancel Order Single_10109 |
| Session | session1 |
| Datasheet | DS_COS_01 (Associate Related Datasheet) |
| Pattern | SAME_ROW |
| Row | 1 |
| On Error | Abort |

**Critical:** This step uses the `order_id` captured from Step 3.

  </div>
</div>

### Step 3.7: Step 5 - Cancel Order Response

<div class="step-block">
  <div class="step-text">

| Field | Value |
|------|-------|
| Type | TCP_IP_RESPONSE |
| Test Step | Cancel Order Response (Standard Order)_10110 |
| Session | session1 |
| Datasheet | DS_COR_01 (Associate Related Datasheet) |
| Pattern | NEXT_ROW |
| Row | 1 |
| On Error | Abort |

  </div>
</div>

### Step 3.8: Step 6 - Logout Tau

<div class="step-block">
  <div class="step-text">

| Field | Value |
|------|-------|
| Type | TEST ACTION UNIT |
| Test Step | Logout Tau |
| Session | session1 |
| Pattern | SAME_ROW |
| On Error | Abort |

Save the test case by clicking **Create**.

  </div>

  <div class="step-image">
    <h4 class="image-title">Complete Test Case Configuration</h4>
    <img src="/exgenix-documentation/img/scenario_2/testcase.png" alt="Trade Test Case with All Steps Configured" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

---

## Phase 4: Review Test Case Configuration

### Final Test Case Structure

```
Trade_Test
─────────────────────────────────────────────
Step 1: Login Tau (5 APIs)
Step 2: New Order Request
Step 3: New Order Response
Step 4: Cancel Order Request
Step 5: Cancel Order Response
Step 6: Logout Tau
─────────────────────────────────────────────
```

### Variable Flow

| Step | Variables Used | Variables Captured |
|------|---------------|-------------------|
| Step 1 (Login) | - | session_id, auth_token |
| Step 2 (New Order Req) | session_id, auth_token | - |
| Step 3 (New Order Res) | session_id | order_id, exec_id |
| Step 4 (Cancel Req) | session_id, order_id | - |
| Step 5 (Cancel Res) | session_id, order_id | cancel_id |
| Step 6 (Logout) | session_id | - |

### Pattern Strategy

| Pattern | Used For | Purpose |
|---------|---------|---------|
| SAME_ROW | Login Tau, Logout Tau, Cancel Request | Maintain state consistency |
| NEXT_ROW | New Order Request/Response | Progress through test data |

---

## Phase 5: Execute and Validate

### Step 5.1: Create Test Suite

<div class="step-block">
  <div class="step-text">

Navigate to **Test Suite** and create a new suite:

| Field | Value |
|------|-------|
| Name | `Trade Flow Test Suite` |
| Description | End-to-end trade lifecycle validation |
| Schedule | On Demand |
| Parallel Execution | Disabled |

  </div>

  <div class="step-image">
    <h4 class="image-title">Test Suite Configuration</h4>
    <img src="/exgenix-documentation/img/scenario_2/create_suite.png" alt="Create Trade Flow Test Suite" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

### Step 5.2: Add Test Case

<div class="step-block">
  <div class="step-text">
    - Select test case: **Trade_Test**
    - Add it to the suite
    - Verify the test case appears in the suite configuration
  </div>

  <div class="step-image">
    <h4 class="image-title">Add Test Case to Suite</h4>
    <img src="/exgenix-documentation/img/scenario_2/testsuite.png" alt="Add Trade_Test to Suite" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

### Step 5.3: Execute

<div class="step-block">
  <div class="step-text">
    - Click **Execute Suite**
    - Monitor real-time execution progress
    - Expected Duration: ~11 seconds
    - Review execution logs and results
  </div>
</div>

### Step 5.4: Verify Results

**Expected Outcome:**
- ✅ All steps passed
- ✅ Order placed successfully
- ✅ Order ID captured correctly
- ✅ Order cancelled successfully
- ✅ Clean logout completed
- ⏱️ **Execution Time:** ~11 seconds

---

## Phase 6: Extend Test Case (Optional Enhancements)

### Enhancement 1 - Multiple Iterations

<div class="step-block">
  <div class="step-text">
    Use **NEXT_ROW** pattern across steps to execute multiple order-cancel cycles in a single test run.

**Example:**

<ul>
  <li>Row 1: AAPL, BUY, 100 @ 150.50</li>
  <li>Row 2: MSFT, SELL, 200 @ 380.25</li>
  <li>Row 3: GOOGL, BUY, 50 @ 2800.00</li>
</ul>

  </div>
</div>

### Enhancement 2 - Looping

<div class="step-block">
  <div class="step-text">
    Add a loop construct for bulk order placement and cancellation:
    - Configure loop count in test case settings
    - Useful for stress testing and volume validation
    - Can simulate real-world trading patterns

  </div>
</div>

### Enhancement 3 - Wait Times

<div class="step-block">
  <div class="step-text">
    Add delays between steps to simulate real workflow timing:
    - Post-login wait: 500ms
    - Post-order wait: 1000ms
    - Pre-cancel wait: 2000ms

**Purpose:** Mimic production timing and test system behavior under realistic conditions.

  </div>
</div>

### Enhancement 4 - Negative Scenarios

<div class="step-block">
  <div class="step-text">
    Create additional test cases using negative and edge datasheets:

<ul>
        <li>Invalid order quantities (0, negative values)</li>
        <li>Invalid prices (out of range)</li>
        <li>Invalid security IDs</li>
        <li>Duplicate order IDs</li>
        <li>Cancel non-existent orders</li>
</ul>

**Datasheets:** DS_negative_nos, DS_Edge_nos

  </div>

  <div class="step-image">
  <h4 class="image-title">Extended Test Case Configuration</h4>
  <!-- <img src="/img/scenario_2/testcase.png" alt="Test Case with Enhancements" /> -->
  <img src="/exgenix-documentation/img/scenario_2/testcase2.png" alt="Test Case with Enhancements" />

  <p class="image-caption">🖱️ Click to expand image</p>
</div>

</div>

---

## Verification & Best Practices

### Verification Checklist

| Check | Description | Status |
|------|------------|:------:|
| Correct Sequence | All 6 steps in proper order | ✅ |
| All Validations Passed | Response validations successful | ✅ |
| Captures Used Correctly | Variables captured and reused | ✅ |
| TAUs Configured | Login and Logout TAUs working | ✅ |
| Clean Logout | Session terminated properly | ✅ |
| Session Continuity | Same session used throughout | ✅ |
| Error Handling | Abort on error configured | ✅ |

### Best Practices

1. **Maintain Session Continuity**
   - Use the same session identifier across all steps
   - Ensure login happens before any trading operations
   - Always logout at the end

2. **Use Capture & Validate Functions**
   - `${capture(variable)}` - Store values for later use
   - `${validate_or_capture(variable)}` - Validate expected value or capture if not provided
   - Chain variables across multiple API calls

3. **Pattern Selection**
   - Use **SAME_ROW** for maintaining state consistency
   - Use **NEXT_ROW** for iterating through test data
   - Be intentional about pattern choices

4. **Dynamic Value Generation**
   - Use `${sequence()}` for unique identifiers
   - Use `${random_*()}` functions for varied test data
   - Leverage dynamic functions to reduce manual data entry

5. **Error Handling**
   - Set "On Error: Abort" for critical steps
   - Consider "Continue" for non-critical validations
   - Review error logs thoroughly

---

## Key Learnings from Scenario 2

### 1. Full Workflow Validation in One Test
Complete trade lifecycle from login to logout can be tested in a single, cohesive test case.

### 2. Continuous Session Management
Proper session handling ensures:
- No authentication issues mid-flow
- Consistent state across all operations
- Realistic production-like behavior

### 3. Strong Variable Passing
Captured variables enable true end-to-end testing:
- Order IDs flow from creation to cancellation
- Session tokens persist across requests
- Execution IDs tracked for audit

### 4. High Reusability with Test Action Units
Login and Logout TAUs can be:
- Reused across multiple test cases
- Maintained in a single location
- Updated once to affect all tests

### 5. Detailed Reporting and Audit Trail
Every step produces detailed logs:
- Request/Response payloads
- Validation results
- Captured variable values
- Execution timestamps

### 6. Flexible Data Driving
Multiple execution strategies supported:
- Single row execution
- Multi-row iteration
- Loop-based bulk testing
- Randomized data generation

---

## Comparison: Manual vs Exgenix Automation

### Manual Testing Analysis

**Time Breakdown (per cycle):**
1. Login setup: ~5 minutes
2. Order placement: ~10 minutes
3. Verify order acceptance: ~15 minutes
4. Cancel order: ~10 minutes
5. Verify cancellation: ~15 minutes
6. Documentation: ~20 minutes
7. Logout and cleanup: ~5 minutes
8. Data preparation for next run: ~20 minutes

**Total Manual Time:** ~100 minutes per cycle

### Exgenix Automated Execution

**Time Breakdown:**
- Complete test execution: ~11 seconds
- Report generation: Automatic
- Data cleanup: Automatic

**Total Automated Time:** ~11 seconds per execution

### ROI Analysis

| Metric | Value |
|--------|-------|
| Time saved per execution | ~99.82 minutes |
| Break-even point | 2 executions |
| Annual savings (100 runs) | ~166 hours |
| Cost reduction | 99.8% |

**ROI achieved after just 2 executions!**

---

## Expanding the Test Suite

### Suggested Additional Scenarios

#### 1. Modify Order Flow
- Place order
- Modify quantity/price
- Verify modification
- Cancel modified order

#### 2. Partial Fill Handling
- Submit large order
- Simulate partial execution
- Verify remaining quantity
- Handle partial fill states

#### 3. Multiple Orders
- Place multiple orders simultaneously
- Track all order IDs
- Cancel selected orders
- Verify remaining active orders

#### 4. Buy/Sell Mix
- Alternate BUY and SELL orders
- Verify side handling
- Test position calculations
- Validate settlement instructions

#### 5. Different Order Types
- Market orders
- Limit orders
- Stop orders
- Stop-limit orders

#### 6. Regression Suite
- Combine all scenarios
- Schedule daily/weekly runs
- Compare results over time
- Track performance metrics

### Implementation Strategy

```
Test Suite Structure:
├── Basic Flows
│   ├── Trade_Test (Current)
│   ├── Modify_Order_Test
│   └── Multi_Order_Test
├── Advanced Flows
│   ├── Partial_Fill_Test
│   └── Order_Type_Mix_Test
└── Regression Suite
    └── Daily_Smoke_Test
```

---

## Summary

Scenario 2 demonstrates the power of Exgenix for complete trade flow automation:

### Key Achievements

✅ **Full End-to-End Trade Flow Automation**
- Login → Order → Confirm → Cancel → Logout
- Complete lifecycle in one test

✅ **Advanced Session and Variable Management**
- Seamless variable capture and reuse
- Consistent session handling
- Proper state management

✅ **Clean Modular Test Design**
- Reusable Test Action Units
- Clear separation of concerns
- Easy maintenance and updates

✅ **High Scalability for Large Test Suites**
- Support for multiple scenarios
- Parallel execution capability
- Efficient resource utilization

✅ **Sub-Minute Execution with Rich Reporting**
- 11-second execution time
- Comprehensive logs and reports
- Detailed audit trails

### Business Impact

- **Speed:** 545x faster than manual testing
- **Accuracy:** Eliminates human error
- **Coverage:** Comprehensive validation
- **Cost:** 99.8% reduction in testing effort
- **Reliability:** Consistent, repeatable results

---

