import { useEffect,useState } from "react";


const FadeInAnimation = ({children}) =>  {
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
    
        const fadeInAnimation = () => {
          let opacityValue = 0;
          const intervalId = setInterval(() => {
            opacityValue += 0.1;
            setOpacity(opacityValue);
    
            if (opacityValue >= 1) {
              clearInterval(intervalId);
            }
          }, 50); // Adjust the interval to control the speed of the animation
        };
    
        fadeInAnimation();
      }, []);
    return (<div style={{opacity}}> {children}</div>);
}

export default FadeInAnimation;