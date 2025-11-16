---
title: API Configuration Module - User Guide
sidebar_position: 4
hide_table_of_contents: true
id: api
---

import {
  FeatureCard,
  FeatureGrid,
  StatusBadge,
  InfoBox,
  StepIndicator,
  QuickLinks
} from '@site/src/components/DocumentationComponents';

# API Configuration Module - User Guide

---

## Table of Contents
- [Overview](#overview)
- [Module Structure](#module-structure)
- [Collections](#collections)
- [API Configurations](#api-configurations)
- [Datasheets](#datasheets)
- [Advanced Features](#advanced-features)
- [Best Practices](#best-practices)
- [Troubleshooting](#troubleshooting)

---

## Overview {#overview}

The API Configuration module is the foundation of Exgenix's test automation framework. It enables you to define, configure, and manage **FIX / ETI / Custom Binary API** protocol-based API configurations for your test scenarios. This module supports various connection types and message formats, allowing you to model complex financial messaging systems with precision.

### Key Benefits

<FeatureGrid>
  <FeatureCard
    icon="layers"
    title="Organize API Configurations"
    description="Group API configurations by functional areas for better organization and team collaboration"
    color="#2563eb"
  />
  <FeatureCard
    icon="file"
    title="Import from Specifications"
    description="Import configurations directly from specification documents to eliminate manual entry errors"
    color="#10b981"
  />
  <FeatureCard
    icon="database"
    title="Manage Test Data"
    description="Manage test data efficiently with datasheets and built-in dynamic functions"
    color="#f59e0b"
  />
  <FeatureCard
    icon="code"
    title="Generate Dynamic Data"
    description="Generate dynamic test data using built-in functions for realistic test scenarios"
    color="#8b5cf6"
  />
  <FeatureCard
    icon="package"
    title="Reusable Components"
    description="Create reusable, maintainable test components that can be shared across test suites"
    color="#ec4899"
  />
  <FeatureCard
    icon="zap"
    title="Rapid Test Design"
    description="Enable faster test design through pre-built components and templates"
    color="#06b6d4"
  />
</FeatureGrid>

---

## Module Structure {#module-structure}

The API Configuration module follows a three-tier hierarchical structure:

📂 **Collections**  

    └── ⚙️ **API Configurations**  
    
        └── 📊 **Datasheets**

| Component | Purpose |
|------------|----------|
| Collections | Group related APIs for better organization |
| API Configurations | Define message structures and behavior |
| Datasheets | Store static and dynamic test data |

---

## Collections

### What Are Collections?

Collections act as containers for similar or related API configurations, helping you organize your test assets logically.

### Benefits:
- Organize APIs by functional areas (e.g., Market Data, Orders, Settlement)
- Improve clarity in large projects
- Enable modular development and collaboration
- Simplify navigation and management

<div class="step-block">
  <div class="step-text">
    ### Creating a Collection
    
    1. Navigate to **API Configuration**  
    2. Click **+ Create Collection**  
    3. Fill in the details:  
       - **Name**: Descriptive identifier for the collection  
       - **Description**: Purpose and scope of the collection  
    4. Click **Create**
  </div>
  <div class="step-image">
    <h4 class="image-title">Create Collection</h4>
    <img src="/exgenix-documentation/img/api_config/1.png" alt="Creating a new collection" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

### Viewing Collections

Each collection displays:
- Collection name
- Description
- Count of API configurations (e.g., "9 API Configs")
- Action buttons: **Edit | Delete | View**

---

## API Configurations

<div class="step-block">
  <div class="step-text">

  API Configuration consists of **three guided steps** that walk you through the complete setup process.

    ### Step 1: Basic Info
    
    Define the basic attributes of your API endpoint.
    
    **Required Fields**
    
    - **Action Type** (Required)
       - **Socket_Connection**: Establish persistent socket connection
       - **TCP_IP_Request**: Outbound FIX / ETI/Custom Binary API requests (orders, cancel, query)
       - **TCP_IP_Response**: Expected FIX / ETI/Custom Binary API messages from exchange
       - **Custom_Data_Type**: Messages outside standard FIX / ETI/Custom Binary API
    - **Name** (Required)
      - Meaningful identifier (e.g., "New Order Single")
    - **Unique ID**
      - Identifier mapped from exchange specifications
    - **Description**
      - Purpose, notes, and usage details
  </div>
  <div class="step-image">
    <h4 class="image-title">Basic Info Configuration</h4>
    <img src="/exgenix-documentation/img/api_config/2.png" alt="API Configuration Basic Info Step" />
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
       - Example: Page Number = 15, Max Continuation Pages = 3 will scan pages 15-18  
    3. Upload your FIX / ETI/Custom Binary API specification PDF  
    4. Click **Import**  
    5. The table auto-populates with the configuration data.
    
  </div>
  <div class="step-image">
    <h4 class="image-title">Import from PDF</h4>
    <img src="/exgenix-documentation/img/api_config/4.png" alt="Import Configuration from PDF Specification" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

<div class="step-block">
  <div class="step-text">

  **Benefits of PDF Import:**
    - Eliminates manual entry errors
    - Faster configuration setup
    - Ensures consistency with FIX / ETI/Custom Binary API specifications
    - Maintains standardization across configurations
    
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
    <img src="/exgenix-documentation/img/api_config/configuration_page.png" alt="Import Configuration from PDF Specification" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

---

### Step 3: Datasheets

Datasheets store the input values that will be used during test execution.

- 🎥 **Datasheet Configuration** — See: [Datasheet Configuration](/videos#datasheet)

---

## Datasheets

### What Are Datasheets?

Datasheets are data tables linked to API configurations where:
- **Columns** represent FIX / ETI/Custom Binary API fields
- **Rows** represent data sets or test iterations

**Capabilities:**
- Manage static test data
- Generate dynamic values using functions
- Reuse data across multiple executions
- Execute row-based test scenarios

---

<div class="step-block">
  <div class="step-text">
    ### Creating a Datasheet
    
    1. Click **+ Create Datasheet**  
    2. Provide:
       - **Name** (Required): Descriptive identifier  
       - **Description**: Purpose and scope  
    3. Click **Create**
  </div>
  <div class="step-image">
    <h4 class="image-title">Create Datasheet</h4>
    <img src="/exgenix-documentation/img/api_config/5.png" alt="Creating a new datasheet" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

---

<div class="step-block">
  <div class="step-text">
    ### Datasheet Structure
    
    A datasheet consists of:
    - **Column headers**: Correspond to FIX / ETI/Custom Binary API tags
    - **Rows**: Individual data entries
    - **Actions**: Import Excel, Export Excel, Add Row
  </div>
  <div class="step-image">
    <h4 class="image-title">Datasheet Structure</h4>
    <img src="/exgenix-documentation/img/api_config/6.png" alt="Datasheet structure with rows and columns" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

---

### Base Row Inheritance

The first row (Row 1) acts as the **Base Row** with special inheritance behavior:
- Child rows automatically inherit values from the base row
- Child rows can override inherited values as needed
- Empty cells in child rows inherit automatically

**Example:**

| Row | SenderCompID | TargetCompID | Symbol |
|-----|---------------|--------------|--------|
| 1 | CLIENT01 | EXCHANGE01 | AAPL |
| 2 | (inherit) | (inherit) | MSFT |
| 3 | (inherit) | (inherit) | GOOGL |

---

### Adding Data Rows

Click **+ Add Row** to create additional test iterations. Each row represents one execution iteration.

### Dynamic Functions

Use dynamic functions to generate values at runtime. Functions must start with the = symbol.

**Common Functions**

| Function | Description | Example |
|-----------|-------------|----------|
| =NOW() | Current timestamp | =NOW() |
| =RANDOM(min, max) | Random number between min and max | =RANDOM(100, 999) |
| =UUID() | Generate unique identifier | =UUID() |
| =INCREMENT(start) | Incremental counter | =INCREMENT(1000) |
| =CONCAT(str1, str2) | Concatenate strings | =CONCAT("ORD", =INCREMENT(1)) |

**Function Benefits**
- Generate unique order IDs for each execution
- Create realistic timestamps
- Produce randomized test data for stress testing
- Ensure data uniqueness across iterations

**Example Datasheet with Functions**

| ClOrdID | Symbol | Side | OrderQty | Price | TransactTime |
|----------|---------|------|-----------|--------|---------------|
| =CONCAT("ORD", =INCREMENT(1000)) | AAPL | 1 | =RANDOM(100, 1000) | 150.50 | =NOW() |
| (inherit) | MSFT | 2 | (inherit) | 320.25 | (inherit) |
| (inherit) | GOOGL | 1 | (inherit) | 2800.00 | (inherit) |

---

**Result During Execution**

**ClOrdID generates:** ORD1001, ORD1002, ORD1003...  
**OrderQty generates:** random quantities between 100–1000  
**TransactTime uses:** current execution time  
**Rows 2 and 3:** override *Symbol*, *Side*, and *Price* while inheriting functions  

---

**Iteration Strategy**

When a test case executes multiple times, you can control how data is consumed:

- **Use Same Row:** Every iteration uses data from the same row *(useful for retry scenarios)*  
- **Use Next Row:** Each iteration advances to the next row *(useful for varied test scenarios)*  

> This setting is configured at the **test case level** during execution setup.

---

<div class="step-block">
  <div class="step-text">
    ### Importing and Exporting Datasheets
    
    **Exporting Datasheets**
    1. Click **Export Excel** button
    2. The current datasheet structure and data are exported to an Excel file
    
    **Use cases:**
    - Back up your test data
    - Share datasheets with team members
    - Edit data offline in Excel
    - Create templates for similar configurations
    
    **Importing Datasheets**
    1. Click **Import Excel** button
    2. Select an Excel file from your computer
    3. Ensure your file meets these requirements:
      - Same number of columns as the current datasheet
      - Matching column headers (FIX / ETI/Custom Binary API tag names must match exactly)
      - Compatible data types in each column
    4. Exgenix validates the file and imports the data
    - All existing rows are replaced with imported data
    
    **Use Cases**
    - Bulk data entry from external sources  
    - Migrating data from other test tools  
    - Loading datasets prepared by business analysts  
    - Efficiently loading large datasets (100+ rows)  
  </div>
  <div class="step-image">
    <h4 class="image-title">Import/Export Datasheets</h4>
    <img src="/exgenix-documentation/img/api_config/7.png" alt="Import and Export Excel datasheets" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

---

<InfoBox type="info" title="Import Best Practices">

- Always export your current datasheet before importing to create a backup  
- Validate your Excel data before importing  
- Use consistent data formats (dates, numbers, strings)  
- Test with a small import first to verify compatibility  

</InfoBox>

---

**Completing API Configuration**

After configuring your datasheets:

1. Review all three steps to ensure completeness  
2. Click **Finish** to save the API configuration  
3. Your new configuration is now available in the selected collection  

---

## Managing API Configurations

**Editing Existing Configurations**

1. Navigate to the collection containing your configuration  
2. Click **View Collection**  
3. Select the configuration you want to edit  
4. Make necessary changes to any of the three steps  
5. Save your changes  

---

**Deleting Configurations**

1. Locate the configuration in its collection  
2. Click the **delete icon (trash can)**  
3. Confirm deletion when prompted  

<InfoBox type="danger" title="Warning">

Deleting an API configuration will also remove associated datasheets.  
Ensure configurations are not being used in active test cases before deletion.

</InfoBox>

---

**Cloning Configurations**

To create similar configurations quickly:

1. Use an existing configuration as a template  
2. Export its datasheet  
3. Create a new configuration with modified parameters  
4. Import the datasheet and adjust as needed  

---

## Advanced Features

<details class="green-collapsible">
  <summary>📌 Advanced Feature: Reference Groups</summary>

  <p>Reference groups allow you to define repeating groups of fields within a message (e.g., <strong>NoOrders</strong> group in a mass order message).</p>

  <h4>Configuration Steps:</h4>
  <ul>
    <li>Define the group count field (e.g., <strong>NoOrders = N</strong>)</li>
    <li>Mark child fields with the reference group name</li>
    <li>Specify cardinality for repeating fields</li>
  </ul>

</details>

<details class="green-collapsible">
  <summary>🔗 Advanced Feature: Field Dependencies</summary>

  <p>Some fields depend on values in other fields (e.g., <strong>OrderQty</strong> must be positive if <strong>Side = Buy</strong>).</p>

  <h4>Best Practices:</h4>
  <ul>
    <li>Use validation rules in the Configuration step</li>
    <li>Leverage datasheet functions to maintain consistency</li>
    <li>Document dependencies in field descriptions</li>
  </ul>

</details>

<details class="green-collapsible">
  <summary>🔌 Integration with Other Modules</summary>

  <h4>Test Configuration Module</h4>
  <ul>
    <li>Build test case flows by sequencing multiple API configs</li>
    <li>Define the order of message exchanges</li>
    <li>Create complex multi-step scenarios</li>
  </ul>

  <h4>Execution Module</h4>
  <ul>
    <li>Execute API configurations in sequence</li>
    <li>Use datasheets to provide runtime values</li>
    <li>Apply iteration settings to control data consumption</li>
    <li>Establish server communication via connection configurations</li>
  </ul>

  <h4>Reports Module</h4>
  <ul>
    <li>View which API configurations were executed</li>
    <li>Compare actual vs. expected message structures</li>
    <li>Analyze field-level validation results</li>
    <li>Review datasheet values used in each iteration</li>
  </ul>

</details>

---

## Best Practices

<details class="green-collapsible">
  <summary><strong>Naming Conventions</strong></summary>

  #### Collections
  - Use functional categories (e.g., **"Order Management"**, **"Market Data"**)
  - Keep names concise but descriptive

  #### Configurations
  - Use action-oriented names (e.g., **"Submit New Order"**, **"Cancel Order Request"**)
  - Include message type when helpful

  #### Datasheets
  - Indicate the test scenario (e.g., **"Valid Orders Dataset"**, **"Edge Case Scenarios"**)
  - Include version numbers if applicable

</details>

<details class="green-collapsible">
  <summary><strong>Organization Strategy</strong></summary>

  <ul>
    <li>Group by functionality: Keep related APIs together</li>
    <li>Separate by message direction: Requests vs Responses</li>
    <li>Version control: Add version numbers for protocol variations</li>
  </ul>

</details>

<details class="green-collapsible">
  <summary><strong>Datasheet Management</strong></summary>

  <ul>
    <li>Start simple: Create base row with common values</li>
    <li>Use functions wisely for dynamic fields</li>
    <li>Document functions in the Description field</li>
    <li>Export datasheets regularly</li>
    <li>Validate with small datasets first</li>
  </ul>

</details>

<details class="green-collapsible">
  <summary><strong>Configuration Reusability</strong></summary>

  <ul>
    <li>Create template configurations to clone</li>
    <li>Standardize field mappings across configs</li>
    <li>Share collections with team members</li>
  </ul>

</details>

---

## Troubleshooting

<details class="green-collapse">
  <summary><strong>Import Failures</strong></summary>

  <p><strong>PDF import doesn't extract fields correctly</strong></p>
  <ul>
    <li>Verify page numbers are correct</li>
    <li>Ensure table name matches exactly</li>
    <li>Check if PDF is encrypted or image-based</li>
    <li>Try importing smaller page ranges</li>
    <li>Adjust "Max Continuation Pages"</li>
  </ul>

  <p><strong>Excel import fails with validation errors</strong></p>
  <ul>
    <li>Export current datasheet to compare structure</li>
    <li>Ensure no extra columns exist</li>
    <li>Column headers must match exactly</li>
    <li>Remove special characters or formatting</li>
    <li>Remove merged cells</li>
  </ul>

</details>

<details class="green-collapse">
  <summary><strong>Function Errors</strong></summary>

  <p><strong>Functions don't generate expected values</strong></p>
  <ul>
    <li>Check function syntax (must start with =)</li>
    <li>Verify parameter types</li>
    <li>Test functions in base row</li>
    <li>Review function documentation</li>
    <li>Check for circular dependencies</li>
  </ul>

</details>

---

### Performance Issues

<InfoBox type="warning" title="Performance Issue: Large Datasheets Load Slowly">

**Problem:** Large datasheets load slowly

**Solutions:**
- Limit datasheets to necessary rows only  
- Use static values instead of functions where possible  
- Split large datasheets into multiple smaller ones  
- Consider database-backed test data for very large datasets  
- Remove unused columns from datasheets  

</InfoBox>

---

## Summary

The API Configuration module provides a comprehensive framework for defining FIX / ETI/Custom Binary API protocol-based API endpoints with precision and flexibility. By organizing configurations into collections, defining detailed message structures, and leveraging powerful datasheet capabilities, you can create reusable, maintainable test components that form the foundation of your automated testing strategy.

---

### Key Takeaways

✓ Use collections to organize APIs by functional area  
✓ Import configurations from PDF specifications to save time  
✓ Leverage dynamic functions for generating test data  
✓ Use the base row inheritance pattern for efficient data management  
✓ Export datasheets regularly as backups  
✓ Follow naming conventions for better maintainability  

---