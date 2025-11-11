---
title: Test Action Unit - User Guide
sidebar_position: 5
hide_table_of_contents: true
---

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
- Organize reusable sequences such as Login, Logout, Order Validation, Market Data flows
- Improve maintainability by updating logic in one place
- Increase modularity and consistency across test suites
- Enable faster test design through pre-built components
- Maintain standardized execution flows across all test cases

---

## What Is a Test Action Unit?

A Test Action Unit acts as a container for grouping multiple API-based steps that logically belong together.

### Examples
- **Login Flow**: Socket connection → Session logon → User logon → Validation
- **Logout Flow**: User logout → Session logout → Connection close
- **Order Placement**: Pre-checks → Order submission → Response validation

---

## Structure

Each Test Action Unit consists of:

| Component | Description |
|-----------|-------------|
| **Name** | Descriptive identifier for the unit (e.g., "Login Test Action Unit") |
| **Description** | Purpose, usage scope, and included steps |
| **Test Steps** | Ordered API configurations that execute sequentially |
| **Execution Order** | Defined flow of steps within the unit |

---

## Creating a Test Action Unit

<div class="step-block">
  <div class="step-text">
    ### Step 1: Navigate to Test Action Units
    
    1. Go to **Test Configuration** in left navigation
    2. Select **Test Action Unit**
    3. Click **+ Create Test Action Unit**
  </div>
  <div class="step-image">
    <h4 class="image-title">Navigate to Test Action Units</h4>
    <img src="/img/test_action_unit/navigate_tau.png" alt="Navigate to Test Action Unit section" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

---

<div class="step-block">
  <div class="step-text">
    ### Step 2: Define Basic Information
    
    Provide the following details:
    
    **Action Type (Required)**
    - Select **API Test Action Unit**
    
    **Name (Required)**
    - Provide a meaningful, consistent name such as:
      - Login Test Action Unit
      - User Authentication Flow
    
    **Description**  
    Include:
    - Purpose
    - Steps grouped inside
    - Any prerequisites
  </div>
  <div class="step-image">
    <h4 class="image-title">Define Basic Information</h4>
    <img src="/img/test_action_unit/basic_info.png" alt="Test Action Unit Basic Information" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

---

<div class="step-block">
  <div class="step-text">
    ### Step 3: Add Test Steps
    
    Click **+ Add Step** to include API configurations.
    
    #### API Selection
    You may select:
    - Socket Connection
    - TCP/IP Request
    - TCP/IP Response
    - Custom Data Type
    
    #### Step Properties
    
    **Description**  
    Short explanation of the step's purpose.
    
    **Wait Time (seconds)**  
    Delay applied before or after execution.
    
    **Datasheet**  
    Choose a datasheet containing field values for that step.
    
    **Row Pattern**
    - **SAME_ROW**: Use same datasheet row for all iterations
    - **NEXT_ROW**: Move to next row per iteration
  </div>
  <div class="step-image">
    <h4 class="image-title">Add Test Steps</h4>
    <img src="/img/test_action_unit/add_steps.png" alt="Adding test steps to Test Action Unit" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

---

## Example: Login Test Action Unit

<div class="step-block">
  <div class="step-text">
    A complete Login Test Action Unit typically includes:
    
    1. **Socket Connection**: Establish connection to the server
    2. **Session Logon Request**: Send session authentication request
    3. **Session Logon Response**: Validate session authentication
    4. **User Logon Request**: Send user credentials
    5. **User Logon Response**: Validate user authentication
    
    Each step is configured with appropriate datasheets and validation rules.
  </div>
  <div class="step-image">
    <h4 class="image-title">Login Test Action Unit Example</h4>
    <img src="/img/test_action_unit/login_example.png" alt="Example of Login Test Action Unit" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

---

<div class="step-block">
  <div class="step-text">
    ### Step Configuration Details
    
    Each step within the Test Action Unit displays:
    - Step number and sequence
    - API configuration name
    - Associated collection
    - Datasheet selection
    - Row pattern (SAME_ROW/NEXT_ROW)
    - Wait time configuration
    - Edit and delete actions
  </div>
  <div class="step-image">
    <h4 class="image-title">Step Configuration View</h4>
    <img src="/img/test_action_unit/step_config.png" alt="Test Action Unit step configuration" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

---

<div class="step-block">
  <div class="step-text">
    ### Multiple Steps in Action
    
    The Test Action Unit interface allows you to:
    - View all steps in sequence
    - Edit individual step configurations
    - Reorder steps using drag-and-drop
    - Add or remove steps as needed
    - Configure wait times between steps
    - Set datasheet mappings for each step
  </div>
  <div class="step-image">
    <h4 class="image-title">Multiple Steps View</h4>
    <img src="/img/test_action_unit/multiple_steps.png" alt="Multiple steps in Test Action Unit" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

---

## Configuring Datasheets for Test Action Units

When adding a Test Action Unit inside a test case, you must configure the datasheet mapping for each internal step.

<div class="step-block">
  <div class="step-text">
    ### Configuration Process
    
    1. Open the test case
    2. Select the Test Action Unit step
    3. Click **Configure**
    4. A dialog displays all steps inside the unit
    
    ### Configuration Modal
    
    | Column | Description |
    |--------|-------------|
    | **API Name** | API configuration included in the unit |
    | **Collection** | API's parent collection |
    | **Datasheet** | Choose datasheet for this step |
    | **Row No.** | Starting row to be used |
    | **Actions** | Edit or delete |
    
    ### Row Number Behavior
    
    - **Row 1**: Base row
    - **Row 2+**: Specific data set
    - **Sequential rows** can vary between steps
    
    **Use cases**
    - Same data row for entire unit
    - Different rows to test variations
    - Use base row for common values
  </div>
  <div class="step-image">
    <h4 class="image-title">Datasheet Configuration Modal</h4>
    <img src="/img/test_action_unit/datasheet_config.png" alt="Configuring datasheets for Test Action Unit" />
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

<div class="step-block">
  <div class="step-text">
    ### Before vs After Using Test Action Units
    
    **Before (Manual Steps)**
    
    Without Test Action Units, test cases require manually adding each individual step:
    - Socket Connection
    - Session Logon Request
    - Session Logon Response
    - User Logon Request
    - User Logon Response
    - Additional test steps...
    
    This results in lengthy, repetitive test case configurations.
  </div>
  <div class="step-image">
    <h4 class="image-title">Before Using Test Action Units</h4>
    <img src="/img/test_action_unit/before_tau.png" alt="Test case before using Test Action Units" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

---

<div class="step-block">
  <div class="step-text">
    **After (Using Units)**
    
    With Test Action Units, the same login flow is encapsulated in a single reusable component:
    - Login Test Action Unit (contains all login steps)
    - Additional test steps...
    
    **Benefits:**
    - Reduced test case size
    - Improved readability
    - Single point of maintenance
    - Consistent execution across test cases
    - Faster test case creation
  </div>
  <div class="step-image">
    <h4 class="image-title">After Using Test Action Units</h4>
    <img src="/img/test_action_unit/after_tau.png" alt="Test case after using Test Action Units" />
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

<div class="step-block">
  <div class="step-text">
    ## Example: Complete Login Test Action Unit
    
    A fully configured Login Test Action Unit demonstrates:
    - Sequential step execution
    - Datasheet mapping for each step
    - Wait time configuration
    - Response validation
    - Variable capture
    - Error handling
    
    The complete unit ensures reliable authentication flow that can be reused across all test cases requiring user login.
  </div>
  <div class="step-image">
    <h4 class="image-title">Complete Login Flow</h4>
    <img src="/img/test_action_unit/complete_example.png" alt="Complete Login Test Action Unit configuration" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

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
- Always review impact before modifying

### Deleting
- Cannot delete if used in any test case
- Remove references from test cases first
- Confirm deletion when prompted

### Cloning
- Useful for creating similar units quickly
- Duplicate and modify as needed
- Maintains all step configurations

---

## Advanced Features

### Conditional Execution
Achieved using:
- Multiple units for different paths
- Datasheets with conditional values
- Variable-driven execution logic

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
- Incorrect row patterns
- Wait time configuration

### Variable Capture Issues

**Check:**
- Syntax errors
- Validation rules
- Datasheet mappings
- Response field names

### Cannot Add Unit to Test Case

**Resolve by:**
- Re-saving the unit
- Fixing validation errors
- Checking for circular dependencies
- Verifying all steps are valid

---

## Summary

Test Action Units improve efficiency, readability, and maintainability by grouping related steps into reusable components.

### Key Takeaways

✓ Build logical reusable modules  
✓ Configure datasheets per step for flexibility  
✓ Reduce test case size and maintenance workload  
✓ Maintain consistency across test suites  
✓ Support variable capture and error handling  

Common use cases include login/logout workflows, session management, market data operations, and order processing.

---