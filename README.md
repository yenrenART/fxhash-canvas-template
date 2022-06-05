# fxhash Canvas Template
Simple https://fxhash.xyz/ canvas template to start with. Uses **JavaScript** and **HTML Canvas**. Adapted from https://github.com/fxhash/fxhash-simple-boilerplate.

This is still work-in-progress, code is subject to change.

## Rarities and Features

This template demonstrates an example use of rarities, features and the deterministically random nature of **fxrand()** function, which is generated based on the blockchain transaction hash during the minting process.

Our feature in this example is **Number of Points**, which can have the following **v**alues with % **w**eights (occurrence chance):

1 : 15%  
2 : 25%  
3 : 25%  
4 : 35%  

Values and weights of features are defined as rarities in **draw.js**. Depending on the **fxrand()** value (for this instance), a helper function, **rarityPicker()** picks one of the given values for this feature (**Number of Points**) as follows:

0.00 <= fxrand() < 0.15 : 1  
0.15 <= fxrand() < 0.40 : 2  
0.40 <= fxrand() < 0.65 : 3  
0.65 <= fxrand() < 1.00 : 4

Note that, the total weight of possible values of a feature must always be 100%.

## funcstions.js
This file is used for helper functions to simplify things, which you may or may not need depending on your project.

## draw.js
Do not use **fxrand()** within the **draw()** function; otherwise, you'll get a different result at every page refresh of a minted iteration. So, you need to prepare your rarities and features (via fxrand()) before you start with the **draw()** function.

In **draw()**, we first get the canvas size **w** based on the browser window dimensions. You can then use **w** as your base unit for the location and size of your shapes to achieve a responsive design. e.g. width of rectangle = w / 10, location of rectangle = (w / 4, w / 6), etc. For simplicity, this example uses a square canvas, but you can modify it to your needs (i.e. portrait, landscape).

## Notes
Before starting to work on your 1st project, please make sure to read fxhash Documentation at:

https://www.fxhash.xyz/doc  
https://www.fxhash.xyz/doc/artist/guide-publish-generative-token  
https://github.com/fxhash-wiki/fxhash-community-wiki/wiki/THE-ARTISTIS-ETHIC  
https://github.com/fxhash-wiki/fxhash-community-wiki/wiki/CODE-OF-CONDUCT

If you have any https://fxhash.xyz/ related questions, please join the official Discord server at https://discord.com/invite/m8vVKTD6JB, where you will find many questions answered by a welcoming community of artists and art lovers.

You can follow fxhash on Twitter @fx_hash_ (2nd underscore breaks the link) and me https://twitter.com/yenrenART.

## Random Hashes
Some random hashes to use in your tests. In **index.html**, you can use one of these as the **fxhash** value, instead of random generation. Useful during the initial design stage to test for certain set of features, instead of seeing a different picture at every page refresh.

oo67Yo3VtCXZeMr7YaXQ2tZQuFfx2kkhkFYvwEVHLxciC8joEDx  
ooLpoT3W8Esey87hSbZ4VkmzFuXjgukEj4WGBvYynYobuW2K3e4  
oo3XDD7QGAFw16ZYottZAXdXTdbaNLUydRx1xeRb87MmkaJgJCW  
oodSyvadaS4jXW4uYPfBhnWGSahapGJK4fjYmgnPcm13fqSzQcv  
ooqTRwUALWJNa6kyRh8otYPi8CcUfsqxZbfwfucWziefF7WPXSX  
ooCfYEHsEVSKcrr74321iqiv1GjKTcYKakbZXwpK34eTL6Smv9Z  
ooB7VPo7Qri99XzFJHCj82UFNXSaiuaKe2sVbfzDRWY2KaUgpT8  
ooA92ncdpUSH1cUGUemD4G8SrQdvStCRRB8wvV2oXWLZvZ68Efm  
ooQj4HdJNQCLB3J9yyCbTBoN9GZPynEPYUeFGUmizngzoQezGEV  
oocqDC6kWq2GSoXUBC5Xyw2NjqpQdea5KstZ16dwiQy5oec1rVQ
