import { useState } from "react"

const CodeForm = ({ setRequestCode, isLoading }) => {
  const [code, setCode] = useState("")
  
  const handleSubmit = async (e) => {
    e.preventDefault()

    if(!code) return

    setRequestCode(code)

    setCode("")
  }

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <div className="row col-4">
          <div className="mb-4">
            <label htmlFor="code" className="form-label">Code:</label>
            <input
              type="text"
              name="code"
              id="code"
              placeholder="Enter a text..."
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="form-control"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="btn btn-primary"
            >Generate</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default CodeForm