// Write your code here
import {Component} from 'react'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {iplTeams: []}

  componentDidMount() {
    this.renderIplTeams()
  }

  renderIplTeams = async () => {
    const option = {
      method: 'GET',
    }
    const response = await fetch('https://apis.ccbp.in/ipl', option)
    const data = await response.json()
    const newTeams = data.teams.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
    }))

    this.setState({
      iplTeams: newTeams,
    })
  }

  render() {
    const {iplTeams} = this.state

    return (
      <div className="container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="ipl-heading">IPL Dashboard</h1>
        </div>
        <ul className="ul-teams">
          {iplTeams.map(team => (
            <TeamCard team={team} key={team.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Home
