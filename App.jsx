import personal_web from "./personal_web";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<personal_web />} />
            </Routes>
        </Router>
    );
};
export default App;