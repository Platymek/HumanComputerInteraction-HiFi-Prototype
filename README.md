
# HumanComputerInteraction Hi-Fidelity Prototype

## How to start
Pull and then type `npx install expo` or `npm install` and run using `npx expo start`


## Data
The format for data (e.g. the number of birds logged)

### log
This data logs the number of birds spotted for specified species in a dictionary
index: the same number used for indexing the birds. This is so that the dictionary can also be checked if the bird has already been added
value: the number spotted by the user

### colors
A simple list with every colour. Any new sets of colours must have an identical layout to that of the original Colors.js


## Pages
Under each pages is listed the properties passed through as a parameter in 'props'. Every component must have the following values in the props dictionary, on top of those also listed:
- colors: the site's colour scheme in list format
- navigation: used for navigating to other pages (or going back a page)


## Templates
Under each tempplate is listed the properties passed through as a parameter in 'props'. Every component must have the following values in the props dictionary, on top of those also listed:
- colors: the site's colour scheme in list format
- children: allows children
  
### Account
- buttonName: title of button
- navigation: navigation object
- onButtonPress: function on button press
- hyperText: text of hyperlink
- hyperLink: text of link in hyperlink
- hyperPage: page the hyperlink takes the user to

### Main
- navigate: navigation class
- children: takes in children


## Components
Under each component is listed the properties passed through as a parameter in 'props'. Every component must have the following values in the props dictionary, on top of those also listed:
- colors: the site's colour scheme in list format

### TextBox
- title: text above text box
- placeholder: placeholder text
- (optional) alt: boolean, colour as red instead of green
- (optional) hintText: text which will appear in the hint modal

### BigButton
- title: text in big button
- onPress: function to be performed when the button is pressed
- (optional) source: source of image
- (optional) alt: changes to alternate colour when true
- (optional) small: changes to small icon
- (optional) alt: changes to alternate colour when true
- (optional) compact: boolean, compact a button

### HyperLinkText
- text: text in big button
- link: hyperlink text
- (optional) alt: boolean, colour as red instead of green

### HintButton
text: text which will appear in the modal
(optional) alt: boolean, colour as red instead of green

### ScrollBox Component
Allows children

### Container
- style: additional style of container
- grey: boolean, is grey with no shadow

### BirdContainer
- bird: bird class

### AddButton
- birds: bird list
- log: log list
- setLog: set log list function
- birdIndex: index of bird list
- navigation: navigate class for navigating back home
- (optional) full: boolean, displays 'Add to log +', not 'Add +'

### Header
- navigate: navigation class
- (optional) hideBack: hide back button
- (optional) hideHome: hide home button
