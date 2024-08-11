import React, { useEffect } from 'react'

const List = ({ handler }) => {
    const items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    useEffect(() => {
      console.log("Child Component redered");
    }, []);

    console.log("child Component re-rendered");

  
    return (
      <div className="list-items">
        {items.map((item, index) => {
          return (
            <div key={index} onClick={handler}>
              {item}
            </div>
          );
        })}
      </div>
    );
  };

  export default List;