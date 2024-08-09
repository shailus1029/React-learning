import React, { useMemo } from 'react';

const ListComponent = ({ items }) => {
  const processedItems = useMemo(() => computation(items), [items]); // Expensive computation

  return (
    <ul>
      {processedItems.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};

const computation = (items) => {
  // Expensive computation
  // Imagine some heavy processing here
  return items.map(item => ({ id: item.id, name: item.name.toUpperCase() }));
};

export default React.memo(ListComponent);