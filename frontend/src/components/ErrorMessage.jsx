const ErrorMessage = ({ error }) => {
  return (
    <p>{error.title} error detected. Please try again later.</p>
  )
}

export default ErrorMessage