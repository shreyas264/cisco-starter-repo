import Banner from './Banner'
import Exhibit from './Exhibit';
import './App.css';
import IPDisplay from './IPDisplay';

function App() {
  return (
    <div>
      <Banner title="Sextant website"/>
      <div style={{padding: '1rem'}}>
        <Exhibit heading="IPv4 Address">
          <IPDisplay type="ipv4"/>
        </Exhibit>
        <Exhibit heading="IPv6 Address">
          <IPDisplay type="ipv6"/>
        </Exhibit>
      </div>
    </div>
  );
}

export default App;
