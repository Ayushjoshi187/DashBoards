// src/WidgetContext.js
import React, { createContext, useReducer } from 'react';

const WidgetContext = createContext();

const widgetReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_WIDGET':
      return state.map(category => {
        if (category.id === action.payload.categoryId) {
          return {
            ...category,
            widgets: [...category.widgets, action.payload.widget],
          };
        }
        return category;
      });
    case 'REMOVE_WIDGET':
      return state.map(category => {
        if (category.id === action.payload.categoryId) {
          return {
            ...category,
            widgets: category.widgets.filter(widget => widget.id !== action.payload.widgetId),
          };
        }
        return category;
      });
    case 'ADD_CATEGORY':
      return [...state, action.payload];
    case 'REMOVE_CATEGORY':
      return state.filter(category => category.id !== action.payload.categoryId);
    default:
      return state;
  }
};

export const WidgetProvider = ({ children }) => {
  const initialState = [
    {
      id: 1,
      name: 'CSPM Executive Dashboard',
      widgets: [{ id: 1, name: 'Widget 1', text: 'This is Widget 1 content.' }],
    },
    {
      id: 2,
      name: 'Security Dashboard',
      widgets: [{ id: 2, name: 'Widget 2', text: 'This is Widget 2 content.' }],
    },
  ];

  const [state, dispatch] = useReducer(widgetReducer, initialState);

  return (
    <WidgetContext.Provider value={{ state, dispatch }}>
      {children}
    </WidgetContext.Provider>
  );
};

export default WidgetContext;
