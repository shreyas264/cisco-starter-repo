import Banner from './Banner'
import Exhibit from './Exhibit';
import './App.css';

import PacketLatency from './PacketLatency';
import IPDisplay from './IPDisplay';

function App() {
  return (
    <div>
      <Banner title="Sextant"/>
      <div style={{padding: '1rem'}}>
      <Exhibit heading="IPv4 Address">
          <IPDisplay type="ipv4" />
        </Exhibit>
        <Exhibit heading="IPv6 Address">
          <IPDisplay type="ipv6" />
        </Exhibit>
        <Exhibit heading="Packet latency">
          <PacketLatency/>
        </Exhibit>
      </div>
    </div>
  );
}

export default App;
