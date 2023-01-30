import propTypes from 'prop-types'
import Button from './Button'
const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button 
      color= {showAdd ? 'red':'green'} 
      text= {showAdd ? 'close' : 'Add'} 
      onClick={onAdd} />
    </header>
  )
}

Header.defaultProps = {
  title: 'Tasks Tracker',
}

Header.propTypes = {
   title: propTypes.string.isRequired,
}

// CSS in JS

// const headingStyle = {
//     color: 'red', 
//     backgroundColor: 'black'

// }
export default Header
