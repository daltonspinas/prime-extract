# ProgressBar

ProgressBar is a process status indicator.

## Import

```typescript
import { ProgressBarModule } from 'primeng/progressbar';
// For dynamic progressbar demo
import { ToastModule } from 'primeng/toast';
```

## Basic

ProgressBar is used with the value property.

```html
<p-progressbar [value]="50" />
```

## Dynamic

Value is reactive so updating it dynamically changes the bar as well.

```html
<p-progressbar [value]="value" />
```

## Template

content template allows displaying custom content inside the progressbar.

```html
<p-progressbar [value]="50">
    <ng-template #content let-value>
        <span>{{value}}/100</span>
    </ng-template>
</p-progressbar>
```

## Indeterminate

For progresses with no value to track, set the mode property to indeterminate.

```html
<p-progressbar mode="indeterminate" [style]="{ height: '6px' }" />
```

## Accessibility

ProgressBar components uses progressbar role along with aria-valuemin, aria-valuemax and aria-valuenow attributes. Value to describe the component can be defined usingaria-labelledby and aria-label props.

```html
<span id="label_status">Status</span>
<p-progressbar aria-labelledby="label_status" />

<p-progressbar aria-label="Status" />
```

## ProgressBar

ProgressBar is a process status indicator.

---

[View Official Documentation](https://primeng.org/progressbar)
