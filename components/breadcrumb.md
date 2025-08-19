# Breadcrumb

Breadcrumb provides contextual information about page hierarchy.

## Features

### Import

```typescript
import { BreadcrumbModule } from 'primeng/breadcrumb';
```

### Basic

Breadcrumb provides contextual information about page hierarchy.

```html
<p-breadcrumb [model]="items" [home]="home" />
```

### Template

Custom content can be placed inside the items using the item template. The divider between the items has its own separator template.

```html
<p-breadcrumb [model]="items" [home]="home">
    <ng-template #item let-item>
        <a class="cursor-pointer" [routerLink]="item.url">
            <i [class]="item.icon"></i>
        </a>
    </ng-template>
    <ng-template #separator> / </ng-template>
</p-breadcrumb>
```

### Router

Menu items support navigation via routerLink, programmatic routing using commands, or external URLs.

```html
<p-breadcrumb [home]="home" [model]="items" />
```

### Accessibility

Breadcrumb uses the nav element and since any attribute is passed to the root implicitly aria-labelledby or aria-label can be used to describe the component. Inside an ordered list is used where the list item separators have aria-hidden to be able to ignored by the screen readers. If the last link represents the current route, aria-current is added with "page" as the value.

### Breadcrumb

Breadcrumb provides contextual information about page hierarchy.

### MenuItem

## API

### Breadcrumb API

API defines helper props, events and others for the PrimeNG Breadcrumb module.

#### Breadcrumb

Breadcrumb provides contextual information about page hierarchy.

##### Properties

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| model | MenuItem[] | null | An array of menuitems. |
| style | { [klass: string]: any } | null | Inline style of the component. |
| styleClass | string | null | Style class of the component. |
| home | MenuItem | null | MenuItem configuration for the home icon. |
| homeAriaLabel | string | null | Defines a string that labels the home icon for accessibility. |

##### Emitters

Defines emit that determine the behavior of the component based on a given condition or report the actions that the component takes.

| name | parameters | description |
| --- | --- | --- |
| onItemClick | event :  BreadcrumbItemClickEvent | Fired when an item is selected. |

##### Templates

Defines the templates used by the component.

| name | parameters | description |
| --- | --- | --- |
| item |  | Defines template option for item. |
| separator |  | Defines template option for separator. |

#### MenuItem

---

[View Official Documentation](https://primeng.org/breadcrumb)
