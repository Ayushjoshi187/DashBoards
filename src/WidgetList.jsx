// src/components/WidgetList.js
import React from 'react';

function WidgetList({ widgets }) {
  return (
    <div className="widget-list">
      <h3>Search Results:</h3>
      {widgets.length > 0 ? (
        widgets.map(widget => (
          <div key={widget.id} className="widget-item">
            <h4>{widget.name}</h4>
            <p>{widget.text}</p>
          </div>
        ))
      ) : (
        <p>No widgets found.</p>
      )}
    </div>
  );
}

export default WidgetList;
