# ProgressSpinner

ProgressSpinner is a process status indicator.

## Features

### Import

```typescript
import { ProgressSpinnerModule } from 'primeng/progressspinner';
```

### Basic

An infinite spin animation is displayed by default.

```html
<p-progress-spinner ariaLabel="loading" />
```

### Custom

ProgressSpinner can be customized with styling property like strokeWidth and fill.

```html
<p-progress-spinner strokeWidth="8" fill="transparent" animationDuration=".5s" [style]="{ width: '50px', height: '50px' }" />
```

### Accessibility

ProgressSpinner components uses progressbar role. Value to describe the component can be defined using aria-labelledby and aria-label props.

```html
<p-progress-spinner aria-label="Loading"></p-progress-spinner>
```

### ProgressSpinner

ProgressSpinner is a process status indicator.

## API

### ProgressSpinner API

API defines helper props, events and others for the PrimeNG ProgressSpinner module.

#### ProgressSpinner

ProgressSpinner is a process status indicator.

##### Properties

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| styleClass | string | null | Class of the element. |
| strokeWidth | string | 2 | Width of the circle stroke. |
| fill | string | none | Color for the background of the circle. |
| animationDuration | string | 2s | Duration of the rotate animation. |
| ariaLabel | string | null | Used to define a aria label attribute the current element. |

---

[View Official Documentation](https://primeng.org/progressspinner)
