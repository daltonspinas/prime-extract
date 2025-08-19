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

## Theming

### ProgressSpinner Theming

#### CSS Classes

List of class names used in the styled mode.

| class | description |
| --- | --- |
| p-progressspinner | Class name of the root element |
| p-progressspinner-spin | Class name of the spin element |
| p-progressspinner-circle | Class name of the circle element |

#### ProgressSpinner Design Tokens

List of design tokens used in a preset.

| name | token | variable | description |
| --- | --- | --- | --- |
| progressspinner.root.colorOne | progressspinner.color.one | --p-progressspinner-color-one | Color one of root |
| progressspinner.root.colorTwo | progressspinner.color.two | --p-progressspinner-color-two | Color two of root |
| progressspinner.root.colorThree | progressspinner.color.three | --p-progressspinner-color-three | Color three of root |
| progressspinner.root.colorFour | progressspinner.color.four | --p-progressspinner-color-four | Color four of root |

#### Built-in Presets

PrimeNG offers various preset options that allow you to customize the component's styling to match your application's design system. Below you'll find links to the implementation and type definitions for each preset.

| Preset | Implementation | Types |
| --- | --- | --- |
| Aura | Aura | Aura |
| Lara | Lara | Lara |
| Nora | Nora | Nora |
| Material | Material | Material |

---

[View Official Documentation](https://primeng.org/progressspinner)
