# PanelMenu

PanelMenu is a hybrid of Accordion and Tree components.

## Features

### Import

```typescript
import { PanelMenuModule } from 'primeng/panelmenu';
```

### Basic

PanelMenu requires a collection of menuitems as its model.

```html
<p-panelmenu [model]="items" class="w-full md:w-20rem" />
```

### Multiple

Only one single root menuitem can be active by default, enable multiple property to be able to open more than one items.

```html
<p-panelmenu [model]="items" [style]="{'width':'300px'}" [multiple]="true" />
```

### Controlled

Menu items can be controlled programmatically.

```html
<p-button label="Toggle All" [text]="true" (onClick)="toggleAll()" />
<p-panelmenu [model]="items" class="w-full md:w-80" />
```

### Template

PanelMenu requires a collection of menuitems as its model.

```html
<p-panelmenu [model]="items" class="w-full md:w-80">
    <ng-template #item let-item>
        <a pRipple class="flex items-center px-4 py-2 cursor-pointer group">
            <i [class]="item.icon + ' text-primary group-hover:text-inherit'"></i>
            <span class="ml-2">
                {{ item.label }}
            </span>
            <p-badge *ngIf="item.badge" class="ml-auto" [value]="item.badge" />
            <span *ngIf="item.shortcut" class="ml-auto border border-surface rounded
            bg-emphasis text-muted-color text-xs p-1">
                {{ item.shortcut }}
            </span>
        </a>
    </ng-template>
</p-panelmenu>
```

### Command

The command property defines the callback to run when an item is activated by click or a key event.

```html
<p-toast />
<p-panelmenu [model]="items" class="w-full md:w-80" />
```

### Router

Menu items support navigation via routerLink, programmatic routing using commands, or external URLs.

```html
<p-panelmenu [model]="items" class="w-full md:w-80" />
```

### Accessibility

Accordion header elements have a button role, an aria-label defined using the label property of the menuitem model and aria-controls to define the id of the content section along with aria-expanded for the visibility state.

### PanelMenu

PanelMenu is a hybrid of Accordion and Tree components.

### MenuItem

## API

### PanelMenu API

API defines helper props, events and others for the PrimeNG PanelMenu module.

#### PanelMenu

PanelMenu is a hybrid of Accordion and Tree components.

##### Properties

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| model | MenuItem[] | null | An array of menuitems. |
| styleClass | string | null | Style class of the component. |
| multiple | boolean | false | Whether multiple tabs can be activated at the same time or not. |
| transitionOptions | string | 400ms cubic-bezier(0.86, 0, 0.07, 1) | Transition options of the animation. |
| id | string | null | Current id state as a string. |
| tabindex | number | 0 | Index of the element in tabbing order. |

##### Methods

Defines methods that can be accessed by the component's reference.

| name | parameters | description |
| --- | --- | --- |
| collapseAll |  | Collapses open panels. |

##### Templates

Defines the templates used by the component.

| name | parameters | description |
| --- | --- | --- |
| submenuicon |  | Template option of submenu icon. |
| headericon |  | Template option of header icon. |
| item |  | Template option of item. |

#### MenuItem

---

[View Official Documentation](https://primeng.org/panelmenu)
