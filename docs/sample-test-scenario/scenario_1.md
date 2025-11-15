---
id: scenario_1
title: 'Scenario 1'
sidebar_position: 2
hide_table_of_contents: true
sidebar_label: Order placement
slug: /sample-test-scenario/scenario-1
---


# Scenario 1: Order placement

An illustration of turning an ETI API spec into an automated Exgenix test.

---

## Table of Contents
- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Phase 1: Create API Configuration Collection](#phase-1-create-api-configuration-collection)
- [Phase 2: Configure New Order Single API (Request)](#phase-2-configure-new-order-single-api-request)
- [Phase 3: Configure New Order Response API](#phase-3-configure-new-order-response-api)
- [Phase 4: Create Test Action Unit (Login TAU)](#phase-4-create-test-action-unit-login-tau)
- [Phase 5: Create Test Case](#phase-5-create-test-case)
- [Phase 6: Create Test Suite & Execute](#phase-6-create-test-suite--execute)
- [Verification Checklist](#verification-checklist)
- [Key Learnings](#key-learnings)

---

## Overview

This scenario demonstrates how to convert an **ETI API specification** into a fully executable automated test using **Exgenix**.

The workflow includes:
- Importing API definitions from PDF
- Creating datasheets
- Designing Test Cases
- Executing complete end-to-end automated tests

This shows how quickly ETI trading workflows can be automated using Exgenix without manual data entry.

---

## Prerequisites


Before starting, ensure the following:

- ETI API Specification Document (PDF format)


- Access to Exgenix


- Exchange 1 workspace selected


---

## Phase 1: Create API Configuration Collection

<div class="step-block">
  <div class="step-text">
    ### Step 1.1: Navigate to API Configuration
    
    1. Login to Exgenix
    2. Select project (e.g., **Exchange 1**)
    3. Click **Automation** tab
    4. Choose **API Configuration** from left menu
  
  </div>
  <div class="step-image">
    <h4 class="image-title">Navigate to API Configuration</h4>
    <img src="/exgenix-documentation/img/scenario_1/1.png" alt="Navigate to API Configuration module" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

---

<div class="step-block">
  <div class="step-text">
    ### Step 1.2: Create Collection
    
    1. Click **+ Create Collection**
    2. Enter:
       - **Name**: `ETI_Trading_APIs`
       - **Description**: ETI protocol trading API configurations
    3. Click **Create**
    
    **Result:** Collection **ETI_Trading_APIs** is now available.
  </div>
  <div class="step-image">
    <h4 class="image-title">Create API Collection</h4>
    <img src="/exgenix-documentation/img/scenario_1/2.png" alt="Create ETI Trading APIs Collection" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

---

## Phase 2: Configure New Order Single API (Request)

<div class="step-block">
  <div class="step-text">
    ### Step 2.1: Start API Configuration
    
    1. Open the **ETI_Trading_APIs** collection
    2. Click **+ Create API Config**
    3. A 3-step wizard opens to guide you through the configuration process
    
  </div>
  <div class="step-image">
    <h4 class="image-title">API Configuration List</h4>
    <img src="/exgenix-documentation/img/scenario_1/3.png" alt="API Configuration List View" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

---

<div class="step-block">
  <div class="step-text">
    ### Step 2.2: Basic Info (Step 1 of 3)
    
    Enter the following details:
    
    | Field | Value |
    |------|-------|
    | **Action Type** | `TCP_IP_REQUEST` |
    | **Name** | `New Order Single (short layout)` |
    | **Unique ID** | `101251` |
    | **Description** | Submit new limit order for equity instruments using short layout format. Supports limit orders with standard execution instructions. |
    
    Click **Next**.
  </div>
  <div class="step-image">
    <h4 class="image-title">Basic Info Configuration</h4>
    <img src="/exgenix-documentation/img/scenario_1/4.png" alt="New Order Single Basic Info" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

---

<div class="step-block">
  <div class="step-text">
    ### Step 2.3: Configuration - Import from PDF (Step 2 of 3)
    
    1. Click **Import PDF**
    2. Configure import settings:
       - **Page Number**: `71`
       - **Table Name**: `New Order Single (short layout)`
       - **Max Continuation Pages**: `5`
    3. Choose file → Select the PDF with ETI API definitions
    4. Click **Import**
    
  </div>
  <div class="step-image">
    <h4 class="image-title">PDF Import Configuration</h4>
    <img src="/exgenix-documentation/img/scenario_1/5.png" alt="Import New Order Single from PDF" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

---

<div class="step-block">
  <div class="step-text">
    ### Result: Auto-Extracted API Fields
    
    After successful PDF import, the configuration table is automatically populated with:
    - Field names and tags
    - Data types and sizes
    - Field offsets
    - Required/optional indicators
    - Cardinality rules
    
    Review the extracted fields to ensure accuracy. You can manually edit any field if needed.
  </div>
  <div class="step-image">
    <h4 class="image-title">Extracted API Fields - Part 1</h4>
    <img src="/exgenix-documentation/img/scenario_1/6.png" alt="Auto-extracted API fields from PDF" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

---

<div class="step-block">
  <div class="step-text">
    ### Extracted Fields - Complete View
    
    Click **Save and Proceed** to move to the datasheet creation step.
  </div>
  <div class="step-image">
    <h4 class="image-title">Extracted API Fields - Part 2</h4>
    <img src="/exgenix-documentation/img/scenario_1/7.png" alt="Complete extracted fields view" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

---

### Step 2.4: Create Datasheets (Step 3 of 3)

<div class="step-block">
  <div class="step-text">
    #### Positive Datasheet
    
    Create a datasheet for positive test scenarios:
    
    **Name**: `DS_positive_nos_01`  
    **Description**: Positive test cases for New Order Single with valid limit orders
    
    **Base Row (Row 1)** contains common values that child rows inherit.
    
    **Rows 2-4** override specific fields selectively:
    
    
  </div>
  <div class="step-image">
    <h4 class="image-title">Create Positive Datasheet</h4>
    <img src="/exgenix-documentation/img/scenario_1/8.png" alt="Create positive test datasheet" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

---

<div class="step-block">
  <div class="step-text">
    **Example Row 4 Dynamic Functions:**
    - `Price: ${random_decimal(100.0, 500.0, 2)}`
    - `SimpleSecurityID: ${pick_random([12345,12346,12347])}`
    - `OrderQty: ${random_int(10,1000)}`
    - `MinQuantity: ${random_numeric(2)}`
    
    These functions generate random test data at runtime, ensuring varied test coverage.
  </div>
  <div class="step-image">
    <h4 class="image-title">Positive Datasheet Values</h4>
    <img src="/exgenix-documentation/img/scenario_1/9.png" alt="Positive datasheet with values" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

---

<div class="step-block">
  <div class="step-text">
    #### Negative Datasheet
    
    Create a datasheet for negative test scenarios:
    
    **Name**: `DS_negative_nos`  
    **Description**: Invalid inputs including wrong prices and invalid sides
    
    
  </div>
  <div class="step-image">
    <h4 class="image-title">Create Negative Datasheet</h4>
    <img src="/exgenix-documentation/img/scenario_1/10.png" alt="Create negative test datasheet" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

---

<div class="step-block">
  <div class="step-text">
    **Example Negative Test Cases:**
    - **Row 1**: `Price=999999`, `OrderQty=100` (Invalid price)
    - **Row 2**: `OrderQty=0` (Invalid quantity)
    - **Row 3**: `Side=9` (Invalid side value)
    
    Negative test cases validate error handling and system robustness.
  </div>
  <div class="step-image">
    <h4 class="image-title">Negative Datasheet Values</h4>
    <img src="/exgenix-documentation/img/scenario_1/11.png" alt="Negative datasheet with invalid values" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

---

<div class="step-block">
  <div class="step-text">
    #### Edge Case Datasheet
    
    Create a datasheet for edge case scenarios:
    
    **Name**: `DS_Edge_nos`  
    **Description**: Boundary values for price, quantity, and tick-size validations
    
    
  </div>
  <div class="step-image">
    <h4 class="image-title">Create Edge Case Datasheet</h4>
    <img src="/exgenix-documentation/img/scenario_1/12.png" alt="Create edge case datasheet" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

---

<div class="step-block">
  <div class="step-text">
    **Edge Cases Include:**
    - Minimum and maximum price values
    - Boundary quantity values
    - Tick size edge cases
    - Field length boundaries
    
    Fill in boundary values for comprehensive edge case testing.
    
    Click **Finish** to complete the request API configuration.
  </div>
  <div class="step-image">
    <h4 class="image-title">Completed API Configuration</h4>
    <img src="/exgenix-documentation/img/scenario_1/13.png" alt="Completed New Order Single configuration" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

---

## Phase 3: Configure New Order Response API

<div class="step-block">
  <div class="step-text">
    ### Step 3.1: Basic Info
    
    Configure the response API to validate order acceptance:
    
    | Field | Value |
    |------|-------|
    | **Action Type** | `TCP_IP_RESPONSE` |
    | **Name** | `New Order Response (Lean Order)` |
    | **Unique ID** | `10102` |
    | **Description** | Response for validating order acceptance and execution data |
    
  </div>
  <div class="step-image">
    <h4 class="image-title">Response API Basic Info</h4>
    <img src="/exgenix-documentation/img/scenario_1/14.png" alt="New Order Response Basic Info" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

---

<div class="step-block">
  <div class="step-text">
    ### Step 3.2: Import from PDF
    
    Import the response message structure:
    
    | Setting | Value |
    |---------|-------|
    | **Page Number** | `101` |
    | **Table Name** | `New Order Response (Lean Order)` |
    | **Max Continuation Pages** | `3` |
    
  </div>
  <div class="step-image">
    <h4 class="image-title">Import Response from PDF</h4>
    <img src="/exgenix-documentation/img/scenario_1/15.png" alt="Import New Order Response from PDF" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

---

<div class="step-block">
  <div class="step-text">
    ### Step 3.3: Create Validation/Assertion Datasheet
    
    Create a datasheet to validate response fields:
    
    **Name**: `Validation Datasheet`
    
    **Row 1 - Validation Functions:**
    - `MsgSeqNum: ${validate_or_capture(msg_seq)}`
    - `ClOrdID: ${validate_or_capture(order_id)}`
    - `OrderID: ${capture(order_id)}`
    - `ExecID: ${capture(exec_id)}`
    - `OrderStatus: 2`
    - `ExecType: 0`
    
    Click **Save Changes** to complete the response API configuration.
  </div>
  <div class="step-image">
    <h4 class="image-title">Validation Datasheet</h4>
    <img src="/exgenix-documentation/img/scenario_1/16.png" alt="Create validation datasheet" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

---

## Phase 4: Create Test Action Unit (Login TAU)

<div class="step-block">
  <div class="step-text">
    ### Basic Info
    
    Create a reusable Test Action Unit for login flow:
    
    | Field | Value |
    |------|-------|
    | **Action Type** | `API Test Action Unit` |
    | **Name** | `Login APIs` |
    | **Description** | Standard ETI login flow including session creation and authentication |
    
    
  </div>
  <div class="step-image">
    <h4 class="image-title">Create Login Test Action Unit</h4>
    <img src="/exgenix-documentation/img/scenario_1/17.png" alt="Create Login Test Action Unit" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

---

<div class="step-block">
  <div class="step-text">
  ### Steps in TAU
    
    The Login TAU includes five sequential steps:
    1. **Socket Connection**: Establish connection to exchange
    2. **Session Logon**: Send session logon request
    3. **Session Logon Response**: Validate session establishment
    4. **User Logon**: Send user authentication request
    5. **User Logon Response**: Validate user authentication
    
    This reusable unit eliminates the need to add these five steps to every test case.

    Click **Create** to save the Test Action Unit.
  </div>
  <div class="step-image">
    <h4 class="image-title">Login TAU Steps</h4>
    <img src="/exgenix-documentation/img/scenario_1/18.png" alt="Login TAU with all steps configured" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

---

## Phase 5: Create Test Case

<div class="step-block">
  <div class="step-text">
    ### Step 5.1: Create Test Case
    
    Create a test case to validate the complete order flow:
    
    | Field | Value |
    |------|-------|
    | **Name** | `ETI_NewOrder_Positive` |
    | **Description** | Positive scenario for validating a successful new order flow |
    
    ### Step 5.2: Add Steps
    
    The test case includes three main steps:
    
    #### Step 1 - Login

    #### Step 2 - New Order Single Request
    
    #### Step 3 - New Order Response

    Fill the details by referring the following screenshot.
  </div>
  <div class="step-image">
    <h4 class="image-title">Create Test Case</h4>
    <img src="/exgenix-documentation/img/scenario_1/19.png" alt="Create ETI New Order test case" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

---

## Phase 6: Create Test Suite & Execute

<div class="step-block">
  <div class="step-text">
    ### Step 6.1: Create Suite
    
    Create a test suite to organize and execute test cases:
    
    | Field | Value |
    |------|-------|
    | **Name** | `ETI Order Validation Suite` |
    | **Description** | Validates ETI order submission and response flows |
    | **Schedule** | `On Demand` |
    | **Parallel Execution** | `Disabled` |
    
  </div>
  <div class="step-image">
    <h4 class="image-title">Create Test Suite</h4>
    <img src="/exgenix-documentation/img/scenario_1/20.png" alt="Create ETI Order Validation Suite" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

---

<div class="step-block">
  <div class="step-text">
    ### Step 6.2: Add Test Case
    
    Add the test case to the suite:
    1. Click **+ Add Test Cases**
    2. Select: `ETI_NewOrder_Positive`
    3. Confirm selection
    
    The test case is now part of the test suite and ready for execution.
  </div>
  <div class="step-image">
    <h4 class="image-title">Add Test Case to Suite</h4>
    <img src="/exgenix-documentation/img/scenario_1/21.png" alt="Add test case to suite" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

---

### Step 6.3: Execute

Click **Execute Suite** → Execution starts immediately

Monitor live progress 

### Step 6.4: View Results


<div class="step-block">
  <div class="step-text">

  After execution finishes:
  - Automatically redirected to **Reports**
  - Review comprehensive execution logs
  - Examine request/response details
  - Verify all validations passed
  - Analyze captured variables
  - Check execution timeline

  </div>
  <div class="step-image">
    <h4 class="image-title">Execution Report</h4>
    <img src="/exgenix-documentation/img/scenario_1/22.png" alt="Execution Report" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

---

## Verification Checklist

| Check | Status |
|------|:------:|
| API imported correctly from PDF | ✅ |
| Datasheets created (positive, negative, edge) | ✅ |
| Login Test Action Unit configured | ✅ |
| Test case flow correct | ✅ |
| Test suite executes successfully | ✅ |
| All validations passed | ✅ |
| Captured variables used correctly | ✅ |

---

## Key Learnings

### 1. PDF Import Efficiency
**PDF import removes hours of manual work** 

### 2. Base Row Inheritance
**Base Row Inheritance reduces repetitive test data entry**

### 3. Dynamic Functions
**Dynamic Functions generate runtime values automatically**

### 4. Capture Functions
**Capture Functions enable dependent API chaining** 

### 5. Rapid Automation
**End-to-end automation can be completed in minutes** 

---