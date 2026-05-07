import { AuditInput, AuditResult } from "@/types/audit";

export function generateAudit(
    input: AuditInput
): AuditResult {
    return {
        recommendations: [],
        totalMonthlySavings: 0,
        totalAnnualSavings: 0,
        summary: "",
    };
}