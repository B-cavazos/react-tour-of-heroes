import {useState, useEffect} from 'react';
import HeroCard from '../components/HeroCard'
import {heroData} from '../data/heroes';

const HeroesPage = () => {
    //useState sets up a state for the heroDATA to go through
    const [heroes, setHeroes] = useState([]);
    const [alert, setAlert]=useState(false);
    const [searchTerm, setSeatchTerm] = useState(''); 
    
    useEffect(()=>{     
        const foundHeroes = heroData.filter(hd => { //.filter() dataset when search term matches dataset.name
            return (
                hd.superhero.toLowerCase().includes(searchTerm.toLowerCase()) + //includes() returns truthy or falsey - casing will matter
                hd.alter_ego.toLowerCase().includes(searchTerm.toLowerCase()) +
                hd.publisher.toLowerCase().includes(searchTerm.toLowerCase()) //multiple properties can be checked
                );
        });    
        // console.log("These are my results", SearchResults);
        searchTerm === '' ? setHeroes(heroData) : setHeroes(foundHeroes); //conditional to set search result
    }, [alert, searchTerm]);        //alert (2nd param) triggers useEffect

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

    const handleChange = event =>{
        // console.log(event.target.value);
        setSeatchTerm(event.target.value);
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
            {/* form */}
            <div className="row">
                <div className="col">
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control"
                            id="hero-search" 
                            value={searchTerm} 
                            onChange={handleChange} 
                            placeholder="Search for a superhero" />
                    </div>
                </div>
            </div>
            {/* end form */}
            <div className="row">
                {heroes.map((hero)=>{
                    return (
                        <div className="col-sm-12 col-md-3" key={hero.id}>
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