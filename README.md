# dom-js
dom-js is an extension of the native API of DOM to manipulate the DOM elements in an easy, simple and efficient way

## Compatibility
is compatible with IE9+,IE Edge, FF3.5+, Chrome4+, opera 10.1+ All opera mini, Safari3.1+, Android browser2.1+ and ALL recent browsers

## Table of contents
<details>

<!-- toc -->

- [load](#load)
- [get](#get)
- [getAll](#getAll)
- [getParent](#getParent)
- [appendTo](#appendTo)
- [remove](#remove)
- [html](#html)
- [find](#find)
- [findAll](#findAll)
- [attr](#attr)
- [setAttr](#setAttr)
- [before](#before)
- [after](#after)
- [addClass](#addClass)
- [removeClass](#removeClass)
- [hasClass](#hasClass)
- [on](#on)
- [off](#off)
- [serialize](#serialize)
- [eq](#license)
- [val](#val)
- [first](#first)
- [last](#last)
- [css](#css)
- [show](#show)
- [hide](#hide)
- [offset](#offset)
- [prependTo](#prependTo)
- [closestTo](#closestTo)
- [isCss](#isCss)
- [next](#next)
- [prev](#prev)
- [wrap](#wrap)
- [convertBase64](#convertBase64)
- [ajax](#ajax)
- [is_array](#is_array)
- [is_object](#is_object)
- [Links](#Links)
- [License](#License)

<!-- tocstop -->

</details>

## load
The load event occurs when DOM Object has been loaded
```js
dom.load(function() {
    // your code here
}):
```

## get
Return the first Element within the document that matches the specified selector

```js
var container = dom.get("#container");
// <div id='container'>
```
## getAll
Returns All Elements within the document that matches the specified selector

```js
var container = dom.getAll(".col-10");
// [<div class='col-10'>, <div class='col-10'>, <div class='col-10'>]
```

## getParent
Returns the DOM node's parent Element

```js
var parent = container.getParent();
// <body>
```

## appendTo
add a node to the end of the list of children of a Element

```js
container.appendTo("<h1>Title</h1>");
```

## remove
remove the Element from the DOM

```js
container.remove();
```

## html
sets or gets the HTML syntax describing the element's descendants

```js
container.html('<span>text lorem ipsum</span>');
```

## find
Return the first Element within the Element that matches the specified selector

```js
container.find('span');
// <span>
```

## findAll
Return All Elements within the Element that matches the specified selector

```js
container.findAll('.span');
// [<span class='span'>, <span class='span'>, <span class='span'>]
```

## attr
get the value of an attribute on the specified element

```js
container.attr('id');
// container
```

## setAttr
set the value of an attribute on the specified element

```js
var logo = dom.get("#logo")
logo.setAttr('alt', 'domJS');
```

## before
inserts a set of Node or DOMString objects in the children list of this ChildNode's parent,  just before this ChildNode.

```js
container.before('<h1>Title of page</h1>');
```

## after
inserts a set of Node or DOMString objects in the children list of this ChildNode's parent,  just after this ChildNode.

```js
container.after('<h2>Lorem ipsum</h2>');
```

## addClass
Adds the specified class(es) to Element

```js
container.addClass('col-12 center-auto');
```

## removeClass
Remove the specified class(es) to Element

```js
container.removeClass('col-12 center-auto');
```

## hasClass
Determine whether any of the matched elements are assigned the given classe.

```js
container.hasClass('container');
// true
```

## on
Attach an event handler function for one event to the selected elements.
Type of event accept all the events of mouse & keyboard exemple :  click, load, keypress, ...

```js
container.on('click', function(event) {
    console.log(this); // <div id="container">
    console.log(event); // Event Object
});
```

## off
remove an event handler for one event to the selected elements.

```js
container.off('click');

OR

container.off('click', function(event) {
    console.log(this); // <div id="container">
    console.log(event); // Event Object
});
```


## serialize
Encode a set of form elements as a multiple format for submission.

```js
var form = dom.get("#form");
form.serialize("string") // return form encoded to string
form.serialize("array") // return form encoded to array
form.serialize("object") // return form encoded to object

```
## eq
Get the Element in NodeList by index

```js
var input = dom.getAll("input[type='text']").eq(0);
// <input name="input_0" />
```

## val
Get the current value of the inputs elements

```js
input.val();
// test value

```

## first
Get the first Element in NodeList

```js
var input = dom.getAll("input[type='text']").first();
// <input name="input_0" />

```

## last
Get the last Element in NodeList

```js
var input = dom.getAll("input[type='text']").last();
// <input name="input_10" />

```

## css
set one or more CSS properties for matched element.

```js
container.css({ "background-color" : "#ff0000", "font-size" : "25px", "color" : "#ccc" });

```

## show
Show Element

```js
container.show();

```

## hide
Hide Element

```js
container.hide();

```

## offset
Get the current coordinates of the element (top, left, width, height)

```js
container.offset();
// { top ; 10, left : 10, width : 960, height : 700 }
```

## prependTo
Insert content to the beginning of Element

```js
container.prependTo('<span>date of publication : 20/06/2017</span>');
```

## closestTo
get the first parent element that matches the selector

```js
var span = dom.get("#span");
span.closestTo('#container');
// <div id="container">
```

## isCss
Check if arguments matched with the style CSS of Element and return true/false

```js
var span = dom.get("#span");
span.isCss("color=red");
// false or true
```

## next
get the next Element of this DOMNode

```js
var span_next = span.next();
// <p>
```

## prev
get the prev Element of this DOMNode

```js
var span_prev = span.prev();
// <span>
```

## wrap
Wrap an HTML structure around each element in the set of matched elements.

```js
var li_menu = container.getAll("li.links");
li_menu.wrap("<ul class='block-display'>");
// <ul class="block-display">
```

## convertBase64
get Base64 of file uploaded by the user in input File

```js
var input_logo = container.find("input[type='file']");
input_logo.convertBase64(function(bse64) {
    console.log(base64); // data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA.../j/BRgA+iQ8SzlkV/IAAAAASUVORK5CYII=
});
```

## ajax
Execute the requests HTTP to server by AJAX methode

```js
dom.ajax({
    url :'http://exemple.com/get-data',
    type : 'get' // post, put, delete
    cache : true,
    headers : { "Accept" : "application/json" },
    data : [],
    async : true // for activate or desactivate asynchronous request
    mimeType : null,
    success : function(data) {
        console.log(data);
    }, 
    error : function(status, error, event) {
        console.log(error);
    }
});
```

## is_array
methode for verify if the variable is the Array type or not

```js
var list = ["orange", "apple", "banane"];
var check_array = dom.is_array(list);
// true
```

## is_object
methode for verify if the variable is the Object type or not

```js
var object = { name : "john doe" };
var check_object = dom.is_object(object);
// true
```

# Links
* [Document Object Model (DOM)](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)


# License

MIT - [Said10](https://github.com/said10/)






