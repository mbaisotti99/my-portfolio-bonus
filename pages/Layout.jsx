import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"

const Layout = () => {
    return (
        <>
            <Header />
            <main>
                <div className="container cent">
                    <Outlet/>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Layout


