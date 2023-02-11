import React, { useEffect } from "react";
import Categories from "../categories/Categories";
import styles from "./AllGamesCards.module.css"
import { useSelector,useDispatch } from "react-redux";
import allGamesActions from "../../store/allGames/actions";

const {getAllGames} = allGamesActions

const GamesCards = () => {
const gamesStore = useSelector(store=>store.allgames.allgames)
console.log(gamesStore)
const dispatch = useDispatch()

useEffect(()=>{
  dispatch(getAllGames())
  console.log(gamesStore)
},[])

const juegos = gamesStore.map(juego=>console.log(juego))
//console.log(gamesStore.allgames)
  return(
    <div className={styles.conteiner}>
      <div className={styles.carrusel}>
        <img src="https://www.freetogame.com/g/157/thumbnail.jpg" alt="" className={styles.carrusel}/>
      </div>
      <section className={styles.sectionCategories} >
        <div className={styles.divCategories}>
          </div>
        <div className={styles.divSearch}>
          <input type="text" 
          placeholder="Find your games here"
          className={styles.input}
          />
          <div className={styles.divSearch}>
          <img src="https://t3.ftcdn.net/jpg/04/99/34/78/360_F_499347841_IXq0bLOPN4MkKAa71nP3WMQq6LVlgeTO.jpg" alt="" className={styles.search}/>
          </div>
        </div>
      </section>
      <section className={styles.sectionCards}>
        <div className={styles.cards}>
          <img src="https://www.freetogame.com/g/520/thumbnail.jpg" alt="" className={styles.fotos}/>
          <div className={styles.cardsAcomodo}>
          <h2>Roller Champions</h2>
          <img src="https://cdn-icons-png.flaticon.com/512/71/71753.png" alt="" className={styles.fotosIcono}/>
          <p>What if you could player roller derby...</p>
          </div>
          <div className={styles.divCarrito}>
            <p>$0 ARS</p>
            <img src="https://media.istockphoto.com/id/517056560/es/vector/cesta-icono-vector-ilustraci%C3%B3n.jpg?s=612x612&w=0&k=20&c=hhUqGl79GRcaKDjajX6UT29fvU294_bk9LjnAflDS0A=" alt="" className={styles.carrito}/>
          </div>
        </div>
        <div className={styles.cards}>
          <img src="https://www.freetogame.com/g/474/thumbnail.jpg" alt=""className={styles.fotos} />
          <div className={styles.cardsAcomodo}>
          <h2>Rocket League</h2>
          <img src="https://cdn-icons-png.flaticon.com/512/71/71753.png" alt="" className={styles.fotosIcono}/>
          <p>Get your car-soccer gaming on for free with Psyonix’s Rocket League.</p>
          </div>
          <div className={styles.divCarrito}>
            <p>$2000 ARS</p>
            <img src="https://media.istockphoto.com/id/517056560/es/vector/cesta-icono-vector-ilustraci%C3%B3n.jpg?s=612x612&w=0&k=20&c=hhUqGl79GRcaKDjajX6UT29fvU294_bk9LjnAflDS0A=" alt="" className={styles.carrito}/>
          </div>
        </div>
        <div className={styles.cards}>
          <img className={styles.fotos} src="https://cdn.cloudflare.steamstatic.com/steam/apps/380600/ss_b3f68ef52f78dc08238175afe4f9c7074ab8d3cd.600x338.jpg?t=1673859903" alt="" />
          <div className={styles.cardsAcomodo}>
          <h2>Fishing Planet</h2>
          <img src="https://cdn-icons-png.flaticon.com/512/71/71753.png" alt="" className={styles.fotosIcono}/>
          <p>realistic online first-person multiplayer fishing simulator!</p>
          </div>
          <div className={styles.divCarrito}>
            <p>$1700 ARS</p>
            <img src="https://media.istockphoto.com/id/517056560/es/vector/cesta-icono-vector-ilustraci%C3%B3n.jpg?s=612x612&w=0&k=20&c=hhUqGl79GRcaKDjajX6UT29fvU294_bk9LjnAflDS0A=" alt="" className={styles.carrito}/>
          </div>
        </div>
        <div className={styles.cards}>
          <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/1919590/header.jpg?t=1673625785" alt="" className={styles.fotos}/>
          <div className={styles.cardsAcomodo}>
          <h2>NBA 2K23</h2>
          <img src="https://cdn-icons-png.flaticon.com/512/71/71753.png" alt="" className={styles.fotosIcono}/>
          <p>NBA 2K23 is a simulation game of basketball matches</p>
          </div>
          <div className={styles.divCarrito}>
            <p>$6999 ARS</p>
            <img src="https://media.istockphoto.com/id/517056560/es/vector/cesta-icono-vector-ilustraci%C3%B3n.jpg?s=612x612&w=0&k=20&c=hhUqGl79GRcaKDjajX6UT29fvU294_bk9LjnAflDS0A=" alt="" className={styles.carrito}/>
          </div>
        </div>
        <div className={styles.cards}>
          <img src="https://www.freetogame.com/g/499/thumbnail.jpg" alt="" className={styles.fotos}/>
          <div className={styles.cardsAcomodo}>
          <h2>Slapshot: Rebound</h2>
          <img src="https://cdn-icons-png.flaticon.com/512/71/71753.png" alt="" className={styles.fotosIcono}/>
          <p>Do you like hockey?</p>
          </div>
          <div className={styles.divCarrito}>
            <p>$1150 ARS</p>
            <img src="https://media.istockphoto.com/id/517056560/es/vector/cesta-icono-vector-ilustraci%C3%B3n.jpg?s=612x612&w=0&k=20&c=hhUqGl79GRcaKDjajX6UT29fvU294_bk9LjnAflDS0A=" alt="" className={styles.carrito}/>
          </div>
        </div>
        <div className={styles.cards}>
          <img src="https://www.freetogame.com/g/536/thumbnail.jpg" alt="" className={styles.fotos} />
          <div className={styles.cardsAcomodo}>
          <h2>Omega Strikers</h2>
          <img src="https://cdn-icons-png.flaticon.com/512/71/71753.png" alt="" className={styles.fotosIcono}/>
          <p>A 3v3 socccer-style game with knockouts.</p>
          </div>
          <div className={styles.divCarrito}>
            <p>$1000 ARS</p>
            <img src="https://media.istockphoto.com/id/517056560/es/vector/cesta-icono-vector-ilustraci%C3%B3n.jpg?s=612x612&w=0&k=20&c=hhUqGl79GRcaKDjajX6UT29fvU294_bk9LjnAflDS0A=" alt="" className={styles.carrito}/>
          </div>
        </div>
      </section>
      </div>
  )
}
export default GamesCards