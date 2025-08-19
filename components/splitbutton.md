# SplitButton

SplitButton groups a set of commands in an overlay with a default action item.

## Features

### Import

```typescript
import { SplitButtonModule } from 'primeng/splitbutton';
```

### Basic

SplitButton has a default action button and a collection of additional options defined by the model property based on MenuModel API.

```html
<p-splitbutton label="Save" (onClick)="save()" [model]="items" />
```

### Icons

The buttons and menuitems have support to display icons.

```html
<p-splitbutton label="Save" icon="pi pi-check" dropdownIcon="pi pi-cog" [model]="items" />
```

### Nested

SplitButton has a default action button and a collection of additional options defined by the model property based on MenuModel API.

```html
<p-splitbutton label="Save" (onClick)="save('info')" [model]="items" />
```

### Severity

The severity property defines the type of button.

```html
<p-splitbutton label="Save" (onClick)="save()" [model]="items" />
<p-splitbutton label="Save" (onClick)="save()" [model]="items" severity="secondary" />
<p-splitbutton label="Save" (onClick)="save()" [model]="items" severity="success" />
<p-splitbutton label="Save" (onClick)="save()" [model]="items" severity="info" />
<p-splitbutton label="Save" (onClick)="save()" [model]="items" severity="warn" />
<p-splitbutton label="Save" (onClick)="save()" [model]="items" severity="help" />
<p-splitbutton label="Save" (onClick)="save()" [model]="items" severity="danger" />
```

### Disabled

When the disabled attribute is present, the element is uneditable and unfocused. Additionally, the disabled states of the button and menu button can be handled independently. The button is disabled when buttonDisabled is present, and the menu button is disabled when menuButtonDisabled is present.

```html
<p-splitbutton label="Save" icon="pi pi-plus" (onClick)="save('info')" [model]="items" [disabled]="true" />
```

### Raised

Raised buttons display a shadow to indicate elevation.

```html
<p-splitbutton label="Primary" [model]="items" (onClick)="save('info')" raised />
<p-splitbutton label="Secondary" [model]="items" (onClick)="save('info')" raised severity="secondary" />
<p-splitbutton label="Success" [model]="items" (onClick)="save('info')" raised severity="success" />
<p-splitbutton label="Info" [model]="items" (onClick)="save('info')" raised severity="info" />
<p-splitbutton label="Warning" [model]="items" (onClick)="save('info')" raised severity="warn" />
<p-splitbutton label="Help" [model]="items" (onClick)="save('info')" raised severity="help" />
<p-splitbutton label="Danger" [model]="items" (onClick)="save('info')" raised severity="danger" />
<p-splitbutton label="Contrast" (onClick)="save('info')" [model]="items" severity="contrast" />
```

### Rounded

Rounded buttons have a circular border radius.

```html
<p-splitbutton label="Primary" [model]="items" (onClick)="save('info')" rounded />
<p-splitbutton label="Secondary" [model]="items" (onClick)="save('info')" rounded severity="secondary" />
<p-splitbutton label="Success" [model]="items" (onClick)="save('info')" rounded severity="success" />
<p-splitbutton label="Info" [model]="items" (onClick)="save('info')" rounded severity="info" />
<p-splitbutton label="Warning" [model]="items" (onClick)="save('info')" rounded severity="warn" />
<p-splitbutton label="Help" [model]="items" (onClick)="save('info')" rounded severity="help" />
<p-splitbutton label="Danger" [model]="items" (onClick)="save('info')" rounded severity="danger" />
<p-splitbutton label="Contrast" [model]="items" (onClick)="save('info')" rounded severity="contrast" />
```

### Text

Text buttons are displayed as textual elements.

```html
<p-splitbutton label="Primary" [model]="items" (onClick)="save('info')" text />
<p-splitbutton label="Secondary" [model]="items" (onClick)="save('info')" text severity="secondary" />
<p-splitbutton label="Success" [model]="items" (onClick)="save('info')" text severity="success" />
<p-splitbutton label="Info" [model]="items" (onClick)="save('info')" text severity="info" />
<p-splitbutton label="Warning" [model]="items" (onClick)="save('info')" text severity="warn" />
<p-splitbutton label="Help" [model]="items" (onClick)="save('info')" text severity="help" />
<p-splitbutton label="Danger" [model]="items" (onClick)="save('info')" text severity="danger" />
<p-splitbutton label="Contrast" [model]="items" (onClick)="save('info')" text severity="contrast" />
```

### Raised Text

Text buttons can be displayed as raised as well for elevation.

```html
<p-splitbutton label="Primary" [model]="items" (onClick)="save('info')" raised text />
<p-spliButton label="Secondary" [model]="items" (onClick)="save('info')" raised text severity="secondary" />
<p-splitbutton label="Success" [model]="items" (onClick)="save('info')" raised text severity="success" />
<p-splitbutton label="Info" [model]="items" (onClick)="save('info')" raised text severity="info" />
<p-splitbutton label="Warning" [model]="items" (onClick)="save('info')" raised text severity="warn" />
<p-splitbutton label="Help" [model]="items" (onClick)="save('info')" raised text severity="help" />
<p-splitbutton label="Danger" [model]="items" (onClick)="save('info')" raised text severity="danger" />
<p-splitbutton label="Contrast" [model]="items" (onClick)="save('info')" raised text severity="contrast" />
```

### Outlined

Outlined buttons display a border without a background initially.

```html
<p-splitbutton label="Primary" [model]="items" (onClick)="save('info')" outlined />
<p-splitbutton label="Secondary" [model]="items" (onClick)="save('info')" outlined severity="secondary" />
<p-splitbutton label="Success" [model]="items" (onClick)="save('info')" outlined severity="success" />
<p-splitbutton label="Info" [model]="items" (onClick)="save('info')" outlined severity="info" />
<p-splitbutton label="Warning" [model]="items" (onClick)="save('info')" outlined severity="warn" />
<p-splitbutton label="Help" [model]="items" (onClick)="save('info')" outlined severity="help" />
<p-splitbutton label="Danger" [model]="items" (onClick)="save('info')" outlined severity="danger" />
<p-splitbutton label="Contrast" [model]="items" (onClick)="save('info')" outlined severity="contrast" />
```

### Sizes

SplitButton provides small and large sizes as alternatives to the standard.

```html
<p-splitbutton label="Small" [model]="items" (onClick)="save('info')" size="small" />
<p-splitbutton label="Normal" [model]="items" (onClick)="save('info')" />
<p-splitbutton label="Large" [model]="items" (onClick)="save('info')" size="large" />
```

### Template

SplitButton has a default action button and a collection of additional options defined by the model property based on MenuModel API.

```html
<p-splitbutton label="Save" (onClick)="save()" severity="contrast" [model]="items">
    <ng-template #content>
        <span class="flex items-center font-bold">
            <img alt="logo" src="https://primefaces.org/cdn/primeng/images/logo.svg" style="height: 1rem; margin-right: 0.5rem" />
            <span>PrimeNG</span>
        </span>
    </ng-template>
</p-splitbutton>
```

### Accessibility

SplitButton component renders two native button elements, main button uses the label property to define aria-label by default which can be customized with buttonProps. Dropdown button requires an explicit definition to describe it using menuButtonProps option and also includes aria-haspopup, aria-expanded for states along with aria-controls to define the relation between the popup and the button.

```html
<p-splitbutton [buttonProps]="{'aria-label': 'Default Action'}" [menuButtonProps]="{'aria-label': 'More Options'}" />
```

### SplitButton

SplitButton groups a set of commands in an overlay with a default command.

## API

### SplitButton API

API defines helper props, events and others for the PrimeNG SplitButton module.

#### SplitButton

SplitButton groups a set of commands in an overlay with a default command.

##### Properties

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| model | MenuItem[] | null | MenuModel instance to define the overlay items. |
| severity | "info" | "success" | "warn" | "danger" | "secondary" | "contrast" | "help" | "primary" | null | Defines the style of the button. |
| raised | boolean | false | Add a shadow to indicate elevation. |
| rounded | boolean | false | Add a circular border radius to the button. |
| text | boolean | false | Add a textual class to the button without a background initially. |
| outlined | boolean | false | Add a border class without a background initially. |
| size | "small" | "large" | null | Defines the size of the button. |
| plain | boolean | false | Add a plain textual class to the button without a background initially. |
| icon | string | null | Name of the icon. |
| iconPos | SplitButtonIconPosition | left | Position of the icon. |
| label | string | null | Text of the button. |
| tooltip | string | null | Tooltip for the main button. |
| tooltipOptions | TooltipOptions | null | Tooltip options for the main button. |
| styleClass | string | null | Class of the element. |
| menuStyle | { [klass: string]: any } | null | Inline style of the overlay menu. |
| menuStyleClass | string | null | Style class of the overlay menu. |
| dropdownIcon | string | null | Name of the dropdown icon. |
| appendTo | any | body | Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name). |
| dir | string | null | Indicates the direction of the element. |
| expandAriaLabel | string | null | Defines a string that labels the expand button for accessibility. |
| showTransitionOptions | string | .12s cubic-bezier(0, 0, 0.2, 1) | Transition options of the show animation. |
| hideTransitionOptions | string | .1s linear | Transition options of the hide animation. |
| autofocus | boolean | false | When present, it specifies that the component should automatically get focus on load. |
| disabled | boolean | null | When present, it specifies that the element should be disabled. |
| tabindex | number | null | Index of the element in tabbing order. |
| menuButtonDisabled | boolean | false | When present, it specifies that the menu button element should be disabled. |
| buttonDisabled | boolean | false | When present, it specifies that the button element should be disabled. |

##### Emitters

Defines emit that determine the behavior of the component based on a given condition or report the actions that the component takes.

| name | parameters | description |
| --- | --- | --- |
| onClick | event :  MouseEvent | Callback to invoke when default command button is clicked. |
| onMenuHide | value :  any | Callback to invoke when overlay menu is hidden. |
| onMenuShow | value :  any | Callback to invoke when overlay menu is shown. |
| onDropdownClick | event :  MouseEvent | Callback to invoke when dropdown button is clicked. |

##### Templates

Defines the templates used by the component.

| name | parameters | description |
| --- | --- | --- |
| content |  | Template of the content. |
| dropdownicon |  | Template of the dropdownicon. |

---

[View Official Documentation](https://primeng.org/splitbutton)
