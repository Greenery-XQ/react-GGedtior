import React, { Component } from 'react';
import GGEditor, { Flow } from 'gg-editor';

 export default class Index extends Component {
  


  render() {
  const data = {
  nodes: [{
    type: 'node',
    size: '70*70',
    shape: 'flow-circle',
    color: '#FA8C16',
    label: 'start',
    x: 55,
    y: 55,
    id: 'ea1184e8',
    index: 0,
  },{
    type: 'node',
    size: '70*70',
    shape: 'flow-circle',
    color: '#FA8C16',
    label: 'end',
    x: 55,
    y: 255,
    id: '481fbb1a',
    index: 2,
  }],
  edges: [{
    source: 'ea1184e8',
    sourceAnchor: 2,
    target: '481fbb1a',
    targetAnchor: 0,
    id: '7989ac70',
    index: 1,
  }],
};
    return(<div>
 <GGEditor>
  <Flow style={{ width: 500, height: 500 }} data={data} />
</GGEditor>
    </div>)
     
  }
}



