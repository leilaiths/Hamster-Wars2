import "../RandomCard.css";
import { useEffect, useState } from "react";
import './BattleStatus.css'


const BattleStatus = ({ battleHamster, opponentHamster}) => {
  const [winnerHamester, setWinnderHamster] = useState([]);
  useEffect(() => {
    async function get() {
      const response = await fetch(`http://localhost:1378/hamsters/${battleHamster.id}`, {
        method: "GET",
      });
      const data = await response.json();
      debugger;
      setWinnderHamster(data);
    }
    get();
  }, []);

function refreshPage(){
    window.location.reload();
} 

  const [loserHamster, setLoserHamster] = useState([]);
  useEffect(() => {
    async function get() {
      const response = await fetch(`http://localhost:1378/hamsters/${opponentHamster.id}`, {
        method: "GET",
      });
      const data = await response.json();
      setLoserHamster(data);
    }
    get();
  }, []);

  return (
    <div className="stats-container">
      <div className="hamster1-stats">
        <div>
          <h2>{winnerHamester.name}</h2>
        </div>
        <div className="stats-image">
		<img
                src={`http://localhost:1378/img/${winnerHamester.imgName}`}
                alt="hamster"
              />
        </div>
        <div>
          <h4>WINS: {winnerHamester.wins}</h4>
        </div>
        <div>
          <h4>DEFEATS: {winnerHamester.defeats}</h4>
        </div>
      </div>
      <div className="hamster2-stats">
        <div>
          <h2>{loserHamster.name}</h2>
        </div>
        <div className="stats-image">
		<img
                src={`http://localhost:1378/img/${loserHamster.imgName}`}
                alt="hamster"
              />
        </div>
        <div>
          <h4>WINS: {loserHamster.wins}</h4>
        </div>
        <div>
          <h4>DEFEATS: {loserHamster.defeats}</h4>
        </div>
      </div>
    
      <button className="next-battle" onClick={refreshPage}>
        NEXT BATTLE
      </button>
    </div>
  );
};
export default BattleStatus;
