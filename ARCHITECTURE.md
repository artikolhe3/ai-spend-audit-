# Architecture

## Stack

- Next.js 16
- React
- TypeScript
- Tailwind CSS
- Vercel Deployment

## Why This Stack

Next.js enables fast deployment, SEO optimization, server rendering, and scalable routing. TypeScript improves maintainability and reduces runtime bugs.

Tailwind CSS was chosen for rapid UI iteration and responsive design consistency.

## Data Flow

User Input
↓
Audit Form Component
↓
generateAudit() Logic
↓
Audit Result Object
↓
UI Rendering
↓
Lead Capture

## System Diagram

```mermaid
graph TD
A[User Input] --> B[Audit Form]
B --> C[Audit Engine]
C --> D[Results UI]
D --> E[Lead Capture]