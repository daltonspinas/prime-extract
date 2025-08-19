# Inplace

Inplace provides an easy to do editing and display at the same time where clicking the output displays the actual content.

## Features

### Import

```typescript
import { InplaceModule } from 'primeng/inplace';
```

### Basic

Inplace component requires display and content templates to define the content of each state.

```html
<p-inplace>
    <ng-template #display>
        <span>View Content</span>
    </ng-template>
    <ng-template #content>
        <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
        </p>
    </ng-template>
</p-inplace>
```

### Input

The closeCallback switches the state back to display mode when called from an event.

```html
<p-inplace>
    <ng-template #display>
        <span>Click to Edit</span>
    </ng-template>
    <ng-template #content let-closeCallback="closeCallback">
        <span class="inline-flex gap-2">
            <input type="text" pInputText [pAutoFocus]="true" />
            <button type="button" pButton (click)="closeCallback($event)" text severity="danger">
                <i class="pi pi-times" pButtonIcon></i>
            </button>
        </span>
    </ng-template>
</p-inplace>
```

### Image

Any content such as an image can be placed inside an Inplace.

```html
<p-inplace>
    <ng-template #display>
        <span class="inline-flex items-center gap-2">
            <span class="pi pi-image" style="vertical-align: middle"></span>
            <span class="ml-2">View Photo</span>
        </span>
    </ng-template>
    <ng-template #content>
        <img
            class="w-full sm:w-80 shadow-md"
            src="https://primefaces.org/cdn/primeng/images/demo/galleria/galleria5.jpg"
            alt="Nature"
        />
    </ng-template>
</p-inplace>
```

### Lazy

Using the onActivate event, data can be loaded in a lazy manner before displaying it in a table.

```html
<p-inplace (onActivate)="loadData()">
    <ng-template #display>
        <span>View Data</span>
    </ng-template>
    <ng-template #content>
        <p-table [value]="products" responsiveLayout="scroll">
            <ng-template #header>
                <tr>
                    <th>Code</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Quantity</th>
                </tr>
            </ng-template>
            <ng-template #body let-product>
                <tr>
                    <td>{{ product.code }}</td>
                    <td>{{ product.name }}</td>
                    <td>{{ product.category }}</td>
                    <td>{{ product.quantity }}</td>
                </tr>
            </ng-template>
        </p-table>
    </ng-template>
</p-inplace>
```

### Accessibility

Inplace component defines aria-live as "polite" by default, since any valid attribute is passed to the main container aria roles and attributes of the root element can be customized easily.

### Inplace

Inplace provides an easy to do editing and display at the same time where clicking the output displays the actual content.

## API

### Inplace API

API defines helper props, events and others for the PrimeNG Inplace module.

#### Inplace

Inplace provides an easy to do editing and display at the same time where clicking the output displays the actual content.

##### Properties

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| active | boolean | false | Whether the content is displayed or not. |
| closable | boolean | false | Displays a button to switch back to display mode. |
| disabled | boolean | false | When present, it specifies that the element should be disabled. |
| preventClick | boolean | false | Allows to prevent clicking. |
| styleClass | string | null | Class of the element. |
| closeIcon | string | null | Icon to display in the close button. |
| closeAriaLabel | string | null | Establishes a string value that labels the close button. |

##### Emitters

Defines emit that determine the behavior of the component based on a given condition or report the actions that the component takes.

| name | parameters | description |
| --- | --- | --- |
| onActivate | event :  Event | Callback to invoke when inplace is opened. |
| onDeactivate | event :  Event | Callback to invoke when inplace is closed. |

##### Methods

Defines methods that can be accessed by the component's reference.

| name | parameters | description |
| --- | --- | --- |
| activate | event :  Event | Activates the content. |
| deactivate | event :  Event | Deactivates the content. |

##### Templates

Defines the templates used by the component.

| name | parameters | description |
| --- | --- | --- |
| display |  | Display template of the element. |
| content |  | Content template of the element. |
| closeicon |  | Close icon template of the element. |

---

[View Official Documentation](https://primeng.org/inplace)
