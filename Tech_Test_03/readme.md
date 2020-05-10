* Any comments on the code as is?

Purpose
Looks like its purpose is to 

Inconsistencies/errors
Default body font is 'Lato' and one of the allowed fonts is 'lato'
Mix of es5 and es6
buildTheme checks if no bodyFont and if not mistakingly sets colours = defaultBodyFont
newColours is a const but the forEach below is trying to set new values
Very short variable names (c for colour and a for allowedfont?)
Functions are all over the place


General
The code at the bottom (module.exports) is to export the function as a Node module.


* How would you test it?

I would separate the functions out and then test them individually.

* Could you use aspects of functional programming to improve the code?

By breaking the big functions up into smaller ones

* Please refactor the code to make it simpler to test and reason about. Please share your refactored code as a secret gist. (https://gist.github.com/)