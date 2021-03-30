import { useEffect, useState } from 'react';
import HeroCard from '../components/HeroCard';
import { heroData } from '../data/heroes';
import '../App.css';

const DashboardPage = () => {
    const [heroes, setHeroes] = useState([]);
    const [alert, setAlert] = useState(false);
    // console.log(heroData);
  
    //useEffect hook to render and hold filtered data
    useEffect(() => { //renders upon page load
      let featured = heroData.filter(hero => hero.featured);
      // console.log(featured);
      setHeroes(featured);
    }, [alert]);  //second param defines conditions in which it can render again (Line 8)

    //function to set featured value to true or false
    const updateFeatured = (heroId) => {
        //first find hero from heroData by heroId
        let foundHero = heroData.find(hero => hero.id === +heroId);
        // console.log(foundHero); - to see if correct hero is found

        // update foundHero.featured to be opposite of its current value
        foundHero.featured = !foundHero.featured; // it (becomes) not it
        // console.log(foundHero); - to see if featured toggles 

        setAlert(true); //calling useState (line8) and setting to true
        setTimeout(()=>{ 
            setAlert(false); 
        }, 2000); // timeout will set setAlert back to false after 2 seconds

    };

    return (
        <div id='dashboard-page'>
          <div className='row text-center mt-3'>
            <div className='col'>
              <h2>Welcome to the tour of Heroes!</h2>
              <h4 className='text-secondary'>Featured Heroes</h4>
            </div>
          </div>
          <div className='row'>
            {heroes.map((hero, index) => {
              return (
                <div className='col-sm-12 col-md-3' key={hero.id}>
                  <HeroCard hero={hero} updateFeatured={updateFeatured} />
                </div>
              );
            })}
          </div>
        </div>
      );
    };
    

export default DashboardPage;