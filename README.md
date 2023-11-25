
# HumanComputerInteraction Hi-Fidelity Prototype

## How to start
Pull and then type `npx install expo` or `npm install` and run using `npx expo start`


## Pages
Under each pages is listed the properties passed through as a parameter in 'props'. Every component must have the following values in the props dictionary, on top of those also listed:
- colors: the site's colour scheme in list format
  
None exist yet.



## Templates
Under each tempplate is listed the properties passed through as a parameter in 'props'. Every component must have the following values in the props dictionary, on top of those also listed:
- colors: the site's colour scheme in list format
  
### Account
- buttonName: title of button
- navigation: navigation object
- onButtonPress: function on button press
- hyperText: text of hyperlink
- hyperLink: text of link in hyperlink
- hyperPage: page the hyperlink takes the user to


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

### HyperLinkText
- text: text in big button
- link: hyperlink text
- (optional) alt: boolean, colour as red instead of green

### HintButton Component
text: text which will appear in the modal
(optional) alt: boolean, colour as red instead of green
