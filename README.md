# DOM Framework
Dom Framework is my own framework that is based on complete javascript. It uses an online package SystemJS for using import and export statements.

## The DOM Package

  The **DOM** package is a javascript file that contains various tools that will help you with DOM mainpulation when both using the framework or not using the framework.The functions are listed below-

* element() 

## The Framework

Syntax-
```javascript
import DOM from '../essentials/DOM.js';
import Element from '../essentials/framework.js';
let {functions} = DOM;

let Component = new Element(
  elementName (Tag Name),
  innerHtml (leave as empty string for void elements),
  attributeList (must be at least an empty array),
  parentElement (Id, Class or Tagname);
)
export default Component;
```
***Two mandatory functions that are required to be extracted from DOM are 'element' and 'setAttribute'***;

In main.js file, all components are to be imported and used.
Syntax for using elements-

```javascript
import DOM from './essentials/DOM.js';
import Element from './essentials/framework.js';
let {element, setAttribute} = DOM;
import Component from './components/file.js';
Component.use()
```
