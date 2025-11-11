---
title: API Configuration Module - User Guide
sidebar_position: 4
hide_table_of_contents: true
---

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

### **Key Benefits**
- Organize API configurations by functional areas  
- Import configurations directly from specification documents  
- Manage test data efficiently with datasheets  
- Generate dynamic test data using built-in functions  
- Create reusable, maintainable test components  

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
    <img src="/img/api_config/create_collection.png" alt="Creating a new collection" />
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
API Configuration consists of **three guided steps** that walk you through the complete setup process.

<div class="step-block">
  <div class="step-text">
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
    <img src="/img/api_config/basic_info.png" alt="API Configuration Basic Info Step" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

---

### Step 2: Configuration

Define the FIX / ETI/Custom Binary API message structure using a detailed field specification table.

**FIX / ETI/Custom Binary API Message Components**

The configuration table includes the following columns:
- Sr. No.
- Tag
- Field Name
- Data Type
- Size in Bytes
- Field Offset
- Identifier
- Required (Yes/No)
- Cardinality (1, 0..1, 1..n)
- Reference Group

<div class="step-block">
  <div class="step-text">
    **Manual Configuration**
    
    - Click **Add Row**
    - Enter field details for each column
    - Repeat for all required fields
  </div>
  <div class="step-image">
    <h4 class="image-title">Manual Configuration Table</h4>
    <img src="/img/api_config/manual_config.png" alt="Manual API Configuration Table" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

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
    
    **Benefits of PDF Import:**
    - Eliminates manual entry errors
    - Faster configuration setup
    - Ensures consistency with FIX / ETI/Custom Binary API specifications
    - Maintains standardization across configurations
  </div>
  <div class="step-image">
    <h4 class="image-title">Import from PDF</h4>
    <img src="/img/api_config/import_pdf.png" alt="Import Configuration from PDF Specification" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

**Validate Configuration**

Before proceeding, verify:
- All required fields are present
- Data types and sizes are correct
- Cardinality rules are properly defined
- Reference groups are configured appropriately

---

### Step 3: Datasheets
Datasheets store the input values that will be used during test execution.

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
    <img src="/img/api_config/create_datasheet.png" alt="Creating a new datasheet" />
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
    <img src="/img/api_config/datasheet_structure.png" alt="Datasheet structure with rows and columns" />
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
    - Click **Export Excel** button
    - The current datasheet structure and data are exported to an Excel file
    
    **Use cases:**
    - Back up your test data
    - Share datasheets with team members
    - Edit data offline in Excel
    - Create templates for similar configurations
    
    **Importing Datasheets**
    - Click **Import Excel** button
    - Select an Excel file from your computer
    - Ensure your file meets these requirements:
      - Same number of columns as the current datasheet
      - Matching column headers (FIX / ETI/Custom Binary API tag names must match exactly)
      - Compatible data types in each column
    - Exgenix validates the file and imports the data
    - All existing rows are replaced with imported data
    
    **Use Cases**
    - Bulk data entry from external sources  
    - Migrating data from other test tools  
    - Loading datasets prepared by business analysts  
    - Efficiently loading large datasets (100+ rows)  
  </div>
  <div class="step-image">
    <h4 class="image-title">Import/Export Datasheets</h4>
    <img src="/img/api_config/import_export_datasheet.png" alt="Import and Export Excel datasheets" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

---

**Import Best Practices**

- Always export your current datasheet before importing to create a backup  
- Validate your Excel data before importing  
- Use consistent data formats (dates, numbers, strings)  
- Test with a small import first to verify compatibility  

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

> ⚠️ **Warning:** Deleting an API configuration will also remove associated datasheets.  
> Ensure configurations are not being used in active test cases before deletion.

---

**Cloning Configurations**

To create similar configurations quickly:

1. Use an existing configuration as a template  
2. Export its datasheet  
3. Create a new configuration with modified parameters  
4. Import the datasheet and adjust as needed  

---

## Advanced Features

### Reference Groups
Reference groups allow you to define repeating groups of fields within a message (e.g., NoOrders group in a mass order message).

**Configuration steps:**
1. Define the group count field (e.g., NoOrders=N)
2. Mark child fields with the reference group name
3. Specify cardinality for repeating fields

---

### Field Dependencies
Some fields depend on values in other fields (e.g., OrderQty must be positive if Side=Buy).

**Best practices:**
- Use validation rules in the Configuration step
- Leverage datasheet functions to maintain consistency
- Document dependencies in field descriptions

---

### Integration with Other Modules

#### Test Configuration Module
- Build test case flows by sequencing multiple API configs  
- Define the order of message exchanges  
- Create complex multi-step scenarios  

#### Execution Module
- Execute API configurations in sequence  
- Use datasheets to provide runtime values  
- Apply iteration settings to control data consumption  
- Establish server communication via connection configurations  

#### Reports Module
- View which API configurations were executed  
- Compare actual vs. expected message structures  
- Analyze field-level validation results  
- Review datasheet values used in each iteration  

---

## Best Practices

### Naming Conventions

#### Collections
- Use functional categories (e.g., "Order Management", "Market Data")
- Keep names concise but descriptive

#### Configurations
- Use action-oriented names (e.g., "Submit New Order", "Cancel Order Request")
- Include message type when helpful

#### Datasheets
- Indicate the test scenario (e.g., "Valid Orders Dataset", "Edge Case Scenarios")
- Include version numbers if applicable

---

### Organization Strategy
- **Group by functionality**: Keep related APIs in the same collection
- **Separate by message direction**: Consider separate collections for requests and responses
- **Version control**: Include version numbers in collection names if working with multiple protocol versions

---

### Datasheet Management
- **Start simple**: Create base row with common values first
- **Use functions wisely**: Leverage functions for values that should change (IDs, timestamps), use static values for stable data
- **Document functions**: Add comments in the Description field explaining complex function usage
- **Regular exports**: Export datasheets regularly as backups
- **Validate data**: Test with small datasheets before scaling to large datasets

---

### Configuration Reusability
- **Create template configurations**: Build generic configurations that can be cloned and modified
- **Standardize field mappings**: Use consistent field naming across similar configurations
- **Share collections**: Export and share collection configurations with team members

---

## Troubleshooting

### Import Failures

**Problem:** PDF import doesn't extract fields correctly  
**Solutions:**
- Verify page numbers are correct (use actual PDF page index)
- Check table name matches exactly as in document (case-sensitive)
- Ensure PDF is not encrypted or image-based
- Try importing smaller page ranges
- Adjust Max Continuation Pages setting

**Problem:** Excel import fails with validation errors  
**Solutions:**
- Export current datasheet to see exact column names and structure
- Ensure Excel file has no extra columns
- Verify column headers match exactly (case-sensitive)
- Check for special characters or formatting in cells
- Remove any merged cells or complex formatting

---

### Function Errors
**Problem:** Functions don't generate expected values  
**Solutions:**
- Verify function syntax is correct (must start with =)
- Check function parameters match expected types
- Test functions in base row first
- Review function documentation for proper usage
- Check for circular dependencies in nested functions

---

### Performance Issues
**Problem:** Large datasheets load slowly  
**Solutions:**
- Limit datasheets to necessary rows only
- Use static values instead of functions where possible
- Split large datasheets into multiple smaller ones
- Consider database-backed test data for very large datasets
- Remove unused columns from datasheets

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