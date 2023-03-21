import {Header} from "./components/Header";
import Main from "./components/Main";
import {Footer} from "./components/Footer";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {About} from "./components/pages/About";
import {Contact} from "./components/pages/Contact";
import {NotFound} from "./components/pages/NotFound";
import {CategoryMealList} from "./components/CategoryMealList";
import {Recipe} from "./components/Recipe";

function App() {
    return <>
        <Router>
            <Header/>

            <Routes>
                <Route exact path='/' element={<Main/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/contacts' element={<Contact/>}/>
                <Route path='/category/:name' element={<CategoryMealList/>}/>
                <Route path='/recipe/:id' element={<Recipe/>} />
                <Route path='*' element={<NotFound/>}/>
            </Routes>
            <Footer/>
        </Router>
    </>
}

export default App;
