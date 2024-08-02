Here's the README in markdown format:

````markdown
# Adusei UI React Library

Adusei UI is a collection of reusable React components wrapped around shadcn, designed to help you build modern and accessible user interfaces with ease.

# Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
  - [Button](#button)
  - [Input](#input)
  - [Other Components](#other-components)
- [Contributing](#contributing)
- [License](#license)

# Installation

To install the Adusei UI library, use npm or yarn:

```bash
npm install adusei-ui
```
````

or

```bash
yarn add adusei-ui
```

# Usage

To start using the components, import them into your React application:

```jsx
import React from "react";
import { Button } from "adusei-ui";

const App = () => {
  return (
    <div>
      <Button>Click Me</Button>
    </div>
  );
};

export default App;
```

# Components

## Button

The `Button` component is a customizable button element.

**Props:**

- `children` (node): The content to be displayed inside the button.
- `onClick` (function): Function to be called when the button is clicked.
- `disabled` (boolean): Disables the button when set to `true`.
- `variant` (string): The style variant of the button (`'default'`, `'secondary'`, etc.).

**Example:**

```jsx
<Button onClick={() => alert("Button clicked!")} variant="default">
  Click Me
</Button>
```

## Input

The `Input` component is a customizable input field.

**Props:**

- `value` (string): The value of the input field.
- `onChange` (function): Function to be called when the input value changes.
- `placeholder` (string): Placeholder text for the input field.
- `type` (string): The type of the input field (`'text'`, `'password'`, etc.).

**Example:**

```jsx
<Input
  value={value}
  onChange={(e) => setValue(e.target.value)}
  placeholder="Enter text"
  type="text"
/>
```

## Other Components

The library includes many other components such as `Checkbox`, `Modal`, `Tooltip`, and more. Check the [documentation](#) for a complete list of components and their usage.

# Contributing

We welcome contributions to the Adusei UI library! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes.
4. Submit a pull request.

Please make sure to follow our [contribution guidelines](CONTRIBUTING.md).

# License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

```


```
