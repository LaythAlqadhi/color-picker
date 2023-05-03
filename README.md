# RGB Color Picker

This is a simple web page that allows the user to select a custom RGB color value using range sliders. The background color of the page is updated in real-time as the user adjusts the sliders. The current RGB color value is also displayed on the page.

## Technologies Used

This project was built using HTML, CSS, and JavaScript.

## How to Use

1. Clone the repository or download the code files or visit the preview page.
2. Open the `index.html` file in a web browser.
3. Use the range sliders to adjust the values for red, green, and blue.
4. The background color of the page will update in real-time as you adjust the sliders.
5. The current RGB color value will be displayed below the sliders.

## Features

- Interactive RGB color selection using range sliders
- Real-time updates to the background color of the page
- Displays the current RGB color value
- Ability to copy the current RGB color value to clipboard

## Preview

You can preview the project [here](https://laythalqadhi.github.io/color-picker/).

## Code Explanation

### CSS
- Sets the box-sizing property to border-box for all elements and removes any margins and padding from all elements.
- Sets the font-family and background color for the body and centers the container div vertically and horizontally.
- Defines the styles for the range sliders and their respective thumbs.
- Defines the styles for the RGB color value display and the message to copy it.

### HTML
- Defines the basic structure of the web page.
- Includes the CSS stylesheet and JavaScript file.

### JavaScript
- Defines a function to update the background color and RGB color value displayed on the page.
- Defines a function to copy the current RGB color value to clipboard.
- Adds event listeners to the range sliders and copy button to call the corresponding functions when they are changed or clicked.
