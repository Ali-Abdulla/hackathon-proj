import {Label16} from "./labels";


const Header = () => {
    return (
        <header className="header-container" style={{height: '64px'}}>
            <a className="header-item">
                <img src="../logo.svg" alt="logo"/>
            </a>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <a className="header-item">
                    <Label16 text={"Individual Entrepreneur Budanov"}/>
                </a>
                <a className="header-item">
                    <img src="../face.svg" alt="face"/>
                </a>
            </div>
        </header>
    )
}

export default Header;
