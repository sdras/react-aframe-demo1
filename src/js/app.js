import 'aframe';
import 'babel-polyfill';
import {Animation, Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';

import Camera from './components/Camera';
import Cursor from './components/Cursor';
import Sky from './components/Sky';

class App extends React.Component {
  render () {
    const items = [],
          amt1 = 5,
          amt2 = 7;
    for (let i = 0; i < 30; i++) {
      let rando1 = Math.floor(Math.random() * (amt1 - -amt1 + 1)) + -amt1,
          rando2 = Math.floor(Math.random() * (amt2 - 0 + 1)) + 0,
          randoPos = `${rando1} 0 -5`,
          addRot = 50 * i,
          updateRot = `0 ${addRot} ${addRot}`,
          addColor1 = parseInt(rando2 * i),
          addColor2 = 255 - parseInt(7 * i),
          updateColor = `rgb(200, ${addColor1}, ${addColor2})`;
      items.push(<Entity geometry="primitive: box; depth: 1.5; height: 1.5; width: 6" 
                material={{color: updateColor}}
                position={randoPos}
                pivot="0 0.5 0"
                key={i}>
          <Animation attribute="rotation" dur="12000" to={updateRot}/>
          <Animation attribute="scale" from="0 0 0" to="1 1 1" dur="12000"
                fill="both" easing="ease-out"/>
        </Entity>);
    }
    return (
      <Scene>
        <Camera><Cursor/></Camera>

        <Sky/>

        <Entity light={{type: 'ambient', color: '#888'}}/>
        <Entity light={{type: 'directional', intensity: 0.5}} position={[-1, 1, 0]}/>
        <Entity light={{type: 'directional', intensity: 1}} position={[1, 1, 0]}/>

       {items}

      </Scene>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('.scene-container'));
