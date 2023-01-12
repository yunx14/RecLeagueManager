import { LeaguesData } from "../data/leaguesdata";
import { useParams } from "react-router-dom";
import League from "../components/League";

const LeaguePage = () => {
    const {_id} = useParams();
    
    const league = LeaguesData.filter((l) => {
        return l._id===_id
    });

    return (
        <League {...league[0]} />
    );
}

export default LeaguePage;