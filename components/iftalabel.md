# IftaLabel

IftaLabel is used to create infield top aligned labels.

## Features

### Import

```typescript
import { IftaLabelModule } from 'primeng/iftalabel';
```

### Basic

IftaLabel is used by wrapping the input and its label.

```html
<p-iftalabel>
    <input pInputText id="username" [(ngModel)]="value" />
    <label for="username">Username</label>
</p-iftalabel>
```

### Invalid

When the form element is invalid, the label is also highlighted.

```html
<p-iftalabel>
    <input pInputText id="username" [(ngModel)]="value" [invalid]="!value" />
    <label for="username">Username</label>
</p-iftalabel>
```

### Accessibility

IftaLabel does not require any roles and attributes.

### IftaLabel

IftaLabel is used to create infield top aligned labels.

## API

### IftaLabel API

API defines helper props, events and others for the PrimeNG IftaLabel module.

#### IftaLabel

IftaLabel is used to create infield top aligned labels.

---

[View Official Documentation](https://primeng.org/iftalabel)
