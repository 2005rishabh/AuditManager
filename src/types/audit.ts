export type ToolName =
    | "cursor"
    | "github-copilot"
    | "claude"
    | "chatgpt"
    | "anthropic-api"
    | "openai-api"
    | "gemini"
    | "windsurf";

export interface ToolUsage {
    tool: ToolName;
    plan: string;
    monthlySpend: number;
    seats: number;
}

export interface AuditInput {
    tools: ToolUsage[];
    teamSize: number;
    useCase: "coding" | "writing" | "research" | "data" | "mixed";
}

export interface Recommendation {
    tool: ToolName;
    currentPlan: string;
    suggestedPlan: string;
    monthlySavings: number;
    annualSavings: number;
    reason: string;
}

export interface AuditResult {
    recommendations: Recommendation[];
    totalMonthlySavings: number;
    totalAnnualSavings: number;
    summary: string;
}