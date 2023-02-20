import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import gamesActions from "../../store/games/action"
import { Link as Anchor } from "react-router-dom";
import allGamesActions from "../../store/allGames/actions";
import styles from "../card/card.module.css";
import BtnFav from '../favorites/BtnFav'

const { getAllGames } = allGamesActions;
const { getGame } = gamesActions;

function Card() {
  const { id } = useParams();
const gamesStore = useSelector(store=>store?.allgames?.allgames)
const dispatch = useDispatch()
let { token } = useSelector((store) => store?.auth);

useEffect(()=>{
  dispatch(getAllGames(""))
},[token])

const gameStore = useSelector((store) => store?.games);



useEffect(() => {
  if (gameStore) {
    console.log("funciona");
    dispatch(getGame(id,token));
  } else {
    console.log("no funciona");
  }
}, [token,id]);

  return (
    <div className={styles.conteiner}>
      {gamesStore.map((game, index) => {
        return (
          <div className={styles.conteinerCard} key={index} >
            <Anchor
              className={
                styles.anchorDetail
              }   to= 
              {`/details/${game._id}`}
              key={index} 
            >
              <img
                className={styles.gamePhoto}
                src={game.image}
                alt="PhotoGame"
              />
            </Anchor>
            <div className={styles.titleAndFav}>
              {game.title}
              <BtnFav game_id={game._id} />
            </div>
            <div className={styles.footerCard}>
              <div className={styles.footerIcons}>
                <img
                  className={styles.icon}
                  src="../../assets/windowsIcon.png"
                  alt=""
                />
                <img
                  className={styles.icon}
                  src="../../assets/appleIcon.png"
                  alt=""
                />{" "}
              </div>
              <button className={styles.buttonPrice}>${game.price}</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Card;
