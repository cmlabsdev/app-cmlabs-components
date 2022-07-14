<p class="text-md text-dark-10 dark:text-gray-40">
  The alert component provides a wrapper component with opinionated stylings which you can always reset with TailwindCSS classes.  
  The main focus on this is to provide a reusable styling and markup templating.
</p>

## Basic Usage

This minimal example will get you started with the basic usage to render an alert. Please use the `variant` props to render a
specific color set (although you can use TailwindCSS classes) this is to maintain consistency accross your application.

<div style="display: flex; flex-direction: column; gap: 8px; margin-top: 16px;">
  <cm-alert> Primary Alert! </cm-alert>
  <cm-alert variant="secondary"> Secondary Alert! </cm-alert>
  <cm-alert variant="info"> Info Alert! </cm-alert>
  <cm-alert variant="success"> Success Alert! </cm-alert>
  <cm-alert variant="danger"> Danger Alert! </cm-alert>
  <cm-alert variant="warning"> Warning Alert! </cm-alert>
  <cm-alert variant="dark"> Dark Alert! </cm-alert>
  <cm-alert variant="unset"> Unset Alert! </cm-alert>
</div>

#### Code Example

```html
  <cm-alert> Primary Alert! </cm-alert>
  <cm-alert variant="secondary"> Secondary Alert! </cm-alert>
  <cm-alert variant="info"> Info Alert! </cm-alert>
  <cm-alert variant="success"> Success Alert! </cm-alert>
  <cm-alert variant="danger"> Danger Alert! </cm-alert>
  <cm-alert variant="warning"> Warning Alert! </cm-alert>
  <cm-alert variant="dark"> Dark Alert! </cm-alert>
  <cm-alert variant="unset"> Unset Alert! </cm-alert>
```

## Alert Types

The alert has three types which you can specify. For now, only `filled`, `soft`, and `outline` types are supported
where filled is the default type.  
Use the `type` props with the available types as the value set.

<div style="display: flex; flex-direction: column; gap: 8px; margin-top: 16px;">
  <cm-alert type="soft"> Primary Alert! </cm-alert>
  <cm-alert type="soft" variant="secondary"> Secondary Alert! </cm-alert>
  <cm-alert type="soft" variant="info"> Info Alert! </cm-alert>
  <cm-alert type="soft" variant="success"> Success Alert! </cm-alert>
  <cm-alert type="soft" variant="danger"> Danger Alert! </cm-alert>
  <cm-alert type="soft" variant="warning"> Warning Alert! </cm-alert>
  <cm-alert type="soft" variant="dark"> Dark Alert! </cm-alert>
  <cm-alert type="soft" variant="unset"> Unset Alert! </cm-alert>
</div>

<div style="display: flex; flex-direction: column; gap: 8px; margin-top: 16px;">
  <cm-alert type="outline"> Primary Alert! </cm-alert>
  <cm-alert type="outline" variant="secondary"> Secondary Alert! </cm-alert>
  <cm-alert type="outline" variant="info"> Info Alert! </cm-alert>
  <cm-alert type="outline" variant="success"> Success Alert! </cm-alert>
  <cm-alert type="outline" variant="danger"> Danger Alert! </cm-alert>
  <cm-alert type="outline" variant="warning"> Warning Alert! </cm-alert>
  <cm-alert type="outline" variant="dark"> Dark Alert! </cm-alert>
  <cm-alert type="outline" variant="unset"> Unset Alert! </cm-alert>
</div>

#### Code Example

```html
  <cm-alert type="soft"> Primary Alert! </cm-alert>
  <cm-alert type="soft" variant="secondary"> Secondary Alert! </cm-alert>
  <cm-alert type="soft" variant="info"> Info Alert! </cm-alert>
  <cm-alert type="soft" variant="success"> Success Alert! </cm-alert>
  <cm-alert type="soft" variant="danger"> Danger Alert! </cm-alert>
  <cm-alert type="soft" variant="warning"> Warning Alert! </cm-alert>
  <cm-alert type="soft" variant="dark"> Dark Alert! </cm-alert>
  <cm-alert type="soft" variant="unset"> Unset Alert! </cm-alert>

  <cm-alert type="outline"> Primary Alert! </cm-alert>
  <cm-alert type="outline" variant="secondary"> Secondary Alert! </cm-alert>
  <cm-alert type="outline" variant="info"> Info Alert! </cm-alert>
  <cm-alert type="outline" variant="success"> Success Alert! </cm-alert>
  <cm-alert type="outline" variant="danger"> Danger Alert! </cm-alert>
  <cm-alert type="outline" variant="warning"> Warning Alert! </cm-alert>
  <cm-alert type="outline" variant="dark"> Dark Alert! </cm-alert>
  <cm-alert type="outline" variant="unset"> Unset Alert! </cm-alert>
```

## Programatically Rendering and Destroying the Alert

The alert does not expose props to show or to hide the component itself. Instead, you should use a `v-if` wrapper on the
alert component your own. With this implementation, it is nice to put the enter and leaving transition apart from the alert
presentation.

#### Code Example

```html
  <template v-if="showAlert">
    <!-- Implement your own transition -->
    <transition>
      <cm-alert>
        Toggle me please!
      </cm-alert>
    </transition>
  </template>
```

