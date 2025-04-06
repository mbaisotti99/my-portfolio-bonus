import axios from "axios"
import React, { useEffect, useState } from "react"
import DevCard from "../components/DevCard"

const Devs = () => {

    const [devs, setDevs] = useState([])

    useEffect(() => {
        axios
            .get(`${import.meta.env.VITE_API_URL}devs`)
            .then((resp) => {
                setDevs(resp.data.data)
            })
    }, [])

    return (
        <>
            <h1 className="text-center">I nostri Sviluppatori</h1>
            <div className="row">
                {(devs.length > 0) && devs.map((dev) => {
                    return (
                        <div className="col-6">
                            <DevCard
                                dev={dev}
                            />
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Devs