# PickList

PickList is used to reorder items between different lists.

## Import

```typescript
import { PickListModule } from 'primeng/picklist';
```

## Basic

PickList is used as a controlled input with source and target properties. Content of a list item needs to be defined with the item template that receives an object in the list as parameter. Drag & drop functionality depends on @angular/cdk package.

```html
<p-picklist [source]="sourceProducts" [target]="targetProducts" [dragdrop]="true" [responsive]="true" breakpoint="1400px">
    <ng-template let-item #item>
        {{ item.name }}
    </ng-template>
</p-picklist>
```

## Filter

Filter value is checked against the property of an object configured with the filterBy property.

```html
<p-picklist
    [source]="sourceProducts"
    [target]="targetProducts"
    [dragdrop]="true"
    [responsive]="true"
    filterBy="name"
    sourceFilterPlaceholder="Search by name"
    targetFilterPlaceholder="Search by name"
    breakpoint="1400px"
    scrollHeight="20rem"
>
    <ng-template let-option let-selected="selected" #option>
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
</p-picklist>
```

## Template

For custom content support define an item template that gets the item instance as a parameter. In addition sourceheader and targetheader templates are provided for further customization.

```html
<p-picklist [source]="sourceProducts" [target]="targetProducts" [dragdrop]="true" [responsive]="true" sourceFilterPlaceholder="Search by name" targetFilterPlaceholder="Search by name" breakpoint="1400px" scrollHeight="20rem">
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
</p-picklist>
```

## Accessibility

Value to describe the source listbox and target listbox can be provided with ariaLabelledBy or ariaLabel props. The list elements has a listbox role with the aria-multiselectable attribute. Each list item has an option role with aria-selected and aria-disabled as their attributes.

```html
<span id="lb">Options</span>
<p-picklist ariaLabelledBy="lb" />

<p-picklist ariaLabel="City" />
```

## PickList

PickList is used to reorder items between different lists.

---

[View Official Documentation](https://primeng.org/picklist)
