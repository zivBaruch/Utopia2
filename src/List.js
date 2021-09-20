import React, { useEffect } from 'react';

const List = (props) => {

  useEffect((props) => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || props.isLoading) 
      return props.setIsLoading(true);
    }  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect((props) => {
    const setMoreItems = () => {
      setTimeout(() => {
        props.setItems(prevState => ([...prevState, ...Array.from(Array(20).keys(), n => n + prevState.length + 1)]));
        props.setIsLoading(false);
      }, 2000);
    };

    if (!props.isLoading) return;
    setMoreItems();
    
  }, [props.isLoading]);

  return (
    <div className='list-container'>
      <h1 className='text-center'> Menu </h1>
      <ul className='ul-style'>
        {props.items.map((item, index) => <li className='li-style' key={index} >item{item}</li>)}
      </ul>
      {props.isLoading && 'Loading more Data...'}
    </div>
  );
};

export default List;