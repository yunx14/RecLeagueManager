const League = (props) => {
    let {
        _id, 
        name, 
        season,
        location
    } = props;

    return (
        <div id={_id} >
            <div className="league_profile">
                <span className="league_name" style={{marginRight: '5px'}}> 
                    {name}
                </span>
                <span className="league_season" style={{marginRight: '5px'}}>
                    {season}
                </span>
                <span className="league_location">
                    {location}
                </span>
            </div>
            {props?.teams?.length && <h3>Teams:</h3>}
            {props?.teams?.length &&  props.teams.map(team => {
                return (
                    <div className="team_name" key={team.id}>
                        {team.name}
                    </div>
                );
            })}
        </div>
    );
}

export default League;