import React,{ useState } from "react";

const SortableList = () => {
  // State variables for the list of sports, the index of the item being dragged, and the index of the item being dragged over
  const [sports, setSports] = useState([
    "Football", "Basketball", "Tennis", 
    "Golf", "Cricket", "Baseball", "Rugby", 
    "Hockey", "Volleyball", "Badminton", 
    "Table Tennis", "Swimming", "Athletics", 
    "Cycling", "Boxing", "Martial Arts", "Skiing", 
    "Snowboarding", "Surfing"
  ]);
  const [dragItemIndex, setDragItemIndex] = useState();
  const [dragOverItemIndex, setDragOverItemIndex] = useState();

  // Event handler for when an item starts being dragged
  const handleDragStart = index => {
    setDragItemIndex(index);
  };

  // Event handler for when an item is dragged over another item
  const handleDragOver = event => {
    event.preventDefault(); // Prevent default behavior to allow drop event
  };

  // Event handler for when an item is dropped
  const handleDrop = index => {
    const _sports = [...sports]; // Create a copy of the sports array
    const dragItem = _sports[dragItemIndex]; // Get the dragged item
    _sports.splice(dragItemIndex, 1); // Remove the dragged item from the array
    _sports.splice(index, 0, dragItem); // Insert the dragged item at the new index
    setSports(_sports); // Update the state with the new array order
  };

  // Event handler for when an item is dragged over another item
  const handleDragEnter = index => {
    setDragOverItemIndex(index);
  };

  // Event handler for when an item is dragged out of another item
  const handleDragLeave = event => {
    setDragOverItemIndex(null); // Reset the index when the item leaves
  };

  // Event handler for when the drag operation ends
  const handleDragEnd = event => {
    setDragItemIndex(null); // Reset the drag item index
    setDragOverItemIndex(null); // Reset the drag over item index
  };

  return (
    <div>
      <h1>Favorite Sports</h1>
      <div className="list">
        {sports.map((sport, index) => (
          <li
            key={index}
            className={dragOverItemIndex === index ? "list-item next-position" : "list-item"}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={handleDragOver}
            onDrop={() => handleDrop(index)}
            onDragEnter={() => handleDragEnter(index)}
            onDragLeave={handleDragLeave}
            onDragEnd={handleDragEnd}
          >
            <span>{index}</span>
            <h3>{sport}</h3>
          </li>
        ))}
      </div>
    </div>
  );
};

export default SortableList;
