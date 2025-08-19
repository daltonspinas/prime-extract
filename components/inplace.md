# Inplace

Inplace provides an easy to do editing and display at the same time where clicking the output displays the actual content.

## Import

```typescript
import { InplaceModule } from 'primeng/inplace';
```

## Basic

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

## Input

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

## Image

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

## Lazy

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

## Accessibility

Inplace component defines aria-live as "polite" by default, since any valid attribute is passed to the main container aria roles and attributes of the root element can be customized easily.

## Inplace

Inplace provides an easy to do editing and display at the same time where clicking the output displays the actual content.

---

[View Official Documentation](https://primeng.org/inplace)
