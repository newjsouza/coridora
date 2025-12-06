import { leagues } from "@features/match/mock/mockData";
import { useAppStore } from "@store/useAppStore";

export default function LeagueSelector() {
  const { selectedLeague, setLeague } = useAppStore();

  return (
    <div className="league-selector">
        {leagues.map((lg) => (
          <button
            key={lg.code}
            className={`league-chip ${selectedLeague === lg.code ? "active" : ""}`}
            onClick={() => setLeague(lg.code)}
          >
            {lg.name}
          </button>
        ))}
    </div>
  );
}
