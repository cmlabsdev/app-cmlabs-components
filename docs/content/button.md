<p class="text-md text-dark-10 dark:text-gray-40">
  Lorem ipsum odor amet, consectetuer adipiscing elit. Nullam laoreet euismod litora; mollis efficitur arcu non nisl urna. Volutpat mauris neque pharetra pharetra posuere morbi. Nullam feugiat ex praesent sociosqu et ultricies non ligula. Risus bibendum mollis varius gravida cubilia fames suspendisse. Adipiscing vitae fusce posuere ac turpis. Donec metus massa proin risus laoreet torquent. Parturient iaculis scelerisque mattis aliquam platea dis senectus.
</p>

## Basic Usage

Basic button has a click event listener you can attach to like using a normal button.  
As for the props, the button itself accept native button attributes such as `type`, `id`, and the rest.  
By default, the button has a responsive size on each size props. You may define a size if you'd like to make it bigger on a specific screen using the size props.

Supported sizes:

- xs
- sm
- base -> Default
- md
- lg
- xl
- unset -> Useful to set custom dimension

<div style="flex-wrap: wrap; margin-top: 16px;">
  <cm-button>Primary Button</cm-button>
  <cm-button variant="secondary">Secondary Button</cm-button>
  <cm-button variant="info">Info Button</cm-button>
  <cm-button variant="success">Success Button</cm-button>
  <cm-button variant="danger">Danger Button</cm-button>
  <cm-button variant="warning">Warning Button</cm-button>
  <cm-button variant="dark">Dark Button</cm-button>
  <cm-button variant="gray">Gray Button</cm-button>
  <cm-button variant="light">Light Button</cm-button>
</div>

<div style="margin-top: 16px;">
  <cm-button size="md">Primary Button</cm-button>
  <cm-button size="md" variant="secondary">Secondary Button</cm-button>
  <cm-button size="md" variant="info">Info Button</cm-button>
  <cm-button size="md" variant="success">Success Button</cm-button>
  <cm-button size="md" variant="danger">Danger Button</cm-button>
  <cm-button size="md" variant="warning">Warning Button</cm-button>
  <cm-button size="md" variant="dark">Dark Button</cm-button>
  <cm-button size="md" variant="gray">Gray Button</cm-button>
  <cm-button size="md" variant="light">Light Button</cm-button>
</div>

#### Code Example

```html
  <cm-button>Primary Button</cm-button>
  <cm-button variant="secondary">Secondary Button</cm-button>
  <cm-button variant="info">Info Button</cm-button>
  <cm-button variant="success">Success Button</cm-button>
  <cm-button variant="danger">Danger Button</cm-button>
  <cm-button variant="warning">Warning Button</cm-button>
  <cm-button variant="dark">Dark Button</cm-button>
  <cm-button variant="gray">Gray Button</cm-button>
  <cm-button variant="light">Light Button</cm-button>

  <cm-button size="md">Primary Button</cm-button>
  <cm-button size="md" variant="secondary">Secondary Button</cm-button>
  <cm-button size="md" variant="info">Info Button</cm-button>
  <cm-button size="md" variant="success">Success Button</cm-button>
  <cm-button size="md" variant="danger">Danger Button</cm-button>
  <cm-button size="md" variant="warning">Warning Button</cm-button>
  <cm-button size="md" variant="dark">Dark Button</cm-button>
  <cm-button size="md" variant="gray">Gray Button</cm-button>
  <cm-button size="md" variant="light">Light Button</cm-button>
```

## Outline Buttons

By using the `outline` boolean props, you can have outline button rendered.

<div style="margin-top: 16px;">
  <cm-button outline>Outline button</cm-button>
</div>

#### Code Example

```html
  <cm-button outline>Outline button</cm-button>
```

## Disabled Button

Use the `disabled` boolean props to make the button disabled.

<div style="margin-top: 16px;">
  <cm-button disabled>Disabled filled button</cm-button>
  <cm-button disabled outline>Disabled outline button</cm-button>
</div>

#### Code Example

```html
  <cm-button disabled>Disabled filled button</cm-button>
  <cm-button disabled outline>Disabled outline button</cm-button>
```

## Loading Button

Use the `loading` boolean props to make the button state into loading state.

<div style="margin-top: 16px;">
  <cm-button disabled>Disabled non loading button</cm-button>
  <cm-button disabled loading>Disabled loading button</cm-button>
</div>

#### Code Example

```html
  <cm-button disabled>Disabled non loading button</cm-button>
  <cm-button disabled loading>Disabled loading button</cm-button>
```

## Contextual Button

Contextual button renders a button as a text which still have the available button component props, slots, and events.  
Use the `contextual` boolean props.

<div style="margin-top: 16px;">
  <cm-button contextual>Contextual button</cm-button>
  <cm-button contextual outline>Contextual button do not have outline variant even if you specify the outline props!</cm-button>
</div>

#### Code Example

```html
  <cm-button contextual>Contextual button</cm-button>
  <cm-button contextual outline>Contextual button do not have outline variant even if you specify the outline props!</cm-button>
```

## Contextual Button

To make the button act as a block-level element, use the `block` boolean props.  
By default, the button renders an inline-level flex element.

<div style="margin-top: 16px;">
  <cm-button block>Contextual button</cm-button>
</div>

#### Code Example

```html
  <cm-button block>Contextual button</cm-button>
```

