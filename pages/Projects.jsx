import axios from "axios"
import { useEffect, useState } from "react"



const Projects = () => {

    const [projs, setProjs] = useState([])

    useEffect(() => {
        axios
            .get(`http://127.0.0.1:8000/api/projects`)
            .then((resp) => {
                
                
                console.log(resp);
                
                
                setProjs(resp.data.data)
            })
            
    }, [])

    return (
        <>
            <h1 className="text-center mt-5">Projects</h1>
            {
                (projs.length > 0) && projs.map((curProj, i) => {
                    return (
                        <h1>{curProj.titolo}</h1>
                    )
                })
            }
        </>
    )
}

export default Projects