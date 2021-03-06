import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({ title }) => {

    function onClick(){
        console.log('Click')
    }

  return (
    <div>
      <header className='header'>
          <h1>{title}</h1>
          <Button color='green' text='Add' onClick={onClick}/>
      </header>
    </div>
  )
}

Header.defaultProps = {
    title:  'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string
}



export default Header
