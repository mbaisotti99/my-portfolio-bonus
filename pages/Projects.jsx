import axios from "axios"
import { useEffect, useState } from "react"
import ProjCard from "../components/ProjCard"



const Projects = () => {

    const [projs, setProjs] = useState([])

    useEffect(() => {
        axios
            .get(`http://127.0.0.1:8000/api/projects`)
            .then((resp) => {
                setProjs(resp.data.data)
            })
    }, [])

    return (
        <>
            <h1 className="text-center mt-5">Projects</h1>
            <div className="row">
            {
                (projs.length > 0) && projs.map((curProj, i) => {
                    return (
                        <div className="col-6">
                            <ProjCard 
                            id = {curProj.id}
                            titolo = {curProj.titolo}
                            cliente = {curProj.cliente}
                            desc = { curProj.descrizione }
                            data = {curProj.data}
                            techs = { curProj.technologies}
                            devs = {curProj.developers}
                            />
                        </div>
                    )
                })
            }
            </div>
        </>
    )
}

export default Projects