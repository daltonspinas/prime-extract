# TieredMenu

TieredMenu displays submenus in nested overlays.

## Features

### Import

```typescript
import { TieredMenuModule } from 'primeng/tieredmenu';
```

### Basic

TieredMenu requires a collection of menuitems as its model.

```html
<p-tieredmenu [model]="items" />
```

### Popup

Popup mode is enabled by adding popup property and calling toggle method with an event of the target.

```html
<p-button label="Toggle" (click)="menu.toggle($event)" />
<p-tieredmenu #menu [model]="items" [popup]="true" />
```

### Template

TieredMenu offers item customization with the item template that receives the menuitem instance from the model as a parameter.

```html
<p-tieredMenu [model]="items">
    <ng-template #item let-item let-hasSubmenu="hasSubmenu">
        <a pRipple class="flex items-center p-tieredmenu-item-link">
            <span [class]="item.icon" class="p-tieredmenu-item-icon"></span>
            <span class="ml-2">{{ item.label }}</span>
            <p-badge *ngIf="item.badge" class="ml-auto" [value]="item.badge" />
            <span *ngIf="item.shortcut" class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">
                {{ item.shortcut }}
            </span>
            <i *ngIf="hasSubmenu" class="pi pi-angle-right ml-auto"></i>
        </a>
    </ng-template>
</p-tieredMenu>
```

### Command

The command property defines the callback to run when an item is activated by click or a key event.

```html
<p-toast/>
<p-tieredmenu [model]="items" />
```

### Router

Menu items support navigation via routerLink, programmatic routing using commands, or external URLs.

```html
<p-tieredmenu [model]="items" />
```

### Accessibility

TieredMenu component uses the menubar role with aria-orientation set to "vertical" and the value to describe the menu can either be provided with aria-labelledby or aria-label props. Each list item has a presentation role whereas anchor elements have a menuitem role with aria-label referring to the label of the item and aria-disabled defined if the item is disabled. A submenu within a TieredMenu uses the menu role with an aria-labelledby defined as the id of the submenu root menuitem label. In addition, menuitems that open a submenu have aria-haspopup, aria-expanded and aria-controls to define the relation between the item and the submenu.

### TieredMenu

TieredMenu displays submenus in nested overlays.

### MenuItem

## API

### TieredMenu API

API defines helper props, events and others for the PrimeNG TieredMenu module.

#### TieredMenu

TieredMenu displays submenus in nested overlays.

##### Properties

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| model | MenuItem[] | null | An array of menuitems. |
| popup | boolean | false | Defines if menu would displayed as a popup. |
| style | { [klass: string]: any } | null | Inline style of the component. |
| styleClass | string | null | Style class of the component. |
| breakpoint | string | 960px | The breakpoint to define the maximum width boundary. |
| autoZIndex | boolean | true | Whether to automatically manage layering. |
| baseZIndex | number | 0 | Base zIndex value to use in layering. |
| autoDisplay | boolean | true | Whether to show a root submenu on mouse over. |
| showTransitionOptions | string | .12s cubic-bezier(0, 0, 0.2, 1) | Transition options of the show animation. |
| hideTransitionOptions | string | .1s linear | Transition options of the hide animation. |
| id | string | null | Current id state as a string. |
| ariaLabel | string | null | Defines a string value that labels an interactive element. |
| ariaLabelledBy | string | null | Identifier of the underlying input element. |
| disabled | boolean | false | When present, it specifies that the component should be disabled. |
| tabindex | number | 0 | Index of the element in tabbing order. |
| appendTo | InputSignal<any> | 'self' | Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name). |

##### Emitters

Defines emit that determine the behavior of the component based on a given condition or report the actions that the component takes.

| name | parameters | description |
| --- | --- | --- |
| onShow | value :  any | Callback to invoke when overlay menu is shown. |
| onHide | value :  any | Callback to invoke when overlay menu is hidden. |

##### Methods

Defines methods that can be accessed by the component's reference.

| name | parameters | description |
| --- | --- | --- |
| hide | event :  anyisFocus :  boolean | Hides the popup menu. |
| toggle | event :  any | Toggles the visibility of the popup menu. |
| show | event :  anyisFocus :  any | Displays the popup menu. |

##### Templates

Defines the templates used by the component.

| name | parameters | description |
| --- | --- | --- |
| submenuicon |  | Template of the submenu icon. |
| item |  | Template of the item. |

#### MenuItem

---

[View Official Documentation](https://primeng.org/tieredmenu)
