# All About Elements

Welcome to All About Elements, your one stop guide to understanding what an element is and how to use them.

### What is an element?
Simply, an element is literally something that appears on a website. This could be text, an image, or even a video. You can think of it as elements are the Lego™️ bricks of a website!

Elements are written in a language called HTML which stands for something nerdy that doesn't really matter!

### How to use an element
We know that elements are written in HTML, but what exactly does that look like? Well, HTML uses the 'less than' `<` and 'greater than' `>` a lot! The easiest way is to show an example. Let's say we want to display some text. Easy right? Well, we might want to use a 'paragraph' element which is shortened down to a 'p' element. We would do it like so:

`<p>this is some text</p>`

You can see that the name of the element is wrapped in `<` and `>` symbols. This is HTML! It's not pretty but it is important.

### Open-close elements
Most elements have an 'open' tag and a 'close' tag. The example above shows this. To break it down, lets say we wanted to write some text again, we could type something like:

`<p>this is some more text</p>`

This HTML is broken into 3 parts:

1. The open tag: `<p>`
2. The content: *this is some more text*
3. The close tag: `</p>`

The special thing to note is that the close tag has an extra `/` character. This is how the website knows it is a closing tag. Otherwise it might think you are trying to open up another element. You MUST add the `/` to the closing tag of an element!

We use open-close elements when we need to put content inside them. The majority of elements are like this, but not all of them...

### Self-closing elements
Some elements don't have content and therefore don't need a closing tag. Instead, the open and close tags are combined together!

Let's say we wanted to put an image on our site. For that we would use an `img` element and it would look something like:

`<img src="banana.jpg" />`

Can you spot the difference? There is no separate close tag here. But we still have the very important `/` at the end of the tag to let the browser know that this element is self-closing. The reason `img` elements are self-closing is because we tell it where to get the image from via the `src` **attribute**. Attributes are extra bits of information we can add to elements. In this case, the `img` element expects to be given a `src` attribute to tell it where to get the image from. Because of this, the `img` element has no content and therefore can be self-closing.

I do hope this makes some sense. If not, Google is your friend :)

### Extra info

- You can put elements inside of other elements! This is why it is important to add the `/` to the close tag otherwise the browser will get very confused!
- If you have an open tag **without** a close tag your website will probably render very strangely! There are HTML validators on the internet that will tell you if you have forgotten a close tag.
- Different elements allow different `attributes`, the easiest way to find out which ones are allowed is to Google the element 😝
