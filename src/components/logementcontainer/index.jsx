import { useParams } from 'react-router-dom'
import Logement from "../logement";

function ProfileContainer() {
  const { id } = useParams()
  return <Logement id={id} />
}

export default ProfileContainer
