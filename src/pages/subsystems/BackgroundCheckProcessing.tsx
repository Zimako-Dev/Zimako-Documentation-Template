import React from 'react';
import { MermaidDiagram } from '../../components/diagrams/MermaidDiagram';

export function BackgroundCheckProcessing() {
  const processingFlowDiagram = `
    graph TD
      A[Request] --> B{Validation}
      B -->|Valid| C[Provider Selection]
      B -->|Invalid| D[Error Response]
      C --> E[Data Preparation]
      E --> F{Provider Processing}
      F --> G[Criminal Check]
      F --> H[Education Check]
      F --> I[Employment Check]
      F --> J[Credit Check]
      G --> K[Results Aggregation]
      H --> K
      I --> K
      J --> K
      K --> L[Quality Control]
      L -->|Pass| M[Final Report]
      L -->|Fail| N[Manual Review]
      
      style A fill:#4f46e5,stroke:#6366f1,color:#fff
      style B fill:#3730a3,stroke:#6366f1,color:#fff
      style C fill:#4f46e5,stroke:#6366f1,color:#fff
      style D fill:#dc2626,stroke:#ef4444,color:#fff
      style E fill:#0284c7,stroke:#0ea5e9,color:#fff
      style F fill:#3730a3,stroke:#6366f1,color:#fff
      style G fill:#059669,stroke:#10b981,color:#fff
      style H fill:#059669,stroke:#10b981,color:#fff
      style I fill:#059669,stroke:#10b981,color:#fff
      style J fill:#059669,stroke:#10b981,color:#fff
      style K fill:#4f46e5,stroke:#6366f1,color:#fff
      style L fill:#3730a3,stroke:#6366f1,color:#fff
      style M fill:#059669,stroke:#10b981,color:#fff
      style N fill:#dc2626,stroke:#ef4444,color:#fff
  `;

  const providerIntegrationDiagram = `
    sequenceDiagram
      participant C as Coordinator
      participant P as Provider Pool
      participant V as Verification
      participant Q as Quality Control
      
      C->>P: Request Provider
      P->>P: Load Balancing
      P->>V: Assign Provider
      V->>V: Process Check
      V-->>Q: Submit Results
      Q->>Q: Validate Results
      Q-->>C: Return Results
      
      style C fill:#4f46e5,stroke:#6366f1,color:#fff
      style P fill:#3730a3,stroke:#6366f1,color:#fff
      style V fill:#059669,stroke:#10b981,color:#fff
      style Q fill:#0284c7,stroke:#0ea5e9,color:#fff
  `;

  const errorHandlingDiagram = `
    stateDiagram-v2
      [*] --> Processing
      Processing --> ProviderError: API Error
      Processing --> TimeoutError: No Response
      Processing --> ValidationError: Invalid Data
      ProviderError --> RetryQueue: Auto-Retry
      TimeoutError --> RetryQueue: Auto-Retry
      ValidationError --> ManualReview: Review
      RetryQueue --> Processing: Retry
      RetryQueue --> ManualReview: Max Retries
      ManualReview --> Processing: Fixed
      ManualReview --> Failed: Unfixable
      Processing --> Complete: Success
      Complete --> [*]
      Failed --> [*]
      
      style Processing fill:#4f46e5,stroke:#6366f1,color:#fff
      style ProviderError fill:#dc2626,stroke:#ef4444,color:#fff
      style TimeoutError fill:#dc2626,stroke:#ef4444,color:#fff
      style ValidationError fill:#dc2626,stroke:#ef4444,color:#fff
      style RetryQueue fill:#3730a3,stroke:#6366f1,color:#fff
      style ManualReview fill:#0284c7,stroke:#0ea5e9,color:#fff
      style Complete fill:#059669,stroke:#10b981,color:#fff
      style Failed fill:#dc2626,stroke:#ef4444,color:#fff
  `;

  return (
    <div className="prose dark:prose-invert max-w-none">
      <h1>Background Check Processing System</h1>

      <h2>Overview</h2>
      <p>
        The Background Check Processing System is responsible for managing the entire lifecycle of
        background checks, from initial request to final results delivery. It coordinates with multiple
        verification providers and ensures accurate, timely processing of checks.
      </p>

      <h2>Core Components</h2>
      
      <h3>1. Processing Engine</h3>
      <ul>
        <li><strong>Check Coordinator:</strong>
          <ul>
            <li>Request validation</li>
            <li>Provider selection</li>
            <li>Process orchestration</li>
            <li>Results aggregation</li>
          </ul>
        </li>
        <li><strong>Verification Handlers:</strong>
          <ul>
            <li>Provider-specific processing</li>
            <li>Data transformation</li>
            <li>Error handling</li>
            <li>Retry logic</li>
          </ul>
        </li>
      </ul>

      <h3>2. Results Processing</h3>
      <ul>
        <li><strong>Results Aggregator:</strong>
          <ul>
            <li>Data consolidation</li>
            <li>Verification status tracking</li>
            <li>Results formatting</li>
            <li>Report generation</li>
          </ul>
        </li>
        <li><strong>Quality Control:</strong>
          <ul>
            <li>Data validation</li>
            <li>Consistency checks</li>
            <li>Accuracy verification</li>
            <li>Compliance validation</li>
          </ul>
        </li>
      </ul>

      <h2>Processing Workflow</h2>
      <MermaidDiagram chart={processingFlowDiagram} />
      <p>
        This diagram illustrates the complete workflow of a background check request, from initial
        validation through multiple verification types to final quality control and reporting.
      </p>

      <h3>1. Request Processing</h3>
      <ol>
        <li>Request validation</li>
        <li>Provider selection</li>
        <li>Data preparation</li>
        <li>Provider submission</li>
        <li>Status tracking</li>
      </ol>

      <h3>2. Verification Steps</h3>
      <ul>
        <li>Identity verification</li>
        <li>Criminal record checks</li>
        <li>Education verification</li>
        <li>Employment history</li>
        <li>Credit checks</li>
      </ul>

      <h2>Provider Integration</h2>
      <MermaidDiagram chart={providerIntegrationDiagram} />
      <p>
        The sequence diagram shows how the system coordinates with various providers, including
        load balancing, verification processing, and quality control steps.
      </p>

      <h3>1. Provider Management</h3>
      <pre><code>{`{
  providerId: string,
  name: string,
  type: string[],
  config: {
    apiKey: string,
    endpoint: string,
    timeout: number,
    retryPolicy: {
      maxAttempts: number,
      backoffMs: number
    }
  },
  status: {
    active: boolean,
    healthCheck: timestamp,
    errorRate: number
  }
}`}</code></pre>

      <h3>2. Integration Features</h3>
      <ul>
        <li>API integration</li>
        <li>Data mapping</li>
        <li>Error handling</li>
        <li>Rate limiting</li>
      </ul>

      <h2>Data Processing</h2>
      
      <h3>1. Data Validation</h3>
      <ul>
        <li>Input validation</li>
        <li>Format verification</li>
        <li>Completeness checks</li>
        <li>Compliance validation</li>
      </ul>

      <h3>2. Data Transformation</h3>
      <ul>
        <li>Format standardization</li>
        <li>Data enrichment</li>
        <li>Results normalization</li>
        <li>Report formatting</li>
      </ul>

      <h2>Error Handling</h2>
      <MermaidDiagram chart={errorHandlingDiagram} />
      <p>
        This state diagram demonstrates the comprehensive error handling system, including
        automatic retries, manual review processes, and final state resolutions.
      </p>

      <h3>1. Processing Errors</h3>
      <ul>
        <li>Provider errors</li>
        <li>Validation errors</li>
        <li>System errors</li>
        <li>Timeout handling</li>
      </ul>

      <h3>2. Recovery Procedures</h3>
      <ul>
        <li>Automatic retry</li>
        <li>Manual intervention</li>
        <li>Error notification</li>
        <li>Status recovery</li>
      </ul>

      <h2>Performance Optimization</h2>
      
      <h3>1. Processing Optimization</h3>
      <ul>
        <li>Parallel processing</li>
        <li>Batch processing</li>
        <li>Caching strategies</li>
        <li>Resource management</li>
      </ul>

      <h3>2. System Monitoring</h3>
      <ul>
        <li>Performance metrics</li>
        <li>Error tracking</li>
        <li>Provider monitoring</li>
        <li>Resource utilization</li>
      </ul>

      <h2>Compliance & Security</h2>
      <ul>
        <li>Data protection</li>
        <li>Privacy compliance</li>
        <li>Audit logging</li>
        <li>Access control</li>
        <li>Encryption standards</li>
      </ul>
    </div>
  );
}
