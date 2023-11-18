# DOM Package Documentation

## Introduction

This JavaScript library, named `DOM`, provides a set of helper functions for common tasks related to Document Object Model (DOM) manipulation. These functions aim to simplify and streamline the process of working with HTML elements.

***Thanks to openAI and Chat GPT for improving my code and generating this documentation.***

## Functions

### Selector Functions

- `getElement(selector)`: Returns the first DOM element that matches the specified selector.
- `getElements(selector)`: Returns a NodeList of all DOM elements that match the specified selector.

### Display and Style Functions

- `hideElement(element)`: Sets the display property of the given element to 'none'.
- `hideAllElements(elements)`: Hides multiple elements by setting their display property to 'none'.
- `setDisplayStyle(element, property)`: Sets the display property of the given element to the specified value.
- `getStyleProperty(element, property)`: Retrieves the computed style property value for the given element.
- `setStyle(element, property, value)`: Sets the inline style property of the given element.

### Content Manipulation Functions

- `setInnerHtml(element, html)`: Sets the inner HTML content of the given element.
- `setInnerText(element, text)`: Sets the text content of the given element.

### Element Creation and Manipulation Functions

- `addElementToParent(element, innerText, parentElement)`: Creates a new element, sets its text content, and appends it to the specified parent element.
- `addVoidElementToParent(element, parentElement)`: Creates a new void element and appends it to the specified parent element.
- `setAttribute(element, attribute, value)`: Sets an attribute with the specified value for the given element.

### Event Handling Functions

- `attachEventListener(element, event, callback)`: Attaches an event listener to the specified element.
- `click(element, callback)`: Attaches a click event listener to the specified element.
- `dblclick(element, callback)`: Attaches a double-click event listener to the specified element.
- `rightClick(element, callback)`: Attaches a context menu (right-click) event listener to the specified element.
- `mouseDown(element, callback)`: Attaches a mouse down event listener to the specified element.
- `mouseUp(element, callback)`: Attaches a mouse up event listener to the specified element.
- `mouseOut(element, callback)`: Attaches a mouse out event listener to the specified element.
- `mouseMove(element, callback)`: Attaches a mouse move event listener to the specified element.
- `mouseOver(element, callback)`: Attaches a mouse over event listener to the specified element.
- `mouseEnter(element, callback)`: Attaches a mouse enter event listener to the specified element.
- `mouseLeave(element, callback)`: Attaches a mouse leave event listener to the specified element.
- `submit(formElement, callback)`: Attaches a form submission event listener to the specified form element.
- `hover(element, callback)`: Attaches mouse enter and mouse out event listeners to the specified element.
- `keyUp(element, callback)`: Attaches a key up event listener to the specified element.
- `keyDown(element, callback)`: Attaches a key down event listener to the specified element.
- `change(selectElement, callback)`: Attaches a change event listener to the specified select element.
- `resize(element, callback)`: Attaches a resize event listener to the specified element.
- `windowResize(callback)`: Attaches a window resize event listener.

### Logging Functions

- `logOne(message)`: Logs a single message to the console.
- `logAll(messages)`: Logs an array of messages to the console.

### Input Functions

- `valueOf(inputNameString)`: Returns the value of the input element with the specified name.

### Miscellaneous Functions

- `setId(element, value)`: Sets the 'id' attribute of the given element to the specified value.

## Usage

To use this library in your JavaScript code, import it and call the desired functions. For example:


### es5
```javascript
const DOM = require('dom-package');

const myElement = DOM.getElement('#myElement');
DOM.hideElement(myElement);
```

### es6
```javascript
import DOM from 'dom-package';

const myElement = DOM.getElement('#myElement');
DOM.hideElement(myElement);
```
