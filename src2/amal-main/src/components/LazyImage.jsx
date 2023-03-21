import { useState, useRef, useEffect } from 'react';
import { FaImage } from 'react-icons/fa'

export function LazyImage(imageProps){
    const [shouldLoad, setShouldLoad] = useState(false);
    const placeholderRef = useRef(null);
    useEffect(()=>{
        if(!shouldLoad && placeholderRef.current){
            const observer = new IntersectionObserver(([{intersectionRatio}])=>{
            if(intersectionRatio > 0){
                setShouldLoad(true);
            }
        });

        observer.observe(placeholderRef.current);
            return () => observer.disconnect();
        }
    }, [shouldLoad, placeholderRef]);

    return (
        shouldLoad ? <img {...imageProps} alt="" /> : <div className="img-placeholder d-flex align-items-center justify-content-center" ref={placeholderRef}><FaImage className='icon' /></div>
    );
};
