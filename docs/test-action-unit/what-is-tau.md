---
id: what-is-tau
title: 'What Is a Test Action Unit?'
sidebar_position: 2
hide_table_of_contents: true
sidebar_label: What Is a Test Action Unit?
slug: /test-action-unit/what-is-tau
description: 'Understanding Test Action Units'
---

import ExampleBlock from '@site/src/components/ExampleBlock'

# What Is a Test Action Unit?

A Test Action Unit acts as a container for grouping multiple API-based steps that logically belong together.

<ExampleBlock title="Examples: Common Test Flows">
  <p>Some common test flows include:</p>

  <ul>
    <li><strong>Login Flow</strong>: Socket connection → Session logon → User logon → Validation</li>
    <li><strong>Logout Flow</strong>: User logout → Session logout → Connection close</li>
    <li><strong>Order Placement</strong>: Pre-checks → Order submission → Response validation</li>
  </ul>
</ExampleBlock>