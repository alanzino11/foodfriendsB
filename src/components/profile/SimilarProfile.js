import React, {useState} from 'react';
import { Flex } from "@chakra-ui/core";
import { FaChevronRight, FaUserPlus, FaUserMinus } from 'react-icons/fa';

import image from '../../images/imageSquare.png';
import Pill from '../Pill'

const SimilarProfile = ({ profile }) => {
  const [follows, setFollows] = useState(false);

  return (
    <Flex align="center" className="similar-profile">
        <img src={image} alt="" className="small-image"/>
        <span className="similar-profile-item">{profile.name}</span>
        <span className="similar-profile-item"><Pill data={profile.diet}/></span>
        <span className="similar-profile-icon"><button onClick={() => setFollows(!follows)}>{follows ? <FaUserMinus size={30}/> : <FaUserPlus size={30}/>}</button></span>
        <span className="similar-profile-icon"><FaChevronRight size={30}/></span>
    </Flex>
  )
}

export default SimilarProfile;