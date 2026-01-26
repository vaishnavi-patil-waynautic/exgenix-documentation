---
id: scenario_4
title: 'Scenario 4'
sidebar_position: 5
hide_table_of_contents: true
sidebar_label: Multicast
slug: /sample-test-scenario/scenario-4
desciption: 'An illustration of turning an ETI API spec into an automated Exgenix test.'
---

import {
  FeatureCard,
  FeatureGrid,
  InfoBox,
  StatusBadge,
  StepIndicator
} from '@site/src/components/DocumentationComponents';

# Multicast Configuration & Live Market Data Integration

---


Multicast functionality enables real-time data feeds from exchange systems (MDI/RDI streams) to be integrated into test scenarios. This allows dynamic test data based on live market conditions rather than static values.

---
## Table of Contents

- [Configuration Setup](#multicast-configuration-setup)
- [Viewing Multicast Data](#viewing-multicast-data)
- [Functions](#functions)
- [Examples](#examples)
- [Troubleshooting](#common-errors--troubleshooting)
- [Field Path Syntax](#field-path-syntax)
- [Best Practices](#best-practices)
- [Live Market Workflow](#complete-workflow-example-butterfly-order-with-live-market-data)

---

## Multicast Configuration Setup


Navigate to Test Configuration → System Configuration to configure multicast feeds.



### Configuration Fields Setup


<div class="step-block">
  <div class="step-text">
  

1. **Access Configuration: Go to Test Configuration → System Configuration → Multicast Configuration** 

2. **Add New Configuration:**  
> a. Click `"Add Multicast Configuration"`  
> b. Enter IP address (e.g., 239.1.1.100)  
> c. Enter Port (e.g., 5000)  
> d. Upload XML schema file  
> e. Select Feed Type: MDI or RDI  

3. **Save: Configuration appears in the active multicast feeds list** 

</div>

  <div class="step-image">
    <h4 class="image-title">Multicast - Test Data Configuration</h4>
    <img src="/img/scenario_4/1.png" alt="Multicast - Test Data Configuration" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>



---

## Viewing Multicast Data


Once configured, multicast data streams appear in real-time:




<div class="step-block">
  <div class="step-text">


:::info
  
 **Features**


• Real-time streaming display  
• Filter by MessageName or Field  
• Export recent messages to CSV  
• Pause/resume stream for analysis  

:::

</div>

  <div class="step-image">
    <h4 class="image-title">Multicast Features</h4>
    <img src="/img/scenario_4/2.png" alt="Multicast Features" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

---

## Functions


The `mcast()` function extracts specific fields from multicast data streams in real-time. Use it in datasheets, API configurations, or test variables to access live market data, order updates, and reference data from MDI/RDI feeds.

---



### Syntax

`${mcast("MessageName", "FieldName", [options])}`


> **Example:**
> 
> `${mcast("DepthSnapshot", "MsgSeqNum")}`


### Required Parameters


| Parameter | Description | Example |
----------|-------------|---------
`MessageName` | Multicast message template name (first parameter) | "DepthSnapshot", "DepthIncremental"
`FieldName` | Field to extract from the message or group (second parameter) | "MsgSeqNum", "OrderQty"


---

### Optional Parameters


| Parameter | Description | Default | Example |
----------|-------------|---------|---------
filter=`"Field=Value"` | Filter at message level to match specific message | None | filter="SecurityID=400005"
group=`"GroupName"` | Name of the repeating group to search within | None | group="MDSshGrp"
group_filter=`"Field=Value"` | Filter within the group to match specific entries | None | group_filter="MDEntrySize=200"
default=`"value"` | Fallback value if no matching data is found | None | default="0"
timeout=`30` | Maximum wait time in seconds for data | None | timeout=30
poll=`1` | Poll interval in seconds (how often to check stream) | None | poll=1


---

:::tip

### Key Rules


1. No spaces after commas in filters – Use A=1,B=2, NOT A=1, B=2  

2. group + group_filter = field extracted FROM GROUP – The field belongs to the group  

3. No group specified = field extracted FROM MESSAGE – The field is at message level  

4. Cannot mix message and group fields – You cannot extract a message-level field when group is used

:::


---

### Filter Operators


<div class="step-block">
  <div class="step-text">
  

| Operator | Meaning | Example |
----------|---------|---------
`= `| Equals | `SecurityID=400005`
`!=` | Not equal | `Status!=REJECTED`
`>` | Greater than | `OrderQty>100`
`< `| Less than | `Price<150.00`
`>=` | Greater or equal | `OrderQty>=50`
`<=` | Less or equal | `Price<=200.00`


**Multiple conditions: Use comma separator, no AND/OR keywords:**


`filter="SecurityID=400005,MsgType=W"`

</div>

  <div class="step-image">
    <h4 class="image-title">Filter Operators</h4>
    <img src="/img/scenario_4/6.jpeg" alt="Filter Operators" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>





---

## Examples


### Example 1: Basic Field Extraction
#

**Syntax:**

`${mcast("DepthSnapshot", "MsgSeqNum")}`


**What it does:**

• Extracts the MsgSeqNum field from the first DepthSnapshot message in the stream  
• Returns the value directly  

>**Use case:** Get the message sequence number for audit trails


---

### Example 2: Extract with Message Filter
#
**Syntax:**

`${mcast("DepthSnapshot", "MsgSeqNum", filter="SecurityID=400005")}`



**What it does:**

• Finds the first DepthSnapshot message where SecurityID=400005  
• Extracts MsgSeqNum from that message  
• Returns the value or null if no match  

>**Use case:** Get data for a specific security/instrument

---

### Example 3: Group Field Access by Index
#
**Syntax:**

`${mcast("DepthSnapshot", "MDSshGrp[1].MDEntryType")}`


**What it does:**

• Accesses the first repeating group entry (index 1 is first element)  
• Extracts MDEntryType from that group entry  
• Returns the value  

>**Use case:** Get specific leg data from a multileg order

---

### Example 4: Extract from Group with Filter
#
**Syntax:**

`${mcast("DepthSnapshot", "MDEntryPx", filter="SecurityID=400005", group="MDSshGrp", group_filter="MDEntrySize=200")}`


**What it does:**

1. Finds DepthSnapshot message where SecurityID=400005  
2. Within that message, searches the MDSshGrp repeating group  
3. Finds the first group entry where MDEntrySize=200  
4. Extracts MDEntryPx from that group entry  
5. Returns the value  

>**Use case:** Get price for a specific market depth level matching a size

---

### Example 5: Combined Filters with Timeout and Poll
#
**Syntax:**

`${mcast("DepthSnapshot", "MDEntrySize", filter="SecurityID=400005", group="MDSshGrp", group_filter="MDEntrySize=200", timeout=30, poll=1)}`


**What it does:**

1. Same filtering as Example 4  
2. If data not found immediately, waits up to 30 seconds  
3. Checks every 1 second for new matching data  
4. Returns the first match found within timeout window  

>**Use case:** Wait for specific market depth data during active trading

---

### Example 6: Multiple Message-Level Filters
#
**Syntax:**

`${mcast("DepthSnapshot", "MDEntryPx", filter="SecurityID=400005,MsgType=W", group="MDSshGrp", group_filter="MDEntrySize=200,MDPriceLevel=1")}`


**What it does:**

1. Finds DepthSnapshot where both SecurityID=400005 AND MsgType=W  
2. Within that message, searches MDSshGrp group  
3. Finds group entry where both MDEntrySize=200 AND MDPriceLevel=1  
4. Extracts MDEntryPx  

>**Use case:** Narrow down to exact market snapshot at specific price level

---

### Example 7: With Safety Default Value
#
**Syntax:**

`${mcast("DepthSnapshot", "MDEntryPx", filter="SecurityID=500008", default="0", timeout=30, poll=1)}`


**What it does:**

1. Searches for matching DepthSnapshot message  
2. Waits up to 30 seconds  
3. If found, extracts MDEntryPx  
4. If not found, returns default="0"  

>**Use case:** Prevent test failure if market data not available; use fallback price

---

## Common Errors & Troubleshooting
#


| Error | Cause | Solution |
------|-------|---------
`Incorrect Syntax` | Malformed function call | Check quotes, parentheses, and parameter names
`Template not found` | Wrong MessageName | Verify multicast stream sends this message type
`No message found` | filter doesn't match any message | Check filter criteria and message values
`Group not found` | Wrong group name | Verify group name in XML schema
`No entry matches` | group_filter doesn't match any group entry | Check filter operators and values
`Field not found` | FieldName doesn't exist | Check field name against message definition
`Spaces in filter` | Used filter="A=1, B=2" | Remove spaces after commas
`Timeout occurred` | Data not available | Increase timeout or check stream
`Returns null` | No matching data | Use default parameter to provide fallback value


---

## Field Path Syntax 

For accessing nested or indexed fields:

| Pattern       | Description                     | Example              |
|---------------|---------------------------------|----------------------|
| `Simple Field`  | Direct field access              | "OrderQty"           |
| `Nested Field`  | Path through objects/groups      | "Legs[0].LegPrice"   |
| `Array Index`   | Specific array element           | "Legs[1].SecurityID" |
| `Last Element`  | Most recent array item           | "Legs[-1].Quantity"  |



---

<div class="step-block">
  <div class="step-text">
  
## Integration with Datasheets & API Configuration 

In Datasheets use **mcast()** functions like any other predefined function: 

`${mcast("MarketData", "LastPrice", filter="SecurityID=5001", default="100.0")}` 

The function returns a single value that populates the datasheet cell.

</div>

  <div class="step-image">
    <h4 class="image-title">Integration with Datasheets</h4>
    <img src="/img/scenario_4/3.png" alt="Integration with Datasheets" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

---

## Best Practices

> ### Configuration

- Use separate multicast configurations for MDI (Market Data) vs RDI (Reference Data) streams  
- Test connections before using in production tests  
- Name descriptively: EUREX_MDI_Production instead of Config1  


> ### Function Usage

- Always provide default values for critical fields to prevent test failures  
- Use filters to ensure data relevance and specificity  
- Combine with other functions: `${Round(${mcast("BidPrice")}, 2)}`  
- Add timeout/poll when data is time-sensitive  


> ### Performance

- Limit filter complexity – Use specific MessageName and SecurityID when possible  
- Avoid excessive polling – Increase poll interval for non-critical data  
- Cache repeated calls – If using same mcast() call multiple times, consider storing in a variable  


> ### Safety

- Always use default parameter for optional/secondary fields  
- Log filter results during test development to verify correctness  
- Monitor timeout values – Balance between waiting for data and test speed  


---

## Complete Workflow Example: Butterfly Order with Live Market Data


<div class="step-block">
  <div class="step-text">
  
**Step 1: Configure Multicast Stream** 

**IP Address:** `239.1.1.100 ` 
**Port:** `50000`  
**XML Schema:** `market_data.xml`  
**Data Type:** `MDI (Market Data)`  
#


**Step 2: Create Datasheet with Dynamic Data** 
#


**Step 3: Execute Test**  

- Test automatically pulls live bid/ask prices from market data stream  
- OrderQty matches recent market volume  
- Results reflect actual market conditions  
- Falls back to defaults if data unavailable 
 

</div>

  <div class="step-image">
    <h4 class="image-title">Dynamic Data Datasheet</h4>
    <img src="/img/scenario_4/4.png" alt="Dynamic Data Datasheet" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

 


---
