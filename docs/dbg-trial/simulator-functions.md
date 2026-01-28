---
hide_table_of_contents: true
sidebar_label: Simulator Functions
---
<style>
{`
html, body {
  max-width: 100vw;
  overflow-x: hidden !important;
}

.main-wrapper main {
  max-width: 100vw !important;
  overflow-x: hidden !important;
}

.main-wrapper .container {
  max-width: 100% !important;
  overflow-x: hidden !important;
}

.markdown {
  overflow-x: hidden !important;
}

.exgenix-table-wrapper {
  width: 100%;
  max-width: 100%;
  overflow-x: auto;
  overflow-y: hidden;

  display: block;
  box-sizing: border-box;
  contain: layout paint;
}

.exgenix-table-wrapper thead {
  position: sticky;
  top: 0;
  background: #f5f5f5;
  z-index: 5;
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


<div className="exgenix-table-wrapper">

<table style={{
  width: "max-content",
  minWidth: "1400px",
  tableLayout: "fixed",
  borderCollapse: "collapse"
}}>






<colgroup>
  <col style={{ width: "70px" }} />
  <col style={{ width: "200px" }} />
  <col style={{ width: "140px" }} />
  <col style={{ width: "200px" }} />
  <col style={{ width: "750px" }} />  
  <col style={{ width: "150px" }} />
  <col style={{ width: "170px" }} />
  <col style={{ width: "160px" }} />
  <col style={{ width: "160px" }} />
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

</div>



