import HeroCard from '../components/HeroCard';

const DashboardPage = () => {
    return (
        <div id="DashboardPage">
            <div className="row text-center mt-3">
                <div className='col'>
                    <h2>Welcome to The Tour of Heroes!</h2>
                    <h4 className="text-secondary">Featured Heroes</h4>
                </div>
            </div>
            <HeroCard   />
        </div>
    );
};

export default DashboardPage;