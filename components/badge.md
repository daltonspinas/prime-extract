# Badge

Badge is a small status indicator for another element.

## Features

### Import

```typescript
import { BadgeModule } from 'primeng/badge';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
```

### Basic

Content of the badge is specified using the value property.

```html
<p-badge value="2" />
```

### Severity

Severity defines the color of the badge, possible values are success, info, warn and danger

```html
<p-badge [value]="2" severity="success" />
```

### Size

Badge sizes are adjusted with the badgeSize property that accepts small, large and xlarge as the possible alternatives to the default size. Currently sizes only apply to component mode.

```html
<p-badge value="8" badgeSize="xlarge" severity="success" />
```

### Overlay

A badge can be added to any element by encapsulating the content with the OverlayBadge component.

```html
<p-overlaybadge value="2">
    <i class="pi pi-bell" style="font-size: 2rem"></i>
</p-overlaybadge>
<p-overlaybadge value="4" severity="danger">
    <i class="pi pi-calendar" style="font-size: 2rem"></i>
</p-overlaybadge>
<p-overlaybadge severity="danger">
    <i class="pi pi-envelope" style="font-size: 2rem"></i>
</p-overlaybadge>
```

### Button

Buttons have built-in support for badges to display a badge inline.

```html
<p-button label="Emails" icon="pi pi-bell" label="Notifications" badge="2" />
```

### Accessibility

Badge does not include any roles and attributes by default, any attribute is passed to the root element so aria roles and attributes can be added if required. If the badges are dynamic, aria-live may be utilized as well. In case badges need to be tabbable, tabIndex can be added to implement custom key handlers.

### Badge

Badge is a small status indicator for another element.

### BadgeDirective

Badge Directive is directive usage of badge component.

## API

### Badge API

API defines helper props, events and others for the PrimeNG Badge module.

#### Badge

Badge is a small status indicator for another element.

##### Properties

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| styleClass | InputSignal<string> | ... | Class of the element. |
| badgeSize | InputSignal<"small" | "large" | "xlarge"> | ... | Size of the badge, valid options are "large" and "xlarge". |
| size | InputSignal<"small" | "large" | "xlarge"> | ... | Size of the badge, valid options are "large" and "xlarge". |
| severity | InputSignal<"info" | "success" | "warn" | "danger" | "secondary" | "contrast"> | ... | Severity type of the badge. |
| value | InputSignal<string | number> | ... | Value to display inside the badge. |
| badgeDisabled | InputSignalWithTransform<boolean, boolean> | ... | When specified, disables the component. |

#### BadgeDirective

Badge Directive is directive usage of badge component.

##### Properties

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| disabled | boolean | false | When specified, disables the component. |
| badgeSize | "small" | "large" | "xlarge" | null | Size of the badge, valid options are "large" and "xlarge". |
| size | "small" | "large" | "xlarge" | null | Size of the badge, valid options are "large" and "xlarge". |
| severity | "info" | "success" | "warn" | "danger" | "secondary" | "contrast" | null | Severity type of the badge. |
| value | string | number | null | Value to display inside the badge. |
| badgeStyle | { [klass: string]: any } | null | Inline style of the element. |
| badgeStyleClass | string | null | Class of the element. |

---

[View Official Documentation](https://primeng.org/badge)
