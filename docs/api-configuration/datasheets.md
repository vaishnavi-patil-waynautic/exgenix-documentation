---
hide_table_of_contents: true
slug: /api-configuration/datasheets
id: datasheets
title: 'Datasheets'
sidebar_label: Datasheets
---

import ExampleBlock  from '@site/src/components/ExampleBlock';

---

### What Are Datasheets?
Datasheets are data tables linked to API configurations where:
- **Columns** represent `FIX / ETI/Custom Binary API` fields
- **Rows** represent data sets or test iterations


### Capabilities
#

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


### Dynamic Functions
Use dynamic functions to generate values at runtime. Functions must start with the = symbol.

### **Common Functions**

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

## Built-in Functions
#

### Variable Operations

| Function | Description |
|----------|-------------|
| `${variable_name}` | Get variable value |
| `${set(name, value)}` | Set variable to value |
| `${capture(name)}` | Capture response value into variable |
| `${validate_or_capture(name)}` | Validate against variable or capture if not exists |

---

### Sequences (Auto-increment)

| Function | Description |
|----------|-------------|
| `${sequence(order_id)}` | Returns: 1, 2, 3, 4... |
| `${sequence(msg_id, start=100)}` | Returns: 100, 101, 102... |
| `${sequence(order, prefix="ORD")}` | Returns: ORD001, ORD002, ORD003... |
| `${sequence(trans, suffix="_TX")}` | Returns: 001_TX, 002_TX, 003_TX... |
| `${sequence(batch, increment=5)}` | Returns: 5, 10, 15, 20... |
| `${sequence_reset(order_id)}` | Reset sequence to start |
| `${sequence_current(order_id)}` | Get current value without incrementing |

---

### Random Values

| Function | Description |
|----------|-------------|
| `${random_int(1000, 9999)}` | Random integer between 1000-9999 |
| `${random_decimal(10.0, 99.9, 2)}` | Random decimal with 2 decimal places |
| `${random_string(8)}` | Random alphanumeric: "kJ8mN2pQ" |
| `${random_alpha(6)}` | Random letters: "ABcdEF" |
| `${random_numeric(4)}` | Random digits: "7392" |
| `${uuid()}` | UUID: "a7b2c9d4-e5f6-4789-b123-456789abcdef" |
| `${uuid_short()}` | Short UUID: "a7b2c9d4" |
| `${pick_random(["BUY", "SELL"])}` | Random selection from list |

---

### Math Operations

| Function | Description |
|----------|-------------|
| `${add(100, 25)}` | Addition: 125 |
| `${subtract(100, 25)}` | Subtraction: 75 |
| `${multiply(10, 5)}` | Multiplication: 50 |
| `${divide(100, 4)}` | Division: 25 |
| `${round(3.14159, 2)}` | Round to decimals: 3.14 |
| `${min(5, 2, 8)}` | Minimum: 2 |
| `${max(5, 2, 8)}` | Maximum: 8 |

---

### String Operations

| Function | Description |
|----------|-------------|
| `${concat("USER_", "123")}` | Join strings: "USER_123" |
| `${upper("hello")}` | Uppercase: "HELLO" |
| `${lower("HELLO")}` | Lowercase: "hello" |
| `${substring("ABCDEF", 2, 3)}` | Extract substring: "CDE" |
| `${left("ABCDEF", 3)}` | Left characters: "ABC" |
| `${right("ABCDEF", 3)}` | Right characters: "DEF" |
| `${replace("hello world", "world", "there")}` | Replace: "hello there" |
| `${pad_left("42", 5, "0")}` | Left pad: "00042" |
| `${trim("  hello  ")}` | Remove whitespace: "hello" |
| `${length("hello")}` | String length: 5 |

---

### Date/Time

| Function | Description |
|----------|-------------|
| `${now()}` | Current ISO timestamp: "2025-01-15T14:30:45" |
| `${now("YYYY-MM-DD")}` | Formatted date: "2025-01-15" |
| `${now("HH:mm:ss")}` | Formatted time: "14:30:45" |
| `${now("YYYYMMDD")}` | Compact date: "20250115" |
| `${timestamp()}` | Unix timestamp: "1736951445" |
| `${timestamp_millis()}` | Unix timestamp (ms): "1736951445000" |

---

### Expressions

| Function | Description |
|----------|-------------|
| `${expr("100 > 50")}` | Boolean: true |
| `${expr("${price} > 100 ? 'HIGH' : 'LOW'")}` | Conditional: "HIGH" or "LOW" |
| `${expr("'VIP' if ${score} > 90 else 'REGULAR'")}` | Python conditional |
| `${expr("${price} * ${quantity} + ${fee}")}` | Math calculation |
| `${expr("${active} and ${verified}")}` | Logical AND |
| `${expr("${symbol} in ['AAPL', 'MSFT', 'GOOGL']")}` | Check membership |

---

### Regular Expressions

| Function | Description |
|----------|-------------|
| `${regex_match("ABC123", "[A-Z]+[0-9]+")}` | Check pattern match: true/false |
| `${regex_capture("ID:12345", "ID:([0-9]+)", 1)}` | Extract group: "12345" |
 

 ---

### **Completing API Configuration**

After configuring your datasheets:

1. Review all three steps to ensure completeness  
2. Click **Finish** to save the API configuration  
3. Your new configuration is now available in the selected collection  

---

## Common Usage Patterns

### Test Data Request

| BodyLen | TemplateID | SessionID | OrderID | Symbol | Quantity | Price |
|---------|------------|-----------|---------|--------|----------|-------|
| 56      | 10020      | `${session_id}` | `${sequence(order_id, prefix="ORD")}` | AAPL | `${random_int(10, 100)}` | `${random_decimal(140.0, 160.0, 2)}` |

---

### Response Validation

| BodyLen | TemplateID | SessionID | OrderID | Status | ExecutionID |
|---------|------------|-----------|---------|--------|-------------|
| 56      | 10021      | `${session_id}` | `${validate_or_capture(order_id)}` | SUCCESS | `${capture(exec_id)}` |

---

### Special Validation Values

| Value | Meaning |
|-------|---------|
| `""` | Empty string – Skip validation |
| `#EMPTY#` | Validate field is empty |
| `${capture(var)}` | Only capture, no validation |
| `${validate_or_capture(var)}` | Validate if exists, else capture |

---

### Variable Resolution Order

1. Global User Variables (highest priority)  
2. Test Case Variables  
3. Runtime Variables (lowest priority)  

---

## Examples

### Login Flow

| Step | Details |
|------|--------|
| Login Request | `UserID testuser`<br/>`Password pass123` |
| Login Response - Capture session | `SessionID: ${capture(session_id)}`<br/>`Token: ${capture(auth_token)}` |
| Next Request - Use captured session | `SessionID: ${session_id}`<br/>`Token: ${auth_token}` |

---

### Order Creation

| Step | Details |
|------|--------|
| Create Order Request | `OrderID : ${sequence(order_id, prefix="ORD", start=1000)}`<br/>`Quantity : ${random_int(10, 100)}`<br/>`Price : ${random_decimal(100.0, 200.0, 2)}` |
| Order Response - Validate and capture | `OrderID: ${validate_or_capture(order_id)}`<br/>`ExecutionID: ${capture(exec_id)}` |

---

### Dynamic Calculations

| Variable | Calculation |
|----------|------------|
| Quantity | 100 |
| Price | 50.25 |
| Commission | `${expr("100 * 50.25 * 0.001")}` |
| Total | `${expr("100 * 50.25 + 5.025")}` |
| OrderType | `${expr("100 > 50 ? 'BULK' : 'RETAIL'")}` |

---

## Function Combinations

| Function | Result |
|----------|--------|
| `${concat("USER_", ${random_string(6)})}` | USER_kJ8mN2 |
| `${concat(${upper("test")}, "_", ${sequence(id)})}` | TEST_1 |
| `${expr("${random_int(1, 10)}* 100")}` | Random hundreds |
| `${now("YYYY-MM-DD")} ${now("HH:mm:ss")}` | 2025-01-15 14:30:45 |


---

  <h2 id="tips"><a class="anchor" href="#tips">Quick Tips</a></h2>
      <ul class="list-tight">
        <li>Functions return strings – use <code class="inline">`${expr()}`</code> for numeric operations</li>
        <li>Each sequence name maintains its own counter</li>
        <li>Variables persist across test steps within execution</li>
        <li>Use <code class="inline">`${capture()}`</code> to store values from responses</li>
        <li>Use <code class="inline">`${validate_or_capture()}`</code> for dynamic validation</li>
        <li>Combine functions for complex scenarios</li>
      </ul>

