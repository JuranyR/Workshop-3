import React from "react";
import deepEarth from "../assets/image-deep-earth.jpg";
import nightArcade from "../assets/image-night-arcade.jpg";
import soccerTeam from "../assets/image-soccer-team.jpg"
import theGrid from "../assets/image-grid.jpg";
import fromUp from "../assets/image-from-above.jpg";
import pocketBorialis from "../assets/image-pocket-borealis.jpg";
import curiosity from "../assets/image-curiosity.jpg";
import fisheye from "../assets/image-fisheye.jpg";



const Card = () => {

    const creations = [
        {
            name: 'DEEP EARTH',
            scr_img: deepEarth
        },
        {
            name: 'NIGHT ARCADE',
            scr_img: nightArcade
        },
        {
            name: 'SOCCER TEAM VR',
            scr_img: soccerTeam
        },
        {
            name: 'THE GRID',
            scr_img: theGrid
        },
        {
            name: 'FROM UP ABOVE VR',
            scr_img: fromUp
        },
        {
            name: 'POCKET BOREALIS',
            scr_img: pocketBorialis
        },
        {
            name: 'THE CURIOSITY',
            scr_img: curiosity
        },
        {
            name: 'MAKE IT FISHEYE',
            scr_img: fisheye
        }
    ]

    return (
        <section className="imgsContainer">
            <div className="divOC">
                <h3>OUR CREATIONS</h3>
                <button className="botonuno">SEE ALL</button>
            </div>
            <div className="cardsContainer">
                {creations.map( item => (
                    <div className="card"  style={{ backgroundImage: `url(${item.scr_img})` }}>
                        <p className="pp">{item.name}</p>
                    </div>
                ))}
            </div>
            <button className="botondos">SEE ALL</button>
        </section>
    )
}

export default Card;