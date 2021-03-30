import {useState, useEffect} from 'react';
import HeroCard from '../components/HeroCard'
import {heroData} from '../data/heroes';

const HeroesPage = () => {
    //useState sets up a state for the heroDATA to go through
    const [HeroesPage, setHeroes] = useState([]);
    const [alert, setAlert]=useState(false);
    
    useEffect(()=>{     //useEffect will set the heroes cards to this page
        setHeroes(heroData);
    }, [alert]);        //alert (2nd param) triggers useEffect

    const updateFeatured = (heroId) => {
        //first find hero from heroData by heroId
        let foundHero = heroData.find(hero=> hero.id === +heroId);
        // console.log(foundHero);

        // update foundHero.featured to be opposite of its current value
        foundHero.featured = !foundHero.featured; // it (becomes) not it

        setAlert(true);
        setTimeout(()=>{
            setAlert(false);
        }, 2000);

    };


    return (
        <div id="heroes">
            <div className="row text-center mt-3">
                <div className="row">
                    <div className="col">
                    <h2>See the Heroes!</h2> 
                    </div>
                </div>
            </div>
            <div className="row">
                {HeroesPage.map((hero)=>{
                    return (
                        <div className="col-sm-12 col-md-3">
                            <HeroCard hero={hero} updateFeatured={updateFeatured}/>
                        </div>
                    )
                })}
            </div>         
        </div>
    );
};

export default HeroesPage;

//Line 15[ deleted]- Link to dynamic path: 'to=' needs --  {` /path/ ${object.property}`} -- concatenated with a dynamic value