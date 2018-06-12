# Building Your First Website

This article will go over how to create your first website and cover some basic terminology at a high level. We won't go into too much depth here, this is aimed at getting you started so that you can start creating your own amazing sites!

*NOTE: This will not result in a website that you can access on the internet. That is a completely seperate article and something we will cover later on.*

Ok, let's get it going!

### Step 1: Come up with a name
Naming things is very difficult but you will need to come up with a name even if it is something like `Test App` or `First Project`. It can be whatever you want, just pick something and go with it!

### Step 2: Create a project folder
Before you begin writing some code you will need to create a folder for your project. This is why picking a name is important. Somewhere on your computer create a folder with the name you picked in Step 1.

*Note: I usually create a `Code` folder first, then put all my projects inside that just so they are all together but you can do whatever you like*

### Step 3: Open your editor
Open your empty folder in your code editor of choice. My preference is [Visual Studio Code](https://code.visualstudio.com), however, you could use [Sublime](https://sublimetext.com) or [Atom](https://atom.io) or even [Notepad++](https://notepad-plus-plus.org). Whatever you like.

### Step 4: Start coding!!!
Firstly, create a file called `index.html` inside your folder. This is a bit of special file name. Simply, the 'index' file is the first file of your website, it's just something that is very common.

Once you've created this file, paste the following HTML into it:
```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Page Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
  </head>
  <body>

  </body>
</html>
```

What is all this? This is some basic HTML which is the coding language that puts stuff onto a website. Don't worry about understanding all this, it's not that important right now.


If you save the file then go into your file explorer (or finder for mac) and double click on the `index.html` file it should open up inside your browser. It will be completely white, but this means your website is up and running and you can now start adding things to your website.

### Step 5: Changing the title
In your browser if you look up at the tab it should say "Page Title". We are going to change that to the name of the project you chose.

Back in your code editor if you look for the line that looks like:

`<title>Page Title</title>`

Change the text from "Page Title" to the name of your project so it should look something like this:

`<title>My first project</title>`

(except it will have your project name...)

If you save the file and refresh the browser, the tab should now have the name of your project!!! Nicely done, you are on your way to becoming a great coder!

### Step 5: Adding an element
HTML is the language that puts things on the site and an `element` is a specific thing on a site. E.g. a button, an image, or some text. Think of your favourite website and how many things are on that website, each one of those is an element. This text you are reading is an element!

So let's add an element. The first thing you need to do is look for the code that looks like:

```
<body>

</body>
```

This is the `body` element. Everything that appears on a website must go inside this element. We are going to add a `h1` (header 1) element to the site which will display as big text. We can do this with the following code:

```
<body>
  <h1>This is my first site</h1>
</body>
```

If you save the file and refresh the browser there should now be some big black text on the website that says **This is my first site**.

You can change the text to whatever you want. You can even add another `h1` element. *Hint: try adding an `h2`, `h3`, or even an `h6` element.*

### Final notes
Hopefully you got the website up an running and have played around with it a little bit. There is a lot more to cover on elements but that will be done in a further article.

For reference, your `index.html` file should look *something* like this:

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>My Project</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
  </head>
  <body>
    <h1>This is my first website!!!</h1>
  </body>
</html>
```
