<p class="text-md text-dark-10 dark:text-gray-40">
  Accordion component uses two components: <code>Accordion</code> and <code>Accordion Item</code>. The <code>Accordion item</code> is used to render a tab with its header and content. While the <code>Accordion</code> component itself is a wrapper component to wrap all of the <code>AccordionItem</code> components.
</p>

## Basic Usage

This minimal example will produce the default slots available inside the `accordion-item` component.  
The amount of accordion-item are unlimited. Learn more about the available `props` and `slots` below.

<div style="margin-top: 16px;">
  <cm-accordion>
    <cm-accordion-item></cm-accordion-item>
    <cm-accordion-item></cm-accordion-item>
  </cm-accordion>
</div>

#### Code Example

```html
  <cm-accordion>
    <cm-accordion-item />
    <cm-accordion-item />
  </cm-accordion>
```

## Customized Header and Content

The `#header` slots accept any custom element to override the default header content.  
You should use the default slot to replace any content below. Custom CSS are allowed as by using TailwindCSS classes.

<div style="margin-top: 16px;">
  <cm-accordion>
    <cm-accordion-item>
      <template #header>
        This is my custom Header for the First Accordion!
      </template>
      <div>
        Hello World!
      </div>
    </cm-accordion-item>
    <cm-accordion-item>
      <template #header>
        Why should you use CMLABS V3?
      </template>
      <div>
        <a href="https://cmlabs.co">Read more here!</a>
      </div>
    </cm-accordion-item>
  </cm-accordion>
</div>

#### Code Example

```html
  <cm-accordion>
    <cm-accordion-item>
      <template #header>
        This is my custom Header for the First Accordion!
      </template>
      <div>
        Hello World!
      </div>
    </cm-accordion-item>
    <cm-accordion-item>
      <template #header>
        Why should you use CMLABS V3?
      </template>
      <div>
        <a href="https://cmlabs.co">Read more here!</a>
      </div>
    </cm-accordion-item>
  </cm-accordion>
```

## Manually Open Accordion Item

You can use the `show` props for the accordion item to force the content to be opened initially.  
Otherwise, by binding the value passed in to the `show` props, you can programatically toggle the accordion item.

<div style="margin-top: 16px;">
  <cm-accordion>
    <cm-accordion-item show>
      <template #header>
        <p><strong>I WILL BE OPENED BY DEFAULT</strong></p>
      </template>
      <div>
        Lorem ipsum odor amet, consectetuer adipiscing elit. Imperdiet neque arcu fermentum primis at dapibus aliquam neque ipsum. Lacus risus purus ipsum phasellus rutrum sapien tortor nisl. Torquent pellentesque nibh vel; taciti nec sed sagittis amet proin. Magnis aenean nisi cubilia hac dapibus molestie in. Mi massa euismod ligula mauris placerat gravida habitasse tincidunt. Aenean odio imperdiet varius scelerisque condimentum. Rutrum hac aenean lobortis torquent tempor. Taciti quisque molestie dapibus id odio sodales neque sem. Ligula nostra facilisi; ultrices turpis inceptos mus varius ipsum.
      </div>
    </cm-accordion-item>
    <cm-accordion-item>
      <template #header>
        Why should you use CMLABS V3?
      </template>
      <div>
        <a href="https://cmlabs.co">Read more here!</a>
      </div>
    </cm-accordion-item>
  </cm-accordion>
</div>

#### Code Example

```html
  <cm-accordion>
    <cm-accordion-item show>
      <template #header>
        <p><strong>I WILL BE OPENED BY DEFAULT</strong></p>
      </template>
      <div>
        Lorem ipsum odor amet, consectetuer adipiscing elit. Imperdiet neque arcu fermentum primis at dapibus aliquam neque ipsum. Lacus risus purus ipsum phasellus rutrum sapien tortor nisl. Torquent pellentesque nibh vel; taciti nec sed sagittis amet proin. Magnis aenean nisi cubilia hac dapibus molestie in. Mi massa euismod ligula mauris placerat gravida habitasse tincidunt. Aenean odio imperdiet varius scelerisque condimentum. Rutrum hac aenean lobortis torquent tempor. Taciti quisque molestie dapibus id odio sodales neque sem. Ligula nostra facilisi; ultrices turpis inceptos mus varius ipsum.
      </div>
    </cm-accordion-item>
    <cm-accordion-item>
      <template #header>
        Why should you use CMLABS V3?
      </template>
      <div>
        <a href="https://cmlabs.co">Read more here!</a>
      </div>
    </cm-accordion-item>
  </cm-accordion>
```

## Customize The Icon and Use the Scopped Slots

By default, the icon used for the opened and closed state of the `accordion item` is coming from boxicons' chevron icon.  
You can, however, customize the icon by using the `custom-icon` props for the item.

<div style="margin-top: 16px;">
  <cm-accordion>
    <cm-accordion-item custom-icon>
      <template #header>
        <p><strong>I am using the user icon for example ^^</strong></p>
        <i class="bx bx-user" />
      </template>
      <div>
        Lorem ipsum odor amet, consectetuer adipiscing elit. Imperdiet neque arcu fermentum primis at dapibus aliquam neque ipsum. Lacus risus purus ipsum phasellus rutrum sapien tortor nisl. Torquent pellentesque nibh vel; taciti nec sed sagittis amet proin. Magnis aenean nisi cubilia hac dapibus molestie in. Mi massa euismod ligula mauris placerat gravida habitasse tincidunt. Aenean odio imperdiet varius scelerisque condimentum. Rutrum hac aenean lobortis torquent tempor. Taciti quisque molestie dapibus id odio sodales neque sem. Ligula nostra facilisi; ultrices turpis inceptos mus varius ipsum.
      </div>
    </cm-accordion-item>
  </cm-accordion>
</div>

#### Code Example

```html
  <cm-accordion>
    <cm-accordion-item custom-icon>
      <template #header>
        <p><strong>I am using the user icon for example ^^</strong></p>
        <i class="bx bx-user" /
      </template>
      <div>
        Lorem ipsum odor amet, consectetuer adipiscing elit. Imperdiet neque arcu fermentum primis at dapibus aliquam neque ipsum. Lacus risus purus ipsum phasellus rutrum sapien tortor nisl. Torquent pellentesque nibh vel; taciti nec sed sagittis amet proin. Magnis aenean nisi cubilia hac dapibus molestie in. Mi massa euismod ligula mauris placerat gravida habitasse tincidunt. Aenean odio imperdiet varius scelerisque condimentum. Rutrum hac aenean lobortis torquent tempor. Taciti quisque molestie dapibus id odio sodales neque sem. Ligula nostra facilisi; ultrices turpis inceptos mus varius ipsum.
      </div>
    </cm-accordion-item>
  </cm-accordion>
```

<p style="margin-top: 16px">
  But the icon you customized do not have the open or closed state yet, so for you to grab the opened or closed state, you
  can destructure the scopped slots from the `#header` slot and use it to toggle the icon class
</p>

#### Code Example

```html
  <cm-accordion>
    <cm-accordion-item custom-icon>
      <template #header="{ isOpen }">
        <p><strong>I am using the user icon for example ^^</strong></p>
        <i class="bx bx-user" :class="{ 'rotate-360': isOpen }" />
      </template>
      <div>
        Lorem ipsum odor amet, consectetuer adipiscing elit. Imperdiet neque arcu fermentum primis at dapibus aliquam neque ipsum. Lacus risus purus ipsum phasellus rutrum sapien tortor nisl. Torquent pellentesque nibh vel; taciti nec sed sagittis amet proin. Magnis aenean nisi cubilia hac dapibus molestie in. Mi massa euismod ligula mauris placerat gravida habitasse tincidunt. Aenean odio imperdiet varius scelerisque condimentum. Rutrum hac aenean lobortis torquent tempor. Taciti quisque molestie dapibus id odio sodales neque sem. Ligula nostra facilisi; ultrices turpis inceptos mus varius ipsum.
      </div>
    </cm-accordion-item>
  </cm-accordion>
```

## Persisting the Open State

Whenever you open a content, the other opened accordion item will be closed automatically. To force any other opened accordion item, you may use the `persistent` props
inside the `Accordion` component.

<div style="margin-top: 16px;">
  <cm-accordion persistent>
    <cm-accordion-item>
      <template #header>
        <p><strong>See my content please</strong></p>
      </template>
      <div>
        Lorem ipsum odor amet, consectetuer adipiscing elit. Imperdiet neque arcu fermentum primis at dapibus aliquam neque ipsum. Lacus risus purus ipsum phasellus rutrum sapien tortor nisl. Torquent pellentesque nibh vel; taciti nec sed sagittis amet proin. Magnis aenean nisi cubilia hac dapibus molestie in. Mi massa euismod ligula mauris placerat gravida habitasse tincidunt. Aenean odio imperdiet varius scelerisque condimentum. Rutrum hac aenean lobortis torquent tempor. Taciti quisque molestie dapibus id odio sodales neque sem. Ligula nostra facilisi; ultrices turpis inceptos mus varius ipsum.
      </div>
    </cm-accordion-item>
    <cm-accordion-item>
      <template #header>
        <p><strong>Try to click me!</strong></p>
      </template>
      <div>
        Lorem ipsum odor amet, consectetuer adipiscing elit. Imperdiet neque arcu fermentum primis at dapibus aliquam neque ipsum. Lacus risus purus ipsum phasellus rutrum sapien tortor nisl. Torquent pellentesque nibh vel; taciti nec sed sagittis amet proin. Magnis aenean nisi cubilia hac dapibus molestie in. Mi massa euismod ligula mauris placerat gravida habitasse tincidunt. Aenean odio imperdiet varius scelerisque condimentum. Rutrum hac aenean lobortis torquent tempor. Taciti quisque molestie dapibus id odio sodales neque sem. Ligula nostra facilisi; ultrices turpis inceptos mus varius ipsum.
      </div>
    </cm-accordion-item>
  </cm-accordion>
</div>

#### Code Example

```html
  <cm-accordion persistent>
    <cm-accordion-item>
      <template #header>
        <p><strong>See my content please</strong></p>
      </template>
      <div>
        Lorem ipsum odor amet, consectetuer adipiscing elit. Imperdiet neque arcu fermentum primis at dapibus aliquam neque ipsum. Lacus risus purus ipsum phasellus rutrum sapien tortor nisl. Torquent pellentesque nibh vel; taciti nec sed sagittis amet proin. Magnis aenean nisi cubilia hac dapibus molestie in. Mi massa euismod ligula mauris placerat gravida habitasse tincidunt. Aenean odio imperdiet varius scelerisque condimentum. Rutrum hac aenean lobortis torquent tempor. Taciti quisque molestie dapibus id odio sodales neque sem. Ligula nostra facilisi; ultrices turpis inceptos mus varius ipsum.
      </div>
    </cm-accordion-item>
    <cm-accordion-item>
      <template #header>
        <p><strong>Try to click me!</strong></p>
      </template>
      <div>
        Lorem ipsum odor amet, consectetuer adipiscing elit. Imperdiet neque arcu fermentum primis at dapibus aliquam neque ipsum. Lacus risus purus ipsum phasellus rutrum sapien tortor nisl. Torquent pellentesque nibh vel; taciti nec sed sagittis amet proin. Magnis aenean nisi cubilia hac dapibus molestie in. Mi massa euismod ligula mauris placerat gravida habitasse tincidunt. Aenean odio imperdiet varius scelerisque condimentum. Rutrum hac aenean lobortis torquent tempor. Taciti quisque molestie dapibus id odio sodales neque sem. Ligula nostra facilisi; ultrices turpis inceptos mus varius ipsum.
      </div>
    </cm-accordion-item>
  </cm-accordion>
```

## Opinionated Accordion Sizes

The sizes are sent from the `Accordion` component down to `AccordionItem` component by using the <strong>Provide</strong> and <strong>Inject</strong> pattern. However, this may not
be neccessary as you can always force the text sizings using TailwindCSS classes. The available list of sizes are as follow:

- 'xs'
- 'sm'
- 'base' -> Default
- 'md'
- 'lg'
- 'xl'

<div style="margin-top: 16px;">
  <cm-accordion persistent size="md">
    <cm-accordion-item>
      <template #header>
        <p><strong>See my content please</strong></p>
      </template>
      <div>
        Lorem ipsum odor amet, consectetuer adipiscing elit. Imperdiet neque arcu fermentum primis at dapibus aliquam neque ipsum. Lacus risus purus ipsum phasellus rutrum sapien tortor nisl. Torquent pellentesque nibh vel; taciti nec sed sagittis amet proin. Magnis aenean nisi cubilia hac dapibus molestie in. Mi massa euismod ligula mauris placerat gravida habitasse tincidunt. Aenean odio imperdiet varius scelerisque condimentum. Rutrum hac aenean lobortis torquent tempor. Taciti quisque molestie dapibus id odio sodales neque sem. Ligula nostra facilisi; ultrices turpis inceptos mus varius ipsum.
      </div>
    </cm-accordion-item>
    <cm-accordion-item>
      <template #header>
        <p><strong>Try to click me!</strong></p>
      </template>
      <div>
        Lorem ipsum odor amet, consectetuer adipiscing elit. Imperdiet neque arcu fermentum primis at dapibus aliquam neque ipsum. Lacus risus purus ipsum phasellus rutrum sapien tortor nisl. Torquent pellentesque nibh vel; taciti nec sed sagittis amet proin. Magnis aenean nisi cubilia hac dapibus molestie in. Mi massa euismod ligula mauris placerat gravida habitasse tincidunt. Aenean odio imperdiet varius scelerisque condimentum. Rutrum hac aenean lobortis torquent tempor. Taciti quisque molestie dapibus id odio sodales neque sem. Ligula nostra facilisi; ultrices turpis inceptos mus varius ipsum.
      </div>
    </cm-accordion-item>
  </cm-accordion>
</div>

#### Code Example

```html
  <cm-accordion persistent size="md">
    <cm-accordion-item>
      <template #header>
        <p><strong>See my content please</strong></p>
      </template>
      <div>
        Lorem ipsum odor amet, consectetuer adipiscing elit. Imperdiet neque arcu fermentum primis at dapibus aliquam neque ipsum. Lacus risus purus ipsum phasellus rutrum sapien tortor nisl. Torquent pellentesque nibh vel; taciti nec sed sagittis amet proin. Magnis aenean nisi cubilia hac dapibus molestie in. Mi massa euismod ligula mauris placerat gravida habitasse tincidunt. Aenean odio imperdiet varius scelerisque condimentum. Rutrum hac aenean lobortis torquent tempor. Taciti quisque molestie dapibus id odio sodales neque sem. Ligula nostra facilisi; ultrices turpis inceptos mus varius ipsum.
      </div>
    </cm-accordion-item>
    <cm-accordion-item>
      <template #header>
        <p><strong>Try to click me!</strong></p>
      </template>
      <div>
        Lorem ipsum odor amet, consectetuer adipiscing elit. Imperdiet neque arcu fermentum primis at dapibus aliquam neque ipsum. Lacus risus purus ipsum phasellus rutrum sapien tortor nisl. Torquent pellentesque nibh vel; taciti nec sed sagittis amet proin. Magnis aenean nisi cubilia hac dapibus molestie in. Mi massa euismod ligula mauris placerat gravida habitasse tincidunt. Aenean odio imperdiet varius scelerisque condimentum. Rutrum hac aenean lobortis torquent tempor. Taciti quisque molestie dapibus id odio sodales neque sem. Ligula nostra facilisi; ultrices turpis inceptos mus varius ipsum.
      </div>
    </cm-accordion-item>
  </cm-accordion>
```
