const { NavLink } = ReactRouterDOM

export function NavBar(){
    return(
        <nav>
            <section className="logo">
                <img src="../assets/img/logo100.svg" alt="logo image"/>
            </section>
            <section className="nav-links">
            <NavLink exact to='/'>Home</NavLink>
           <NavLink exact to='/about'>Home</NavLink>
            </section>
        </nav>
    )
}