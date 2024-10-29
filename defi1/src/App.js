import logo from './logo.svg';
import './App.css';


function Header() {
    return (
        <div className="App-header">
            <a href={'/App.js'}><img src={logo} className="App-logo" alt="logo" /></a>
            <nav className="App-nav">
                <ul>
                    <a href={'../public/index.html'} ><li className="App-nav-item">Home</li></a>
                    <a href={'./App.test.js'}><li className="App-nav-item">Nuit de l'Info</li></a>
                    <a href={'./Contact.js'}><li className="App-nav-item">Contact</li></a>
                </ul>
            </nav>
        </div>
    )
}

function App() {
    return (
        <div className="App">
            {/*<header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
            </header>*/}
            <Header />
        </div>
    );
}

export default App;
