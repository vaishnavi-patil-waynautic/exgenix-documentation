---
id: module-structure
title: 'Module Structure'
sidebar_position: 3
hide_table_of_contents: true
sidebar_label: Module Structure
slug: /test-action-unit/module-structure
description: 'Test Action Unit structure'
---
import { Layers, Settings, Database } from 'lucide-react';

# Module Structure

---

<div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>


  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
    <Layers size={20} color="#6366f1" />
    <strong>Collections</strong>
  </div>

  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: '24px', marginTop: '10px' }}>
    └── <Settings size={20} color="#10b981" />
    <strong> Test Action Unit</strong>
  </div>

</div>


#
Each Test Action Unit consists of:

| Component | Description |
|-----------|-------------|
| **Name** | `Descriptive` identifier for the unit (e.g., "Login Test Action Unit") |
| **Description** | `Purpose`, `usage scope`, and `included steps` |
| **Test Steps** | Ordered API configurations that execute `sequentially` |
| **Execution Order** | Defined `flow of steps` within the unit |

---