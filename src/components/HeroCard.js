import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import '../App.css'
import {heroData} from '../data/heroes';
import {TiStar, TiStarOutline} from 'react-icons/ti';

const HeroCard = () => {
    const [heroes, setHeroes] = useState([]);
    // console.log(heroData);
    useEffect( () => {
        let featured = heroData.filter(hero => hero.featured);
        // console.log(featured);
        setHeroes(featured);
    }, []);
    
    return(
        <div className="row">
            {heroes.map((hero, index)=>{
                return (
                    <div className="col-sm-12 col-md-3" key={hero.id}>
                        <div className="card mb-3">
                            <div className="card-header text-center">
                                {hero.publisher}
                            </div>
                            <div 
                                className="th-card-bg-img" 
                                style={{backgroundImage :`url(${hero.image_url})`}}>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">{hero.superhero}</h4>
                                <h6 className="text-secondary">"{hero.alter_ego}"</h6>
                                <div className="mt-2">
                                    <strong>First appearance: </strong> {hero.first_appearance}
                                </div>
                                <div className="mt-2">
                                    <strong>Characters: </strong>
                                    {hero.characters.map((character, i)=>{
                                        return(
                                            <small key={i}>
                                                {character} 
                                                {i === hero.characters.length -1 ? '': ', ' } 
                                            </small> // conditional formatting
                                        );
                                    })}
                                </div>
                                <div className="my-2 d-flex justify-content-between">
                                    <Link to={`/heroes/${hero.id}`} className="card-link">
                                        View Details
                                    </Link>
                                    <a className="card-link" href="">
                                        {hero.featured ? <TiStar /> : <TiStarOutline />}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default HeroCard;