### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

   1> Ans:

getElementById = One Element . Select by id,show be unique.

getElementByClassName = HTML Collection all.

querySelector= First match.

querySelectorAll=All match.

2. How do you **create and insert a new element into the DOM**?

2>Ans:

1.Creat Element.
Exampole:::
const newDiv=Document.createElement("div");

2.Add content or attributes.
Exampole:::
newDiv.textContent = "Web Devloper";
newDiv.className = "my-class";

3.Select parent.
Exampole:::
const parent = document.getElementById("parent");

3. What is **Event Bubbling** and how does it work?

   3>Ans:
   When an event happens on an element, it first runs on the target, then bubbles up to parent elements, all the way to document.

4. What is **Event Delegation** in JavaScript? Why is it useful?

   4>Ans:
   Event Delegation is a technique where instead of adding event listeners to multiple child elements, you add a single event listener to their parent.

How it works:

Click on any button = event bubbles up to #container.

The parent checks if the event target matches .btn.

Executes the handler for that specific child.

5. What is the difference between **preventDefault() and stopPropagation()** methods?

5>Ans:

preventDefault() → Stops the browser’s default action, but the event still bubbles.

stopPropagation() → Stops the event from bubbling or capturing, but the default action still happens.
