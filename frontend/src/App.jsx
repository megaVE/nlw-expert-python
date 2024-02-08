import { useFetchCode } from './hooks/useFetchCode'

import CodeForm from './components/CodeForm'
import CodeOutput from './components/CodeOutput'
import ErrorMessage from './components/ErrorMessage';

function App() {
  const { response, isLoading, setCode, reset } = useFetchCode()

  return (
    <div className="container-fluid m-5">
      <h1>CodeGenerator.</h1>
      {!response && <CodeForm setRequestCode={setCode} isLoading={isLoading} />}
      {response?.data && <CodeOutput response={response} reset={reset} />}
      {response?.errors && <ErrorMessage error={response.errors[0]} />}
    </div>
  )
}

export default App
