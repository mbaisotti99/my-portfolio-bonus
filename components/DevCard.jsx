const DevCard = ({ dev }) => {

    const {id, nome, soprannome, technologies, descrizione, projects, img} = dev
    return (
        <div className="card text-center my-3">
            <div className="card-header">
                {nome}
            </div>
            <img src={`${import.meta.env.VITE_BACKEND_URL}storage/${img}`} alt="asdsdasda" className="card-img-top" />
            <div class="card-body">
                <h5 className="card-title text-secondary">{soprannome}</h5>
                {technologies.map((curTech, i) => {
                    return (
                        <div className="badge ms-3 my-3" style={{ backgroundColor: curTech.colore }}>{curTech.nome}</div>
                    )
                })}
                <p className="card-text">
                    <p >
                        {descrizione}
                    </p>
                </p>
                <p className="card-title">
                    Progetti:
                </p>
                <p className="card-text">
                        {
                        (projects.length > 0) ? (projects.map(curProj => curProj.titolo).join(" - ") ): "Nessuno"
                    }
                </p>
                <a href={`/devs/${id}`} className="btn btn-primary">Dettagli</a>
            </div>

        </div >
    )

}


export default DevCard