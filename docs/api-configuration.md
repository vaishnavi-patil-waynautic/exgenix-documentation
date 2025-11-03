---
id: api-configuration-module
title: API Configuration Module - User Guide
sidebar_position: 3
---


# API Configuration Module - User Guide

## 📚 Table of Contents
1. [Overview](#-overview)
2. [Module Structure](#-module-structure)
3. [Collections](#-collections)
4. [API Configurations](#️-api-configurations)
5. [Datasheets](#-datasheets)
6. [Advanced Features](#-advanced-features)
7. [Best Practices](#-best-practices)
8. [Troubleshooting](#-troubleshooting)
9. [Summary](#-summary)


---

## 🧭 Overview
The **API Configuration module** is the foundation of Exgenix's test automation framework.  
It enables you to define, configure, and manage **FIX / ETI / Custom Binary API** protocol-based configurations for your test scenarios.

This module supports multiple connection types and message formats, allowing precise modeling of complex financial messaging systems.

### 🔑 Key Benefits
- Organize API configurations by functional areas  
- Import configurations directly from specification documents  
- Manage test data efficiently with datasheets  
- Generate dynamic test data using built-in functions  
- Create reusable, maintainable test components  

---

## 🧱 Module Structure
The module follows a **three-tier hierarchy**:

Collections
└── API Configurations
└── Datasheets


| Component | Purpose |
|------------|----------|
| **Collections** | Group related APIs for better organization |
| **API Configurations** | Define message structures and behavior |
| **Datasheets** | Store static and dynamic test data |

---

## 📁 Collections

### What Are Collections?
Collections act as containers for similar or related API configurations, helping you organize test assets logically.

**Benefits**
- Organize APIs by functional areas (e.g., Market Data, Orders, Settlement)  
- Improve clarity in large projects  
- Enable modular development and collaboration  
- Simplify navigation and management  

### Creating a Collection
1. Navigate to **API Configuration**
2. Click **+ Create Collection**
3. Fill in the details:
   - **Name:** Descriptive identifier  
   - **Description:** Purpose and scope  
4. Click **Create**

### Viewing Collections
Each collection displays:
- Collection Name  
- Description  
- Count of API Configurations (e.g., “9 API Configs”)  
- Actions: **Edit | Delete | View**

---

## ⚙️ API Configurations

API Configuration consists of **three guided steps** that walk you through setup.

### Step 1: Basic Info
Define basic attributes of your API endpoint.

| Field | Description |
|-------|--------------|
| **Action Type** | Determines API behavior |
| Socket_Connection | Establish persistent socket connection |
| TCP_IP_Request | Outbound FIX / ETI / Custom Binary requests |
| TCP_IP_Response | Expected FIX / ETI / Custom Binary responses |
| Custom_Data_Type | For messages outside standard formats |
| **Name** | Descriptive identifier (e.g., “New Order Single”) |
| **Unique ID** | Mapped identifier from exchange specification |
| **Description** | Purpose or usage details |

---

### Step 2: Configuration
Define the message structure using a **field specification table**.

| Column | Description |
|---------|-------------|
| Sr. No. | Sequential number |
| Tag | Field Tag |
| Field Name | Name of the field |
| Data Type | Data type of field |
| Size in Bytes | Field size |
| Field Offset | Byte offset |
| Identifier | Field mapping |
| Required | Yes/No |
| Cardinality | 1, 0..1, 1..n |
| Reference Group | Group name if applicable |

#### Manual Configuration
Click **Add Row** → Enter field details → Repeat for all required fields.

#### Import from Specification Document
**Steps**
1. Click **Import PDF**
2. Provide:
   - **Page Number:** Real index in PDF (e.g., 15–17)
   - **Table Name:** Exact title of table in document  
   - **Max Continuation Pages:** If table spans multiple pages
3. Upload PDF → Click **Import**

**Benefits**
- Eliminates manual entry errors  
- Ensures consistency with official specs  
- Accelerates setup and maintains standardization  

**Validation Checklist**
✅ Required fields present  
✅ Data types and sizes correct  
✅ Cardinality rules valid  
✅ Reference groups configured  

---

### Step 3: Datasheets
Datasheets store the **input values** used during test execution.

---

## 📊 Datasheets

### What Are Datasheets?
Datasheets are linked data tables where:
- Columns represent **API fields**
- Rows represent **test data sets**

**Capabilities**
- Manage static/dynamic data  
- Generate runtime values with functions  
- Reuse data across executions  
- Enable row-based execution  

### Creating a Datasheet
1. Click **+ Create Datasheet**
2. Provide:
   - **Name:** Descriptive identifier  
   - **Description:** Purpose and scope  
3. Click **Create**

---

### Datasheet Structure
| Part | Description |
|------|-------------|
| **Columns** | FIX / ETI / Custom Binary field names |
| **Rows** | Data entries / iterations |
| **Actions** | Import, Export, Add Row |

---

### Base Row Inheritance
- **Row 1** = Base Row  
- All child rows inherit its values  
- Empty cells in child rows auto-inherit  

**Example**

| Row | SenderCompID | TargetCompID | Symbol |
|------|---------------|---------------|--------|
| 1 | CLIENT01 | EXCHANGE01 | AAPL |
| 2 | (inherit) | (inherit) | MSFT |
| 3 | (inherit) | (inherit) | GOOGL |

---

### Dynamic Functions

Use dynamic functions (start with `=`) for runtime values.

| Function | Description | Example |
|-----------|--------------|----------|
| `=NOW()` | Current timestamp | `=NOW()` |
| `=RANDOM(min, max)` | Random number | `=RANDOM(100, 999)` |
| `=UUID()` | Unique identifier | `=UUID()` |
| `=INCREMENT(start)` | Incremental counter | `=INCREMENT(1000)` |
| `=CONCAT(str1, str2)` | Join strings | `=CONCAT("ORD", =INCREMENT(1))` |

**Benefits**
- Unique IDs per run  
- Dynamic timestamps  
- Randomized load data  

---

### Example Datasheet with Functions

| ClOrdID | Symbol | Side | OrderQty | Price | TransactTime |
|----------|---------|------|-----------|--------|---------------|
| `=CONCAT("ORD", =INCREMENT(1000))` | AAPL | 1 | `=RANDOM(100,1000)` | 150.50 | `=NOW()` |
| (inherit) | MSFT | 2 | (inherit) | 320.25 | (inherit) |
| (inherit) | GOOGL | 1 | (inherit) | 2800.00 | (inherit) |

**Execution Output Example:**
- ClOrdID → ORD1001, ORD1002, ORD1003  
- Random OrderQty  
- Current execution timestamp  

---

### Iteration Strategy
Choose how data rows are consumed:
- **Use Same Row:** Repeat same row (retry scenarios)  
- **Use Next Row:** Next row each iteration (varied tests)  

Configured in **Test Case Execution Settings**.

---

### Importing & Exporting Datasheets

#### Export Excel
- Click **Export Excel**
- Exports current structure and data  

**Use Cases**
- Backup  
- Offline edits  
- Templates  

#### Import Excel
- Click **Import Excel**  
- Ensure:
  - Matching columns and headers  
  - Valid data types  
  - No merged cells  

**Import Tips**
✅ Export before importing as backup  
✅ Validate Excel before upload  
✅ Use consistent formats  

---

## 🧠 Advanced Features

### Reference Groups
Used to define repeating field groups (e.g., `NoOrders`).

**Setup**
1. Define group count field  
2. Tag child fields with group name  
3. Specify cardinality  

---

### Field Dependencies
Define rules between dependent fields (e.g., `OrderQty > 0` if `Side=Buy`).

**Best Practices**
- Document dependencies  
- Validate rules at configuration level  
- Use datasheet functions for consistency  

---

### Integration with Other Modules

| Module | Integration |
|--------|--------------|
| **Test Configuration** | Combine multiple API configs into test flows |
| **Execution** | Run configurations with datasheet data |
| **Reports** | Analyze executions, validations, and datasheet values |

---

## 🧩 Best Practices

### Naming Conventions
| Element | Recommendation |
|----------|----------------|
| **Collections** | Functional category (e.g., `Order Management`) |
| **Configurations** | Action-based names (e.g., `Submit New Order`) |
| **Datasheets** | Scenario + version (e.g., `EdgeCases_v2`) |

---

### Organization Strategy
- Group by **functionality**  
- Separate by **message direction**  
- Use **versioning** for protocol updates  

---

### Datasheet Management
- Start with base row  
- Use functions for dynamic values  
- Regularly export as backup  
- Validate small imports before scaling  

---

### Configuration Reusability
- Create **template configurations**  
- Use **standardized field names**  
- Share/export collections for reuse  

---

## 🧩 Troubleshooting

### Import Failures
**PDF Import**
- Check page number matches PDF viewer index  
- Ensure table name matches exactly  
- Avoid encrypted/image PDFs  
- Adjust continuation pages  

**Excel Import**
- Match column headers (case-sensitive)  
- Remove extra or merged columns  
- Validate data format  

---

### Function Errors
- Verify syntax starts with `=`  
- Test in base row  
- Check for nested dependencies  

---

### Performance Issues
- Limit dataset size  
- Prefer static values  
- Split large sheets  
- Remove unused columns  

---

## ✅ Summary

The **API Configuration module** provides a comprehensive framework for defining **FIX / ETI / Custom Binary** Binary protocol-based API endpoints with precision and flexibility. By organizing configurations into collections, defining detailed message structures, and leveraging powerful datasheet capabilities, you can create reusable, maintainable test components that form the foundation of your automated testing strategy.

### 🏁 Key Takeaways
 - ✅ Use collections to organize APIs by functional area
 - ✅ Import configurations from PDF specifications to save time
 - ✅ Leverage dynamic functions for generating test data
 - ✅ Use the base row inheritance pattern for efficient data management
 - ✅ Export datasheets regularly as backups
 - ✅ Follow naming conventions for better maintainability
