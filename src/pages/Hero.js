import {  heroData  } from "../data/heroes";
import {  useParams  } from "react-router-dom";
import { useEffect, useState } from "react";


const HeroPage = () => {
    let {  heroId  } = useParams(); // destructured
    const [hero, setHero]=useState({});
    // console.log('this is my Param Object from Hero page!', heroId);
    useEffect(() => {
        let foundHero = heroData.find(h => h.id === +heroId);  //+ converts string number into integer
        console.log(foundHero);
        setHero(foundHero);
    }, []); //we want to find hero based on id, and set that hero to component - returns all info tied to hero

    return (
        <div id="hero">
            <h2>This is where {hero.superhero} lives!</h2>
        </div>
    );
};

export default HeroPage;