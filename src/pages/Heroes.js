import {useState} from 'react';
import {heroData} from '../data/heroes';
import {Link} from 'react-router-dom'


const HeroesPage = () => {
    const [HeroesPage, setHeroes] = useState(heroData);

    return (
        <div id="heroes">
            <ul>
                {HeroesPage.map((hero, index)=>{
                    return (
                        <li key={hero.id}>
                            <Link to={`/heroes/${hero.id}`}>{hero.superhero}</Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default HeroesPage;

//Line 15- Link to dynamic path: 'to=' needs --  {` /path/ ${object.property}`} -- concatenated with a dynamic value