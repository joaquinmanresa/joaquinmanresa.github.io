import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import {SiJavascript} from 'react-icons/si'
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'
import {DiReact} from 'react-icons/di'
import {DiJava} from 'react-icons/di'
import {SiPostgresql} from 'react-icons/si'
import {SiMicrosoftsqlserver} from 'react-icons/si'
import {SiSpring} from 'react-icons/si'
import {DiNodejsSmall} from 'react-icons/di'
import {DiPython} from 'react-icons/di'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">

            <article className='experience__details'>
              <AiFillHtml5 className='experience__details-icon'/>
              <div>
              <h4>HTML</h4>              
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <DiCss3 className='experience__details-icon'html/>
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <SiJavascript className='experience__details-icon'html/>
              <div>
              <h4>Javascript</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <DiReact className='experience__details-icon'html/>
              <div>
              <h4>React</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <SiSpring className='experience__details-icon'html/>
              <div>
              <h4>Spring</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>

          </div>
        </div>

        {/* END OF FRONTEND */}

        <div className="experience__backend">
        <h3>Backend Development</h3>
        <div className="experience__content">

          <article className='experience__details'>
            <DiJava className='experience__details-icon'html/>
            <div>
            <h4>Java</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>

          <article className='experience__details'>
            <SiPostgresql className='experience__details-icon'html/>
            <div>
            <h4>PostgreSQL</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>

          <article className='experience__details'>
            <SiMicrosoftsqlserver className='experience__details-icon'html/>
            <div>
            <h4>SQLServer</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>

          <article className='experience__details'>
            <DiNodejsSmall className='experience__details-icon'html/>
            <div>
            <h4>Node JS</h4>
            <small className='text-light'>Beginner</small>
            </div>
          </article>

          <article className='experience__details'>
            <DiPython className='experience__details-icon'html/>
            <div>
            <h4>Python</h4>
            <small className='text-light'>Basic</small>
            </div>
          </article>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Experience