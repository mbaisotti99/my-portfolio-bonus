

const Header = () => {
    return (
        <>
            <header>
                <a href="/">
                    <img src={`${import.meta.env.VITE_BACKEND_URL}/head.png`} alt="MyPortfolio" width="500"></img>
                </a>
            </header>
        </>
    )
}

export default Header