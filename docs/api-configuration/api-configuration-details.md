---
id: api-configuration
slug: /api-configuration/api-configuration
title: 'API Configurations'
hide_table_of_contents: true
sidebar_label: API Configurations
---

import ExampleBlock  from '@site/src/components/ExampleBlock';
import {Video } from 'lucide-react';

---

<div class="step-block">
  <div class="step-text">

  API Configuration consists of **three guided steps** that walk you through the complete setup process.

    ### Step 1: Basic Info
    
    Define the basic attributes of your API endpoint.
    
    **Required Fields**
    
    - **Action Type** (Required)
       - **Socket Connection**: Establish persistent socket connection
       - **TCP IP Request**: Outbound FIX / ETI/Custom Binary API requests (orders, cancel, query)
       - **TCP IP Response**: Expected FIX / ETI/Custom Binary API messages from exchange
       - **Custom Data Type**: Messages outside standard FIX / ETI/Custom Binary API
    - **Name** (Required)
      - Meaningful identifier (e.g., "New Order Single")
    - **Template ID**
      - Identifier mapped from exchange specifications
    - **Description**
      - Purpose, notes, and usage details
  </div>
  <div class="step-image">
    <h4 class="image-title">Basic Info Configuration</h4>
    <img src="/img/api_config/2.png" alt="API Configuration Basic Info Step" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

---

 ### Step 2: Configuration

<div class="step-block">
  <div class="step-text">
    **Import from Specification Document**
    
    For faster, error-free setup, you can import configurations directly from FIX / ETI/Custom Binary API specification PDFs.
    
    **Steps:**
    1. Click **Import PDF** 
    2. Enter the following information:
       - **Page Number**: The real PDF page index visible in your PDF viewer (e.g., 15-17), not the page label printed within the document
       - **Table Name**: The exact name of the table as written in the specification document
       - **Max Continuation Pages**: Number of additional pages to scan if the table spans multiple pages



<ExampleBlock title="Example: Continuation Page Range">
          <p>
            Given the following configuration:
          </p>

          <ul>
            <li><strong>Page Number</strong> = 15</li>
            <li><strong>Max Continuation Pages</strong> = 3</li>
          </ul>

          <p>
            The system will scan pages <strong>15 through 18</strong>.
          </p>
</ExampleBlock>

    3. Upload your FIX / ETI/Custom Binary API specification PDF  
    4. Click **Import**  
    5. The table auto-populates with the configuration data.
    
  </div>
  <div class="step-image">
    <h4 class="image-title">Import from PDF</h4>
    <img src="/img/api_config/4.png" alt="Import Configuration from PDF Specification" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

<div class="step-block">
  <div class="step-text">

  :::info
  **Benefits of PDF Import:**
    - Eliminates manual entry errors
    - Faster configuration setup
    - Ensures consistency with FIX / ETI/Custom Binary API specifications
    - Maintains standardization across configurations
  :::


**Validate Configuration**

Before proceeding, verify:

<ul>
  <li>All required fields are present</li>
  <li>Data types and sizes are correct</li>
  <li>Cardinality rules are properly defined</li>
  <li>Reference groups are configured appropriately</li>
</ul>

  </div>
  <div class="step-image">
    <h4 class="image-title">Imported Configuration</h4>
    <img src="/img/api_config/configuration_page.png" alt="Import Configuration from PDF Specification" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>


---

### Step 3: Datasheets
Datasheets store the input values that will be used during test execution.

- <Video size={20} style={{ verticalAlign: 'middle', marginRight: '4px' }} /> **Datasheet Configuration** — See: [Datasheet Configuration](/videos#datasheet)

---

## Managing API Configurations

> ### **Editing Existing Configurations**
#
1. Navigate to the collection containing your configuration  
2. Click **View Collection**  
3. Select the configuration you want to edit  
4. Make necessary changes to any of the three steps  
5. Save your changes  

---

> ### **Deleting Configurations**
#
1. Locate the configuration in its collection  
2. Click the **delete icon (trash can)**  
3. Confirm deletion when prompted  

:::warning
Deleting an API configuration will also remove associated datasheets.  
Ensure configurations are not being used in active test cases before deletion.
:::

---

> ### **Cloning Configurations**

To create similar configurations quickly:

1. Use an existing configuration as a template  
2. Export its datasheet  
3. Create a new configuration with modified parameters  
4. Import the datasheet and adjust as needed  

---