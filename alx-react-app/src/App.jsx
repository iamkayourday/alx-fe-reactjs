import WelcomeMessage from "./components/WelcomeMessage"
import Header from './components/Header';
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"
import UserProfile from "./components/UserProfile";



function App() {
    return(
        <>
           <WelcomeMessage />
           <Header />
           <UserProfile name="Abdulbasit" age="100" bio="Loves listening to music"/>
           <MainContent />
           <Footer />
        </>
    )
    
}

export default App
