var React = require("react")
var PropTypes = React.PropTypes

function puke(obj) {
  return <pre>{JSON.stringify(obj, null, "")}</pre>
}

function Results(props) {
  return (
    <div>Results: {puke(props)}</div>
  )
}

Results.PropTypes = {
  isLoading: PropTypes.bool.isRequired,
  scores: PropTypes.array.isRequired,
  playersInfo: PropTypes.array.isRequired
}

module.exports = Results