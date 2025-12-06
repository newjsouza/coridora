import React, { useState } from "react";
import Layout from "@components/Layout";
import LeagueSelector from "@features/match/components/LeagueSelector";
import MatchList from "@features/match/components/MatchList";
import RecommendationPanel from "@features/match/components/RecommendationPanel";
import DailyInsights from "@features/match/components/DailyInsights";
import ExtendedAnalysis from "@features/match/components/ExtendedAnalysis";
import StakeSimulator from "@features/match/components/StakeSimulator";
import MatchStrengthPanel from "@features/match/components/MatchStrengthPanel";
import TeamRadarChart from "@features/match/components/TeamRadarChart";
import RefereeInsights from "@features/match/components/RefereeInsights";
import Probabilities from "@features/match/components/Probabilities";
import GameScenarios from "@features/match/components/GameScenarios";
import TeamCard from "@features/match/components/TeamCard";
import Heatmap from "@features/match/components/Heatmap";
import MiniSummary from "@features/match/components/MiniSummary";
import MatchKPI from "@features/match/components/MatchKPI";
import { AnalysisFlow } from "@features/analysis/AnalysisFlow";
import { PatternChart } from "@features/analysis/PatternChart";
import { AIExplanation } from "@features/analysis/AIExplanation";
import { TrendLineChart } from "@features/advanced/TrendLineChart";
import { KellyCalculator } from "@features/advanced/KellyCalculator";
import { BankSimulator } from "@features/advanced/BankSimulator";
import { TacticalHeatmap } from "@features/tactical/TacticalHeatmap";
import { FactCheckPanel } from "@features/factcheck/FactCheckPanel";
import { useAppStore } from "@store/useAppStore";
import InsightsPage from "@/mobilePages/InsightsPage";
import AnalysisPage from "@/mobilePages/AnalysisPage";
import GraphsPage from "@/mobilePages/GraphsPage";
import IAPage from "@/mobilePages/IAPage";
import FinancePage from "@/mobilePages/FinancePage";
import ScenariosPage from "@/mobilePages/ScenariosPage";

export function Dashboard() {
  const { selectedMatch } = useAppStore();
  const isMobile = typeof window !== "undefined" ? window.innerWidth < 600 : false;
  const [activeMobilePage, setActiveMobilePage] = useState<string | null>(null);

  return (
    <Layout>
      <DailyInsights />

      <section className="dashboard-main">
        <div className="dashboard-top-row">
          <LeagueSelector />
        </div>

        <div className="dashboard-grid">
          <div className="dashboard-col dashboard-col-matches">
            <MatchList />
          </div>
          <div className="dashboard-col dashboard-col-analysis">
            <RecommendationPanel />

            <div className="desktopOnly">
              <TacticalHeatmap />
              <FactCheckPanel matchId={selectedMatch?.id ?? "001"} />
              <AnalysisFlow />
              <PatternChart />
              <AIExplanation match={selectedMatch} />
              <TrendLineChart />
              <KellyCalculator />
              <BankSimulator />
              {selectedMatch && (
                <>
                  <MiniSummary match={selectedMatch} />
                  <MatchKPI match={selectedMatch} />
                </>
              )}
              <ExtendedAnalysis match={selectedMatch} />
              <StakeSimulator />
              <MatchStrengthPanel match={selectedMatch} />
              <TeamRadarChart />
              <RefereeInsights match={selectedMatch} />
              {selectedMatch && (
                <>
                  <TeamCard
                    title={selectedMatch.home}
                    stats={{
                      form: "V V E D V",
                      goalsFor: 8,
                      goalsAgainst: 3,
                      attack: 82,
                      defense: 70,
                      trend: "Ofensivo",
                    }}
                  />

                  <TeamCard
                    title={selectedMatch.away}
                    stats={{
                      form: "D V D E D",
                      goalsFor: 4,
                      goalsAgainst: 9,
                      attack: 61,
                      defense: 52,
                      trend: "Irregular",
                    }}
                  />

                  <Heatmap />
                  <Probabilities match={selectedMatch} />
                  <GameScenarios match={selectedMatch} />
                </>
              )}
            </div>

            {selectedMatch && isMobile && !activeMobilePage && (
              <div className="mobileTabButtons">
                <button onClick={() => setActiveMobilePage("insights")}>Insights</button>
                <button onClick={() => setActiveMobilePage("analysis")}>Análise</button>
                <button onClick={() => setActiveMobilePage("graphs")}>Gráficos</button>
                <button onClick={() => setActiveMobilePage("ia")}>IA</button>
                <button onClick={() => setActiveMobilePage("finance")}>Financeiro</button>
                <button onClick={() => setActiveMobilePage("scenarios")}>Cenários</button>
              </div>
            )}

            {activeMobilePage === "insights" && (
              <InsightsPage onBack={() => setActiveMobilePage(null)} />
            )}
            {activeMobilePage === "analysis" && (
              <AnalysisPage onBack={() => setActiveMobilePage(null)} />
            )}
            {activeMobilePage === "graphs" && (
              <GraphsPage onBack={() => setActiveMobilePage(null)} />
            )}
            {activeMobilePage === "ia" && <IAPage onBack={() => setActiveMobilePage(null)} />}
            {activeMobilePage === "finance" && (
              <FinancePage onBack={() => setActiveMobilePage(null)} />
            )}
            {activeMobilePage === "scenarios" && (
              <ScenariosPage onBack={() => setActiveMobilePage(null)} />
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
