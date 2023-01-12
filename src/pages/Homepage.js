import { LeaguesData } from "../data/leaguesdata";
import { Link } from 'react-router-dom';
import League from "../components/League";

const HomePage = () => {
    return (
        <>
            {LeaguesData.map(league => {
                let {name, location, season, _id, isActive} = league;
                if(isActive) {
                return (
                    <Link to={'league/'+_id} key={_id}>
                    <League _id={_id} name={name} season={season} location={location}  />
                    </Link>
                )
                } return null;
            })}
        </>
    ) 
}

export default HomePage;