// src/utils/mockData.js

const mockUser = {
  id: "mock-123",
  fullName: "John Doe",
  email: "demo@vigilprivacy.com",
  role: "org_admin",
  avatar: "https://ui-avatars.com/api/?name=John+Doe",
};

const mockPermissions = {
  ropa: ["view", "create", "edit", "delete", "archive"],
  assessment: ["view", "create", "edit"],
  data_mapping: ["view", "setup"],
  audit_logs: ["view", "export"],
  report: ["view", "export"],
  setup: ["view", "edit"],
  team: ["view", "manage"]
};

const mockRopas = [
  { id: 1, ropa_id: "ROPA-001", name: "Customer CRM", category: "Commercial", status: "Active", creator: { full_name: "John Doe" }, accountable_department: "Sales" },
  { id: 2, ropa_id: "ROPA-002", name: "Employee Payroll", category: "HR", status: "In Review", creator: { full_name: "Jane Smith" }, accountable_department: "Human Resources" },
  { id: 3, ropa_id: "ROPA-003", name: "Marketing Campaigns", category: "Marketing", status: "Active", creator: { full_name: "John Doe" }, accountable_department: "Marketing" },
];

export const mockEndpoints = {
  "/auth/login": () => ({
    user: mockUser,
    token: "mock-jwt-token-xyz",
    permissions: mockPermissions
  }),
  "/auth/verify": () => ({
    user: mockUser,
    permissions: mockPermissions
  }),
  "/portal/dashboard/summary": () => ({
    stats: {
      totalRopas: 45,
      myReports: 12,
      reportsThisMonth: 3,
      ropasThisMonth: 5,
      ropasLastMonth: 3,
      completionAverage: 85,
    },
    active_assessments: 12,
    high_risks: 5,
    compliance_score: 85,
    data_mappings: 25,
    data_transfers: 12,
    risk_score: 65,
    complianceBreakdown: {
      infovoyage: { count: 15 },
      checksync: { count: 10 },
      beam: { count: 5 }
    }
  }),
  "/portal/dashboard/activity": () => ({
    activities: [
      { id: 1, type: "create", message: "New RoPA created for CRM", email: "john@example.com", createdAt: new Date().toISOString() },
      { id: 2, type: "update", message: "Risk assessment updated for Payroll", email: "jane@example.com", createdAt: new Date().toISOString() },
      { id: 3, type: "login", message: "New login detected", email: "john@example.com", createdAt: new Date().toISOString() },
    ]
  }),
  "/portal/assessments/dashboard": () => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return {
      graphData: months.map((m, i) => ({
        label: m,
        month: i + 1,
        LIA: Math.floor(Math.random() * 8),
        DPIA: Math.floor(Math.random() * 8),
        TIA: Math.floor(Math.random() * 8),
      })),
      summary: { total: 45, completed: 30, in_progress: 15 }
    }
  },
  "/portal/data-mappings/stats": () => ({
    summary: {
      total: 25,
      total_assets: 25,
      processing_activities: 15,
      recentActivity: { created_last_30_days: 5 }
    },
    byCategory: {
      "Personal Data": 10,
      "Financial Data": 8,
      "Health Data": 7
    }
  }),
  "/portal/data-transfers/stats": () => ({
    summary: { total: 12, high_risk: 2, medium_risk: 4, low_risk: 6 },
    byRiskLevel: { High: 2, Medium: 4, Low: 6 }
  }),
  "/portal/data-transfers": () => ({
    transfers: [
      { id: 1, region: "EU → US", dataType: "Customer Data", risk: "Low", date: "15 Oct", status: "Active" },
      { id: 2, region: "IN → UK", dataType: "Employee Data", risk: "Medium", date: "12 Oct", status: "In Review" },
      { id: 3, region: "SG → FR", dataType: "Analytics Logs", risk: "High", date: "09 Oct", status: "Active" },
    ],
    total: 3
  }),
  "/portal/ropas": (params) => {
    return {
      ropas: mockRopas,
      total: 3,
      page: 1,
      limit: 10
    };
  },
  "/portal/ropas/stats": () => ({
    byCategory: [
      { category: "InfoVoyage", count: 12 },
      { category: "CheckSync", count: 15 },
      { category: "Beam", count: 18 },
      { category: "OffDoff", count: 5 }
    ],
    total: 50,
    thisMonth: 10,
    lastMonth: 8
  }),
  "/portal/compliance/score": () => ({
    complianceScore: {
      compliance_percentage: 85,
      stage_breakdown: {
        infovoyage: { count: 15 },
        checksync: { count: 10 },
        beam: { count: 5 }
      }
    }
  }),
  "/portal/risk/overview": () => ({
    summary: {
      averageRiskScore: 65,
      high: 5,
      medium: 15,
      low: 25
    }
  }),
  "/portal/ropas/graph": () => ({
    graphData: [
      { year: 2024, label: "Jan", total: 10 },
      { year: 2024, label: "Feb", total: 15 },
      { year: 2025, label: "Jan", total: 20 },
      { year: 2025, label: "Feb", total: 25 },
    ]
  }),
  "/portal/ropas/risk-heatmap": () => ({
    heatmap: {
      matrix: Array.from({ length: 5 }, () =>
        Array.from({ length: 5 }, () => [
          { id: 1, ropa_id: "ROPA-001", name: "Mock RoPA", category: "HR", flow_stage: "InfoVoyage", status: "Active", risk_score: 12, risk_category: "Medium" }
        ])
      )
    }
  }),
  "/portal/reports": () => ({
    reports: [
      { id: "rep-1", name: "Monthly Compliance Report", createdAt: new Date().toISOString(), category: "compliance", status: "completed" },
      { id: "rep-2", name: "DPIA Review - Payroll", createdAt: new Date().toISOString(), category: "dpia", status: "completed" },
    ]
  }),
  "/portal/notifications": () => ({
    notifications: [
      { id: "n1", title: "New RoPA request", body: "A new RoPA request is waiting for your review.", time: "10 mins ago" },
    ]
  }),
  "/portal/profile": () => mockUser,
  "/portal/audit-logs": () => ({
    logs: [
      { id: "l1", user: "John Doe", action: "Login", time: "2024-03-29 10:00 AM" },
    ]
  }),
  "/portal/audit": () => ({
    data: [
      { id: "l1", user: { full_name: "John Doe" }, action: "Login", created_at: "2024-03-29 10:00 AM" },
      { id: "l2", user: { full_name: "John Doe" }, action: "Viewed RoPA (ROPA-001)", created_at: "2024-03-29 10:05 AM" },
    ],
    total: 2
  }),
  "/portal/action-items/dashboard/summary": () => ({
    summary: {
      total_action_items: 25,
      open_overdue_items: 5,
      high_risk_items: 8,
      linked_to_ropa: 15,
      linked_to_assessments: 10,
      items_with_evidence: 12
    }
  }),
  "/portal/action-items/dashboard/risk-distribution": () => ({
    labels: ["Low", "Medium", "High", "Critical"],
    data: [10, 8, 5, 2]
  }),
  "/portal/action-items/dashboard/risk-heatmap": () => ({
    heatmap: {
      matrix: Array.from({ length: 5 }, () => Array.from({ length: 5 }, () => 0))
    }
  }),
  "/portal/action-items/dashboard/alerts": () => ({
    alerts: {
      overdue: [
        { id: "a1", title: "Review Privacy Policy", due_date: "2024-03-20", assignee: { full_name: "John Doe" } }
      ],
      critical: [
        { id: "a2", title: "Critical Data Leak Check", due_date: "2024-03-29", assignee: { full_name: "Jane Smith" } }
      ],
      upcoming: [
        { id: "a3", title: "Audit Trail Review", due_date: "2024-04-05", assignee: { full_name: "John Doe" } }
      ]
    }
  }),
  "/portal/action-items/dashboard/table": () => ({
    actionItems: [
      { id: 1, action_id: "ACT-001", title: "Update CRM records", assignee: { full_name: "John Doe" }, due_date: "2024-04-01", status: "open", risk_category: "Low" },
      { id: 2, action_id: "ACT-002", title: "Fix security bug", assignee: { full_name: "Jane Smith" }, due_date: "2024-04-05", status: "in_progress", risk_category: "High" },
    ],
    pagination: { page: 1, total: 2, pages: 1 }
  }),
  "/portal/data-mappings": () => ({
    dataMappings: [
      { id: 1, name: "Customer Data Flow", description: "End-to-end customer data journey", creator: { full_name: "John Doe" }, created_at: "2024-03-20", updated_at: "2024-03-25", status: "active", category: "Commercial" },
      { id: 2, name: "Employee Onboarding", description: "HR data processing for new hires", creator: { full_name: "Jane Smith" }, created_at: "2024-03-22", updated_at: "2024-03-23", status: "active", category: "HR" },
    ],
    pagination: { page: 1, total: 2, pages: 1 }
  }),
  "/portal/data-mappings/stats": () => ({
    summary: {
      total: 25,
      total_assets: 25,
      processing_activities: 15,
      recentActivity: { created_last_30_days: 5 }
    },
    byCategory: {
      "Personal Data": 10,
      "Financial Data": 8,
      "Health Data": 7
    }
  }),
  "/portal/assessments/stats": () => ({
    byType: {
      DPIA: 5,
      LIA: 8,
      TIA: 3
    }
  }),
  "/portal/assessments": () => ({
    assessments: [
      { id: 1, assessment_id: "DPIA-2024-001", name: "CRM DPIA", type: "DPIA", status: "In Progress", current_stage: 2, total_stages: 5, impact: 3, likelihood: 2, creator: { full_name: "John Doe" }, next_review_date: "2024-12-01", createdAt: "2024-03-29", created_at: "2024-03-29" },
      { id: 2, assessment_id: "LIA-2024-001", name: "Employee LIA", type: "LIA", status: "Completed", current_stage: 4, total_stages: 4, impact: 2, likelihood: 1, creator: { full_name: "Jane Smith" }, next_review_date: "2025-01-15", createdAt: "2025-03-29", created_at: "2025-03-29" },
      { id: 3, assessment_id: "TIA-2024-001", name: "VPN TIA", type: "TIA", status: "In Progress", current_stage: 1, total_stages: 3, impact: 1, likelihood: 1, creator: { full_name: "John Doe" }, next_review_date: "2024-11-20", createdAt: "2026-03-29", created_at: "2026-03-29" },
    ]
  }),
  "/portal/assessments/dashboard": () => ({
    graphData: [
      { month: 1, total: 2 },
      { month: 2, total: 3 },
      { month: 3, total: 1 }
    ],
    summary: { total: 6 }
  }),
  "/portal/dashboard/upcoming-audits": () => ({
    upcomingAudits: [
      { id: 1, title: "Internal Privacy Audit", date: "2024-04-15" }
    ],
    summary: { total: 1 }
  }),
  "/portal/data-transfers/stats": () => ({
    summary: { total: 12 },
    byRiskLevel: { High: 2, Medium: 4, Low: 6 }
  }),
  "/portal/data-transfers": () => ({
    transfers: [
      { id: 1, region: "EU -> US", dataType: "Customer Data", risk: "Low", date: "2024-03-20" }
    ]
  }),
  "/portal/teams": () => ({
    teams: [
      { id: 1, name: "Compliance Team", description: "Handles core compliance", permissions: {}, members: [{ id: "m1" }], createdAt: "2024-01-01" },
      { id: 2, name: "Ops Reviewers", description: "Day to day reviewers", permissions: {}, members: [{ id: "m2" }], createdAt: "2024-01-05" },
    ]
  }),
  "/portal/teams/permissions": () => ({
    permissions: {
      create_ropa: "Create RoPA",
      view_ropa: "View RoPA",
      // ... more as needed by UI
    },
    description: "System permissions"
  }),
  "/users": () => ({
    users: [
      { id: "m1", full_name: "John Doe", email: "john@example.com", role: "super_admin", status: "active", department: "Legal" },
      { id: "m2", full_name: "Jane Smith", email: "jane@example.com", role: "org_admin", status: "active", department: "IT" },
    ],
    total: 2
  }),
  "/articles": () => ({
    articles: [
      { id: 1, title: "Understanding GDPR in 2024", description: "A comprehensive guide to GDPR compliance requirements for modern enterprises.", author: "Alice Admin", createdAt: new Date().toISOString(), category: "Compliance", coverPhoto: true },
      { id: 2, title: "Implementing Data Privacy by Design", description: "Learn how to integrate privacy principles into your product development lifecycle.", author: "Bob Reviewer", createdAt: new Date().toISOString(), category: "Product", coverPhoto: false },
      { id: 3, title: "Navigating Cross-Border Data Transfers", description: "The latest updates on SCCs and international data transfer frameworks.", author: "Jane Smith", createdAt: new Date().toISOString(), category: "Legal", coverPhoto: true },
    ],
    pagination: { page: 1, total: 3, pages: 1 }
  }),
};

export const getMockResponse = (url, method, data) => {
  const cleanUrl = url.split("?")[0];
  
  let handler = mockEndpoints[cleanUrl];
  
  if (cleanUrl === "/portal/data-mappings" && (method === "post" || method === "POST")) {
    handler = () => ({
      dataMapping: { 
        id: Math.floor(Math.random() * 1000) + 100, 
        name: data?.name || "New Flow",
        description: data?.description || "",
        status: "active",
        created_at: new Date().toISOString()
      }
    });
  }

  if (!handler) {
    if (cleanUrl.match(/\/articles\/\d+$/)) {
      const id = cleanUrl.split("/").pop();
      handler = () => ({
        article: {
          id,
          title: "Sample Privacy Hub Article",
          excerpt: "Detailed insights into data protection frameworks and organizational compliance strategies.",
          description: "Detailed insights into data protection frameworks and organizational compliance strategies.",
          content: "<h1>Mock Article Body</h1><p>Data protection is a fundamental aspect of modern business operations. This article covers the essential strategies for maintaining compliance in a rapidly evolving regulatory landscape. From GDPR to CCPA, understanding your obligations is the first step toward building consumer trust.</p><p>Key takeaways include:</p><ul><li>Risk assessment methodologies</li><li>Data mapping best practices</li><li>Incident response preparation</li></ul>",
          author: "VigilPrivacy Team",
          createdAt: new Date().toISOString(),
          category: "Best Practice",
          coverPhoto: false
        }
      });
    } else if (cleanUrl.match(/\/portal\/ropas\/\d+$/)) {
      handler = () => ({ ropa: mockRopas[0] });
    } else if (cleanUrl.match(/\/portal\/data-mappings\/\d+$/)) {
      handler = () => ({ 
        dataMapping: { 
          id: cleanUrl.split("/").pop(),
          name: "Mock Data Flow",
          description: "Detail view of the flow",
          status: "active",
          category: "Commercial",
          diagram_data: { shapes: [] }
        } 
      });
    } else if (cleanUrl.includes("/portal/")) {
      handler = () => {
        if (cleanUrl.endsWith("s") || cleanUrl.includes("/table") || cleanUrl.includes("/logs")) {
          return { data: [], total: 0 };
        }
        return { message: "Successful (Mock)", data: {} };
      };
    }
  }

  if (handler) {
    const responseData = handler(data);
    return { data: responseData, status: 200 };
  }
  
  return { data: { message: "Mock response" }, status: 200 };
};
