---
id: creating-tau
title: 'Creating a Test Action Unit'
sidebar_position: 4
hide_table_of_contents: true
sidebar_label: Creating a Test Action Unit
slug: /test-action-unit/creating-tau
description: 'Step-by-step guide to creating Test Action Units'
---

# Creating a Test Action Unit


---

<div class="step-block">
  <div class="step-text">
    ## Step 1: Navigate to Test Action Units
    
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
    ## Step 2: Create Test Action Unit Collection

    1. Click on **`+ Create Collection`**
    
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

    3. Click **`Create`**
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
    ## Step 3: Define Basic Information
    
    1. Navigate to newly create collection
    2. Click on "`View`" to open it
    3. Click on "**`+ Create Test Action Unit`**"
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
    ## Step 4: Add Test Steps
    
    Once the Test Action Unit is created, you can define its step type and associate it with an API. Click **`+ Add Step`** to include API configurations.

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