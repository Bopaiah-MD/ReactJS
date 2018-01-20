import React from 'react';
import { Manager, Target, Popper, Arrow } from 'react-popper'

const PopperExample = () => (
  <Manager>
<div  style = {{marginTop: '71px'}}>

 <Target style={{ width: 120, height: 120, background: '#b4da55' , marginLeft:'77px'  }}>
      Target Box
    </Target>

    </div>
   
    <Popper placement="auto" className="popper">
      Left Content
      <Arrow className="popper__arrow"/>
    </Popper>
   
  </Manager>
)

export default PopperExample;