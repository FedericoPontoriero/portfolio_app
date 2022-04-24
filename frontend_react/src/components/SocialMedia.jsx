import React from 'react'
import {  BsLinkedin } from 'react-icons/bs'
import { FiGithub } from "react-icons/fi";

function SocialMedia() {
  return (
    <div className='app__social'>
        <div>
            <FiGithub />
        </div>
        <div>
            <BsLinkedin />
        </div>
    </div>
  )
}

export default SocialMedia