# ProgressSpinner

ProgressSpinner is a process status indicator.

## Import

```typescript
import { ProgressSpinnerModule } from 'primeng/progressspinner';
```

## Basic

An infinite spin animation is displayed by default.

```html
<p-progress-spinner ariaLabel="loading" />
```

## Custom

ProgressSpinner can be customized with styling property like strokeWidth and fill.

```html
<p-progress-spinner strokeWidth="8" fill="transparent" animationDuration=".5s" [style]="{ width: '50px', height: '50px' }" />
```

## Accessibility

ProgressSpinner components uses progressbar role. Value to describe the component can be defined using aria-labelledby and aria-label props.

```html
<p-progress-spinner aria-label="Loading"></p-progress-spinner>
```

## ProgressSpinner

ProgressSpinner is a process status indicator.

---

[View Official Documentation](https://primeng.org/progressspinner)
