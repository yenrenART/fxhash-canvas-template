# fxhash Canvas Template
Simple https://fxhash.xyz/ canvas template to start with. Uses **JavaScript** and **HTML Canvas**. Adapted from https://github.com/fxhash/fxhash-simple-boilerplate.

This is work-in-progress, code is subject to change. Please use this template freely, no attribution or such.

## Rarities and Features

This template demonstrates an example use of rarities, features and the deterministically random nature of **fxrand()** function, which is generated based on the blockchain transaction hash during the minting process (e.g. ooYFjT75y9odr9gZCqaqSbEVwDGjCevFYBv6BnR2THu1XYr5sN1).

Our example feature is **Number of Points**, which can have the following **v**alues with % **w**eights (occurrence chance):

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

As a side note, rarities and features are optional. You are free to use them or not.

## functions.js
This file is used for general helper functions, which you may or may not need depending on your project.

## functions-canvas.js
This file is used for canvas drawing related helper functions, which you may or may not need depending on your project.

## draw.js
We first specify the aspect ratio **ar** of our work. This can be a fixed value (1 or 0.8 or 1.5 etc.) or a varying value ([0.8, 1, 1.25]) if you want your artwork outputs to be in varying aspect ratios.

Then we specify base units for the canvas width, **cw = 1000**. This makes canvas width 1000 dimensionless units. You can use any value you want. You will be drawing your shapes based on these units. For example, to draw a point at the center of the canvas, you will pick the point **[500, 500]**.

Using **setup(1200)** we specify the default size for the canvas. This makes canvas width 1200 pixels. You can use any value you want. This controls the output image size to be saved.

To save larger output images, add "&s=WIDTH_IN_PIXELS" to the end of the URL in live view, and press S.

Responsive resizing is handled automatically.

## LICENSE.txt
This file is where you put your license details for your art and code.

## Notes
Before starting to work on your 1st artwork project, please make sure to read fxhash Documentation at:

https://www.fxhash.xyz/doc  
https://www.fxhash.xyz/doc/artist/guide-publish-generative-token  
https://github.com/fxhash-wiki/fxhash-community-wiki/wiki/THE-ARTISTIS-ETHIC  
https://github.com/fxhash-wiki/fxhash-community-wiki/wiki/CODE-OF-CONDUCT

If you have any https://fxhash.xyz/ related questions, please join the official Discord server at https://discord.com/invite/fxhash, where you will find many questions answered by a welcoming community of artists, collectors and generative art lovers.

You can follow fxhash on Twitter @fx_hash_ (2nd underscore breaks the link) and me https://twitter.com/yenrenART.
