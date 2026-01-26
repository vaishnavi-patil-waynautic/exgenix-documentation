---
hide_table_of_contents: true
slug: /api-configuration/module-structure
id: module-structure
title: 'Module Structure'
sidebar_label: Module Structure
---
import { Layers, Settings, Database } from 'lucide-react';


---

The API Configuration module follows a three-tier hierarchical structure:



<div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>


  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
    <Layers size={20} color="#6366f1" />
    <strong>Collections</strong>
  </div>

  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: '24px', marginTop: '10px' }}>
    └── <Settings size={20} color="#10b981" />
    <strong> API Configurations</strong>
  </div>

  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: '75px' }}>
    └── <Database size={20} color="#f59e0b" />
    <strong>Datasheets</strong>
  </div>
</div>

###

| Component | Purpose |
|------------|----------|
| `Collections` | Group related APIs for better organization |
| `API Configurations` | Define message structures and behavior |
| `Datasheets` | Store static and dynamic test data |

---