import {Component} from 'react'
import LanguageContext from './context/LanguageContext'
import Header from './components/Header'
import LandingSection from './components/LandingSection'
import FeaturesSection from './components/FeaturesSection'

class App extends Component {
<<<<<<< HEAD
  state = {activeLanguage: 'TE'}
=======
  state = {activeLanguage: 'EN'}
>>>>>>> 4b3b9f2bc1267bad98a72eb82aaa425cf4a644ac

  changeLanguage = activeLanguage => {
    this.setState({activeLanguage})
  }

  render() {
    const {activeLanguage} = this.state
    return (
      <LanguageContext.Provider
        value={{activeLanguage, changeLanguage: this.changeLanguage}}
      >
        <Header />
        <LandingSection />
        <FeaturesSection />
      </LanguageContext.Provider>
    )
  }
}

export default App
