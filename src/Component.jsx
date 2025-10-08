import React, { useState } from 'react'

function Component() { 

    const [imagePath, SetImagePath] = useState(null);

    const handleInput = event => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          SetImagePath(reader.result);
        }
        // const path = URL.createObjectURL(file);
        // SetImagePath(path);
    }

  return (
    <div>
      <input type='file' onChange={(event) => handleInput(event)}/>
      <div>
        { imagePath ? <img src={imagePath}/>:<></>}
      </div>
    </div>
  )
}

export default Component
