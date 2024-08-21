// src/components/Category.js
import React, { useState } from 'react';

function Category({ category, onAddWidget, onRemoveWidget }) {
  const [showForm, setShowForm] = useState(false);
  const [widgetName, setWidgetName] = useState('');
  const [widgetText, setWidgetText] = useState('');

  const handleAddWidget = () => {
    onAddWidget(category.id, widgetName, widgetText);
    setShowForm(false);
    setWidgetName('');
    setWidgetText('');
  };

  return (
    <div className="category">
      <h2>{category.name}</h2>
      {category.widgets.map(widget => (
        <div key={widget.id} className="widget">
          <h3>{widget.name}</h3>
          <p>{widget.text}</p>
          <button className="remove-widget" onClick={() => onRemoveWidget(category.id, widget.id)}>✖</button>
        </div>
      ))}
      {showForm ? (
        <div className="add-widget-form">
          <input
            type="text"
            placeholder="Widget Name"
            value={widgetName}
            onChange={(e) => setWidgetName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Widget Text"
            value={widgetText}
            onChange={(e) => setWidgetText(e.target.value)}
          />
          <button onClick={handleAddWidget}>Add Widget</button>
          <button onClick={() => setShowForm(false)}>Cancel</button>
        </div>
      ) : (
        <button onClick={() => setShowForm(true)}>+ Add Widget</button>
      )}
    </div>
  );
}

export default Category;
