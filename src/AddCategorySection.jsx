// src/components/AddCategorySection.js
import React, { useState, useContext } from 'react';
import WidgetContext from './WidgetContext';

function AddCategorySection() {
  const { state, dispatch } = useContext(WidgetContext);
  const [categoryName, setCategoryName] = useState('');
  
  const addCategory = () => {
    const newCategory = { id: Date.now(), name: categoryName, widgets: [] };
    dispatch({ type: 'ADD_CATEGORY', payload: newCategory });
    setCategoryName('');
  };

  const removeCategory = (categoryId) => {
    dispatch({ type: 'REMOVE_CATEGORY', payload: { categoryId } });
  };

  return (
    <div className="add-category-section">
      <h2>Manage Categories</h2>
      <input
        type="text"
        placeholder="New Category Name"
        value={categoryName}
        onChange={(e) => setCategoryName(e.target.value)}
      />
      <button onClick={addCategory}>Add Category</button>
      <div>
        <h3>Existing Categories:</h3>
        {state.map(category => (
          <div key={category.id} className="category-item">
            <span>{category.name}</span>
            <button onClick={() => removeCategory(category.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AddCategorySection;
