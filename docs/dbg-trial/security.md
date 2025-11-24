---
hide_table_of_contents: true
---

import { 
  Check, 
  ShieldCheck, 
  FolderOpen, 
  Lock, 
  Trash2, 
  Wrench 
} from "lucide-react";

# Data Security & File Handling
---

Your trial environment is deployed in a secure, isolated Google Cloud (GCP) workspace. This setup ensures complete protection of all activities performed within the system.

---

## <ShieldCheck color="#0A84FF" /> Secure, Isolated Trial Environment
The environment is non-production and logically isolated from all other Waynautic systems.

- No real trading data, member information, or sensitive production artifacts are stored or processed.
- Access is provided only to authorized DBG team members via individual credentials.

---

## <FolderOpen color="#C67A00" /> Handling of Documents Uploaded by DBG
During the trial, DBG users may upload sample documents (BRDs, FIX/ETI API PDFs, requirement files).

- These files are uploaded directly from your machine into your dedicated GCP project sandbox.
- Data is not shared across customers, not used for model training, and remains restricted within your trial workspace.

---

## <Lock color="#8E44AD" /> Encryption & Compliance
- All data in transit is protected with TLS 1.2+ encryption.
- All data at rest is encrypted using GCP-managed encryption keys.
- The trial environment follows Google Cloud security best practices for access control, IAM policies, and logging.

---

## <Trash2 color="#E53935" /> No Persistent Storage of Sensitive Information
We do not store or retain any DBG-proprietary test data after the trial period ends.

Users may request deletion of all assets at any time, and we will perform a complete wipe of:

- Uploaded documents  
- Generated test cases  
- Execution logs  
- Model outputs  

---

## <Wrench color="#2E7D32" /> Recommended for the Trial
If DBG has specific data security requirements (such as masking, redacting, or enforcing inbound/outbound data policies), Waynautic will assist in aligning the trial setup accordingly.

---
