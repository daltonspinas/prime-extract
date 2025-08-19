# Fieldset

Fieldset is a grouping component with a content toggle feature.

## Features

### Import

```typescript
import { FieldsetModule } from 'primeng/fieldset';
```

### Basic

A simple Fieldset is created with a legend property along with the content as children.

```html
<p-fieldset legend="Header">
    <p class="m-0">
        Lorem ipsum dolor sit amet...
    </p>
</p-fieldset>
```

### Toggleable

Content of the fieldset can be expanded and collapsed using toggleable option, default state is defined with collapsed option.

```html
<p-fieldset legend="Header" [toggleable]="true">
    <p>
        Lorem ipsum dolor sit amet...
    </p>
</p-fieldset>
```

### Template

Header section can also be defined with custom content instead of primitive values.

```html
<p-fieldset>
    <ng-template #header>
        <div class="flex items-center gap-2 px-2">
            <p-avatar
                image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png"
                shape="circle" />
            <span class="font-bold">Amy Elsner</span>
        </div>
    </ng-template>
    <p class="m-0">
        Lorem ipsum dolor sit amet...
    </p>
</p-fieldset>
```

### Accessibility

Fieldset component uses the semantic fieldset element. When toggleable option is enabled, a clickable element with button role is included inside the legend element, this button has aria-controls to define the id of the content section along with aria-expanded for the visibility state. The value to read the button defaults to the value of the legend property and can be customized by defining an aria-label or aria-labelledby via the toggleButtonProps property.

### Fieldset

Fieldset is a grouping component with the optional content toggle feature.

## API

### Fieldset API

API defines helper props, events and others for the PrimeNG Fieldset module.

#### Fieldset

Fieldset is a grouping component with the optional content toggle feature.

##### Properties

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| legend | string | null | Header text of the fieldset. |
| toggleable | boolean | false | When specified, content can toggled by clicking the legend. |
| collapsed | boolean | false | Defines the default visibility state of the content.
* |
| style | { [klass: string]: any } | null | Inline style of the component. |
| styleClass | string | null | Style class of the component. |
| transitionOptions | string | 400ms cubic-bezier(0.86, 0, 0.07, 1) | Transition options of the panel animation. |

##### Emitters

Defines emit that determine the behavior of the component based on a given condition or report the actions that the component takes.

| name | parameters | description |
| --- | --- | --- |
| collapsedChange | value :  boolean | Emits when the collapsed state changes. |
| onBeforeToggle | event :  FieldsetBeforeToggleEvent | Callback to invoke before panel toggle. |
| onAfterToggle | event :  FieldsetAfterToggleEvent | Callback to invoke after panel toggle. |

##### Templates

Defines the templates used by the component.

| name | parameters | description |
| --- | --- | --- |
| header |  | Defines the header template. |
| expandicon |  | Defines the expandicon template. |
| collapseicon |  | Defines the collapseicon template. |
| content |  | Defines the content template. |

---

[View Official Documentation](https://primeng.org/fieldset)
