---
title: Test Action Unit - User Guide
sidebar_position: 5
hide_table_of_contents: true
id: tau
---

import {
  FeatureCard,
  FeatureGrid,
  StatusBadge,
  InfoBox,
  StepIndicator,
  QuickLinks
} from '@site/src/components/DocumentationComponents';
import ExampleBlock from '@site/src/components/ExampleBlock'

# Test Action Unit – User Guide

---

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
- [Managing Test Action Units](#managing-test-action-units)
- [Advanced Features](#advanced-features)
- [Troubleshooting](#troubleshooting)
- [Summary](#summary)

---

## Overview

Test Action Units are reusable, modular components within Exgenix that encapsulate a sequence of related test steps into a single logical unit. They streamline test case design by grouping common operations that are reused across multiple workflows.

### Key Benefits


<FeatureGrid>
  <FeatureCard
    icon="layers"
    title="Organize Reusable Sequences"
    description="Structure common sequences like Login, Logout, and Order Validation for easy reuse across projects"
    color="#2563eb"
  />
  <FeatureCard
    icon="wrench"
    title="Improve Maintainability"
    description="Update business logic in a single place and instantly reflect changes across all related tests"
    color="#10b981"
  />
  <FeatureCard
    icon="blocks"
    title="Increase Modularity & Consistency"
    description="Break tests into modular building blocks to ensure consistency and reduce duplication"
    color="#f59e0b"
  />
  <FeatureCard
    icon="bolt"
    title="Accelerate Test Design"
    description="Speed up test creation with ready-to-use components that reduce repetitive work"
    color="#8b5cf6"
  />
  <FeatureCard
    icon="flow"
    title="Standardize Execution Flows"
    description="Maintain uniform test execution patterns across all suites for predictable, stable outcomes"
    color="#ec4899"
  />
</FeatureGrid>


---

## What Is a Test Action Unit?

A Test Action Unit acts as a container for grouping multiple API-based steps that logically belong together.

<ExampleBlock title="Examples: Common Test Flows">
  <p>Some common test flows include:</p>

  <ul>
    <li><strong>Login Flow</strong>: Socket connection → Session logon → User logon → Validation</li>
    <li><strong>Logout Flow</strong>: User logout → Session logout → Connection close</li>
    <li><strong>Order Placement</strong>: Pre-checks → Order submission → Response validation</li>
  </ul>
</ExampleBlock>

---

## Structure

Each Test Action Unit consists of:

| Component | Description |
|-----------|-------------|
| **Name** | `Descriptive` identifier for the unit (e.g., "Login Test Action Unit") |
| **Description** | `Purpose`, `usage scope`, and `included steps` |
| **Test Steps** | Ordered API configurations that execute `sequentially` |
| **Execution Order** | Defined `flow of steps` within the unit |

---

## Creating a Test Action Unit

<div class="step-block">
  <div class="step-text">
    ### Step 1: Navigate to Test Action Units
    
    1. Go to **Test Configuration** in left navigation
    2. Select **Test Action Unit**

  </div>
  <div class="step-image">
    <h4 class="image-title">Navigate to Test Action Units</h4>
    <img src="/exgenix-documentation/img/test_action_unit/test_action_unit.png" alt="Navigate to Test Action Unit section" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

---

<div class="step-block">
  <div class="step-text">
    ### Step 2: Create Test Action Unit Collection

    1. Click on **+ Create Collection**
    
    2. Provide the following details:
    
    > **Collection Type (Required)**
    > - Select **Test Action Units Collection**
    
    > **Name (Required)**
    > - Provide a meaningful, consistent name for > your collection.
    
    > **Description**  
    > Include:
    > - Purpose
    > - Steps grouped inside
    > - Any prerequisites

    3. Click **Create**
  </div>
  <div class="step-image">
    <h4 class="image-title">Create Test Action Unit Collection</h4>
    <img src="/exgenix-documentation/img/test_action_unit/create_collection.png" alt="Create Test Action Unit Collection" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

---

<div class="step-block">
  <div class="step-text">
    ### Step 3: Define Basic Information
    
    1. Navigate to newly create collection
    2. Click on "View" to open it
    3. Click on "**+ Create Test Action Unit**"
  </div>
  <div class="step-image">
    <h4 class="image-title">Test Action Unit Collection</h4>
    <img src="/exgenix-documentation/img/test_action_unit/tau_collection.png" alt="Test Action Unit Collection" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

<div class="step-block">
  <div class="step-text">
    
    Provide the following details:
    
    > **Action Type (Required)**
    > - Select **API Test Action Unit**
    
    > **Name (Required)**
    > - Provide a meaningful, consistent name such as:
     >  - Login Test Action Unit
     >  - User Authentication Flow
    
    > **Description**  
    > Include:
    > - Purpose
    > - Steps grouped inside
    > - Any prerequisites
  </div>
  <div class="step-image">
    <h4 class="image-title">Define Basic Information</h4>
    <img src="/exgenix-documentation/img/test_action_unit/main_tab.png" alt="Test Action Unit Basic Information" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

---

<div class="step-block">
  <div class="step-text">
    ### Step 4: Add Test Steps
    
    Once the Test Action Unit is created, you can define its step type and associate it with an API. Click **+ Add Step** to include API configurations.

    You may select:

    > **Step Type** 
    > - Socket Connection
    > - TCP/IP Request
    > - TCP/IP Response
    > - Custom Data Type
    
    > **Select API**  
    > Select the API you want to add to the Test > Action Unit
    > From the available list, select the API you want to include in this Test Action Unit.
 This determines which message definition and validation rules are applied.
    
  </div>
  <div class="step-image">
    <h4 class="image-title">Add Test Steps</h4>
    <img src="/exgenix-documentation/img/test_action_unit/add_step.png" alt="Adding test steps to Test Action Unit" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

---

<!-- ## Example: Login Test Action Unit

<div class="step-block">
  <div class="step-text">
    A complete Login Test Action Unit typically includes:
    
    1. **Socket Connection**: Establish connection to the server
    2. **Session Logon Request**: Send session authentication request
    3. **Session Logon Response**: Validate session authentication
    4. **User Logon Request**: Send user credentials
    5. **User Logon Response**: Validate user authentication
    
Each step is configured with the appropriate data sheets and validation rules to ensure correct system behavior.
  </div>

  <div class="step-image">
    <h4 class="image-title">Login Test Action Unit</h4>
    <img src="/exgenix-documentation/img/test_action_unit/login_tau.png" alt="Login Test Action Unit" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div> -->

<ExampleBlock
  title="Example: Login Test Action Unit"
  image={{
    title: "Login Test Action Unit",
    src: "/exgenix-documentation/img/test_action_unit/login_tau.png",
    alt: "Login Test Action Unit"
  }}
  caption="🖱️ Click to expand image"
>
  <p>A complete Login Test Action Unit typically includes:</p>

  <ol>
    <li><strong>Socket Connection</strong>: Establish connection to the server</li>
    <li><strong>Session Logon Request</strong>: Send session authentication request</li>
    <li><strong>Session Logon Response</strong>: Validate session authentication</li>
    <li><strong>User Logon Request</strong>: Send user credentials</li>
    <li><strong>User Logon Response</strong>: Validate user authentication</li>
  </ol>

  <p>
    Each step is configured with the appropriate data sheets and validation rules
    to ensure correct system behavior.
  </p>
</ExampleBlock>


---

<div class="step-block">
  <div class="step-text">
    ### Step Configuration Details
    
    Each step within the Test Action Unit displays:
    - **Step Number & Sequence** – The order in which the step executes.
    - **API Configuration Name** – The specific API or message type configured for that step.
  </div>
  <div class="step-image">
    <h4 class="image-title">Step Configuration View</h4>
    <img src="/exgenix-documentation/img/test_action_unit/step_added.png" alt="Test Action Unit step configuration" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

---

## Configuring Datasheets for Test Action Units

When adding a Test Action Unit inside a test case, you must configure the datasheet mapping for each internal step.

<div class="step-block">
  <div class="step-text">
    > ### Configuration Process
    
    1. Open the test case
    2. Select the Test Action Unit step
    3. Click **Configure**
    4. A dialog displays all steps inside the unit
    
    > ### Configuration Modal
    
    | Column | Description |
    |--------|-------------|
    | **API Name** | API configuration included in the unit |
    | **Collection** | API's parent collection |
    | **Datasheet** | Choose datasheet for this step |
    | **Row No.** | Starting row to be used |
    | **Actions** | Edit or delete |
    
    > ### Row Number Behavior
    
    - **Row 1**: Base row
    - **Row 2+**: Specific data set
    - **Sequential rows** can vary between steps
    
    > **Use cases**
    > - Same data row for entire unit
    > - Different rows to test variations
    > - Use base row for common values
  </div>
  <div class="step-image">
    <h4 class="image-title">Datasheet Configuration Modal</h4>
    <img src="/exgenix-documentation/img/testcase/datasheet_selection.png" alt="Configuring datasheets for Test Action Unit" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

---

## Using Test Action Units in Test Cases

### Adding a Test Action Unit

1. Open or create a test case
2. Click **+ Add Step**
3. Select **TEST ACTION UNIT** in Type
4. Choose the desired unit
5. Configure datasheets

---
<div class="step-block">
  <div class="step-text">
    ### Before vs After Using Test Action Units
    
    **Before (Manual Steps)**
    
    > Without Test Action Units, test cases require manually adding each individual step:
    > - Socket Connection
    > - Session Logon Request
    > - Session Logon Response
    > - User Logon Request
    > - User Logon Response
    > - Additional test steps...

    > This results in lengthy, repetitive test case configurations.
  </div>
  <div class="step-image">
    <h4 class="image-title">Before Using Test Action Units</h4>
    <img src="/exgenix-documentation/img/test_action_unit/before_tau.png" alt="Test case before using Test Action Units" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>


<div class="step-block">
  <div class="step-text">
    **After (Using Units)**
    
    > With Test Action Units, the same login flow is encapsulated in a single reusable component:
    > - Login Test Action Unit (contains all login steps)
    > - Additional test steps...

    :::info
    **Benefits:**
    - Reduced test case size
    - Improved readability
    - Single point of maintenance
    - Consistent execution across test cases
    - Faster test case creation
    :::
    
    
  </div>
  <div class="step-image">
    <h4 class="image-title">After Using Test Action Units</h4>
    <img src="/exgenix-documentation/img/test_action_unit/after_tau.png" alt="Test case after using Test Action Units" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

---

## Common Test Action Unit Patterns

### 1. Authentication Flow
Socket → Session logon + response → User logon + response

### 2. Cleanup Flow
User logout → Session logout → Connection close

### 3. Order Validation
Risk checks → Balance → Instrument validation → Price band checks

### 4. Market Data Subscription
Connection → Subscription → Snapshot → Confirmation

---
<!-- 
## Best Practices

### Design Principles
✓ **Single responsibility**: Each unit should have one clear purpose  
✓ **High cohesion**: All steps should be closely related  
✓ **Independence**: Units should not depend on external state  
✓ **Include validations**: Validate responses within the unit  

### Naming Conventions

**Format**: `<Action>_<Component>_Tau`

**Examples:**
- `Login_User_Tau`
- `Logout_Session_Tau`
- `Subscribe_MarketData_Tau`

### Documentation Guidelines

Document:
- Purpose
- Prerequisites
- Steps included
- Expected outcomes
- Captured variables

### Datasheet Organization

**Consolidated Datasheet**
- One sheet for entire unit
- Simpler management
- Best for simple flows

**Separate Datasheets**
- One per step for complex flows
- More flexibility
- Better for data variation

### Maintenance Strategy
- Track dependencies
- Version control
- Review regularly
- Test units independently

---

## Managing Test Action Units

### Viewing Units

Navigate to **Test Configuration → Test Action Unit**.

Each entry displays:
- Name
- Description
- Steps count
- Last modified date
- Actions

### Editing
- Update name, description, steps, datasheets
- Changes affect all test cases using it

### Deleting
- Cannot delete if used in any test case

### Cloning
- Useful for creating similar units quickly

---

## Advanced Features

### Conditional Execution
Achieved using:
- Multiple units for different paths
- Datasheets with conditional values

### Error Handling
Configured at test case level:
- **Continue**: Proceed to next step on error
- **Abort**: Stop execution immediately
- **Retry**: Attempt step again

### Session Management
- **Continuous session**: Maintain connection across iterations
- **Different session per iteration**: New connection each time
- Configure based on test requirements

---

## Troubleshooting

### Steps Not Executing

**Check:**
- Missing datasheets
- Invalid API configs
- Connection issues

### Variable Capture Issues

**Check:**
- Syntax errors
- Validation rules
- Datasheet mappings

### Cannot Add Unit to Test Case

**Resolve by:**
- Re-saving the unit
- Fixing validation errors -->


## Best Practices
#
<div class="collapsible-card-div">
  <details class="green-collapsible">
    <summary> Design Principles</summary>

  - ✓ **Single responsibility:** Each unit should have one clear purpose  
  - ✓ **High cohesion:** All steps should be closely related  
  - ✓ **Independence:** Units should not depend on external state  
  - ✓ **Include validations:** Validate responses within the unit  

  </details>


  <details class="green-collapsible">
    <summary> Naming Conventions</summary>

  **Format:**  
  `<Action>_<Component>_Tau`

  **Examples:**  
  - `Login_User_Tau`  
  - `Logout_Session_Tau`  
  - `Subscribe_MarketData_Tau`

  </details>


  <details class="green-collapsible">
    <summary> Documentation Guidelines</summary>

  Document the following for every Test Action Unit:

  - Purpose  
  - Prerequisites  
  - Steps included  
  - Expected outcomes  
  - Captured variables  

  </details>


  <details class="green-collapsible">
    <summary> Datasheet Organization</summary>

  ### **Consolidated Datasheet**
  - One sheet for the entire unit  
  - Simple to manage  
  - Best for straightforward flows  

  ### **Separate Datasheets**
  - One per step (for complex flows)  
  - Better flexibility  
  - Supports variations in data  

  </details>


  <details class="green-collapsible">
    <summary> Maintenance Strategy</summary>

  - Track dependencies  
  - Apply version control  
  - Review units periodically  
  - Test units independently  

  </details>
</div>

---

##  Managing Test Action Units
#
<div class="collapsible-card-div">

  <details class="green-collapsible">
    <summary> Viewing Units</summary>

  Navigate to:  
  **Test Configuration → Test Action Unit**

  Each unit displays:

  - Name  
  - Description  
  - Steps count  
  - Last modified  
  - Actions  

  </details>


  <details class="green-collapsible">
    <summary> Editing Units</summary>

  You can update:

  - Name  
  - Description  
  - Steps  
  - Datasheets  

  ⚠️ **Changes apply to all test cases using this unit.**

  </details>


  <details class="green-collapsible">
    <summary> Deleting Units</summary>

  - Units **cannot** be deleted if used in a test case  
  - Remove references from all test cases first  

  </details>

  <details class="green-collapsible">
    <summary> Cloning Units</summary>

  Useful when:

  - Creating slight variations  
  - Reusing structure with new data  

  </details>

</div>

---
##  Advanced Features
#

<div class="collapsible-card-div">
  <details class="green-collapsible">
    <summary> Conditional Execution</summary>

  Achieved using:

  - Multiple units for alternate paths  
  - Datasheets with conditional values  

  </details>


  <details class="green-collapsible">
    <summary> Error Handling</summary>

  Configured at **Test Case** level:

  - **Continue:** Proceed to next step  
  - **Abort:** Stop execution  
  - **Retry:** Re-attempt failed step  

  </details>


  <details class="green-collapsible">
    <summary> Session Management</summary>

  Options:

  - **Continuous session:** Same connection reused  
  - **New session per iteration:** Fresh connection each cycle  

  Choose based on test requirements.

  </details>

</div>

---

##  Troubleshooting

<div class="collapsible-card-div">

    <details class="green-collapsible">
      <summary> Steps Not Executing</summary>

    Check:

    - Missing datasheets  
    - Invalid API configurations  
    - Connection issues  

    </details>


    <details class="green-collapsible">
      <summary> Variable Capture Issues</summary>

    Check:

    - Syntax errors  
    - Incorrect validation rules  
    - Wrong datasheet mappings  

    </details>


    <details class="green-collapsible">
      <summary> Cannot Add Unit to Test Case</summary>

    Fix by:

    - Re-saving the Test Action Unit  
    - Resolving validation errors  

    </details>

</div>

---

## Summary

Test Action Units improve efficiency, readability, and maintainability by grouping related steps into reusable components.

#
<div class="takeaway-panel">
  <div class="panel-header"><strong>Key Takeaways</strong></div>
  <div class="panel-body">
    <ul>
      <li>Build logical reusable modules</li>
      <li>Configure datasheets per step for flexibility</li>
      <li>Reduce test case size and maintenance workload</li>
      <li>Maintain consistency across test suites</li>
      <li>Support variable capture and error handling</li>
    </ul>
  </div>
</div>

# 
Common use cases include login/logout workflows, session management, market data operations, and order processing.

---