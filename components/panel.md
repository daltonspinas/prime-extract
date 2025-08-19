# Panel

Panel is a container component with an optional content toggle feature.

## Features

### Import

```typescript
import { PanelModule } from 'primeng/panel';
```

### Basic

A simple Panel is created with a header property along with the content as children.

```html
<p-panel header="Header">
    <p class="m-0">
        Lorem ipsum dolor sit amet...
    </p>
</p-panel>
```

### Toggleable

Content of the panel can be expanded and collapsed using toggleable option, default state is defined with collapsed option. By default, toggle icon is used to toggle the contents whereas setting toggler to "header" enables clicking anywhere in the header to trigger a toggle.

```html
<p-panel header="Header" [toggleable]="true">
    <p class="m-0">
        Lorem ipsum dolor sit amet...
    </p>
</p-panel>
```

### Template

Header and Footers sections can be customized using header and footer templates.

```html
<p-panel [toggleable]="true">
    <ng-template #header>
        <div class="flex items-center gap-2">
            <p-avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
            <span class="font-bold">Amy Elsner</span>
        </div>
    </ng-template>
    <ng-template #footer>
        <div class="flex flex-wrap items-center justify-between gap-4">
            <div class="flex items-center gap-2">
                <p-button icon="pi pi-user" rounded text></p-button>
                <p-button icon="pi pi-bookmark" severity="secondary" rounded text></p-button>
            </div>
            <span class="text-surface-500 dark:text-surface-400">Updated 2 hours ago</span>
        </div>
    </ng-template>
    <ng-template #icons>
        <p-button icon="pi pi-cog" severity="secondary" rounded text (click)="menu.toggle($event)" />
        <p-menu #menu id="config_menu" [model]="items" [popup]="true" />
    </ng-template>
    <p class="m-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
        aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
</p-panel>
```

### Accessibility

Toggleable panels use a content toggle button at the header that has aria-controls to define the id of the content section along with aria-expanded for the visibility state. The value to read the button defaults to the value of the header property and can be customized by defining an aria-label or aria-labelledby via the toggleButtonProps property.

### Panel

Panel is a container with the optional content toggle feature.

## API

### Panel API

API defines helper props, events and others for the PrimeNG Panel module.

#### Panel

Panel is a container with the optional content toggle feature.

##### Properties

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| toggleable | boolean | false | Defines if content of panel can be expanded and collapsed. |
| _header | string | null | Header text of the panel. |
| collapsed | boolean | false | Defines the initial state of panel content, supports one or two-way binding as well. |
| styleClass | string | null | Style class of the component. |
| iconPos | "end" | "center" | "start" | end | Position of the icons. |
| showHeader | boolean | true | Specifies if header of panel cannot be displayed. |
| toggler | "icon" | "header" | icon | Specifies the toggler element to toggle the panel content. |
| transitionOptions | string | 400ms cubic-bezier(0.86, 0, 0.07, 1) | Transition options of the animation. |
| toggleButtonProps | any | null | Used to pass all properties of the ButtonProps to the Button component. |

##### Emitters

Defines emit that determine the behavior of the component based on a given condition or report the actions that the component takes.

| name | parameters | description |
| --- | --- | --- |
| collapsedChange | value :  boolean | Emitted when the collapsed changes. |
| onBeforeToggle | event :  PanelBeforeToggleEvent | Callback to invoke before panel toggle. |
| onAfterToggle | event :  PanelAfterToggleEvent | Callback to invoke after panel toggle. |

##### Templates

Defines the templates used by the component.

| name | parameters | description |
| --- | --- | --- |
| header |  | Defines template option for header. |
| icon |  | Defines template option for icon. |
| content |  | Defines template option for content. |
| footer |  | Defines template option for footer. |
| headericons |  | Defines template option for headerIcon. |

---

[View Official Documentation](https://primeng.org/panel)
