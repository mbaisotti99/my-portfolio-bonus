

const Footer = () => {
    return (
        <footer>
            <img src={`${import.meta.env.VITE_BACKEND_URL}/wing.png`} class="sx" width="300" alt="wing sx" />
            <img src={`${import.meta.env.VITE_BACKEND_URL}/foot.png`} alt="Footer" width="200" class="mx-5 foot" />
            <img src={`${import.meta.env.VITE_BACKEND_URL}/wing.png`} class="dx" width="300" alt="wing dx" />
        </footer>
    )
}

export default Footer