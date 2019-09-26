import React, {useEffect, useState} from 'react'

function Carousel(props) {
    const [index, setIndex] = useState(0)
    useEffect(()=>{
        const interval = setInterval(()=>{
            if(index  >= 19){ 
                setIndex(0)
            } else{
                setIndex(index + 1);
            }
        }, 3000);
        return () => clearInterval(interval)
      }, [index]);
    
    const imgStyles = {
        height: '700px',
        width: '90%',
        margin: '0 auto'
    }
    
    function image(){
        if (!props.randomImages[index]){ return ''}
        else{
           return  props.randomImages[index].largeImageURL;
        }
    }
    return (
        <>
            <img src ={`${image()}`} style={imgStyles} alt =''/>
        </>
    )
}

export default Carousel
