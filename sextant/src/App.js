import Banner from './Banner'
import Exhibit from './Exhibit';
import './App.css';
import IPDisplay from './IPDisplay';
import PacketLatency from './PacketLatency';

function App() {
  return (
    <div>
      <Banner title="Network Latency Monitor"/>
      <div style={{padding: '1rem'}}>
        <Exhibit heading="Packet latency">
          <PacketLatency/>
        </Exhibit>
      </div>
    </div>
  );
}

export default App;
