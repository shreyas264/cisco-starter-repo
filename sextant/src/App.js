import Banner from './Banner'
import Exhibit from './Exhibit';
import './App.css';

function App() {
  return (
    <div>
      <Banner title="Sextant website"/>
      <div style={{padding: '1rem'}}>
        <Exhibit heading='first exhibit'>
          <p>this is first child content of exhibit</p>
        </Exhibit>
        <Exhibit heading="Second Exhibit">
          <ul>
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
          </ul>
        </Exhibit>
      </div>
    </div>
  );
}

export default App;
