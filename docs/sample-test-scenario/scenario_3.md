---
id: scenario_3
title: 'Scenario 3'
sidebar_position: 4
hide_table_of_contents: true
sidebar_label: Multileg
slug: /sample-test-scenario/scenario-3
---

import {
  FeatureCard,
  FeatureGrid,
  InfoBox,
  StatusBadge,
  StepIndicator
} from '@site/src/components/DocumentationComponents';

# Multileg Butterfly Spread — End-to-End Configuration & Execution Guide


---

##  Table of Contents

- [Overview](#overview)  
- [Business Objective](#business-objective)  
- [Prerequisites](#prerequisites)  
- [Phase 1 — API & Datasheet Configuration](#phase-1--api--datasheet-configuration)  
- [Phase 2 — Test Case Setup](#phase-2--test-case-setup)  
- [Phase 3 — Execution](#phase-3--execution)  
- [Phase 4 — Report Analysis](#phase-4--report-analysis)  
- [Troubleshooting](#troubleshooting) 

---

## Overview

This guide describes the configuration and execution of a **Multileg Butterfly Spread trading scenario** using Exgenix.
A butterfly spread is a three-leg options strategy executed atomically using a **1:2:1 quantity ratio**.


### Trade Structure
#

<div class="table-container">

| Leg | Strike | Side | Ratio |
-----|--------|------|-------
Leg 1 | 100 | `Buy` | 1
Leg 2 | 100 | `Sell` | 2
Leg 3 | 100 | `Buy` | 1

</div>

---

### Execution Model

<div class="info-card">

This scenario uses two trading sessions:

- `Session 1 `— Places the initial multileg order  
- `Session 2` — Places the counter order to trigger execution  

> All three legs must match and fill simultaneously.

</div>

---

:::info
## Business Objective

### Validation Goals

Verify multileg order creation with repeating leg groups  
Validate atomic execution behavior  
Confirm ratio enforcement (1:2:1)  
Validate leg-level execution details  
Ensure reporting captures all multileg attributes  

### Success Criteria

✔ Both sessions authenticate successfully  
✔ All three legs execute together  
✔ Execution response contains full leg breakdown  
✔ Reports show accurate trade details  

:::

---

## Prerequisites

Before proceeding, ensure the following are available:


- `Login TAU` configured  
- `Logout TAU` configured  
- Two active FIX trading sessions  
- Understanding of multileg order flow  
- Knowledge of FIX tags for multileg trading  


---

## Phase 1 — API & Datasheet Configuration


This phase follows a **configure → populate → validate** pattern.



## 4.1 Configure Leg Group Custom Data Type



<div class="step-block">
  <div class="step-text">

### API Definition
#
**API Name:** `Derivative Leg group ` 

**Type**: **Custom Data Type** 

**Purpose**: Defines repeating leg structure  
  </div>

  <div class="step-image">
    <h4 class="image-title">Derivative Leg group</h4>
    <img src="/img/scenario_3/1.png" alt="Derivative Leg group" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>


---

## 4.2 Configure New Order Multileg Request


<div class="step-block">
  <div class="step-text">

  ### API Definition
  #

**API Name:**  `DBG.Derivatives.ETI.NewOrderMultilegStandard.Request`  

**Type**: **Request**  

**Template ID:** `10113`  

> Now,change repeating group with CDT(created in step 4.1) as shown in below image 

  </div>

  <div class="step-image">
    <h4 class="image-title">DBG.Derivatives.ETI.NewOrderMultilegStandard.Request</h4>
    <img src="/img/scenario_3/3.png" alt="DBG.Derivatives.ETI.NewOrderMultilegStandard.Request" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>



---

## Datasheet: `DATA.Multileg.Butterfly.FullMatch`

### Base Row (Common Values)


| Field | Value |
------|------
MsgSeqNum | `SequentialID(message_sequence_number)`
SenderSubID | `${session_id}`
ProductComplex | `5`
NoLegs (NoLegOnbooks) | `3`


---

### Session 1 — Buy Butterfly Order

### Order Level Fields





<div class="step-block">
  <div class="step-text">

  | Field | Value |
------|------
ClOrdID | `${cl_ord_id_mleg1}`
SecurityID | `200001`
OrderQty | `100`
Side  | `1 (Buy) `  
Price | `3000`  
MarketSegmentID | `${market_segment_id1_mleg}`  
OrdType | `2 (Limit)`  
TimeInForce | `0 (Day)` 



### Leg Configuration (Derivative – Leg Group)
#
| Leg   | Description | Side        | Ratio |
|-------|-------------|-------------|-------|
| `Leg 1` | Buy Leg     | `1` (Buy)     | 1     |
| `Leg 2` | Sell Leg    | `2` (Sell)    | 2     |
| `Leg 3` | Buy Leg     | `1` (Buy)     | 1     |


  </div>

  <div class="step-image">
    <h4 class="image-title">DATA.Multileg.Butterfly.FullMatch</h4>
    <img src="/img/scenario_3/4.png" alt="DATA.Multileg.Butterfly.FullMatch" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

---

### Session 2 — Counter Order (Sell Butterfly)

### Order Level Fields

<div class="step-block">
  <div class="step-text">


| Field | Value |
------|------
Side | `2 (Sell)`
Price | `2900`


> Also configure CDT Data and click on save.

  </div>

  <div class="step-image">
    <h4 class="image-title">DATA.Multileg.Butterfly.FullMatch</h4>
    <img src="/img/scenario_3/5.png" alt="DATA.Multileg.Butterfly.FullMatch" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>


---

## 4.3 Configure New Order Response


<div class="step-block">
  <div class="step-text">

### API Definition
  #

**API Name:** `DBG.Derivatives.ETI.NewOrderStandard.Response`  

**Type:** Response 

**Template ID:** `10101` 

  </div>

  <div class="step-image">
    <h4 class="image-title">DBG.Derivatives.ETI.NewOrderStandard.Response</h4>
    <img src="/img/scenario_3/6.png" alt="DBG.Derivatives.ETI.NewOrderStandard.Response " />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>


---

## Datasheet: `DATA.NewOrderResponse`

### Validation Row — New Order Response (Standard)



<div class="step-block">
  <div class="step-text">

  **Label:** butter_fly_validation  
**Response Type:** New Order Response 

| Field | Expected / Captured Value |
------|---------------------------
TemplateID (28500) | `10101`
OrderID (37) | `${capture(OrderID_s1)}`

  </div>

  <div class="step-image">
    <h4 class="image-title">DATA.NewOrderResponse</h4>
    <img src="/img/scenario_3/7.png" alt="DATA.NewOrderResponse" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

---

## 4.4 Configure Immediate Execution Response


<div class="step-block">
  <div class="step-text">

  ### API Definition
  #

**API Name:**  `DBG.Derivatives.ETI.ImmediateExecution.Response`  

**Type:** Response 

**Template ID:** `10103` 

  </div>

  <div class="step-image">
    <h4 class="image-title">DBG.Derivatives.ETI.ImmediateExecution.Response</h4>
    <img src="/img/scenario_3/8.png" alt="DBG.Derivatives.ETI.ImmediateExecution.Response" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>


---

## Datasheet: `DATA.ImmediateResponse`

<div class="step-block">
  <div class="step-text">


**Label:** Butterfly Spread - Full Trade with 2 Sell Sessions  
**Response Type:** Immediate Execution Response   

  </div>

  <div class="step-image">
    <h4 class="image-title">DATA.ImmediateResponse</h4>
    <img src="/img/scenario_3/9.png" alt="DATA.ImmediateResponse" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

<div class="step-block">
  <div class="step-text"> 

  **FillGrp**
  
  </div>

  <div class="step-image">
    <h4 class="image-title">FillGrp</h4>
    <img src="/img/scenario_3/10.png" alt="FillGrp" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>


<div class="step-block">
  <div class="step-text">

  **InstrmntLegExecGrp**

</div>

  <div class="step-image">
    <h4 class="image-title">InstrmntLegExecGrp</h4>
    <img src="/img/scenario_3/11.png" alt="InstrmntLegExecGrp" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

<div class="step-block">
  <div class="step-text">

  **OrderEventGrp**

</div>

  <div class="step-image">
    <h4 class="image-title">OrderEventGrp</h4>
    <img src="/img/scenario_3/12.png" alt="OrderEventGrp" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>


---

## Phase 2 — Test Case Setup
#


<div class="step-block">
  <div class="step-text">

  **Testcase Name :** `TC.ButterFlyTrade.Std.FullMatch.Accepted`

  **Objective :** Validate complete multileg trade lifecycle across two sessions.  

</div>

  <div class="step-image">
    <h4 class="image-title">TC.ButterFlyTrade.Std.FullMatch.Accepted</h4>
    <img src="/img/scenario_3/13.png" alt="TC.ButterFlyTrade.Std.FullMatch.Accepted" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

---

## Phase 3 — Execution



<div class="step-block">
  <div class="step-text">
  
### **Test Suite Configuration**

**Test Suite Name :** `Regression.PreOpne.Multileg.Butterfly.2026-01-21`  

Configure the test suite in Execution module. Add testcase `TC.ButterFlyTrade.Std.FullMatch.Accepted` to the suite and start the execution.

</div>

  <div class="step-image">
    <h4 class="image-title">Regression.PreOpne.Multileg.Butterfly.2026-01-21</h4>
    <img src="/img/scenario_3/14.png" alt="Regression.PreOpne.Multileg.Butterfly.2026-01-21" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>


---

:::tip
## Pre-Execution Checklist

✔ Both sessions configured  
✔ Datasheets validated  
✔ Instruments exist  
✔ Environment running  
:::


---

## Phase 4 — Report Analysis


### 1. Butterfly Trade Validation Flow


After execution, validate trade correctness, execution integrity, and system behavior.


<div class="step-block">
  <div class="step-text">

### 2. Immediate Execution Response (Core Validation)
#

<div class="table-container">

| Parameter | Expected Value |
----------|----------------
ExecType | F (Trade)
OrdStatus | 2 (Filled)
LeavesQty | 0
NoLegs | 3

</div>

</div>

  <div class="step-image">
    <h4 class="image-title">Report</h4>
    <img src="/img/scenario_3/15.png" alt="Report" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>


<div class="step-block">
  <div class="step-text">
  
### 3. Leg-Level Validation
#

<div class="info-card">

> **Verify:**

- All three legs present  
- 1:2:1 execution ratio  
- Atomic execution  

> **Pattern:**

- Leg 1 → Base Quantity  
- Leg 2 → Double Quantity  
- Leg 3 → Base Quantity  

</div>
</div>

  <div class="step-image">
    <h4 class="image-title">Report</h4>
    <img src="/img/scenario_3/16.png" alt="Report" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>


<div class="step-block">
  <div class="step-text">
  

### 4. Captured Trade Data Verification
#

<div class="card-list">

> **Check:**

- OrderID  
- ExecID  
- LastQty  
- CumQty  
- Trade Price  
- PartitionID  
- Response timestamps 
# 

</div>

#
### 5. Additional Server Response (Template ID 10500)
#

<div class="info-card">

> **Confirm:**

- Appears under Additional Responses  
- Template ID: 10500  
- Status: Received  
- Action Type: Response  

> **Purpose:**

- Post-trade notifications generated  
- Exchange acknowledgment received  
- Async responses captured  

</div>

</div>

  <div class="step-image">
    <h4 class="image-title">Report</h4>
    <img src="/img/scenario_3/17.png" alt="Report" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>










:::tip
## Final Validation Checklist

-  Both buy and sell orders executed  
-  Immediate Execution Response received  
-  All 3 legs filled  
-  Ratio maintained (1:2:1)  
-  Additional Response 10500 captured  
-  No rejected or failed steps  
:::

> When all conditions are met, the Butterfly Spread trade scenario is fully validated.

---

## Troubleshooting
#

<div class="warning-card">

**Common Issues**

- **Invalid Leg Structure**  
→ Verify LegGroup CDT and NoLegs field  

- **Ratio Mismatch**  
→ Validate OrderQty × LegRatioQty mapping  

- **No Execution Triggered**  
→ Confirm price, quantity, SecurityID and opposite sides  

- **Missing Leg Data**  
→ Verify LegFillGrp mapping in response API  

</div>

---


<div class="takeaway-panel">
  <div class="panel-header"><strong>Key Takeaways</strong></div>
  <div class="panel-body">
✔ Multileg trading requires structured leg groups

✔ Butterfly spreads enforce strict ratios

✔ Matching requires opposite orders across sessions

✔ Atomic execution guarantees consistency

✔ ExGenix enables full lifecycle validation
  </div>
</div>

---

