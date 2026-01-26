---
hide_table_of_contents: true
---

# Simulator Functions

---

This simulator is a lightweight version designed to help QA teams explore key features.
For full functionality, integrate Exgenix with an actual exchange environment or the official T7 Simulator provided by Deutsche Börse.

> Simulator does not cover Implied for Multieleg 


---

| ID | API/Flow | Type | Title/Objective | Input/Steps | OrderSingle Multileg | OrderSingle Multileg Short | OrderSingle Standard | OrderSingle Short |
|----|----------|------|-----------------|-------------|----------------------|----------------------------|----------------------|-------------------|
| 1 | `Butterfly Spread - Multileg` | Positive | Full Trade scenario | Place a session 1 buy new request (for e.g. qty 10 and price valid) and then corresponding session 2 sell request (qty 10 and same price valid) | Y | Y | NA | NA |
| 2 | `Butterfly Spread - Multileg` | Positive | Full Trade scenario | Place a session 1 buy new request (for e.g. qty 10 and valid price) and then corresponding session 2 sell request 1 (qty 5 and same valid price) + session 2 sell request 2 (qty 5 and same valid price) | Y | Y | NA | NA |
| 3 | `Butterfly Spread - Multileg` | Positive | Partial Trade scenario | Place a session 1 buy new request (for e.g. qty 10 and price valid) and then corresponding session 2 sell request (qty 4 and same price valid) | Y | Y | NA | NA |
| 4 | `Butterfly Spread - Multileg` | Positive | Standard lifecycle: new -> partial trade -> replace -> cancel | Sequence: NEW -> TRADE -> REPLACE -> CANCEL | Y | Y | NA | NA |
| 5 | `Butterfly Spread - Multileg` | Positive | Full Trade Trade scenario - Multiple Fill Grps | 1st Test case - fill the order book with order Place 2 session 1 buy request (for e.g. qty 5 and valid price) + 1 more buy request (for e.g. qty 5 and valid price) . 2nd Test cases - session 2 sell request (qty 10 and same valid prices) | Y | Y | NA | NA |
| 6 | `Calender Spread - Multileg` | Positive | Full Trade scenario | Place a session 1 buy new request (for e.g. qty 10 and price valid) and then corresponding session 2 sell request (qty 10 and same price valid) | Y | Y | NA | NA |
| 7 | `Calender Spread - Multileg` | Positive | Full Trade scenario | Place a session 1 buy new request (for e.g. qty 10 and valid price) and then corresponding session 2 sell request 1 (qty 5 and same valid price) + session 2 sell request 2 (qty 5 and same valid price) | Y | Y | NA | NA |
| 8 | `Calender Spread - Multileg` | Positive | Partial Trade scenario | Place a session 1 buy new request (for e.g. qty 10 and price valid) and then corresponding session 2 sell request (qty 4 and same price valid) | Y | Y | NA | NA |
| 9 | `Calender Spread - Multileg` | Positive | Standard lifecycle: new -> partial trade -> replace -> cancel | Sequence: NEW -> TRADE -> REPLACE -> CANCEL | Y | Y | NA | NA |
| 10 | `Calender Spread - Multileg` | Positive | Full Trade Trade scenario - Multiple Fill Grps | 1st Test case - fill the order book with order Place 2 session 1 buy request (for e.g. qty 5 and valid price) + 1 more buy request (for e.g. qty 5 and valid price) . 2nd Test cases - session 2 sell request (qty 10 and same valid prices) | Y | Y | NA | NA |
| 11 | `Session Logon` | Negative | Missing required field: session id | Send LOGON with no 'session' field | Y | Y | Y | Y |
| 12 | `Session Logon` | Negative | Invalid member id format | LOGON with member='@@@' (bad chars) | Y | Y | Y | Y |
| 13 | `User Logon` | Positive | Valid user login after session established | User logon with valid username/password or entitlement | Y | Y | Y | Y |
| 14 | `User Logon` | Negative | Missing username field | Send USER_LOGON with no username | Y | Y | Y | Y |
| 15 | `User Logon` | Negative | Invalid password format | USER_LOGON with password too short or non-UTF8 | Y | Y | Y | Y |
| 16 | `New Order Single` | Positive | IOC that matches multiple levels partially | NewOrder IOC buy sweeping book levels | Y | Y | Y | Y |
| 17 | `New Order Single` | Negative | Order outside price band | NewOrder with Price beyond band - price band `0<=price<=10000` for limit orders | Y | Y | Y | Y |
| 18 | `New Order Single` | Boundary | Order exceeding quantity limits | NewOrder with Qty or Notional above permitted caps. Quantity limit is 1 to 100. | Y | Y | Y | Y |
| 19 | `New Order Single` | Negative | Missing clOrdId | NEW message without clOrdId | Y | Y | Y | Y |
| 20 | `New Order Single` | Negative | Duplicate clOrdId (idempotency) | Send NEW with clOrdId='C1' twice | Y | Y | Y | Y |
| 21 | `New Order Single` | Negative | Missing Side field | NEW without 'side' | Y | Y | Y | Y |
| 22 | `New Order Single` | Negative | Invalid Side code | Side=3 or 'X' | Y | Y | Y | Y |
| 23 | `New Order Single` | Negative | Price field missing for LIMIT order | NEW ord_type=Limit but price omitted | Y | Y | Y | Y |
| 24 | `New Order Single` | Negative | Non-numeric price format | Price='one hundred' | Y | Y | Y | Y |
| 25 | `New Order Single` | Negative | Price outside allowed band | Price outside price band % of reference | Y | Y | Y | Y |
| 26 | `New Order Single` | Negative | Quantity zero or negative | Qty=0 or Qty=-10 | Y | Y | Y | Y |
| 27 | `New Order Single` | Negative | Invalid TIF code | TIF=99 | Y | Y | Y | Y |
| 28 | `New Order Single` | Negative | Instrument (SecurityID) invalid | SecurityID not in instrument master. Security ID range - 1 to 1000 | Y | Y | Y | Y |
| 29 | `New Order Single` | Boundary | Price at band edge allowed | Price equal to low/high price band . Test with Price as 1 or 10000 | Y | Y | Y | Y |
| 30 | `New Order Single` | Negative | Message lenght is less than BodyLen | Message Lenght < BodyLen | Y | Y | Y | Y |
| 31 | `Replace Order` | Positive | Valid replace increasing price | Replace Order with new higher Price | Y | Y | Y | Y |
| 32 | `Replace Order` | Negative | Replace non-existent order | Replace order with invalid Order ID/Client Order ID | Y | Y | Y | Y |
| 33 | `Replace Order` | Negative | Replace request for filled order | Replace Order ID for already filled order | Y | Y | Y | Y |
| 34 | `Replace Order` | Negative | Invalid newQty (negative/zero) | Replace with newQty=0 or -5 | Y | Y | Y | Y |
| 35 | `Replace Order` | Negative | Replace by unauthorized user/member | Replace message from different session/member than original owner | Y | Y | Y | Y |
| 36 | `Cancel Order` | Negative | Cancel already cancelled/filled order | Cancel order when the existing order is not present | Y | Y | Y | Y |
| 37 | `Cancel Order` | Positive | Cancel resting order after partial fill | Cancel remaining after partial trade | Y | Y | Y | Y |
| 38 | `Cancel Order` | Negative | Missing Order ID in cancel | CANCEL without Order ID | Y | Y | Y | Y |
| 39 | `Cancel Order` | Negative | Cancel for non-existent order | CANCEL Order iD that is not present | Y | Y | Y | Y |
| 40 | `Cancel Order` | Negative | Cancel after session closed | Close session then send CANCEL | Y | Y | Y | Y |
| 41 | `Cancel Order` | Negative | Cancel by unauthorized user/member | Cancel message from different session/member than original owner | Y | Y | Y | Y |
| 42 | `Trade` | Positive | Immediate match between buy and sell | Trade scenario | Y | Y | Y | Y |
| 43 | `Trade` | Negative | Trade that would violate SMP (self-match) | Orders from same session ID | Y | Y | Y | Y |
| 44 | `Trade` | Boundary | Partial fills across multiple levels | Large incoming order fills across multiple contra orders | Y | Y | Y | Y |
| 45 | `New -> Replace -> Cancel` | Positive | Standard lifecycle: new -> partial trade -> replace -> cancel | Sequence: NEW -> TRADE -> REPLACE -> CANCEL | Y | Y | Y | Y |
| 46 | `Race Condition` | Boundary | Cancel and replace of same order | Test the race condition between Cancel and Replace of same order ID | Y | Y | Y | Y |
| 47 | `General` | Negative | Unsupported template/version for ETI | Send ETI templateId not supported version | Y | Y | Y | Y |
| 48 | `General` | Negative | Invalid character encoding (non-UTF8 payload) | Send payload with invalid encoding | Y | Y | Y | Y |
