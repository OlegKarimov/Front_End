import React, { useEffect, useRef } from 'react'

const Homework2 = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    
    useEffect(()=>{
        const saveValue = localStorage.getItem('myValue');
        if (saveValue && inputRef.current) {
            inputRef.current.value = saveValue;
        }
    }, [])    

const handleSave = () => {
    const value = inputRef.current?.value ? inputRef.current?.value : '';
    localStorage.setItem('myValue', value);
};

  return (
    <div>
        <input ref={inputRef} type='text'/>
        <button onClick={handleSave} >Сохранить</button>
    </div>
  )
};

export default Homework2;