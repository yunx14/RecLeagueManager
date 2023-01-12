const Player = (props) => {
    const {
        id,
        name,
        age,
        height,
        image
    } = props;

    return (
        <div id={id}>
            <div className="player_profile">
            <span className="player_name" style={{marginRight: '5px'}}> 
                    {name}
                </span>
                <span className="player_age" style={{marginRight: '5px'}}>
                    {age}
                </span>
                <span className="player_height">
                    {height}
                </span>
            </div>
            <div className="player_image">
                <img src={image} alt={name} />
            </div>
        </div>
    );
}

export default Player;