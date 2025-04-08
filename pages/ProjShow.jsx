import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const ProjShow = () => {
    const { id } = useParams()

    const [proj, setProj] = useState({})

    useEffect(() => {
        axios
            .get(`${import.meta.env.VITE_API_URL}projects/${id}`)
            .then((resp) => {
                setProj(resp.data.data)
            })

        }, [])
        
        
        
        const { titolo, cliente, descrizione, technologies, developers } = proj

    return (
        <>
            {(proj.titolo) ?
                <div className="card text-center my-5">
                    <div className="card-header">
                        <b>
                            {titolo}
                        </b>
                    </div>
                    <div className="card-body">
                        <p className="card-title">
                            Cliente:
                        </p>
                        <p className="card-text">
                            {cliente}
                        </p>
                        {technologies && technologies.map((curTech, i) => {
                            return (
                                <div className="badge ms-3 my-3" style={{ backgroundColor: curTech.colore }}>{curTech.nome}</div>
                            )
                        })}

                        <p className="card-text">
                            {descrizione}
                        </p>
                        <p className="card-title">
                            Sviluppatori:
                        </p>
                        <p className="card-text">
                            {
                                developers ? developers.map(curDev => { return (<a className="mx-3" href={`/devs/${curDev.id}`}>{curDev.nome}</a>) }) : "Nessuno"
                            }
                        </p>
                    </div>
                </div>
                :

                <div className="cent">
                    <img src="/loading.gif" alt="Loading" className="loading" />
                </div>
            }

            <div className="d-flex justify-content-center w-100">
            <a href="/" className="btn btn-success my-5">Torna ai progetti</a>
            </div>
            </>
            )

}

            export default ProjShow
