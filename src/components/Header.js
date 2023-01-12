import {
  AppBar,
  Toolbar,
} from "@mui/material";
import {Link} from 'react-router-dom';

export default function Header() {
    return (
       <AppBar position="static">
            <Toolbar>
                <Link to="/" >
                    <img src="softball.png" alt="logo" width={50}/>
                </Link>
                <Link to="/league">League</Link>
                <Link to="/filter">Filter Test</Link>
                <Link to="/counter">Counter</Link>
                <Link to="/accordian">Accordian</Link>
            </Toolbar>
       </AppBar>
    )
}
