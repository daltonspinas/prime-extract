# ContextMenu

ContextMenu displays an overlay menu on right click of its target.

## Features

### Import

```typescript
import { ContextMenuModule } from 'primeng/contextmenu';
```

### Basic

ContextMenu can be attached to a particular element whose local template variable name is defined using the target property.

```html
<img #img src="https://primefaces.org/cdn/primeng/images/demo/nature/nature2.jpg" alt="Logo" aria-haspopup="true" class="w-full md:w-[30rem] rounded shadow-lg" />
<p-contextmenu [target]="img" [model]="items" />
```

### Document

Setting global property to true attaches the context menu to the document.

```html
<p-contextmenu [model]="items" [global]="true" />
```

### Template

ContextMenu offers item customization with the item template that receives the menuitem instance from the model as a parameter.

```html
<ul class="m-0 p-0 list-none border border-surface-200 dark:border-surface-700 rounded p-4 flex flex-col gap-2 w-full md:w-[30rem]">
    <li
        *ngFor="let product of data"
        class="p-2 hover:bg-surface-100 dark:hover:bg-surface-800 rounded border border-transparent transition-all transition-duration-200"
        [ngClass]="{ 'border-primary': selectedId === product.id }"
        (contextmenu)="onContextMenu($event)"
    >
        <div class="flex flex-wrap p-2 items-center gap-4">
            <img class="w-16 shrink-0 rounded" src="https://primefaces.org/cdn/primeng/images/demo/product/{{ product.image }}" [alt]="product.name" />
            <div class="flex-1 flex flex-col gap-1">
                <span class="font-bold">{{ product.name }}</span>
                <div class="flex items-center gap-2">
                    <i class="pi pi-tag text-sm"></i>
                    <span>{{ product.category }}</span>
                </div>
            </div>
            <span class="font-bold ml-8">&#36;{{ product.price }}</span>
        </div>
    </li>
</ul>

<p-contextmenu #cm [model]="items" (onHide)="onHide()">
    <ng-template #item let-item>
        <a pRipple class="flex items-center p-contextmenu-item-link">
            <span [class]="item.icon"></span>
            <span class="ml-2">{{ item.label }}</span>
            <p-badge *ngIf="item.badge" class="ml-auto" [value]="item.badge" />
            <span *ngIf="item.shortcut" class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">{{ item.shortcut }}</span>
            <i *ngIf="item.items" class="pi pi-angle-right ml-auto"></i>
        </a>
    </ng-template>
</p-contextmenu>
```

### Command

The function to invoke when an item is clicked is defined using the command property.

```html
<p-toast />
<ul class="m-0 list-none border border-surface rounded p-4 flex flex-col gap-2 w-full sm:w-96">
    <li
        *ngFor="let user of users"
        class="p-2 hover:bg-emphasis rounded border border-transparent transition-all duration-200 flex items-center justify-content-between"
        [ngClass]="{ 'border-primary': selectedId === user.id }"
        (contextmenu)="onContextMenu($event, user)"
    >
        <div class="flex flex-1 items-center gap-2">
            <img class="w-8 h-8" [alt]="user.name" [src]="'https://primefaces.org/cdn/primeng/images/demo/avatar/' + user.image" />
            <span class="font-bold">{{ user.name }}</span>
        </div>
        <p-tag [value]="user.role" [severity]="getBadge(user)" />
    </li>
</ul>

<p-contextmenu #cm [model]="items" (onHide)="onHide()" />
```

### Router

Menu items support navigation via routerLink, programmatic routing using commands, or external URLs.

```html
<span #span class="inline-flex items-center justify-center border-2 border-primary rounded w-16 h-16" aria-haspopup="true">
    <svg width="31" height="33" viewBox="0 0 31 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="..." fill="var(--p-primary-color)" />
    </svg>
</span>
<p-contextmenu [target]="span" [model]="items" />
```

### Table

Table has built-in support for ContextMenu, see the ContextMenu demo for an example.

### Accessibility

ContextMenu component uses the menubar role with aria-orientation set to "vertical" and the value to describe the menu can either be provided with aria-labelledby or aria-label props. Each list item has a presentation role whereas anchor elements have a menuitem role with aria-label referring to the label of the item and aria-disabled defined if the item is disabled. A submenu within a ContextMenu uses the menu role with an aria-labelledby defined as the id of the submenu root menuitem label. In addition, menuitems that open a submenu have aria-haspopup, aria-expanded and aria-controls to define the relation between the item and the submenu.

### ContextMenu

ContextMenu displays an overlay menu on right click of its target. Note that components like Table has special integration with ContextMenu.

### MenuItem

## API

### ContextMenu API

API defines helper props, events and others for the PrimeNG ContextMenu module.

#### ContextMenu

ContextMenu displays an overlay menu on right click of its target. Note that components like Table has special integration with ContextMenu.

##### Properties

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| model | MenuItem[] | null | An array of menuitems. |
| triggerEvent | string | contextmenu | Event for which the menu must be displayed. |
| target | string | HTMLElement | null | Local template variable name of the element to attach the context menu. |
| global | boolean | false | Attaches the menu to document instead of a particular item. |
| style | { [klass: string]: any } | null | Inline style of the component. |
| styleClass | string | null | Style class of the component. |
| autoZIndex | boolean | true | Whether to automatically manage layering. |
| baseZIndex | number | 0 | Base zIndex value to use in layering. |
| id | string | null | Current id state as a string. |
| breakpoint | string | 960px | The breakpoint to define the maximum width boundary. |
| ariaLabel | string | null | Defines a string value that labels an interactive element. |
| ariaLabelledBy | string | null | Identifier of the underlying input element. |
| pressDelay | number | 500 | Press delay in touch devices as miliseconds. |
| appendTo | InputSignal<any> | 'self' | Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name). |

##### Emitters

Defines emit that determine the behavior of the component based on a given condition or report the actions that the component takes.

| name | parameters | description |
| --- | --- | --- |
| onShow | value :  null | Callback to invoke when overlay menu is shown. |
| onHide | value :  null | Callback to invoke when overlay menu is hidden. |

##### Templates

Defines the templates used by the component.

| name | parameters | description |
| --- | --- | --- |
| item |  | Defines template option for item. |
| submenuicon |  | Defines template option for submenuIcon. |

#### MenuItem

---

[View Official Documentation](https://primeng.org/contextmenu)
