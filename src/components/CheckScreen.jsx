import { useState, useEffect} from "react";



const CheckScreen = () => {
    const [isLarge, setIsLarge] = useState(false);

    useEffect(() => {
        const checkScreen = () => {
            setIsLarge(window.innerWidth >= 1024);
        };
        checkScreen();
        window.addEventListener('resize', checkScreen);
        return () => window.removeEventListener('resize',checkScreen);
    }, []);
  return isLarge
};

export default CheckScreen
