// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {team} = props
  const {teamImageUrl, name, id} = team

  return (
    <Link to={`/team-matches/:${id}`} className="link">
      <li className="team-container">
        <img src={teamImageUrl} alt={id} className="team-image" />
        <h1 className="team-heading">{name}</h1>
      </li>
    </Link>
  )
}
export default TeamCard
