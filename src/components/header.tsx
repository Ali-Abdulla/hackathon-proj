const Header = () => {
    return (
        <header className="header-container">
            <a className="header-item">Hackathon Proj</a>
            <nav>
                <a className="header-item" href="#">My Offers</a>
                <a className="header-item" href="create-offer">Create Offer</a>
                <a className="header-item" href="offer">Offer</a>
                <a className="header-item" href="create-service">Create Service</a>
            </nav>
        </header>
    )
}

export default Header;
