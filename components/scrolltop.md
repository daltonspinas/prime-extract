# ScrollTop

ScrollTop gets displayed after a certain scroll position and used to navigates to the top of the page quickly.

## Features

### Import

```typescript
import { ScrollTopModule } from 'primeng/scrolltop';
```

### Basic

ScrollTop listens window scroll by default.

```html
<p-scrolltop />
```

### Target Element

Setting the target property to parent binds ScrollTop to its parent element that has scrolling content.

```html
<p-scrolltop target="parent" [threshold]="100" icon="pi pi-arrow-up" [buttonProps]="{ severity: 'contrast', raised: true, rounded: true }" />
```

### Accessibility

ScrollTop uses a button element with an aria-label that refers to the aria.scrollTop property of the locale API by default, you may use your own aria roles and attributes as any valid attribute is passed to the button element implicitly.

### ScrollTop

ScrollTop gets displayed after a certain scroll position and used to navigates to the top of the page quickly.

## API

### ScrollTop API

API defines helper props, events and others for the PrimeNG ScrollTop module.

#### ScrollTop

ScrollTop gets displayed after a certain scroll position and used to navigates to the top of the page quickly.

##### Properties

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| styleClass | string | null | Class of the element. |
| style | { [klass: string]: any } | null | Inline style of the element. |
| target | "window" | "parent" | window | Target of the ScrollTop. |
| threshold | number | 400 | Defines the threshold value of the vertical scroll position of the target to toggle the visibility. |
| icon | string | null | Name of the icon or JSX.Element for icon. |
| behavior | "auto" | "smooth" | smooth | Defines the scrolling behavior, "smooth" adds an animation and "auto" scrolls with a jump. |
| showTransitionOptions | string | .15s | A string value used to determine the display transition options. |
| hideTransitionOptions | string | .15s | A string value used to determine the hiding transition options. |
| buttonAriaLabel | string | null | Establishes a string value that labels the scroll-top button. |
| buttonProps | ButtonProps | ... | Used to pass all properties of the ButtonProps to the Button component. |

##### Templates

Defines the templates used by the component.

| name | parameters | description |
| --- | --- | --- |
| icon |  | Template of the icon. |

---

[View Official Documentation](https://primeng.org/scrolltop)
