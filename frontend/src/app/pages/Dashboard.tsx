import React from "react";
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
import MobileTabs from "@features/match/components/MobileTabs";
import { useAppStore } from "@store/useAppStore";

export function Dashboard() {
  const { selectedMatch } = useAppStore();

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
            <div className="desktopOnly">
              <RecommendationPanel />
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

            {selectedMatch && (
              <MobileTabs>
                <div title="Análise Geral">
                  <RecommendationPanel />
                </div>

                <div title="Probabilidades">
                  <Probabilities match={selectedMatch} />
                </div>

                <div title="Heatmap">
                  <Heatmap />
                </div>

                <div title="Cenários">
                  <GameScenarios match={selectedMatch} />
                </div>

                <div title="Times">
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
                </div>
              </MobileTabs>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
