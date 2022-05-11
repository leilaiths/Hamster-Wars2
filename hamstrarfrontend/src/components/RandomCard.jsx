import React from "react";
import "./RandomCard.css";
import { useEffect, useState } from "react";
import axios from "axios";
import BattleStatus from "./createNewHamster/BattleStatus";
// import BattleHamster from "./createNewHamster/BattleHamster";


function RandomCard({ firstrandomhamstrar, secondrandomhamstrar }) {
 
  useEffect(() => {
    async function get() {
      const response = await fetch("/hamsters/random", { method: "GET" });
      const data = await response.json();
    }
    get();
  }, []);

  useEffect(() => {
    async function get() {
      const response = await fetch("/hamsters/random", { method: "GET" });
      const data = await response.json();
    }
    get();
  }, []);
  const [showStats, setShowStats] = useState(false);

  async function putHamsters(hamsterWon, hamsterLost) {
    axios
      .all([
        axios.put(
          "http://localhost:1378/hamsters/" + hamsterWon.id,
          hamsterWon
        ),
        axios.put(
          "http://localhost:1378/hamsters/" + hamsterLost.id,
          hamsterLost
        ),
        // axios.post("/matches", { winnerId: winnerId, loserId: loserId }),
      ])
      .then(
        axios.spread((object, secObject) => {
          console.log(object, secObject);
		  
        })
      );
  }

  async function setWinnerHamster(index) {
    let winnerHamester =
      index === 1 ? firstrandomhamstrar : secondrandomhamstrar;
    let loserHamster = index === 1 ? secondrandomhamstrar : firstrandomhamstrar;

    winnerHamester.wins = winnerHamester.wins + 1;
    winnerHamester.games = winnerHamester.games + 1;

    loserHamster.defeats = secondrandomhamstrar.defeats + 1;
    loserHamster.games = secondrandomhamstrar.games + 1;

    putHamsters(winnerHamester, loserHamster);

    firstrandomhamstrar = winnerHamester;
    secondrandomhamstrar = loserHamster;

    setShowStats(true);
  }

  const nextBattle = () => {
    async function getNewBattleHamster() {
      const response = await fetch("/hamsters/random", { method: "GET" });
      const data = await response.json();
    //   setRandomhamstrarFunction(data);
    }
    async function getNewOpponentHamster() {
      const response = await fetch("/hamsters/random", { method: "GET" });
      const data = await response.json();
    //   setOpponentHamster(data);
    }
    setShowStats(false);
    getNewBattleHamster();
    getNewOpponentHamster();
	const nextBattle = () => {
        async function getNewBattleHamster(){
            const response = await fetch('/hamsters/random', { method: 'GET'});
            const data = await response.json();
            // setBattleHamster(data);
        }
        async function getNewOpponentHamster(){
            const response = await fetch('/hamsters/random', { method: 'GET'});
            const data = await response.json();
            // setOpponentHamster(data);
        }
        setShowStats(false);
        getNewBattleHamster();
        getNewOpponentHamster();
    }
  };

  return (
    <div className="hamsterbox">
      <div className="battle-container">
        {showStats ? (
          <div className="wins-losses">
            <BattleStatus
              battleHamster={firstrandomhamstrar}
              opponentHamster={secondrandomhamstrar}
              nextBattle={nextBattle}
            />
          </div>
        ) : (
          <div>
            <div className="battle-heading">
              <h1>May the Cutest Hamster Win!<p>VS</p></h1>
			  
            </div>
            <div className="firsthamster">
              <img
                src={`http://localhost:1378/img/${firstrandomhamstrar.imgName}`}
                alt=""
              />
              <p>{firstrandomhamstrar.name}</p>
              <button
                className="firstBtn"
                onClick={() => setWinnerHamster(1)}
                disabled={showStats === true}>
                <h4> {firstrandomhamstrar.name} is Cuter</h4>
              </button>

            </div>
            <div className="secondhamster">
              <img
                src={`http://localhost:1378/img/${secondrandomhamstrar.imgName}`}
                alt=""
              />
              <p>{secondrandomhamstrar.name}</p>
              <button
                className="SecondBtn"
                onClick={() => setWinnerHamster(1)}
                disabled={showStats === true}
              >
                <h4> {secondrandomhamstrar.name} is Cuter</h4>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}


export default RandomCard;