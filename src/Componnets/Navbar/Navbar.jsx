function Navbar() {
    let navtext = [
        {id:2 , subject:"Home"},
        {id:2 , subject:"Explore"},
        {id:2 , subject:"About"},
        {id:2 , subject:"Contact"}
    ]
    const navHeader = navtext.map((navtext) => {
        return ( <li>{navtext.subject}</li> )
    })
    return (
        <div className='nav'>
            <div className="nav-logo">EV-olution</div>
            <ul className="nav-menu">
                {navHeader}
            </ul>
        </div>
    );
}

export default Navbar;