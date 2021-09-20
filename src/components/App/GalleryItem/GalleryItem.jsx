import { useState } from 'react';


function GalleryItem({ pic, plusLike}) {

    const [picToggle, setPicToggle] = useState(false);

    const handleLike = (thing) => {
        console.log('in handleLike', thing);
        plusLike(thing);
    }

    return (

        <div className="container" >
            <div key={pic.id}>
                {
                    picToggle
                        ?
                        (<div className="description" onClick={() => setPicToggle(false)}>{pic.description}</div>)
                        :
                        (<img onClick={() => setPicToggle(true)} src={pic.path}/>)
                }


                <div className="button">
                    <button onClick={() => handleLike(pic.id)}>Love It</button>
                    <p>{pic.likes}</p>
                </div>
            </div>
        </div>
    )
}

export default GalleryItem;