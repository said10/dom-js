/**
* $dom library (v0.0.1) copyright 2017 Said Bensamdi
* Licensed under the MIT License.
* http://www.domjs.com
*
* Copyright 2017 Said Bensamdi
* Licensed under the MIT License
* https://github.com/julienw/said10
*/ 
/**
* JS library to manipulate the DOM in an easy and efficient way
*/ 
(function(window) {
    'use strict';
    File.prototype.convertToBase64 = function(callback){
        var FR= new FileReader();
        FR.onload = function(e) {
             callback(e.target.result);
        };       
        FR.readAsDataURL(this);
    };
    /**
	 * Return the first Element within the document that matches the specified selector
	 * @get
	 * @param {selector} String - The selector
	 */
    Element.prototype.get = function(selector) {
        if (typeof selector === "string") {
            return document.querySelector(selector);
        }
        else {
            return selector;
        }
      
    };
    /**
	 * Returns All Elements within the document that matches the specified selector
	 * @getAll
	 * @param {selector} String - The selector
	 */
    Element.prototype.getAll = function(selector) {
      return document.querySelectorAll(selector);
    };
    /**
	 * Returns the DOM node's parent Element,
	 * @getParent
	 */
    Element.prototype.getParent = function() {
      return this.parentElement;
    };
    /**
	 * add a node to the end of the list of children of a Element
	 * @appendTo
     * @param {child} String / DOM Node's - Children to add
	 */
    Element.prototype.appendTo = function(child) {
        var wrapper= document.createElement('div');
        if (typeof child === "string") {
          wrapper.innerHTML= child;
          this.append(wrapper.firstChild);
        }
        else {
          this.appendChild(child);
          //this.appendChild(wrapper.firstChild);
        }
        child = this.lastChild;
        return this.lastChild;
    };
    /**
	 * removes the Element from the DOM
	 * @remove
	 */
    Element.prototype.remove = function() {
        var parent = this.getParent();
        if (parent !== null) {
            parent.removeChild(this);
        }
    };
    NodeList.prototype.remove = function() {
        var l = this.length;
        for (var i = 0; i < l; i++) {
            var element = this[i];
            element.remove();
        }
        return this;
    };
    /**
	 * sets or gets the HTML syntax describing the element's descendants
	 * @html
     * @param {html} String - The code HTML to set in Element
	 */
    Element.prototype.html = function(html) {
        if (typeof html === "undefined") {
            return this.innerHTML;
        }
        else {
            this.innerHTML = html;
        }
    };
    
    NodeList.prototype.html = function(html) {
        var l = this.length;
        for (var i = 0; i < l; i++) {
            var element = this[i];
            element.html(html);
        }
        return this;
    };
	
	/**
	 * sets or gets the Text
	 * @html
     * @param {text} String - The text of element
	 */
    Element.prototype.text = function(text) {
        if (typeof text === "undefined") {
            return this.innerText;
        }
        else {
            this.innerText = text;
        }
    };
    /**
	 * Return the first Element within the Element that matches the specified selector
	 * @find
     * @param {selector} String - The selector
	 */
    Element.prototype.find = function(selector) {
		return this.querySelector(selector);
			
    };
    /**
	 * Return All Elements within the Element that matches the specified selector
	 * @find
     * @param {selector} String - The selector
	 */
    Element.prototype.findAll = function(selector) {
		return this.querySelectorAll(selector);
    };
    /**
	 * get the value of an attribute on the specified element
	 * @attr
     * @param {attr} String - The attribute
	 */
    Element.prototype.attr = function(attr) {
      return this.getAttribute(attr);
    };
    /**
	 * set the value of an attribute on the specified element
	 * @attr
     * @param {attr} String - The attribute
     * @param {value} String - The value of attribute
	 */
    Element.prototype.setAttr = function(attr, value) {
      this.setAttribute(attr, value);
    };
    
    Element.prototype.removeAttr = function(attr) {
      this.removeAttribute(attr);
    };
    /**
	 * inserts a set of Node or DOMString objects in the children list of this ChildNode's parent,  just before this ChildNode.
	 * @before
     * @param {elem} String / DOMString - The attribute
	 */
    Element.prototype.before = function(elem) {
        var wrapper= document.createElement('div');
        var parent =  this.getParent();
         var element_result;
        if (typeof elem === "string") {
            wrapper.innerHTML= elem;
            element_result = wrapper.firstChild;
            parent.insertBefore(element_result, this);   
        }
        else {
          wrapper.appendChild(elem.cloneNode(true));
          wrapper.innerHTML = wrapper.innerHTML;
          element_result = wrapper.firstChild;
          parent.insertBefore(element_result, this);  
        }
    };
    /**
	 * inserts a set of Node or DOMString objects in the children list of this ChildNode's parent,  just after this ChildNode.
	 * @before
     * @param {elem} String / DOMString - specified Elements
	 */
    Element.prototype.after = function(elem) {
        var wrapper= document.createElement('div');
        var parent =  this.getParent();
        var element_result;
        if (typeof elem === "string") {
            wrapper.innerHTML= elem;
            element_result = wrapper.firstChild;
            parent.insertBefore(element_result, this.nextSibling);   
        }
        else {
          wrapper.appendChild(elem.cloneNode(true));
          wrapper.innerHTML = wrapper.innerHTML;
          element_result = wrapper.firstChild;
          parent.insertBefore(element_result, this.nextSibling);  
        }
    };
	
	Element.prototype.clone = function() {
		var elem = this.cloneNode(true);
		var body = this.get("body");
		body.appendChild(elem);
		return elem;
	};
	
    /**
	 * Adds the specified class(es) to Element
	 * @addClass
     * @param {classes} String - class(es)
	 */
    Element.prototype.addClass = function(classes) {
        /*if (this.classList) {
            var space = " ";
            if(this.classList.length === 0) {
                space = "";
            }
            this.classList += space+classes;
        }*/
        if (!this.hasClass(classes)) {
            this.className += " " + classes;
        }
    };
    NodeList.prototype.addClass = function(classes) {
        var l = this.length;
        for (var i = 0; i < l; i++) {
            var element = this[i];
            element.addClass(classes);
        }
        return this;
    };
    /**
	 * Remove the specified class(es) to Element
	 * @removeClass
     * @param {classes} String - class(es)
	 */
    Element.prototype.removeClass = function(classes) {
        var array_classes = [];
        if (this.classList) {
           array_classes = this.classList;
           this.classList = this.utils_removeClass(array_classes, classes);
        }
        else {
            array_classes = this.className.split(" ");
            this.classList = this.utils_removeClass(array_classes, classes);
        }
    };
    
    NodeList.prototype.removeClass = function(classes) {
        var l = this.length;
        for (var i = 0; i < l; i++) {
            var element = this[i];
            element.removeClass(classes);
        }
        return this;
    };
    Element.prototype.utils_removeClass = function(array, classes) {
        var new_classes = "";
        for (var i = 0; i < array.length; i++) {
            var classe = array[i];
            if ( classes.search(classe) === -1 ) {
                new_classes += classe+ " ";
            }
        }
        new_classes = new_classes.substring(0, new_classes.length-1);
        return new_classes;
    };
     /**
	 * Determine whether any of the matched elements are assigned the given classe.
	 * @hasClass
     * @param {classe} String - classe
	 */
    Element.prototype.hasClass = function(classe) {
        var result = true;
         if (this.classList) {
             var classes = this.classList.value;
             var search = classes.search(classe);
             if(search === -1) {
                 result = false;
             }
         }
        else {
            var reg = new RegExp('(\\s|^)' + classe + '(\\s|$)');
            var match = this.className.match(reg);
            if (match === null) {
                result = false;
            }
        }
        return result;
    };
    /**
	 * Attach an event handler function for one event to the selected elements.
	 * @on
     * @param {type} String - Type of event : click, load, keypress, ...
     * @param {callback} Function - The callback of event handler
	 */
    Element.prototype.on = function(type, callback, capture) {
        var self = this;
        if (!this.lockEvent || typeof this.lockEvent === "undefined" || typeof capture !== "undefined") {
            if (typeof callback === "function" && callback !== null) {
                this.addEventListener(type, function( event ) {
                    callback.call(self, event);
                }, false);
                this.lockEvent = true;
            }
            
        }
        
        return this;
    };
    /**
	 * remove an event handler for one event to the selected elements.
	 * @off
     * @param {type} String - Type of event : click, load, keypress, ...
     * @param {callback} Function - The callback of event handler removed
	 */
    Element.prototype.off = function(type, callback) {
        var self = this;
        if (this.lockEvent) {
            this.removeEventListener(type, function( event ) {
                callback.call(self, event);
            }, false);
            this.lockEvent = false;
        }
        
        return this;
    };
    NodeList.prototype.on = function(type, callback) {
        var l = this.length;
        
        for (var i = 0; i < l; i++) {
            var element = this[i];
                element.on(type, callback);
        }
        return this;
    };
    NodeList.prototype.off = function(type, callback) {
        var l = this.length;
        for (var i = 0; i < l; i++) {
            var element = this[i];
            element.off(type, callback);
        }
        return this;
    };
    
    document.on = function(type, callback, capture) {
        var self = this;
        if (!this.lockEvent || typeof this.lockEvent === "undefined" || typeof capture !== "undefined") {
            this.addEventListener(type, function( event ) {
                callback.call(self, event);
            }, false);
            this.lockEvent = true;
        }
        return this;
    };
    window.on = function(type, callback, capture) {
        var self = this;
        if (!this.lockEvent || typeof this.lockEvent === "undefined" || typeof capture !== "undefined") {
            this.addEventListener(type, function( event ) {
                callback.call(self, event);
            }, false);
            this.lockEvent = true;
        }
        return this;
    };
    document.off = function(type, callback, capture) {
        var self = this;
        if (!this.lockEvent || typeof this.lockEvent === "undefined" || typeof capture !== "undefined") {
            this.removeEventListener(type, function( event ) {
                callback.call(self, event);
            }, false);
            this.lockEvent = true;
        }
        return this;
    };
    window.off = function(type, callback, capture) {
        var self = this;
        if (!this.lockEvent || typeof this.lockEvent === "undefined" || typeof capture !== "undefined") {
            this.removeEventListener(type, function( event ) {
                callback.call(self, event);
            }, false);
            this.lockEvent = true;
        }
        return this;
    };
     /**
	 * Encode a set of form elements as a multiple format for submission.
	 * @serialize
     * @param {type} String - Type of format : string, array, object
	 */
    Element.prototype.serialize = function(type) {
        var selectors = 'input[type="text"], input[type="password"], input[type="number"], input[type="email"], input[type="date"], input[type="tel"], input[type="checkbox"], input[type="datetime-local"], '+
        'input[type="hidden"], input[type="month"], input[type="radio"], input[type="range"], input[type="search"], input[type="time"], input[type="url"], input[type="week"], textarea, select';
        var inputs_list = this.findAll(selectors);
        var l_inputs = inputs_list.length;
        var result_string = "";
        var result_array = [];
        var result_object = {};
        var result = null;
        for (var i = 0; i < l_inputs; i++) {
            var input = inputs_list[i];
            var name = input.attr("name");
            var type_input = input.attr("type");
            var value = input.value;
            var disabled = input.attr("disabled");
            var select_multiple = input.attr("multiple");
            if (typeof name !== "undefined" && name !== null && disabled === null) {
                if (type_input === "checkbox") {
                    value = input.checked;
                }
                if (type_input === "radio") {
                    if (input.checked) {
                        var input_string = name+"="+value+"&";
                        result_string += input_string;
                        result_array.push({ name : name, value : value });
                        result_object[name] = value;
                    }
                }
                else {
                    if(select_multiple !== null) {
                        var values_options = [];
                        for (var j=input.options.length-1; j>=0; j--) {
                            if(input.options[j].selected) {
                                values_options.push(input.options[j].value);
                            }
                        }
                        value = values_options;
                    }
                    var input_string_normal = name+"="+value+"&";
                    result_string += input_string_normal;
                    result_array.push({ name : name, value : value });
                    result_object[name] = value;
                }
            }
        }
        result_string = result_string.substring(0, result_string.length-1);
        switch(type) {
            case "string" : 
                result = result_string;
            break;
            case "array" : 
                result = result_array;
            break;
            case "object" : 
                result = result_object;
            break;
            default : 
                result = result_string;
            break;
        }
        return result;
    };
    /**
	 * Get the current value of the inputs elements
	 * @val
	 */
    Element.prototype.val = function(value) {
        if (typeof value !== "undefined" ) {
            this.value = value;
            this.setAttr("value", value);
        }
        return this.value;
    };
     /**
	 * Get the Element in NodeList by index
	 * @eq
	 */
    Element.prototype.eq = function() {
        return this;
    };
    NodeList.prototype.eq = function(index) {
        return this[index];
    };
    /**
	 * Get the first Element in NodeList
	 * @first
	 */
    NodeList.prototype.first = function() {
        return this[0];
    };
     /**
	 * Get the last Element in NodeList
	 * @last
	 */
    NodeList.prototype.last = function() {
        var l = this.length;
        return this[l-1];
    };
     /**
	 * set one or more CSS properties for matched element.
	 * @css
     * @param {object_css} Object - Object of propreties and values of CSS : {color : 'red'}
	 */
    Element.prototype.css = function(object_css) {
        if (dom.is_object(object_css)) {
            for (var proprety in object_css) {
                if (!object_css.hasOwnProperty(proprety)) {
                    
                    continue;
                }
                var value_proprety = object_css[proprety];
                if (dom.is_number(value_proprety) && proprety !== "opacity") {
                    value_proprety = value_proprety+"px";
                }
                this.style[proprety] = value_proprety;
                
            }
        }
    };
    
    NodeList.prototype.css = function(object_css) {
        var l = this.length;
        for (var i = 0; i < l; i++) {
            var element = this[i];
            element.css(object_css);
        }
        return this;
    };
    
    /**
	 * Show Element DOM
	 * @show
	 */
    Element.prototype.show = function() {
        if (this.tagName === "A" || this.tagName === "SPAN" || this.tagName === "STRONG" || this.tagName === "IMG" || this.tagName === "EM" ||this.tagName === "BUTTON" || this.tagName === "INPUT" || this.tagName === "LABEL" || this.tagName === "SELECT" || this.tagName === "TEXTAREA") {
                this.css({ "display" : "inline-block" });
        }
        else {
            this.css({ "display" : "block" });
        } 
    };
	NodeList.prototype.show = function() {
        var l = this.length;
        for (var i = 0; i < l; i++) {
            var element = this[i];
			element.show();
        }
        return this;
    };
    /**
	 * Hide Element DOM
	 * @hide
	 */
    Element.prototype.hide = function() {
        this.css({ "display" : "none" });
    };
	
	NodeList.prototype.hide = function() {
        var l = this.length;
        for (var i = 0; i < l; i++) {
            var element = this[i];
			element.hide();
        }
        return this;
    };
	
	
    
    /**
	 * Get the current coordinates of the element (top, left, width, height)
	 * @offset
	 */
    Element.prototype.offset = function() {
        var offset_element = this.getBoundingClientRect();
        var object_offset = { top : offset_element.top, left : offset_element.left, width : offset_element.width, height : offset_element.height };
        return object_offset;
    };
    Element.prototype.width = function(width) {
        if (typeof width !== "number" ) {
            return this.offset().width;
        }
        else {
            this.css({ "width" : width });
        }
    };
    Element.prototype.height = function(height) {
        if (typeof height !== "number" ) {
            return this.offset().height;
        }
        else {
            this.css({ "height" : height });
        }
    };
    /**
	 * Insert content to the beginning of Element
	 * @prependTo
     * @param {child} String / DOMString - specified Chiilds
	 */
    Element.prototype.prependTo = function(child) {
        var wrapper= document.createElement('div');
        if (typeof child === "string") {
          wrapper.innerHTML= child;
          this.prepend(wrapper.firstChild);
        }
        else {
          wrapper.appendChild(child.element.cloneNode(true));
          wrapper.innerHTML = wrapper.innerHTML;
          this.prepend(wrapper.firstChild);
        }
        
        return this.firstChild;
    };
    /**
	 * get the first parent element that matches the selector
	 * @closests
     * @param {selector} String - Selector of parent
	 */
    Element.prototype.closests = function(selector) {
        return this.closest(selector); 
    };
    Element.prototype.closest = function(selector) {
        return this.closest(selector); 
    };
    
    /**
	 * Check if arguments matched with the style CSS of Element and return true/false  .
	 * @isCss
     * @param {proprety} String - the Proprety checked : color=red
	 */
    Element.prototype.isCss = function(proprety) {
        var css_element = window.getComputedStyle(this, null);
        var split_proprety = proprety.split("=");
        var proprety_temp = split_proprety[0];
        var value_temp = split_proprety[1];
        var result = false;
        if (css_element[proprety_temp] === value_temp) {
            result = true;
        }
        return result;
    };
    /**
	 * get the next Element of this DOMNode
	 * @next
	 */
    Element.prototype.next = function() {
        return this.nextElementSibling;
    };
    /**
	 * get the prev Element of this DOMNode
	 * @prev
	 */
    Element.prototype.prev = function() {
        return this.previousElementSibling;
    };
    /**
	 * Wrap an HTML structure around each element in the set of matched elements.
	 * @prev
     * @param {html} String - the HTML of wrapper
	 */
    Element.prototype.wrap = function(html) {
        var wrapper = document.createElement("div");
        wrapper.innerHTML= html;
        wrapper = wrapper.firstChild;
        this.parentNode.insertBefore(wrapper, this);
        this.parentNode.removeChild(this);
        wrapper.appendChild(this);
    };
    NodeList.prototype.wrap = function(html) {
        var l = this.length;
        var add = false;
        var wrapper = document.createElement("div");
        wrapper.innerHTML= html;
        wrapper = wrapper.firstChild;
        for (var i = 0; i < l; i++) {
            var element = this[i];
            if (!add) {
                element.parentNode.insertBefore(wrapper, element);
                add = true;
            }
            element.parentNode.removeChild(element);
            wrapper.appendChild(element);
        }
    };
    /*class Base64 {
        constructor() { }
        convert(input, callback) {
          var selectedFile = input.files[0];
          selectedFile.convertToBase64(function(base64){
              callback.call(input, base64);
          });
        }
    }*/
    /**
	 * get Base64 of file uploaded by the user in input File
	 * @convertBase64
     * @param {callback} Function - the callback after the processing base64 is complete
	 */
    Element.prototype.convertBase64 = function(callback) {
        this.on("change", function() {
            var base64 = new Base64();
            base64.convert(this, callback);
        });    
    };
    var dom = Element.prototype;
	var dom_list = NodeList.prototype;
    dom.getBrowser = function() {
        var browser = navigator.appName;
        var version;
        var nAgt = navigator.userAgent;
        var nameOffset, verOffset;
        if ((verOffset = nAgt.indexOf('Opera')) !== -1) {
            browser = 'Opera';
            version = nAgt.substring(verOffset + 6);
            if ((verOffset = nAgt.indexOf('Version')) !== -1) {
                version = nAgt.substring(verOffset + 8);
            }
        }
        // Opera Next
        if ((verOffset = nAgt.indexOf('OPR')) !== -1) {
            browser = 'Opera';
            version = nAgt.substring(verOffset + 4);
        }
        // Edge
        else if ((verOffset = nAgt.indexOf('Edge')) !== -1) {
            browser = 'Microsoft Edge';
            version = nAgt.substring(verOffset + 5);
        }
        // MSIE
        else if ((verOffset = nAgt.indexOf('MSIE')) !== -1) {
            browser = 'Microsoft Internet Explorer';
            version = nAgt.substring(verOffset + 5);
        }
        // Chrome
        else if ((verOffset = nAgt.indexOf('Chrome')) !== -1) {
            browser = 'Chrome';
            version = nAgt.substring(verOffset + 7);
        }
        // Safari
        else if ((verOffset = nAgt.indexOf('Safari')) !== -1) {
            browser = 'Safari';
            version = nAgt.substring(verOffset + 7);
            if ((verOffset = nAgt.indexOf('Version')) !== -1) {
                version = nAgt.substring(verOffset + 8);
            }
        }
        // Firefox
        else if ((verOffset = nAgt.indexOf('Firefox')) !== -1) {
            browser = 'Firefox';
            version = nAgt.substring(verOffset + 8);
        }
        // MSIE 11+
        else if (nAgt.indexOf('Trident/') !== -1) {
            browser = 'Microsoft Internet Explorer';
            version = nAgt.substring(nAgt.indexOf('rv:') + 3);
        }
        // Other browsers
        else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) < (verOffset = nAgt.lastIndexOf('/'))) {
            browser = nAgt.substring(nameOffset, verOffset);
            version = nAgt.substring(verOffset + 1);
            if (browser.toLowerCase() === browser.toUpperCase()) {
                browser = navigator.appName;
            }
        }
        return { browser : browser, version : version };
    };
    class Ajax {
        constructor() {}
        execute(params) {
            var bustCache = '?' + new Date().getTime();
            var request;
            if (window.XMLHttpRequest) {
                request = new XMLHttpRequest();
             } 
            else {
                request = new ActiveXObject("Microsoft.XMLHTTP");
            }
            
            var async = params.async;
            if (typeof async === "undefined" || async === true) {
                async = true; 
            }
            
            if (params.hasOwnProperty("dataType") === false) {
                params.dataType = "json";
            }
            
            request.dataType = params.dataType;
            request.onreadystatechange = function(event) {
                if (this.readyState === XMLHttpRequest.DONE) {
                    if (this.status === 200 || this.status === 201) {
                         var response = this.response;
                        if (typeof this.response === "string" && request.dataType === "json") {
                            try {
                               response = JSON.parse(this.response);         // null
                            }
                            catch (e) {
                            // console.log(e);
                            }
                        }
                        //if (request.responseType)
                        params.success.call(this, response, this.status, event, this);
                    } 
                    else {
                        params.error.call(this, this.status, this.statusText, event, this);
                    }
                }
            }; 
            var mime_type = params.mimeType || 'application/json';
            request.overrideMimeType(mime_type);
            var url_send = params.url;
            if (typeof params.cache !== "undefined" && params.cache === true) {
                url_send = params.url +  bustCache;
            }
            
            request.open(params.type, url_send, async);
            request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
            request.setRequestHeader('Content-Type', 'application/json');
            request.setRequestHeader('Accept', 'application/json, text/javascript');
           // request.setRequestHeader("X-CSRFToken", getCookie('csrftoken'))
            var headers = params.headers;
            if (typeof headers !== "undefined" && dom.is_object(headers)) {
                for (var header in headers) {
                    if (!headers.hasOwnProperty(header)) {
                        continue;
                    }
                    var value = headers[header];
                    request.setRequestHeader(header, value);
                }
            }
            var data = null;
            if (typeof params.data !== "undefined") {
                if ( params.type === "post" || params.type === "put") {
                    data = params.data;
                }
            }
            request.send(data);
        }
        
        
    }
     /**
	 * Execute the requests HTTP to server by AJAX methode
	 * @ajax
     * @param {params} Object - the params of AJAX request : type, url, success, error, cache, headers, data, asyncn mimeType
	 */
    dom.ajax = function(params) {
        var ajax = new Ajax();
        ajax.execute(params);
    };
    class Load {
        constructor() { }
        execute(callback) {
          window.addEventListener("load", function(event) {
            if (typeof callback !== "undefined") {
              callback.call(dom, event);
            }
          });
        }
    }
    /**
	 * The load event occurs when DOM Object has been loaded
	 * @load
     * @param {callback} Function - the callback of event load handler
	 */
    dom.load = function(callback) {
        var load_fn = new Load();
        load_fn.execute(callback);
    };
    dom.is_array = function(array) {
      return Array.isArray(array);
    };
    /**
	 * une fonction qui vérifie si la valeur et de type Number ou pas
	 * @is_number
	 * @param {Number} value - la valeur a tester
	 */
	dom.is_number = function(value) {
		if( !isNaN(value/1) ) {
			return true;
		}
		else {
			return  false;
		}
	};
	
	dom.findInArray = function(array, value) {
   		var str = array.toString();
		var index = str.search(value);
		var result = false;
		if( index > -1) {
			result = true;
		}
		return result;
   };
	
	NodeList.prototype.runPlugin = function(name, params) {
		var l = this.length;
		for (var i = 0; i < l; i++) {
			var element = this[i];
			element[name](params);
		}
	};
	dom.runPlugin = function(name, params) {
		return this[name](params);
	};
	dom.addPlugin = function(name, fn) {
		dom[name] = fn;
		//dom_list[name] = fn;
	};
    dom.is_object = function(object) {
        var result = false;
      if( !this.is_array(object) && object instanceof Object ) {
          result = true;
      }
      return result;
    };
    
    var array_zones = [];
    //var selector_zones = [];
    dom.outZone = function(selector, callback) {
        var exist = dom.findInArray(array_zones, selector);
        if (exist === false) {
            array_zones.push({ "selector" : selector, "callback" : callback });
            //callback.call(dom, dom.get(selector), this);
        }
    };
    
    dom.get("body").on("click", function(evt) {
        var l =  array_zones.length;
        for (var i = 0; i < l; i++) {
            var selector = array_zones[i].selector;
            var callback = array_zones[i].callback;
            var element = dom.get(selector);
            var class_selector = selector.indexOf(".");
            if (class_selector > -1) {
                element = dom.getAll(selector);
                var l_classes = element.length;
                var list_success = 0;
                var sub_element = null;
                for (var c = 0; c < l_classes; c++) {
                    sub_element = element.eq(c);
                    if(evt.target !== sub_element && evt.target.closests(selector) !== sub_element) {
                        list_success +=1;
                    }
                }
                if (list_success === l_classes) {
                    callback.call(dom, sub_element, evt.target, this);
                }
            }
            else {
                if(evt.target !== element && evt.target.closests(selector) !== element) {
                    callback.call(dom, element, evt.target, this);
                }
            }
        }
        
        return true;
    });
    
    Element.prototype.index = function(selector, parent_element) {
        var parent;
        if (typeof parent_element === "undefined") {
            parent = this.getParent();
        }
        else {
            parent = dom.get(parent_element);
        }
        var children = parent.findAll(selector);
        for (var i = 0; i < children.length; i++) {
            if (children[i] === this) {
                return i;
            }
        }
        return -1;
    };
    
    Element.prototype.animate = function(duration, params) {
        var self = this;
        var browser = dom.getBrowser().browser;
        var duration_orig = (duration*1000)+10;
        duration = duration+"s";
        var css_transition = "";
        var suffix = dom.getSuffix(browser);
        css_transition = {  };
        var transition_suffix = suffix+"transition";
        css_transition[transition_suffix] = "all "+duration;
        var delay = params.delay || 0;
        delete params.delay;
        var timer_delay = setTimeout(function() {
            var ease = params.ease;
            if (typeof ease !== "undefined") {
                var objet_ease = dom.runPlugin("getEase", { name : ease, suffix : suffix, duration : duration });
                delete params.ease;
                self.css(objet_ease);
            }
            else {
                self.css(css_transition);
            }
            params = self.transformProprety(params, suffix);
            
            var on_complete_fn = params.onComplete;
            if (typeof on_complete_fn !== "undefined" && typeof on_complete_fn === "function") {
                var timer_complete = setTimeout(function() {
                    on_complete_fn.call(self, "complete", duration);
                    clearTimeout(timer_complete);
                }, duration_orig);
                delete params.onComplete;
            }
            var on_update_fn = params.onUpdate;
            if (typeof on_update_fn !== "undefined" && typeof on_update_fn === "function") {
                var timer_update = setTimeout(function() {
                    on_update_fn.call(self, "update", duration);
                    clearTimeout(timer_update);
                }, duration_orig/2);
                delete params.onUpdate;
            }
            self.addClass("GPU-accelerated");
            self.css(params);
            clearTimeout(timer_delay);
        }, delay*1000);
    };
    
    NodeList.prototype.animate = function(duration, params) {
		var l = this.length;
		for (var i = 0; i < l; i++) {
			var element = this[i];
			element.animate(duration,params);
		}
	};
    
    
    dom.getSuffix = function(browser) {
        var suffix = "";
        switch (browser) {
            case "Firefox" :
                suffix = "-moz-";
                
            break;
            case "Chrome" :
                suffix = "-webkit-";
            break;
            case "Safari" :
                suffix = "-webkit-";
            break;
            case "Opera" :
                suffix = "-o-";
            break;
            case "Microsoft Edge" :
                suffix = "-ms-";
            break;
            case "Microsoft Internet Explorer" :
                suffix = "-ms-";
            break;
            default :
                suffix = "";
            break;
        }
        return suffix;
    };
    
    Element.prototype.transformProprety = function(params, suffix) {
        var left = params.left;
        var top = params.top;
        var transform_attr = suffix+"transform";
        params[transform_attr] = "";
        if (typeof left !== "undefined" && typeof top !== "undefined") {
            params[transform_attr] += "translate("+left+"px,"+top+"px) ";
            delete params.left;
            delete params.top;
        }
        
        if (typeof left !== "undefined" && typeof top === "undefined") {
            params[transform_attr] += "translate("+left+"px)";
            delete params.left;
        }
        if (typeof left === "undefined" && typeof top !== "undefined") {
            params[transform_attr] += "translate(0, "+top+"px) ";
            delete params.top;
        }
        var scale = params.scale;
        var scalex = scale;
        var scaley = scale;
        if (typeof scale !== "undefined") {
            if (!this.is_number(scale)) {
                scalex = scale.split(",")[0] || 1;
                scaley = scale.split(",")[1] || scalex;
            }
            
            params[transform_attr] += "scale("+scalex+","+scaley+") ";
            delete params.scale;
        }
        var rotate = params.rotate;
        if (typeof rotate !== "undefined") {
            params[transform_attr] += "rotate("+rotate+"deg) ";
            delete params.rotate;
        }
        return params;
    };
    
    Element.prototype.reset = function() {
        if (this.nodeName === "FORM" || this.nodeName === "form") {
            var elements = this.elements;
            var l = elements.length;
            for (var i = 0; i < l; i++) {
                var input = elements[i];
                if (input.attr("type") !== "button" && input.attr("type") !== "button") {
                    if (input.attr("type") === "checkbox" || input.attr("type") === "radio") {
                        input.removeAttr("checked");
                    }
                    else {
                        input.setAttr("value", "");
                    }
                }
            }
        }
        return this;
    };
    
    Element.prototype.fadeIn = function(duration, callback) {
        duration = duration || 0.5;
        this.css({ "opacity" : 0 });
        this.show();
        this.animate(duration, { "opacity" : 1, onComplete : function() {  
            if (typeof callback === "function" && callback !== null) {
                callback.call(this, "complete");
            }
        }
        } );
    };
    
    Element.prototype.fadeToggle = function(duration) {
        duration = duration || 0.5;
        var css_element = window.getComputedStyle(this, null);
        var display = css_element.display;
        if (display === "none") {
            this.fadeIn(duration);
        }
        else {
            this.fadeOut(duration);
        }
    };
    
    Element.prototype.fadeOut = function(duration, callback) {
        duration = duration || 0.5;
        this.animate(duration, { "opacity" : 0, onComplete : function() { 
            this.hide();  
            if (typeof callback === "function" && callback !== null) {
                callback.call(this, "complete");
            }
        }
                               
        } );
    };
    
    Element.prototype.slideDown = function(duration, callback) {
        duration = duration || 1;
        //this.css({ "opacity" : 0 });
        //this.css({"overflow" : "initial", "height" : 'auto' });
        this.show();
        //var height = this.height_slide || this.offset().height;
        this.css({ "height" : 0 });
        this.animate(duration, { "height" : "auto", "ease" : "easeOutSine", onComplete : function() {  
            if (typeof callback === "function" && callback !== null) {
                callback.call(this, "complete");
            }
        }
        } );
    };
    
    Element.prototype.slideUp = function(duration, callback) {
        duration = duration || 0.5;
        var height = this.offset().height;
        this.height_slide = height;
        this.css({ "overflow" : "hidden", height : height });
        this.animate(duration, { "height" : 0, "ease" : "easeOutSine", onComplete : function() {
            this.hide();  
            if (typeof callback === "function" && callback !== null) {
                callback.call(this, "complete");
            }
        }
        } );
    };
    
    Element.prototype.data = function(attr, value) {
        if (typeof value === "undefined") {
            return this.attr("data-"+attr);
        }
        else {
            return this.setAttr("data-"+attr, value);
        }
    };
    window.$dom = window.dom = dom;
	window.$dom_list = window.dom_list = dom_list;
})(window);