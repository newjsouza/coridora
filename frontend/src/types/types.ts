// Tipagens oficiais do APEX-ML

export interface Match {
  id: string;
  league: string;
  home: string;
  away: string;
  date: string;
  time: string;
  status?: "scheduled" | "in_progress" | "finished";
}

export interface AnalysisResult {
  matchId: string;
  confidence: number;
  recommendation: string;
  reasoning: string;
  odds?: {
    fair: number;
    market: number;
  };
  mainBet?: {
    title: string;
    fairOdd: number;
    marketOdd: number;
    reasoning: string;
    category?: string;
  };
  factCheck: FactCheckStatus;
}

export interface FactCheckStatus {
  level: "ok" | "warning" | "critical";
  message: string;
  sourcesChecked: string[];
}

export interface LeagueOption {
  id: string;
  name: string;
  code: string;
}
