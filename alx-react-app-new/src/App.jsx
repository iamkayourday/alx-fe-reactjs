import WelcomeMessage from "./components/WelcomeMessage"
import Header from './components/Header';
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"
import UserProfile from "./components/UserProfile";
import Counter from "./components/Counter";



function App() {
    return(
        <>
           <WelcomeMessage />
           <Counter />
           <Header />
           <UserProfile name="Abdulbasit" age="100" bio="Loves listening to music"/>
           <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
           <MainContent />
           <Footer />
        </>
    )
    
}

export default App
