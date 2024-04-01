import React, {useState} from 'react'
import ParentContainer from './component/ParentContainer'
import Display from './component/Display'
import Button from './component/Button'

export default function App() {
  const [data, setData] = useState('');
  function handleClick(val){
    if(val==='='){
      setData(eval(data));
    }
    else if(val==='C'){
      setData("");
    }
    else if(val==='x'){
      let res=data+'';
      setData(res.slice(0,-1));
    }
    else{
      setData(data+val);
    }
  }
  return (
    <div>
      <ParentContainer>
        <Display data={data}/>
        <Button btnClick={handleClick}/>
      </ParentContainer>
    </div>
  )
}
