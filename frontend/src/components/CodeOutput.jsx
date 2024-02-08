const CodeOutput = ({ response, reset }) => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <img src={response.path} alt="Imagem" className="col-4 img-fluid rounded"/>
      </div>
      <div className="row justify-content-center">
        <button className="btn btn-primary col-2" onClick={reset}>Generate another code</button>
      </div>      
    </div>
  )
}

export default CodeOutput