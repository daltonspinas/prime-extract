# MegaMenu

MegaMenu is navigation component that displays submenus together.

## Features

### Import

```typescript
import { MegaMenuModule } from 'primeng/megamenu';
```

### Basic

MegaMenu requires a collection of menuitems as its model.

```html
<p-megamenu [model]="items" />
```

### Vertical

Layout of the MegaMenu is changed with the orientation property that accepts horizontal and vertical as options.

```html
<p-megamenu [model]="items" orientation="vertical" />
```

### Template

Custom content can be placed between p-megamenu tags. Megamenu should be horizontal for custom content.

```html
<p-megamenu [model]="items" [style]="{ 'border-radius': '3rem', display: 'flex' }" class="p-4 bg-surface-0 dark:bg-surface-900">
    <ng-template #start>
        <svg width="33" height="35" viewBox="0 0 33 35" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-8">
            <path d="..." fill="var(--primary-color)" />
        </svg>
    </ng-template>
    <ng-template #item let-item>
        <a *ngIf="item.root" pRipple class="flex items-center cursor-pointer px-4 py-2 overflow-hidden relative font-semibold text-lg uppercase" style="border-radius: 2rem">
            <i [ngClass]="item.icon"></i>
            <span class="ml-2">{{ item.label }}</span>
        </a>
        <a *ngIf="!item.root && !item.image" class="flex items-center p-4 cursor-pointer mb-2 gap-2">
            <span class="inline-flex items-center justify-center rounded-full bg-primary text-primary-contrast w-12 h-12">
                <i [ngClass]="item.icon + ' text-lg'"></i>
            </span>
            <span class="inline-flex flex-col gap-1">
                <span class="font-medium text-lg text-surface-900 dark:text-surface-0">{{ item.label }}</span>
                <span class="whitespace-nowrap">{{ item.subtext }}</span>
            </span>
        </a>
        <div *ngIf="item.image" class="flex flex-col items-start gap-4">
            <img [src]="item.image" alt="megamenu-demo" class="w-full" />
            <span>{{ item.subtext }}</span>
            <p-button [label]="item.label" [outlined]="true"></p-button>
        </div>
    </ng-template>
    <ng-template #end>
        <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" shape="circle" />
    </ng-template>
</p-megamenu>
```

### Command

The command property of a menuitem defines the callback to run when an item is activated by click or a key event.

```text
{
    label: 'Log out',
    icon: 'pi pi-signout',
    command: () => {
        // Callback to run
    }
}
```

### Router

Menu items support navigation via routerLink, programmatic routing using commands, or external URLs.

```html
<p-megamenu [model]="items" />
```

### Accessibility

MegaMenu component uses the menubar role along with aria-orientation and the value to describe the component can either be provided with aria-labelledby or aria-label props. Each list item has a presentation role whereas anchor elements have a menuitem role with aria-label referring to the label of the item and aria-disabled defined if the item is disabled. A submenu within a MegaMenu uses the menu role with an aria-labelledby defined as the id of the submenu root menuitem label. In addition, root menuitems that open a submenu have aria-haspopup, aria-expanded and aria-controls to define the relation between the item and the submenu.

### MegaMenu

MegaMenu is navigation component that displays submenus together.

### MegaMenuItem

## API

### MegaMenu API

API defines helper props, events and others for the PrimeNG MegaMenu module.

#### MegaMenu

MegaMenu is navigation component that displays submenus together.

##### Properties

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| model | MegaMenuItem[] | null | An array of menuitems. |
| styleClass | string | null | Class of the element. |
| orientation | string | horizontal | Defines the orientation. |
| id | string | null | Current id state as a string. |
| ariaLabel | string | null | Defines a string value that labels an interactive element. |
| ariaLabelledBy | string | null | Identifier of the underlying input element. |
| breakpoint | string | 960px | The breakpoint to define the maximum width boundary. |
| scrollHeight | string | 20rem | Height of the viewport, a scrollbar is defined if height of list exceeds this value. |
| disabled | boolean | false | When present, it specifies that the component should be disabled. |
| tabindex | number | 0 | Index of the element in tabbing order. |

##### Templates

Defines the templates used by the component.

| name | parameters | description |
| --- | --- | --- |
| start |  | Defines template option for start. |
| end |  | Defines template option for end. |
| menuicon |  | Defines template option for menu icon. |
| submenuicon |  | Defines template option for submenu icon. |
| item |  | Defines template option for submenu icon. |
| button |  | Custom menu button template on responsive mode. |
| buttonicon |  | Custom menu button icon template on responsive mode. |

#### MegaMenuItem

---

[View Official Documentation](https://primeng.org/megamenu)
