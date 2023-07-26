# svelte-social-btns

`svelte-social-btns` provides reusable and customizable social media buttons for your web applications. With this library, you can easily integrate social media buttons with adjustable properties such as fill color, size, and shape. The buttons are implemented using an anchor (`<a>`) tag, making them easy to handle redirects when clicked.

## Installation

To use the Svelte Social Media Button Component Library in your Svelte project, you can install it via npm:

npm install svelte-social-btns

## Usage

1. Import the social media button component in your Svelte component:

```html
<script>
	import { Btn } from 'svelte-social-btns';
</script>
```

2. Use the SocialMediaButton component in your Svelte template:

```html
<Btn url="https://twitter.com/GuyNatumanya" type="filled" size="md" shape="circle" />
```

## Props

The SocialMediaButton component accepts the following props:

- url (required): The URL the button should redirect to when clicked.
- type (optional, default: 'filled'): Set to filled to use a filled color button, otherwise the button will be white.
- size (optional, default: md): Adjust the size of the button. Possible values: sm, md, lg, xl.
- shape (optional, default: square): Set the shape of the button. Possible values: square, circle.

## Full Example

```html
<script>
	import { Btn } from 'svelte-social-btns';
</script>

<Btn url="https://twitter.com/GuyNatumanya" type="filled" size="md" shape="circle" />
```
