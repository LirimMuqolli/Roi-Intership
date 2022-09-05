import "./App.css"
import Header from "./components/common/header/Header"
import { BrowserRouter as Router,  Route ,Switch } from "react-router-dom"
import About from "./components/about/About"
import Team from "./components/team/Team"
import Pricing from "./components/pricing/Pricing"
import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Home"
import CourseHome from "./components/allcourses/CourseHome"
import Biography from "./components/biography/biography"
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/courses' component={CourseHome} />
          <Route exact path='/team' component={Team} />
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/journal' component={Blog} />
          <Route exact path='/biography' component={Biography} />
          <Route exact path='/contact' component={Contact} />
          </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
