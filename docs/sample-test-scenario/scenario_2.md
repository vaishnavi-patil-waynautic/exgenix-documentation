---
title: Scenario 2
sidebar_position: 2
hide_table_of_contents: true
id: scenario_2
sidebar_label: Trade
slug: /sample-test-scenario/scenario-2
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


- New Order Single BUY


- New Order Single SELL


- Trade Confirmation (solicited message)


- Unsolicited Trade Message (auto-generated from exchange)


- Logout
 
This scenario simulates a real-world exchange workflow where a BUY order and a SELL order match to generate a completed trade.


---

## Business Objective

Validate the end-to-end workflow to ensure:

- Successful session authentication  
- Consistent order placement for BUY and SELL
- Proper trade confirmation for matched orders 
- Handling of **unsolicited trade messages** from the exchange
- Accurate capture of trade identifiers  
- Clean session termination 

---

## Prerequisites

### Test Action Units

<div class="step-block">
  <div class="step-text">
    **Login Tau** | Establish session & authenticate 
  </div>

  <div class="step-image">
    <h4 class="image-title">Login Test Action Unit</h4>
    <img src="/exgenix-documentation/img/scenario_2/login_tau.png" alt="Login Test Action Unit" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>


<div class="step-block">
  <div class="step-text">
    **Logout Tau** | Clean session termination
  </div>

  <div class="step-image">
    <h4 class="image-title">Logout Test Action Unit</h4>
    <img src="/exgenix-documentation/img/scenario_2/logout_tau.png" alt="Logout Test Action Unit" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

---

## Phase 1: Plan the Test Flow

### Workflow Diagram


```
```text
┌──────────────────────────────────────────────────────────────┐
│                    Trade Flow Test Case                      │
└──────────────────────────────────────────────────────────────┘

1. [Login Test Action Unit] 
   ├─ Establish Connection
   ├─ Create Session (Capture: session_id)
   └─ Authenticate User (Capture: auth_token)

2. [New Order Single – BUY]
   └─ Place BUY order: AAPL, 100 @ 150.50

3. [New Order Response – BUY]
   ├─ Validate: ACCEPTED
   └─ Capture: buy_order_id, buy_exec_id

4. [New Order Single – SELL]
   └─ Place SELL order: AAPL, 100 @ 150.50

5. [New Order Response – SELL]
   ├─ Validate: ACCEPTED
   └─ Capture: sell_order_id, sell_exec_id

6. [Logout Tau]
   ├─ Terminate Session
   └─ Close Connection

    ✓ Trade Cycle Complete

```

### Key Variables in Flow

| **Variable**        | **Description**                                               |
|---------------------|---------------------------------------------------------------|
| `session_id`        | Captured during the **login** process.                       |
| `auth_token`        | The authentication token used for all subsequent APIs.       |
| `buy_order_id`      | Captured from the **buy order** response.                    |
| `sell_order_id`     | Captured from the **sell order** response.                   |
| `trade_id`          | Captured from the **trade confirmation** message.           |
| `trade_exec_id`     | Captured from the **unsolicited message** regarding trade execution. |
| `trade_qty`         | The **matched quantity** in the trade.                       |
| `trade_price`       | The **matched price** for the trade.                         

---

## Phase 2: Prepare Datasheets

### Step 2.1: Login datasheets

<div class="step-block">
  <div class="step-text">
    <h4>2.1.1: Socket Connection Datasheet</h4>
  </div>
  <div class="step-image">
    <h4 class="image-title">Socket Connection Configuration</h4>
    <img src="/exgenix-documentation/img/scenario_2/3.png" alt="Socket Connection Datasheet" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

<div class="step-block">
  <div class="step-text">
    <h4>2.1.2: Session Logon Request Datasheet</h4>
  </div>
  <div class="step-image">
    <h4 class="image-title">Session Logon Request</h4>
    <img src="/exgenix-documentation/img/scenario_2/4.png" alt="Session Logon Request Datasheet" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

**2.1.3: Session Logon Response Datasheet**

<div class="step-block">
  <div class="step-text">
    <h4>2.1.4: User Logon Request Datasheet</h4>
  </div>
  <div class="step-image">
    <h4 class="image-title">User Logon Request</h4>
    <img src="/exgenix-documentation/img/scenario_2/5.png" alt="User Logon Request Datasheet" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

<div class="step-block">
  <div class="step-text">
    <h4>2.1.5: User Logon Response Datasheet</h4>
  </div>
  <div class="step-image">
    <h4 class="image-title">User Logon Response</h4>
    <img src="/exgenix-documentation/img/scenario_2/6.png" alt="User Logon Response Datasheet" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

---

### Step 2.1: BUY Order Request Datasheet
Refer login sequence datasheet.

---

### Step 2.2: BUY Order Response Datasheet
Refer login sequence datasheet.

---

### Step 2.3: SELL Order Request Datasheet
Refer login sequence datasheet.

---

### Step 2.4: Immediate Execution Response Datasheet
Refer login sequence datasheet.

---

## 6. Phase 3: Create the Test Case


<div class="step-block">
  <div class="step-text">
    ### Step sequence:

1. Login Test Action Unit
2. New Order Single – BUY
3. New Order Response – BUY
4. New Order Single – SELL
5. Immediate Execution response
6. Tau logout sequence
  </div>
  <div class="step-image">
    <h4 class="image-title">Test Case Configuration</h4>
    <img src="/exgenix-documentation/img/scenario_2/7.png" alt="Test Case Creation Steps" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

---

## 7. Phase 4: Review Test Case Configuration

### Final Test Case Structure
```
Trade_Test_Execution
────────────────────────────────────────
Step 1: Login Tau
Step 2: New Order Single -BUY
Step 3: New Order Response-BUY
Step 4: New Order Single-SELL
Step 5: Immediate Execution response
Step 8: Logout Tau
────────────────────────────────────────
```

### Variable Flow

- `session_id` → steps 2–8
- `buy_order_id` → steps 3, 6
- `sell_order_id` → steps 5, 6
- `trade_id` → steps 6, 7

---

## 8. Phase 5: Execute and Validate

Same execution steps—output will reflect BUY > SELL > TRADE.

---

## 9. Phase 6: Optional Enhancements

Now includes:

- Multi-symbol matching
- Multi-leg trades
- Price improvement scenarios
- Partial match then full match
- Multiple unsolicited messages

---

## 10. Verification & Best Practices

Updated to focus on trade matching rather than cancellation.

---

## 11. Key Learnings

- Multi-order sequence generation
- Trade confirmation handling
- Consistent session continuity
- Complex multi-step variable propagation

---

## 12. Manual vs Automated

**Manual trade matching testing takes ~120 minutes**

**Exgenix automation executes full flow in 12–15 seconds**

---

## 13. Expanding the Test Suite

Add scenarios like:

- Multiple BUY vs multiple SELL
- Partial fills leading to multiple confirmations
- Cross-symbol trades
- High-frequency trade bursts

---

## 14. Summary

This updated Scenario 2 showcases:

- Complete BUY → SELL → Trade Confirmation cycle
- Robust variable management
- Modular, reusable TAUs
- Scalable test suite design
- End-to-end automated trade lifecycle validation

---