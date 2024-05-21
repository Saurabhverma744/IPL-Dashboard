// Write your code here
// Write your code here
import {Component} from 'react'
import LatestMatch from '../LatestMatch'
import './index.css'

class TeamMatches extends Component {
  state = {getTeam: {}}

  componentDidMount() {
    this.getParticularTeam()
  }

  getParticularTeam = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const newId = id.slice(1)
    console.log(newId)
    const option = {
      method: 'GET',
    }

    const url = `https://apis.ccbp.in/ipl/${newId}`
    const response = await fetch(url, option)
    const data = await response.json()
    const newData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: {
        umpires: data.latest_match_details.umpires,
        competingTeam: data.latest_match_details.competing_team,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        date: data.latest_match_details.date,
        firstInnings: data.latest_match_details.first_innings,
        id: data.latest_match_details.id,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        matchStatus: data.latest_match_details.match_status,
        result: data.latest_match_details.result,
        secondInnings: data.latest_match_details.second_innings,
        venue: data.latest_match_details.venue,
      },
      recentMatches: data.recent_matches.map(eachMatch => ({
        umpires: eachMatch.umpires,
        competingTeam: eachMatch.competing_team,
        competingTeamLogo: eachMatch.competing_team_logo,
        date: eachMatch.date,
        firstInnings: eachMatch.first_innings,
        id: eachMatch.id,
        manOfTheMatch: eachMatch.man_of_the_match,
        matchStatus: eachMatch.match_status,
        result: eachMatch.result,
        secondInnings: eachMatch.second_innings,
        venue: eachMatch.venue,
      })),
    }
    console.log(newData)

    this.setState({
      getTeam: newData,
    })
  }

  render() {
    const {getTeam} = this.state
    const {latestMatchDetails, teamBannerUrl} = getTeam

    return (
      <div className="each-team-container">
        <img src={teamBannerUrl} alt="banner" className="banner" />
        <p>Latest Matches</p>
        <div>
          <LatestMatch match={latestMatchDetails} key={latestMatchDetails.id} />
        </div>
      </div>
    )
  }
}

export default TeamMatches
