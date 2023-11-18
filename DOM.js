const DOMNameSpace = 
  function() {
  const getElement = (selector) => document.querySelector(selector);

  const getElements = (selector) => document.querySelectorAll(selector);

  const hideElement = (element) => {
    element.style.display = 'none';
  };

  const hideAllElements = (elements) => {
    elements.forEach(hideElement);
  };

  const setDisplayStyle = (element, property) => {
    element.style.display = property;
  };

  const getStyleProperty = (element, property) => {
    const styles = getComputedStyle(element);
    return styles.getPropertyValue(property);
  };

  const setStyle = (element, property, value) => {
    element.style.setProperty(property, value);
  };

  const setInnerHtml = (element, html) => {
    element.innerHTML = html;
  };

  const setInnerText = (element, text) => {
    element.innerText = text;
  };

  const addElementToParent = (element, innerText, parentElement = document.body) => {
    const newElement = document.createElement(element);
    newElement.appendChild(document.createTextNode(innerText));
    parentElement.appendChild(newElement);
    return newElement;
  };

  const addVoidElementToParent = (element, parentElement = document.body) => {
    const newElement = document.createElement(element);
    parentElement.appendChild(newElement);
    return newElement;
  };

  const setAttribute = (element, attribute, value) => {
    const newAttribute = document.createAttribute(attribute);
    newAttribute.value = value;
    element.setAttributeNode(newAttribute);
  };

  const attachEventListener = (element, event, callback) => {
    element.addEventListener(event, callback);
  };
  const addVoidElementWithClass = (element, className, parentElement = document.body) => {
    const newElement = addVoidElementToParent(element, parentElement);
    newElement.classList.add(className);
    return newElement;
  };
  const addElementWithClass = (element, innerText, className, parentElement = document.body) => {
    const newElement = addElementToParent(element, innerText, parentElement);
    newElement.classList.add(className);
    return newElement;
  };

  const click = (element, callback) => {
    element.addEventListener('click', callback);
  };

  const dblclick = (element, callback) => {
    element.addEventListener('dblclick', callback);
  };

  const rightClick = (element, callback) => {
    element.addEventListener('contextmenu', callback);
  };

  const mouseDown = (element, callback) => {
    element.addEventListener('mousedown', callback);
  };

  const mouseEnter = (element, callback) => {
    element.addEventListener('mouseenter', callback);
  };

  const mouseLeave = (element, callback) => {
    element.addEventListener('mouseleave', callback);
  };

  const mouseMove = (element, callback) => {
    element.addEventListener('mousemove', callback);
  };

  const mouseOut = (element, callback) => {
    element.addEventListener('mouseout', callback);
  };

  const mouseOver = (element, callback) => {
    element.addEventListener('mouseover', callback);
  };

  const mouseUp = (element, callback) => {
    element.addEventListener('mouseup', callback);
  };

  const submit = (formElement, callback) => {
    formElement.addEventListener('submit', callback);
  };

  const hover = (element, callback) => {
    element.addEventListener('mouseenter', callback);
    element.addEventListener('mouseout', callback);
  };

  const keyUp = (element, callback) => {
    element.addEventListener('keyup', callback);
  };
  const setClass = (element, className) => {
    element.classList.add(className);
  };

  const keyDown = (element, callback) => {
    element.addEventListener('keydown', callback);
  };

  const change = (selectElement, callback) => {
    selectElement.addEventListener('change', callback);
  };

  const resize = (element, callback) => {
    element.addEventListener('resize', callback);
  };

  const windowResize = (callback) => {
    window.addEventListener('resize', callback);
  };

  const logOne = (message) => console.log(message);

  const logAll = (messages) => messages.forEach((message) => console.log(message));

  const valueOf = (inputNameString) => {
    const input = getElement(inputNameString);
    return input.value;
  };

  const setId = (element, value) => {
    setAttribute(element, 'id', value);
  };

  module.exports = DOM = {
    getElement,
    getElements,
    hideElement,
    hideAllElements,
    setDisplayStyle,
    getStyleProperty,
    setStyle,
    setInnerHtml,
    setInnerText,
    addElementToParent,
    addVoidElementToParent,
    setAttribute,
    attachEventListener,
    click,
    dblclick,
    rightClick,
    mouseDown,
    mouseUp,
    mouseOut,
    mouseMove,
    mouseOver,
    mouseEnter,
    mouseLeave,
    submit,
    hover,
    setClass,
    addElementWithClass,
    addVoidElementWithClass,
    keyUp,
    keyDown,
    change,
    resize,
    windowResize,
    logOne,
    logAll,
    valueOf,
    setId,
  };
};
DOMNameSpace();