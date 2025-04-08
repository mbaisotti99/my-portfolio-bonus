import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const DevShow = () => {

    const { id } = useParams()
    const [dev, setDev] = useState({})

    useEffect(() => {
        axios
            .get(`${import.meta.env.VITE_API_URL}devs/${id}`)
            .then((resp) => {
                setDev(resp.data.data)
            })
    }, [])

    const { nome, soprannome, descrizione, technologies, projects, img } = dev

    return (
        (dev.nome) ?
            (
                <>
                    <div className="card text-center mt-5">
                        <div className="card-header">
                            <p className="card-title">
                                {nome}
                            </p>
                        </div>
                        <div className="card-img-cont">
                            <img src={`${import.meta.env.VITE_BACKEND_URL}storage/${img}`} alt="asdsdasda" className="card-img-top" width={"300px"} />
                        </div>
                        <div className="card-body">
                            <p className="card-text text-secondary">
                                {soprannome}
                            </p>

                            {
                                technologies ? technologies.map((curTech) => {
                                    return (
                                        <div className="badge ms-3 my-3" style={{ backgroundColor: curTech.colore }}>{curTech.nome}</div>)
                                }) : "TechLess"
                            }

                            <div className="card-text">
                                {descrizione}
                            </div>

                            <div className="card-text">
                                <p className="card-title">
                                    Progetti:
                                </p>
                                {
                                    projects ? projects.map(curProj => { return (<a className="mx-3" href={`/${curProj.id}`}>{curProj.titolo}</a>) }) : "Nessuno"
                                }
                            </div>
                        </div>
                    </div>
                    <div className="d-flex w-100 justify-content-center">
                        <a href="/devs" className="btn btn-success my-5">Torna alla lista Sviluppatori</a>
                    </div>
                </>
            )
            :
            (<div className="cent">
                <img src="/loading.gif" alt="Loading" className="loading" />
            </div>)

    )
}

export default DevShow