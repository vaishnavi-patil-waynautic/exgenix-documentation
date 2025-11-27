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
    <img src="/img/api_config/5.png" alt="Creating a new datasheet" />
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
    <img src="/img/api_config/6.png" alt="Datasheet structure with rows and columns" />
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
    <img src="/img/api_config/7.png" alt="Import and Export Excel datasheets" />
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

| Function | Output | Description |
|----------|--------|-------------|
| `${variable_name}` | Variable value | Retrieves the stored value of a variable. `variable_name` = name of the variable |
| `${set(name, value)}` | Assigned value | Assigns a value to a variable. `name` = variable name; `value` = value to assign |
| `${capture(name)}` | Captured value | Captures the latest response value into a variable. `name` = variable to store the captured value. Used inside response datasheet to capture values for use in following requests/responses |
| `${validate_or_capture(name)}` | Validated or captured value | Validates against a variable if it exists, else captures the latest response value. `name` = variable to validate against or capture into. If variable exists, validates against its value; otherwise creates new variable and stores captured value |

---

### Sequences

**Note:** For using sequence functions, use in consecutive rows. Example: `${sequence(order_id)}` in first row generates 1, use again in next row for 2, and so on.

| Function | Output | Description |
|----------|--------|-------------|
| `${sequence(order_id)}` | 1, 2, 3... | Generates an auto-incrementing number sequence. `order_id` = variable name used to track the sequence |
| `${sequence(msg_id, start=100)}` | 100, 101, 102... | Starts a sequence at a given number. `msg_id` = sequence variable; `start=100` = initial number |
| `${sequence(order, prefix="ORD")}` | ORD001... | Adds a prefix to an incrementing sequence. `order` = sequence variable; `prefix` = text added before number |
| `${sequence(trans, suffix="_TX")}` | 001_TX... | Adds a suffix to an incrementing sequence. `trans` = sequence variable; `suffix` = text added after number |
| `${sequence(batch, increment=5)}` | 5, 10, 15... | Increments sequence by a custom step. `batch` = sequence variable; `increment=5` = step size |
| `${sequence_reset(order_id)}` | Reset confirmation | Resets a sequence back to its initial value. `order_id` = sequence variable to reset |
| `${sequence_current(order_id)}` | Current value | Returns the current sequence number without incrementing. `order_id` = sequence variable whose current value is returned |

---

### Random Values

| Function | Output | Description |
|----------|--------|-------------|
| `${random_int(1000, 9999)}` | Random integer | Generates a random integer in a range. First number = min; second = max |
| `${random_decimal(10.0, 99.9, 2)}` | Decimal value | Generates a random decimal in a range with defined decimal places. First number = min; second = max; third argument = no of decimal places |
| `${random_string(8)}` | Alphanumeric string | Generates a random alphanumeric string. `8` = length of the random string |
| `${random_alpha(6)}` | Alphabetic string | Generates random letters only. `6` = number of alphabetic characters |
| `${random_numeric(4)}` | Numeric string | Generates random digits. `4` = number of digits |
| `${uuid()}` | UUID string | Generates a full UUID. No parameters. Example: "a7b2c9d4-e5f6-4789-b123-456789abcdef" |
| `${uuid_short()}` | Short UUID | Generates an 8-character UUID fragment. No parameters. Example: "a7b2c9d4" |
| `${pick_random(["BUY","SELL"])}` | One random item | Picks a random value from a list |

---

### Math Operations

| Function | Output | Description |
|----------|--------|-------------|
| `${add(100, 25)}` | 125 | Adds two numbers |
| `${subtract(100, 25)}` | 75 | Subtracts one number from another. First number minus second |
| `${multiply(10, 5)}` | 50 | Multiplies two values |
| `${divide(100, 4)}` | 25 | Divides first value by second. First number divided by second |
| `${round(3.14159, 2)}` | 3.14 | Rounds a number to a given precision. Number to round, and number of decimals |
| `${min(5, 2, 8)}` | 2 | Returns the smallest value. List of values to compare |
| `${max(5, 2, 8)}` | 8 | Returns the largest value. List of values to compare |

---

### String Operations

| Function | Output | Description |
|----------|--------|-------------|
| `${concat("USER_", "123")}` | USER_123 | Joins two or more strings. Strings to join together |
| `${upper("hello")}` | HELLO | Converts text to uppercase. Text to convert to uppercase |
| `${lower("HELLO")}` | hello | Converts text to lowercase. Text to convert to lowercase |
| `${substring("ABCDEF", 2, 3)}` | CDE | Extracts a substring. String, Start index, length |
| `${left("ABCDEF", 3)}` | ABC | Extracts leftmost characters. String, No of characters to extract from left |
| `${right("ABCDEF", 3)}` | DEF | Extracts rightmost characters. String, No of characters to extract from right |
| `${replace("hello world", "world", "there")}` | hello there | Replaces text inside a string. Original text, target text, replacement text |
| `${pad_left("42", 5, "0")}` | 00042 | Pads a value to a fixed width. Value, total length, pad character |
| `${trim("  hello  ")}` | hello | Removes surrounding spaces. Text to strip whitespace |
| `${length("hello")}` | 5 | Returns character count. Text to measure |

---

### Date/Time

| Function | Output | Description |
|----------|--------|-------------|
| `${now()}` | ISO timestamp | Returns current timestamp. No parameters. Example: "2025-01-15T14:30:45" |
| `${now("YYYY-MM-DD")}` | Formatted date | Returns formatted date. Format string describing output format. User can switch places of year, month and date as per required format (e.g., MM-YYYY-DD). Example: "2025-01-15" |
| `${now("HH:mm:ss")}` | Time string | Returns formatted time. Format string for time. User can switch places as required format. Example: "14:30:45" |
| `${now("YYYYMMDD")}` | Compact date | Returns date without separators. Compact format. User can switch places of year, month and date as required format but all characters used should be Capital only. Example: "20250115" |
| `${timestamp()}` | Unix seconds | Returns Unix timestamp in seconds. No parameters. Example: 1736951445 |
| `${timestamp_millis()}` | Unix milliseconds | Returns Unix timestamp in milliseconds. No parameters. Example: 1736951445000 |

---

### Expressions

**Note:** Expressions can be nested. Example: If user wants to perform AND operation between two expressions: `${expr("${expr('100 > 50')} and ${expr('VIP' if ${Quantity} < 90 else 0)")}`

| Function | Output | Description |
|----------|--------|-------------|
| `${expr("100 > 50")}` | true | Evaluates a boolean expression. Expression string to evaluate |
| `${expr("'VIP' if ${score} > 90 else 'REGULAR'")}` | VIP/REGULAR | Evaluates a condition. User can define any text value instead of VIP/REGULAR |
| `${expr("${price} * ${quantity} + ${fee}")}` | Numeric result | Performs arithmetic with variables. Math expression using variables. User can give numbers directly or can pass variables |
| `${expr("${active} and ${verified}")}` | true/false | Evaluates boolean logic. If `active` variable contains any value, function considers it as true; if it has 0 then considers it as false. User should provide string values in single inverted commas. Example: `${expr("'VIP' and 'REGULAR'")}` |
| `${expr("${active} or ${verified}")}` | true/false | Evaluates boolean logic. If variable contains any value, function considers it as true; if it has 0 then considers it as false. User should provide string values in single inverted commas. Example: `${expr("'VIP' or 'REGULAR'")}` |
| `${expr("${symbol} in ['AAPL','MSFT','GOOGL']")}` | true/false | Checks if value exists in a list. Membership check. User can provide value as variable or as a string in single inverted commas. Example: `${expr("${symbol} in ['AAPL','MSFT','GOOGL']")}` or `${expr("'AAPL' in ['AAPL','MSFT','GOOGL']")}` |

---

### Regular Expressions

| Function | Output | Description |
|----------|--------|-------------|
| `${regex_match("ABC123", "[A-Z]+[0-9]+")}` | true/false | Tests a pattern against text. Input string, regex pattern |
| `${regex_capture("ID:12345", "ID:([0-9]+)", 1)}` or `${regex_capture(${name}, "ID:([0-9]+)", 1)}` | 12345 | Extracts a specific group from text. Input string (can be passed as a variable), regex pattern, capture group number (if pattern matches with multiple, which group user wants to capture). Used inside response datasheet to capture values for use in following requests/responses. Example: if value captured and stored in variable called "name", in following requests/responses, it can be used as `${name}` |

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

