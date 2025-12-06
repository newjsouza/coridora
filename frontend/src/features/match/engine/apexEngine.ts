import type { Match } from "types/types";

type EngineMatch = Match &
  Partial<{
    homeAttack: number;
    awayAttack: number;
    homeDefense: number;
    awayDefense: number;
  }>;

export function apexEngine(match: EngineMatch | null) {
  if (!match) return null;

  const homeAttack = match.homeAttack ?? 0;
  const awayAttack = match.awayAttack ?? 0;
  const homeDefense = match.homeDefense ?? 0;
  const awayDefense = match.awayDefense ?? 0;

  const pressureScore = (homeAttack + awayAttack) / 2;
  const volatilityScore = Math.abs(homeAttack - awayAttack);
  const goalExpectancy = homeAttack * 0.04 + awayDefense * 0.03;
  const recommendedMarket = homeAttack > awayDefense ? "+2.5 gols" : "Under 2.5";

  return {
    pressureScore,
    volatilityScore,
    goalExpectancy,
    recommendedMarket,
    defensiveBalance: (homeDefense + awayDefense) / 2,
  };
}
