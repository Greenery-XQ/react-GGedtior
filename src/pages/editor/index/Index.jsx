import React, { Component } from 'react';
import GGEditor, { Flow,Command, Toolbar, ContextMenu  } from 'gg-editor';
import { withPropsAPI } from 'gg-editor';
 export default class Index extends Component {




	constructor(props){ //���캯��
	super(props);
	this.state = {
	datasource : '',
	isloading:false,
	string:''

	}
	}

	

	 componentWillMount(){
	 console.log('hello world componentWillMount1');
	     this.setState({
		 
		  isloading:true
	      })
	   /* ��ѯ���ݵĸ�ʽ */
	    let filter={
	       object:{
		 object:{
	 
		 }
	       }
	    }
	    var getInformation ={
	      method:"POST",
	      headers:{
	      "Content-Type":"application/json"
	      },
	      /* json��ʽת�� */
	      body:JSON.stringify(filter)
	      }
	      //ע�⣺mobile-gwjh/dispatch-publish-list�ķ�������Ӧ�ں�̨Controller���е�RequestMapping
	      const url = 'http://10.0.0.190:8080/bgnjdtoa/mobile-gwjh/dispatch-publish-list.do?userId=song_zy';
	      fetch(url,getInformation)
	      .then(response => response.json())
	      .then(json =>{
	      console.log('hello world componentWillMount2');
		// ���ص���������
		
		this.setState({
		  datasource:json.fwList,
		  isloading:false
		  

		})

		
	      })

	}




handleClick = () => {
        /* ��ѯ���ݵĸ�ʽ */
	    let filter={
	       object:{
		 object:{
	 
		 }
	       }
	    }
	    var getInformation ={
	      method:"POST",
	      headers:{
	      "Content-Type":"application/json"
	      },
	      /* json��ʽת�� */
	      body:JSON.stringify(filter)
	      }
	      //ע�⣺mobile-gwjh/dispatch-publish-list�ķ�������Ӧ�ں�̨Controller���е�RequestMapping
	      const url = 'http://10.0.0.190:8080/bgnjdtoa/mobile-gwjh/dispatch-publish-list.do?userId=song_zy';
	      fetch(url,getInformation)
	      .then(response => response.json())
	      .then(json =>{
		// ���ص���������
		
		this.setState({
		  datasource:json.fwList,
		  isloading:false
		})
		console.log('hello world componentWillMount');
	      })
    }
    


   render() {
    console.log(this.state.datasource);
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
   let data1=this.state.datasource

	
	 return(
	    <div>
	   
	     
		 <GGEditor>
			<Flow style={{ width: 400, height: 400 }}  data={data1} />
	  
		</GGEditor>
	    </div>
	

   
	)
     
  }

 
}



