# RDropdown

A github flavoured dropdown menu for ReactJS

## Screenshot

![Screenshot](https://raw.githubusercontent.com/jamhall/react-dropdown-menu/master/screenshot.png)

## Getting started

### Installation

```
npm install rdropdown --save
```

Import the component:

```
import RDropdown from 'rdropdown';
```

Import the css:

```
import 'rdropdown/dist/rdropdown.css';
```

### Example usage

Please look at the example source code in the demo folder for a good example of how to use the component: https://github.com/jamhall/rdropdown/tree/master/demo/src

### Properties

| Name | Type | Description |
| --- | --- | --- | --- |
| `options` | Array or promise | **Required** Items to be used for the list
| `renderOption` | Function | **Required.**  Callback used to render an option item in the dropdown list |
| `onOptionSelected` | Function | **Required** Callback when an option item is selected |
| `headerTitle` | String | **Required** The title of the dropdown |
| `filterEnabled` | Bool | Activate or disactivate filtering. (default:false) |
| `filterPlaceholder` | String | The filter input box placeholder |
| `noOptionsFoundText`| String | Text to be displayed when no options are found. |
| `onFilter` | Function | Callback for when a user starts typing to filter the list. A good fuzzy find library to filter the items is [Fuze](https://github.com/krisk/Fuse) |
| `onClose` | Function | **Required ** Close the menu |
| `enableEsc` | Bool | Allow the user to press ESC to close the menu (default: true) |
| `errorText` | String | String to be displayed to the user when an error occurs |



### Running the demo

Clone the repository:

`git clone git@github.com:jamhall/rdropdown.git && cd rdropdown`

Install the dependencies:

`npm install`

Run the demo:

`npm run demo:run`

Navigate to:

`http://localhost:3001/`
