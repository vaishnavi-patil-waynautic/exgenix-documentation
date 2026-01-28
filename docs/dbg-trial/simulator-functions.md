---
hide_table_of_contents: true
sidebar_label: Simulator Functions
---
<style>
{`
.main-wrapper {
  outline: 2px solid red;
}
.markdown {
  overflow-x: hidden;
}

`}
</style>


import WideScrollableGrid from '@site/src/components/WideScrollableGrid';



# Simulator Functions

---


This simulator is a lightweight version designed to help QA teams explore key features.
For full functionality, integrate Exgenix with an actual exchange environment or the official T7 Simulator provided by Deutsche Börse.

> Simulator does not cover Implied for Multieleg 



---
<!-- <WideScrollableGrid /> -->

<!-- 
<div style = {{ maxWidth: "100%" }}>

<WideScrollableGrid />

</div> -->

<!--

<div style={{ minWidth: "900px", tableLayout:"fixed" }}>

<table style={{ minWidth: "1600px", tableLayout: "fixed" }}>


<colgroup>
  <col style={{ width: "3%" }} />    
  <col style={{ width: "24%" }} />   
  <col style={{ width: "6%" }} />  
  <col style={{ width: "20%" }} />  
  <col style={{ width: "47%" }} />   
  <col style={{ width: "3%" }} />
  <col style={{ width: "3%" }} />
  <col style={{ width: "2%" }} />
  <col style={{ width: "2%" }} />
</colgroup>




<thead>
<tr>
  <th>ID</th>
  <th>API/Flow</th>
  <th>Type</th>
  <th>Title/Objective</th>
  <th>Input/Steps</th>
  <th>OrderSingle Multileg</th>
  <th>OrderSingle Multileg Short</th>
  <th>OrderSingle Standard</th>
  <th>OrderSingle Short</th>
</tr>
</thead>

<tbody>

<tr><td>1</td><td><code>Butterfly Spread - Multileg</code></td><td>Positive</td><td>Full Trade scenario</td><td>Place a session 1 buy new request (for e.g. qty 10 and price valid) and then corresponding session 2 sell request (qty 10 and same price valid)</td><td>Y</td><td>Y</td><td>NA</td><td>NA</td></tr>

<tr><td>2</td><td><code>Butterfly Spread - Multileg</code></td><td>Positive</td><td>Full Trade scenario</td><td>Place a session 1 buy new request (for e.g. qty 10 and valid price) and then corresponding session 2 sell request 1 (qty 5 and same valid price) + session 2 sell request 2 (qty 5 and same valid price)</td><td>Y</td><td>Y</td><td>NA</td><td>NA</td></tr>

<tr><td>3</td><td><code>Butterfly Spread - Multileg</code></td><td>Positive</td><td>Partial Trade scenario</td><td>Place a session 1 buy new request (for e.g. qty 10 and price valid) and then corresponding session 2 sell request (qty 4 and same price valid)</td><td>Y</td><td>Y</td><td>NA</td><td>NA</td></tr>

<tr><td>4</td><td><code>Butterfly Spread - Multileg</code></td><td>Positive</td><td>Standard lifecycle: new -> partial trade -> replace -> cancel</td><td>Sequence: NEW -> TRADE -> REPLACE -> CANCEL</td><td>Y</td><td>Y</td><td>NA</td><td>NA</td></tr>

<tr><td>5</td><td><code>Butterfly Spread - Multileg</code></td><td>Positive</td><td>Full Trade scenario - Multiple Fill Grps</td><td>1st Test case - fill the order book with order Place 2 session 1 buy request (qty 5 valid price) + 1 more buy request (qty 5 valid price). 2nd Test case - session 2 sell request (qty 10 same valid prices)</td><td>Y</td><td>Y</td><td>NA</td><td>NA</td></tr>

<tr><td>6</td><td><code>Calender Spread - Multileg</code></td><td>Positive</td><td>Full Trade scenario</td><td>Place a session 1 buy new request (qty 10 valid price) and then corresponding session 2 sell request (qty 10 same valid price)</td><td>Y</td><td>Y</td><td>NA</td><td>NA</td></tr>

<tr><td>7</td><td><code>Calender Spread - Multileg</code></td><td>Positive</td><td>Full Trade scenario</td><td>Place a session 1 buy new request (qty 10 valid price) and then corresponding session 2 sell request 1 (qty 5 same valid price) + session 2 sell request 2 (qty 5 same valid price)</td><td>Y</td><td>Y</td><td>NA</td><td>NA</td></tr>

<tr><td>8</td><td><code>Calender Spread - Multileg</code></td><td>Positive</td><td>Partial Trade scenario</td><td>Place a session 1 buy new request (qty 10 valid price) and then corresponding session 2 sell request (qty 4 same valid price)</td><td>Y</td><td>Y</td><td>NA</td><td>NA</td></tr>

<tr><td>9</td><td><code>Calender Spread - Multileg</code></td><td>Positive</td><td>Standard lifecycle: new -> partial trade -> replace -> cancel</td><td>Sequence: NEW -> TRADE -> REPLACE -> CANCEL</td><td>Y</td><td>Y</td><td>NA</td><td>NA</td></tr>

<tr><td>10</td><td><code>Calender Spread - Multileg</code></td><td>Positive</td><td>Full Trade scenario - Multiple Fill Grps</td><td>1st Test case - fill order book with 2 session 1 buy requests (qty 5 valid price) + 1 more buy request (qty 5 valid price). 2nd Test case - session 2 sell request (qty 10 same valid prices)</td><td>Y</td><td>Y</td><td>NA</td><td>NA</td></tr>

<tr><td>11</td><td><code>Session Logon</code></td><td>Negative</td><td>Missing required field: session id</td><td>Send LOGON with no 'session' field</td><td>Y</td><td>Y</td><td>Y</td><td>Y</td></tr>

<tr><td>12</td><td><code>Session Logon</code></td><td>Negative</td><td>Invalid member id format</td><td>LOGON with member='@@@'</td><td>Y</td><td>Y</td><td>Y</td><td>Y</td></tr>

<tr><td>13</td><td><code>User Logon</code></td><td>Positive</td><td>Valid user login after session established</td><td>User logon with valid username/password</td><td>Y</td><td>Y</td><td>Y</td><td>Y</td></tr>

<tr><td>14</td><td><code>User Logon</code></td><td>Negative</td><td>Missing username field</td><td>Send USER_LOGON with no username</td><td>Y</td><td>Y</td><td>Y</td><td>Y</td></tr>

<tr><td>15</td><td><code>User Logon</code></td><td>Negative</td><td>Invalid password format</td><td>USER_LOGON with password too short or non-UTF8</td><td>Y</td><td>Y</td><td>Y</td><td>Y</td></tr>

<tr><td>16</td><td><code>New Order Single</code></td><td>Positive</td><td>IOC partial multi-level match</td><td>NewOrder IOC buy sweeping book levels</td><td>Y</td><td>Y</td><td>Y</td><td>Y</td></tr>

<tr><td>17</td><td><code>New Order Single</code></td><td>Negative</td><td>Order outside price band</td><td>NewOrder with Price beyond band</td><td>Y</td><td>Y</td><td>Y</td><td>Y</td></tr>

<tr><td>18</td><td><code>New Order Single</code></td><td>Boundary</td><td>Order exceeding quantity limits</td><td>Qty above permitted caps (1 to 100)</td><td>Y</td><td>Y</td><td>Y</td><td>Y</td></tr>

<!-- <tr><td>19</td><td><code>New Order Single</code></td><td>Negative</td><td>Missing clOrdId</td><td>NEW message without clOrdId</td><td>Y</td><td>Y</td><td>Y</td><td>Y</td></tr> -->
<!-- 
<tr><td>19</td><td><code>New Order Single</code></td><td>Negative</td><td>Duplicate clOrdId</td><td>Send NEW with same clOrdId twice</td><td>Y</td><td>Y</td><td>Y</td><td>Y</td></tr>


<tr><td>20</td><td><code>New Order Single</code></td><td>Negative</td><td>Invalid Side code</td><td>Side=3 or X</td><td>Y</td><td>Y</td><td>Y</td><td>Y</td></tr>

<tr><td>21</td><td><code>New Order Single</code></td><td>Negative</td><td>Price missing for LIMIT</td><td>Limit order without price</td><td>Y</td><td>Y</td><td>Y</td><td>Y</td></tr>

<tr><td>22</td><td><code>New Order Single</code></td><td>Negative</td><td>Price outside allowed band</td><td>Price outside band %</td><td>Y</td><td>Y</td><td>Y</td><td>Y</td></tr>

<tr><td>23</td><td><code>New Order Single</code></td><td>Negative</td><td>Quantity zero or negative</td><td>Qty=0 or Qty=-10</td><td>Y</td><td>Y</td><td>Y</td><td>Y</td></tr>

<tr><td>24</td><td><code>New Order Single</code></td><td>Negative</td><td>Invalid TIF code</td><td>TIF=99</td><td>Y</td><td>Y</td><td>Y</td><td>Y</td></tr>

<tr><td>25</td><td><code>New Order Single</code></td><td>Negative</td><td>Invalid SecurityID</td><td>SecurityID not in master</td><td>Y</td><td>Y</td><td>Y</td><td>Y</td></tr>

<tr><td>26</td><td><code>New Order Single</code></td><td>Boundary</td><td>Price at band edge</td><td>Price = 1 or 10000</td><td>Y</td><td>Y</td><td>Y</td><td>Y</td></tr>

<tr><td>27</td><td><code>New Order Single</code></td><td>Negative</td><td>Message length invalid</td><td>Message Length &lt; BodyLen</td><td>Y</td><td>Y</td><td>Y</td><td>Y</td></tr>

<tr><td>28</td><td><code>Replace Order</code></td><td>Positive</td><td>Increase price</td><td>Replace with higher price</td><td>Y</td><td>Y</td><td>Y</td><td>Y</td></tr>

<tr><td>29</td><td><code>Replace Order</code></td><td>Negative</td><td>Replace non-existent</td><td>Invalid Order ID</td><td>Y</td><td>Y</td><td>Y</td><td>Y</td></tr>

<tr><td>30</td><td><code>Replace Order</code></td><td>Negative</td><td>Replace filled order</td><td>Replace filled order</td><td>Y</td><td>Y</td><td>Y</td><td>Y</td></tr>

<tr><td>31</td><td><code>Replace Order</code></td><td>Negative</td><td>Invalid newQty</td><td>newQty=0 or -5</td><td>Y</td><td>Y</td><td>Y</td><td>Y</td></tr>

<tr><td>32</td><td><code>Replace Order</code></td><td>Negative</td><td>Unauthorized replace</td><td>Replace from different session</td><td>Y</td><td>Y</td><td>Y</td><td>Y</td></tr>

<tr><td>33</td><td><code>Cancel Order</code></td><td>Negative</td><td>Cancel filled order</td><td>Cancel non-existing order</td><td>Y</td><td>Y</td><td>Y</td><td>Y</td></tr>

<tr><td>34</td><td><code>Cancel Order</code></td><td>Positive</td><td>Cancel after partial fill</td><td>Cancel remaining qty</td><td>Y</td><td>Y</td><td>Y</td><td>Y</td></tr>

<tr><td>35</td><td><code>Cancel Order</code></td><td>Negative</td><td>Missing Order ID</td><td>CANCEL without Order ID</td><td>Y</td><td>Y</td><td>Y</td><td>Y</td></tr>

<tr><td>36</td><td><code>Cancel Order</code></td><td>Negative</td><td>Cancel non-existent order</td><td>Cancel invalid Order ID</td><td>Y</td><td>Y</td><td>Y</td><td>Y</td></tr>

<tr><td>37</td><td><code>Cancel Order</code></td><td>Negative</td><td>Cancel after session closed</td><td>Close session then cancel</td><td>Y</td><td>Y</td><td>Y</td><td>Y</td></tr>

<tr><td>38</td><td><code>Cancel Order</code></td><td>Negative</td><td>Unauthorized cancel</td><td>Cancel from different session</td><td>Y</td><td>Y</td><td>Y</td><td>Y</td></tr>

<tr><td>39</td><td><code>Trade</code></td><td>Positive</td><td>Immediate match</td><td>Trade scenario</td><td>Y</td><td>Y</td><td>Y</td><td>Y</td></tr>

<tr><td>40</td><td><code>Trade</code></td><td>Negative</td><td>SMP violation</td><td>Orders from same session</td><td>Y</td><td>Y</td><td>Y</td><td>Y</td></tr>

<tr><td>41</td><td><code>Trade</code></td><td>Boundary</td><td>Partial fills multi-level</td><td>Large order across book</td><td>Y</td><td>Y</td><td>Y</td><td>Y</td></tr>

<tr><td>42</td><td><code>New -> Replace -> Cancel</code></td><td>Positive</td><td>Lifecycle test</td><td>NEW → TRADE → REPLACE → CANCEL</td><td>Y</td><td>Y</td><td>Y</td><td>Y</td></tr>

<tr><td>43</td><td><code>Race Condition</code></td><td>Boundary</td><td>Cancel and replace race</td><td>Cancel vs Replace same order</td><td>Y</td><td>Y</td><td>Y</td><td>Y</td></tr>

<tr><td>44</td><td><code>General</code></td><td>Negative</td><td>Unsupported ETI version</td><td>Send unsupported templateId</td><td>Y</td><td>Y</td><td>Y</td><td>Y</td></tr>

<tr><td>45</td><td><code>General</code></td><td>Negative</td><td>Invalid character encoding</td><td>Send non-UTF8 payload</td><td>Y</td><td>Y</td><td>Y</td><td>Y</td></tr>

</tbody>
</table>

</div> -->





<!-- 
<div style={{ 
  width: "90%", 
  overflowX: "auto", 
  overflowY: "auto",
  maxHeight: "calc(100vh - 200px)",
  border: "1px solid #e0e0e0",
  borderRadius: "4px"
}}

<table>


<!-- <div
  style={{
    width: "100%",
    overflowX: "auto",
    overflowY: "auto",
    maxHeight: "calc(100vh - 200px)",
    border: "1px solid #e0e0e0",
    borderRadius: "4px",
    boxSizing: "border-box"
  }}
> -->

<!-- <div
  style={{
    width: "100%",
    maxWidth: "100%",
    overflowX: "auto",
    overflowY: "auto",
    maxHeight: "calc(100vh - 200px)",
    border: "1px solid #e0e0e0",
    borderRadius: "4px",
    boxSizing: "border-box",
    position: "relative",
    contain: "layout paint"
  }}
>

<table
  style={{
    minWidth: "1800px",
    tableLayout: "fixed",
    borderCollapse: "collapse"
  }}
>




<!-- <table
  style={{
    minWidth: "1800px",
    tableLayout: "fixed",
    borderCollapse: "collapse"
  }}
> -->-
  <!-- maxHeight: "calc(100vh - 200px)", -->
  <!-- border: "1px solid #e0e0e0", -->

<div style={{ 
  width: "100%",
  overflowX: "auto",
  overflowY: "auto",
  borderRadius: "4px"
}}>

  <!-- <div style={{
    transform: "scaleX(1.4)",
    transformOrigin: "left top",
    width: "fit-content"
  }}> -->

  <!-- <div> -->

<table style={{ 
      maxWidth: "1000px",
      tableLayout: "auto",
      borderCollapse: "collapse",
      marginLeft:"2px",
      marginRight:"2px",
    }}>


<colgroup>
  <col style={{ width: "5%" }} />      {/* ID */}
  <col style={{ width: "10%" }} />     {/* API */}
  <col style={{ width: "15%" }} />      {/* Type */}
  <col style={{ width: "5%" }} />     {/* Title */} 
  <col style={{ width: "45%" }} />                          {/* Input/Steps (AUTO EXPAND) */}
  <col style={{ width: "5%" }} />
  <col style={{ width: "5%" }} />
  <col style={{ width: "5%" }} />
  <col style={{ width: "5%" }} />
</colgroup>




<thead style={{ 
  position: "sticky", 
  top: 0, 
  backgroundColor: "#f5f5f5",
  zIndex: 10
}}>
<tr>
  <th style={{ padding: "12px 8px", borderBottom: "2px solid #ddd", textAlign: "left" }}>ID</th>
  <th style={{ padding: "12px 8px", borderBottom: "2px solid #ddd", textAlign: "left" }}>API/Flow</th>
  <th style={{ padding: "12px 8px", borderBottom: "2px solid #ddd", textAlign: "left" }}>Type</th>
  <th style={{ padding: "12px 8px", borderBottom: "2px solid #ddd", textAlign: "left" }}>Title/Objective</th>
  <th style={{ padding: "12px 8px", borderBottom: "2px solid #ddd", textAlign: "left" }}>Input/Steps</th>
  <th style={{ padding: "12px 8px", borderBottom: "2px solid #ddd", textAlign: "center",  whiteSpace: "nowrap" }}>OrderSingle Multileg</th>
  <th style={{ padding: "12px 8px", borderBottom: "2px solid #ddd", textAlign: "center",  whiteSpace: "nowrap" }}>OrderSingle Multileg Short</th>
  <th style={{ padding: "12px 8px", borderBottom: "2px solid #ddd", textAlign: "center",   whiteSpace: "nowrap",}}>OrderSingle Standard</th>
  <th style={{ padding: "12px 8px", borderBottom: "2px solid #ddd", textAlign: "center",  whiteSpace: "nowrap", }}>OrderSingle Short</th>
</tr>
</thead>

<tbody>

<tr><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>1</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}><code>Butterfly Spread - Multileg</code></td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Positive</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Full Trade scenario</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Place a session 1 buy new request (for e.g. qty 10 and price valid) and then corresponding session 2 sell request (qty 10 and same price valid)</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>NA</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>NA</td></tr>

<tr><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>2</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}><code>Butterfly Spread - Multileg</code></td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Positive</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Full Trade scenario</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Place a session 1 buy new request (for e.g. qty 10 and valid price) and then corresponding session 2 sell request 1 (qty 5 and same valid price) + session 2 sell request 2 (qty 5 and same valid price)</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>NA</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>NA</td></tr>

<tr><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>3</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}><code>Butterfly Spread - Multileg</code></td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Positive</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Partial Trade scenario</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Place a session 1 buy new request (for e.g. qty 10 and price valid) and then corresponding session 2 sell request (qty 4 and same price valid)</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>NA</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>NA</td></tr>

<tr><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>4</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}><code>Butterfly Spread - Multileg</code></td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Positive</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Standard lifecycle: new -> partial trade -> replace -> cancel</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Sequence: NEW -> TRADE -> REPLACE -> CANCEL</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>NA</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>NA</td></tr>

<tr><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>5</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}><code>Butterfly Spread - Multileg</code></td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Positive</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Full Trade scenario - Multiple Fill Grps</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>1st Test case - fill the order book with order Place 2 session 1 buy request (qty 5 valid price) + 1 more buy request (qty 5 valid price). 2nd Test case - session 2 sell request (qty 10 same valid prices)</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>NA</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>NA</td></tr>

<tr><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>6</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}><code>Calender Spread - Multileg</code></td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Positive</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Full Trade scenario</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Place a session 1 buy new request (qty 10 valid price) and then corresponding session 2 sell request (qty 10 same valid price)</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>NA</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>NA</td></tr>

<tr><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>7</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}><code>Calender Spread - Multileg</code></td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Positive</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Full Trade scenario</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Place a session 1 buy new request (qty 10 valid price) and then corresponding session 2 sell request 1 (qty 5 same valid price) + session 2 sell request 2 (qty 5 same valid price)</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>NA</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>NA</td></tr>

<tr><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>8</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}><code>Calender Spread - Multileg</code></td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Positive</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Partial Trade scenario</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Place a session 1 buy new request (qty 10 valid price) and then corresponding session 2 sell request (qty 4 same valid price)</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>NA</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>NA</td></tr>

<tr><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>9</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}><code>Calender Spread - Multileg</code></td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Positive</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Standard lifecycle: new -> partial trade -> replace -> cancel</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Sequence: NEW -> TRADE -> REPLACE -> CANCEL</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>NA</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>NA</td></tr>

<tr><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>10</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}><code>Calender Spread - Multileg</code></td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Positive</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Full Trade scenario - Multiple Fill Grps</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>1st Test case - fill order book with 2 session 1 buy requests (qty 5 valid price) + 1 more buy request (qty 5 valid price). 2nd Test case - session 2 sell request (qty 10 same valid prices)</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>NA</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>NA</td></tr>

<tr><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>11</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}><code>Session Logon</code></td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Negative</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Missing required field: session id</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Send LOGON with no 'session' field</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td></tr>

<tr><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>12</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}><code>Session Logon</code></td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Negative</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Invalid member id format</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>LOGON with member='@@@'</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td></tr>

<tr><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>13</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}><code>User Logon</code></td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Positive</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Valid user login after session established</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>User logon with valid username/password</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td></tr>

<tr><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>14</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}><code>User Logon</code></td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Negative</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Missing username field</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Send USER_LOGON with no username</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td></tr>

<tr><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>15</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}><code>User Logon</code></td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Negative</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Invalid password format</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>USER_LOGON with password too short or non-UTF8</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td></tr>

<tr><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>16</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}><code>New Order Single</code></td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Positive</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>IOC partial multi-level match</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>NewOrder IOC buy sweeping book levels</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td></tr>

<tr><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>17</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}><code>New Order Single</code></td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Negative</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Order outside price band</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>NewOrder with Price beyond band</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td></tr>

<tr><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>18</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}><code>New Order Single</code></td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Boundary</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Order exceeding quantity limits</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Qty above permitted caps (1 to 100)</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td></tr>

<tr><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>19</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}><code>New Order Single</code></td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Negative</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Duplicate clOrdId</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Send NEW with same clOrdId twice</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td></tr>

<tr><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>20</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}><code>New Order Single</code></td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Negative</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Invalid Side code</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Side=3 or X</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td></tr>

<tr><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>21</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}><code>New Order Single</code></td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Negative</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Price missing for LIMIT</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Limit order without price</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td></tr>

<tr><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>22</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}><code>New Order Single</code></td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Negative</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Price outside allowed band</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Price outside band %</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td></tr>

<tr><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>23</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}><code>New Order Single</code></td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Negative</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Quantity zero or negative</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Qty=0 or Qty=-10</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td></tr>

<tr><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>24</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}><code>New Order Single</code></td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Negative</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Invalid TIF code</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>TIF=99</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td></tr>

<tr><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>25</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}><code>New Order Single</code></td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Negative</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Invalid SecurityID</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>SecurityID not in master</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td></tr>

<tr><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>26</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}><code>New Order Single</code></td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Boundary</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Price at band edge</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Price = 1 or 10000</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td></tr>

<tr><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>27</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}><code>New Order Single</code></td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Negative</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Message length invalid</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Message Length &lt; BodyLen</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td></tr>

<tr><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>28</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}><code>Replace Order</code></td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Positive</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Increase price</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Replace with higher price</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td></tr>

<tr><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>29</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}><code>Replace Order</code></td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Negative</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Replace non-existent</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Invalid Order ID</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td></tr>

<tr><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>30</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}><code>Replace Order</code></td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Negative</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Replace filled order</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Replace filled order</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td></tr>

<tr><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>31</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}><code>Replace Order</code></td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Negative</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Invalid newQty</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>newQty=0 or -5</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td></tr>

<tr><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>32</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}><code>Replace Order</code></td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Negative</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Unauthorized replace</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Replace from different session</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td></tr>

<tr><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>33</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}><code>Cancel Order</code></td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Negative</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Cancel filled order</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Cancel non-existing order</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td></tr>

<tr><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>34</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}><code>Cancel Order</code></td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Positive</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Cancel after partial fill</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Cancel remaining qty</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td></tr>

<tr><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>35</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}><code>Cancel Order</code></td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Negative</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Missing Order ID</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>CANCEL without Order ID</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td></tr>

<tr><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>36</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}><code>Cancel Order</code></td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Negative</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Cancel non-existent order</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Cancel invalid Order ID</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td></tr>

<tr><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>37</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}><code>Cancel Order</code></td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Negative</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Cancel after session closed</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Close session then cancel</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td></tr>

<tr><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>38</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}><code>Cancel Order</code></td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Negative</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Unauthorized cancel</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Cancel from different session</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td></tr>

<tr><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>39</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}><code>Trade</code></td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Positive</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Immediate match</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Trade scenario</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td></tr>

<tr><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>40</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}><code>Trade</code></td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Negative</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>SMP violation</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Orders from same session</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td></tr>

<tr><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>41</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}><code>Trade</code></td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Boundary</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Partial fills multi-level</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Large order across book</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td></tr>

<tr><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>42</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}><code>New -> Replace -> Cancel</code></td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Positive</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Lifecycle test</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>NEW → TRADE → REPLACE → CANCEL</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td></tr>

<tr><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>43</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}><code>Race Condition</code></td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Boundary</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Cancel and replace race</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Cancel vs Replace same order</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td></tr>

<tr><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>44</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}><code>General</code></td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Negative</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Unsupported ETI version</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Send unsupported templateId</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td></tr>

<tr><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>45</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}><code>General</code></td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Negative</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Invalid character encoding</td><td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>Send non-UTF8 payload</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td><td style={{ padding: "8px", borderBottom: "1px solid #eee", textAlign: "center" }}>Y</td></tr>

</tbody>
</table>

<!-- </div> -->
</div>



