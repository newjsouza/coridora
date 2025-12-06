import { mockAnalysis } from "@features/match/mock/mockData";
import type { AnalysisResult } from "types/types";

export async function fetchAnalysis(matchId: string): Promise<AnalysisResult | null> {
	// Mock mode: resolve locally without network calls.
	return mockAnalysis.find((item) => item.matchId === matchId) ?? null;
}
