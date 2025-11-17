---
id: common-patterns
title: 'Common Test Action Unit Patterns'
sidebar_position: 8
hide_table_of_contents: true
sidebar_label: Common Patterns
slug: /test-action-unit/common-patterns
description: 'Common patterns for Test Action Units'
---

# Common Test Action Unit Patterns

---

## 1. Authentication Flow
Socket → Session logon + response → User logon + response

## 2. Cleanup Flow
User logout → Session logout → Connection close

## 3. Order Validation
Risk checks → Balance → Instrument validation → Price band checks

## 4. Market Data Subscription
Connection → Subscription → Snapshot → Confirmation

---