# OrderList

OrderList is used to sort a collection.

## Import

```typescript
import { OrderListModule } from 'primeng/orderlist';
```

## Basic

OrderList is used as a controlled input with value property. Content of a list item needs to be defined with the item template that receives an object in the list as parameter.

```html
<p-orderlist [value]="products" dataKey="id" [responsive]="true" breakpoint="575px">
    <ng-template #item let-option>
        {{ option.name }}
    </ng-template>
</p-orderlist>
```

## Filter

Filter value is checked against the property of an object configured with the filterBy property

```html
<p-orderlist [value]="products" filterBy="name" filterPlaceholder="Filter by name" [responsive]="true" breakpoint="575px" scrollHeight="20rem">
    <ng-template let-option let-selected="selected" #item>
        <div class="flex flex-wrap p-1 items-center gap-4 w-full">
            <img
                class="w-12 shrink-0 rounded"
                src="https://primefaces.org/cdn/primeng/images/demo/product/{{ option.image }}"
                [alt]="option.name"
            />
            <div class="flex-1 flex flex-col">
                <span class="font-medium text-sm">{{ option.name }}</span>
                <span
                    [ngClass]="{
                        'text-sm': true,
                        'text-surface-500': !selected,
                        'dark:text-surface-400': !selected,
                        'text-inherit': selected,
                    }"
                    >{{ option.category }}</span
                >
            </div>
            <span class="font-bold sm:ml-8">{{ '$' + option.price }}</span>
        </div>
    </ng-template>
</p-orderlist>
```

## Template

For custom content support define an item template that gets the item instance as a parameter. In addition header template is provided for further customization.

```html
<p-orderlist [value]="products" dataKey="id" [responsive]="true" breakpoint="575px" scrollHeight="20rem">
    <ng-template let-option let-selected="selected" #item>
        <div class="flex flex-wrap p-1 items-center gap-4 w-full">
            <img
                class="w-12 shrink-0 rounded"
                src="https://primefaces.org/cdn/primeng/images/demo/product/{{ option.image }}"
                [alt]="option.name"
            />
            <div class="flex-1 flex flex-col">
                <span class="font-medium text-sm">{{ option.name }}</span>
                <span
                    [ngClass]="{
                        'text-sm': true,
                        'text-surface-500': !selected,
                        'dark:text-surface-400': !selected,
                        'text-inherit': selected,
                    }"
                    >{{ option.category }}</span
                >
            </div>
            <span class="font-bold sm:ml-8">{{ '$' + option.price }}</span>
        </div>
    </ng-template>
</p-orderlist>
```

## Accessibility

Value to describe the source listbox and target listbox can be provided with sourceListProps and targetListProps by passing aria-labelledby or aria-label props. The list elements has a listbox role with the aria-multiselectable attribute. Each list item has an option role with aria-selected and aria-disabled as their attributes.

```html
<span id="lb">Options</span>
<p-orderlist ariaLabelledBy="lb" />

<p-orderlist ariaLabel="City" />
```

## OrderList

OrderList is used to manage the order of a collection.

---

[View Official Documentation](https://primeng.org/orderlist)
