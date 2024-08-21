
import React, { useContext, useState } from 'react';
import WidgetContext, { WidgetProvider } from './WidgetContext';
import Category from './Category';
import SearchBar from './SearchBar';
import WidgetList from './WidgetList';
import AddCategorySection from './AddCategorySection';
import './App.css';


function App() {
  const { state, dispatch } = useContext(WidgetContext);
  const [searchTerm, setSearchTerm] = useState('');

  const addWidget = (categoryId, widgetName, widgetText) => {
    const newWidget = { id: Date.now(), name: widgetName, text: widgetText };
    dispatch({ type: 'ADD_WIDGET', payload: { categoryId, widget: newWidget } });
  };

  const removeWidget = (categoryId, widgetId) => {
    dispatch({ type: 'REMOVE_WIDGET', payload: { categoryId, widgetId } });
  };

  const filteredWidgets = state
    .flatMap(category => category.widgets)
    .filter(widget => widget.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="App">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <AddCategorySection />
      {state.map(category => (
        <Category
          key={category.id}
          category={category}
          onAddWidget={addWidget}
          onRemoveWidget={removeWidget}
        />
      ))}
      <WidgetList widgets={filteredWidgets} />
    </div>
  );
}

function WrappedApp() {
  return (
    <WidgetProvider>
      <App />
    </WidgetProvider>
  );
}

export default WrappedApp;
