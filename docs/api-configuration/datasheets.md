---
hide_table_of_contents: true
slug: /api-configuration/datasheets
id: datasheets
title: 'Datasheets'
sidebar_label: Datasheets
---

import ExampleBlock  from '@site/src/components/ExampleBlock';


### What Are Datasheets?
Datasheets are data tables linked to API configurations where:
- **Columns** represent FIX / ETI/Custom Binary API fields
- **Rows** represent data sets or test iterations


### Capabilities


> **Manage Static Test Data**  

> **Generate Dynamic Values Using Functions**

> **Reuse Data Across Multiple Executions**  

> **Execute Row-Based Test Scenarios** 


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

<ExampleBlock title="Example: Inheriting Fields Across Rows">
  <p>This example demonstrates how rows can inherit field values from previous rows:</p>

  <table>
    <thead>
      <tr>
        <th>Row</th>
        <th>SenderCompID</th>
        <th>TargetCompID</th>
        <th>Symbol</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>CLIENT01</td>
        <td>EXCHANGE01</td>
        <td>AAPL</td>
      </tr>
      <tr>
        <td>2</td>
        <td><code>`(inherit)`</code></td>
        <td><code>`(inherit)`</code></td>
        <td>MSFT</td>
      </tr>
      <tr>
        <td>3</td>
        <td><code>`(inherit)`</code></td>
        <td><code>`(inherit)`</code></td>
        <td>GOOGL</td>
      </tr>
    </tbody>
  </table>
</ExampleBlock>

---

### Adding Data Rows
Click **+ Add Row** to create additional test iterations. Each row represents one execution iteration.

---

### Dynamic Functions
Use dynamic functions to generate values at runtime. Functions must start with the = symbol.

## **Common Functions**

| Function | Description | Example |
|-----------|-------------|----------|
| `=NOW()` | Current timestamp | =NOW() |
| `=RANDOM(min, max)` | Random number between min and max | =RANDOM(100, 999) |
| `=UUID()` | Generate unique identifier | =UUID() |
| `=INCREMENT(start)` | Incremental counter | =INCREMENT(1000) |
| `=CONCAT(str1, str2)` | Concatenate strings | =CONCAT("ORD", =INCREMENT(1)) |

:::info
**Function Benefits**
- Generate unique order IDs for each execution
- Create realistic timestamps
- Produce randomized test data for stress testing
- Ensure data uniqueness across iterations
:::


<ExampleBlock title="Example: Datasheet with Functions">
  <p>This example demonstrates using dynamic functions and inheritance in a datasheet:</p>

  <table>
    <thead>
      <tr>
        <th>ClOrdID</th>
        <th>Symbol</th>
        <th>Side</th>
        <th>OrderQty</th>
        <th>Price</th>
        <th>TransactTime</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>=CONCAT("ORD", =INCREMENT(1000))</code></td>
        <td>AAPL</td>
        <td>1</td>
        <td><code>=RANDOM(100, 1000)</code></td>
        <td>150.50</td>
        <td><code>=NOW()</code></td>
      </tr>
      <tr>
        <td><code>`(inherit)`</code></td>
        <td>MSFT</td>
        <td>2</td>
        <td><code>`(inherit)`</code></td>
        <td>320.25</td>
        <td><code>`(inherit)`</code></td>
      </tr>
      <tr>
        <td><code>`(inherit)`</code></td>
        <td>GOOGL</td>
        <td>1</td>
        <td><code>`(inherit)`</code></td>
        <td>2800.00</td>
        <td><code>`(inherit)`</code></td>
      </tr>
    </tbody>
  </table>
</ExampleBlock>


---

**Result During Execution**

**ClOrdID generates:** ORD1001, ORD1002, ORD1003...  
**OrderQty generates:** random quantities between 100–1000  
**TransactTime uses:** current execution time  
**Rows 2 and 3:** override *Symbol*, *Side*, and *Price* while inheriting functions  

---

:::tip
**Iteration Strategy**

When a test case executes multiple times, you can control how data is consumed:

- **Use Same Row:** Every iteration uses data from the same row *(useful for retry scenarios)*  
- **Use Next Row:** Each iteration advances to the next row *(useful for varied test scenarios)*  

:::

:::note 
> This setting is configured at the **test case level** during execution setup.
:::


---

<div class="step-block">
  <div class="step-text">
    ### Importing and Exporting Datasheets
    ##
    #### **Exporting Datasheets**
    1. Click `Export Excel` button
    2. The current datasheet structure and data are exported to an Excel file
    
    > **Use cases:**
    > - Back up your test data
    > - Share datasheets with team members
    > - Edit data offline in Excel
    > - Create templates for similar configurations
    
    #### **Importing Datasheets**
    1. Click `Import Excel` button
    2. Select an Excel file from your computer
    3. Ensure your file meets these requirements:
          - Same number of columns as the current datasheet
          - Matching column headers (FIX / ETI/Custom Binary API tag names must match exactly)
          - Compatible data types in each column
    4. Exgenix validates the file and imports the data
          - All existing rows are replaced with imported data
    
    > **Use Cases**
    > - Bulk data entry from external sources  
    > - Migrating data from other test tools  
    > - Loading datasets prepared by business analysts  
    > - Efficiently loading large datasets (100+ rows)  
  </div>
  <div class="step-image">
    <h4 class="image-title">Import/Export Datasheets</h4>
    <img src="/exgenix-documentation/img/api_config/7.png" alt="Import and Export Excel datasheets" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

---

:::tip
**Import Best Practices**

- Always export your current datasheet before importing to create a backup  
- Validate your Excel data before importing  
- Use consistent data formats (dates, numbers, strings)  
- Test with a small import first to verify compatibility  
:::



---

### **Completing API Configuration**

After configuring your datasheets:

1. Review all three steps to ensure completeness  
2. Click **Finish** to save the API configuration  
3. Your new configuration is now available in the selected collection  

---