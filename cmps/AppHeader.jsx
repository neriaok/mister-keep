
const { Link, NavLink } = ReactRouterDOM

export function AppHeader({onSetLogo , logo}) {


    return <header className="app-header">
        <Link to="/">
            <h3>{logo}</h3>
        </Link>
        <nav>
            <NavLink onClick = {() => onSetLogo('HOME')}  to="/">Home</NavLink>
            <NavLink onClick = {() => onSetLogo('ABOUT')} to="/about">About</NavLink>
            <NavLink onClick = {() => onSetLogo('MAIL')} to="/mail">Mail</NavLink>
            <NavLink onClick = {() => onSetLogo('MISTERKEEP')} to="/note">Note</NavLink>
        </nav>
    </header>
}
