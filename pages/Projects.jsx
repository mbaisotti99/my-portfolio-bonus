import axios from "axios"
import { useEffect, useState } from "react"
import ProjCard from "../components/ProjCard"



const Projects = () => {

    const [projs, setProjs] = useState([])
    const [curPage, setCurPage] = useState(0)
    
    let paginatedArr = []
    useEffect(() => {
        axios
        .get(`http://127.0.0.1:8000/api/projects`)
        .then((resp) => {
            setProjs(resp.data.data)
            
            if (projs.length > 10){
                for (let i = 0; i < Math.floor(projs.length / 10); i++)
                    paginatedArr.push(
                        projs.slice(i, i + 9)
                    )
                }
            })
    }, [])

    return (
        <>
            <h1 className="text-center mt-5">Projects</h1>
            <div className="row">
            {
                (projs.length) ? projs.map((curProj, i) => {
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
                :
                <div className="cent">
                <img src="/loading.gif" alt="Loading" className="loading" />
            </div>
            }
            </div>
        </>
    )
}

export default Projects