import React, { useState } from 'react'
import './SectionHome.css'

const SectionHome =({ subTitle })=> {
  const [title, setTitle] = useState('Section Home title from state')

  // or you can call the props like this:
  // const { subTitle } = props

  const handleChangeHomeTitle = () => {
    setTitle('Section title has change because of click')
  }

  return (
    <section className='section-home'>
      <div>{title}</div>
      <div>{subTitle}</div>
      <button onClick={handleChangeHomeTitle}>Cange Home Title</button>
    </section>
  )
}

export default SectionHome