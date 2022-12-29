import Nav from "../nav/Nav"


const Header:React.FC = () => {

    return (
        <header className="header">
            <Nav />
            <h3 className="header-title">Spellbook</h3>
        </header>
    )
}

export default Header;