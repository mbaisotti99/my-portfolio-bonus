const ProjCard = ({ id, titolo, cliente, desc, data, techs, devs }) => {

    let shortText = desc.substring(0, 200) + "..."

    const expand = (n) => {
        let descriz = document.getElementById(`shortDesc${n}`)
        let longDesc = document.getElementById(`fullDesc${n}`)
        let readLess = document.createElement("button")
        let readMore = document.getElementById("more")
        let cont = document.getElementById(`descrizione${n}`)
        readLess.classList.add("read")  
        readLess.id = `readL${n}`
        readLess.innerHTML = "Leggi meno"
        readLess.addEventListener("click", () => collapse(n))
        descriz.classList.add("d-none")
        longDesc.classList.remove("d-none")
        readMore.classList.add("d-none")
        cont.appendChild(readLess)

    }

    const collapse = (n) => {
        let descriz = document.getElementById(`shortDesc${n}`)
        let longDesc = document.getElementById(`fullDesc${n}`)
        let readLess = document.getElementById(`readL${n}`)
        let readMore = document.getElementById("more")

        readLess.remove()
        readMore.classList.remove("d-none")
        descriz.classList.remove("d-none")
        longDesc.classList.add("d-none")
    }

    return (
        <>
            <div className="card text-center my-3">
                <div className="card-header">
                    {titolo}
                </div>
                <div class="card-body">
                    <h5 className="card-title text-secondary">{cliente ? cliente : "Progetto personale"}</h5>
                    {techs.map((curTech, i) => {
                        return (
                            <div className="badge ms-3 my-3" style={{ backgroundColor: curTech.colore }}>{curTech.nome}</div>
                        )
                    })}
                    <p className="card-text" id={`descrizione${id}`}>
                        <p id={`shortDesc${id}`}>
                            {shortText}
                        </p>
                        <p className="d-none" id={`fullDesc${id}`}>
                            {desc}
                        </p>
                        {desc.length > 200 ? <button type="button" 
                        onClick={() => expand(id)} className="read" id="more">Leggi di più  </button> : ""}
                    </p>
                </div>
                <div className="devs">
                    <p className="card-text mb-3">
                        Sviluppatori: <br /> 
                        <b>
                            {devs.map(dev => dev.nome).join(" - ")}
                        </b>
                    </p>
                </div>
                <div className="card-footer text-body-secondary">
                    {data}
                </div>
            </div >
        </>
    )
}

export default ProjCard