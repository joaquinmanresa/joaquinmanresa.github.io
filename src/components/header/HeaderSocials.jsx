import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>

        <a href='htpps://linkedin.com' target='_blank' rel="noreferrer"><BsLinkedin/></a>
        <a href='htpps://github.com' target='_blank' rel="noreferrer"><BsGithub/></a>
        <a href='htpps://instagram.com' target='_blank' rel="noreferrer"><BsInstagram/></a>

    </div>
  )
}

export default HeaderSocials