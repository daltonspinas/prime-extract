# Menu

Menu is a navigation / command component that supports dynamic and static positioning.

## Features

### Import

```typescript
import { MenuModule } from 'primeng/menu';
```

### Basic

Menu requires a collection of menuitems as its model.

```html
<p-menu [model]="items" />
```

### Group

Menu supports one level of nesting by defining children with items property.

```html
<p-menu [model]="items" />
```

### Popup

Popup mode is enabled by setting popup property to true and calling toggle method with an event of the target.

```html
<p-menu #menu [model]="items" [popup]="true" />
<p-button (click)="menu.toggle($event)" icon="pi pi-ellipsis-v"/>
```

### Template

Menu offers item customization with the item template that receives the menuitem instance from the model as a parameter. The submenu header has its own submenuheader template, additional slots named start and end are provided to embed content before or after the menu.

```html
<p-menu [model]="items" class="flex justify-center" styleClass="w-full md:w-60">
    <ng-template #start>
        <span class="inline-flex items-center gap-1 px-2 py-2">
            <svg width="33" height="35" viewBox="0 0 33 35" fill="none" xmlns="http://www.w3.org/2000/svg" class="block mx-auto">
                <path d="..." fill="var(--primary-color)" />
            </svg>
            <span class="text-xl font-semibold">
                PRIME<span class="text-primary">APP</span>
            </span>
        </span>
    </ng-template>
    <ng-template #submenuheader let-item>
        <span class="text-primary font-bold">{{ item.label }}</span>
    </ng-template>
    <ng-template #item let-item>
        <a pRipple class="flex items-center p-menu-item-link">
            <span [class]="item.icon"></span>
            <span class="ml-2">{{ item.label }}</span>
            <p-badge *ngIf="item.badge" class="ml-auto" [value]="item.badge" />
            <span *ngIf="item.shortcut" class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">
                {{ item.shortcut }}
            </span>
        </a>
    </ng-template>
    <ng-template #end>
        <button pRipple class="relative overflow-hidden w-full border-0 bg-transparent flex items-start p-2 pl-4 hover:bg-surface-100 dark:hover:bg-surface-800 rounded-none cursor-pointer transition-colors duration-200">
            <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" class="mr-2" shape="circle" />
            <span class="inline-flex flex-col">
                <span class="font-bold">Amy Elsner</span>
                <span class="text-sm">Admin</span>
            </span>
        </button>
    </ng-template>
</p-menu>
```

### Command

The function to invoke when an item is clicked is defined using the command property.

```html
<p-toast />
<p-menu [model]="items" />
```

### Router

Menu items support navigation via routerLink, programmatic routing using commands, or external URLs.

```html
<p-menu [model]="items" />
```

### Accessibility

Menu component uses the menu role and the value to describe the menu can either be provided with aria-labelledby or aria-label props. Each list item has a presentation role whereas anchor elements have a menuitem role with aria-label referring to the label of the item and aria-disabled defined if the item is disabled. A submenu within a Menu uses the group role with an aria-labelledby defined as the id of the submenu root menuitem label.

### Menu

Menu is a navigation / command component that supports dynamic and static positioning.

### MenuItem

## API

### Menu API

API defines helper props, events and others for the PrimeNG Menu module.

#### Menu

Menu is a navigation / command component that supports dynamic and static positioning.

##### Properties

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| model | MenuItem[] | null | An array of menuitems. |
| popup | boolean | false | Defines if menu would displayed as a popup. |
| style | { [klass: string]: any } | null | Inline style of the component. |
| styleClass | string | null | Style class of the component. |
| autoZIndex | boolean | true | Whether to automatically manage layering. |
| baseZIndex | number | 0 | Base zIndex value to use in layering. |
| showTransitionOptions | string | .12s cubic-bezier(0, 0, 0.2, 1) | Transition options of the show animation. |
| hideTransitionOptions | string | .1s linear | Transition options of the hide animation. |
| ariaLabel | string | null | Defines a string value that labels an interactive element. |
| ariaLabelledBy | string | null | Identifier of the underlying input element. |
| id | string | null | Current id state as a string. |
| tabindex | number | 0 | Index of the element in tabbing order. |
| appendTo | InputSignal<any> | 'self' | Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name). |

##### Emitters

Defines emit that determine the behavior of the component based on a given condition or report the actions that the component takes.

| name | parameters | description |
| --- | --- | --- |
| onShow | value :  any | Callback to invoke when overlay menu is shown. |
| onHide | value :  any | Callback to invoke when overlay menu is hidden. |
| onBlur | event :  Event | Callback to invoke when the list loses focus. |
| onFocus | event :  Event | Callback to invoke when the list receives focus. |

##### Methods

Defines methods that can be accessed by the component's reference.

| name | parameters | description |
| --- | --- | --- |
| toggle | event :  Event | Toggles the visibility of the popup menu. |
| show | event :  any | Displays the popup menu. |
| hide |  | Hides the popup menu. |

##### Templates

Defines the templates used by the component.

| name | parameters | description |
| --- | --- | --- |
| start |  | Defines template option for start. |
| end |  | Defines template option for end. |
| header |  | Defines template option for header. |
| item |  | Defines template option for item. |
| submenuheader |  | Defines template option for item. |

#### MenuItem

---

[View Official Documentation](https://primeng.org/menu)
