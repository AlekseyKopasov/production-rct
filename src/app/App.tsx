import './styles/index.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { Link } from 'react-router-dom';
import { AppRouter } from './router';

const App = () => {
  const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Link to={'/'}>Main</Link>
      <Link to={'/about'}>About</Link>

      <button onClick={toggleTheme}>TOGGLE</button>

      <AppRouter /> 
    </div>
  )
}

export default App;
