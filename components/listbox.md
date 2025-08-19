# Listbox

Listbox is used to select one or more values from a list of items.

## Import

```typescript
import { ListboxModule } from 'primeng/listbox';
```

## Basic

Listbox is used as a controlled component with ngModel property along with an options collection. Label and value of an option are defined with the optionLabel and optionValue properties respectively. Default property name for the optionLabel is label and value for the optionValue. If optionValue is omitted and the object has no value property, the object itself becomes the value of an option. Note that, when options are simple primitive values such as a string array, no optionLabel and optionValue would be necessary.

```html
<p-listbox [options]="cities" [(ngModel)]="selectedCity" optionLabel="name" class="w-full md:w-56" />
```

## Checkmark

An alternative way to highlight the selected option is displaying a checkmark instead.

```html
<p-listbox [(ngModel)]="selectedCity" [options]="cities" optionLabel="name" [checkmark]="true" [highlightOnSelect]="false" class="w-full md:w-56"/>
```

## Checkbox

Listbox allows item selection using checkboxes.

```html
<p-listbox [(ngModel)]="selectedCity" [options]="cities" [multiple]="true" [checkbox]="true" optionLabel="name" class="w-full md:w-56" />
```

## Multiple

ListBox allows choosing a single item by default, enable multiple property to choose more than one. When the optional metaKeySelection is present, behavior is changed in a way that selecting a new item requires meta key to be present.

```html
<p-listbox [options]="cities" [(ngModel)]="selectedCities" optionLabel="name" [multiple]="true" [metaKeySelection]="false" class="w-full md:w-56" />
```

## Group

Options can be grouped when a nested data structures is provided.

```html
<p-listbox [options]="groupedCities" [group]="true" [(ngModel)]="selectedCountry" class="w-full md:w-56">
    <ng-template let-group #group>
        <div class="flex items-center">
            <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'mr-2 flag flag-' + group.value" style="width: 20px" />
            <span>{{ group.label }}</span>
        </div>
    </ng-template>
</p-listbox>
```

## Filter

ListBox provides built-in filtering that is enabled by adding the filter property.

```html
<p-listbox [options]="cities" [(ngModel)]="selectedCity" optionLabel="name" [filter]="true" class="w-full md:w-56" />
```

## Template

For custom content support define a template named item where the default local template variable refers to an option.

```html
<p-listbox [options]="countries" [(ngModel)]="selectedCountry" optionLabel="name" class="w-full md:w-56">
    <ng-template #item let-country>
        <div class="flex items-center gap-2">
            <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'flag flag-' + country.code.toLowerCase()" style="width: 18px" />
            <div>{{ country.name }}</div>
        </div>
    </ng-template>
</p-listbox>
```

## Virtual Scroll

VirtualScrolling is an efficient way of rendering the options by displaying a small subset of data in the viewport at any time. When dealing with huge number of options, it is suggested to enable VirtualScrolling to avoid performance issues. Usage is simple as setting virtualScroll property to true and defining virtualScrollItemSize to specify the height of an item.

```html
<p-listbox [options]="items" [(ngModel)]="selectedItems" [checkbox]="true" [filter]="true" [selectAll]="selectAll" optionLabel="label" [virtualScroll]="true" [virtualScrollItemSize]="40" [multiple]="true" [metaKeySelection]="false" (onSelectAllChange)="onSelectAllChange($event)" (onChange)="onChange($event)" scrollHeight="250px" [striped]="true" class="w-full md:w-56" />
```

## Invalid

The invalid state is applied using the ⁠invalid property to indicate failed validation, which can be integrated with Angular Forms.

```html
<p-listbox [options]="cities" [(ngModel)]="selectedCity" optionLabel="name" class="w-full md:w-56" [invalid]="selectedCity === undefined" />
```

## Disabled

When disabled is present, the element cannot be edited and focused.

```html
<p-listbox [options]="cities" [(ngModel)]="selectedCity" optionLabel="name" [disabled]="true" class="w-full md:w-56" />
```

## Forms

Listbox can also be used with reactive forms. In this case, the formControlName property is used to bind the component to a form control.

```html
<form #exampleForm="ngForm" (ngSubmit)="onSubmit(exampleForm)" class="flex justify-center flex-col gap-4 md:w-56">
    <div class="flex flex-col gap-1">
        <p-listbox #city="ngModel" [options]="cities" [(ngModel)]="selectedCity" optionLabel="name" class="w-full md:w-56" [invalid]="city.invalid && exampleForm.submitted" name="city" required />
        @if (city.invalid && exampleForm.submitted) {
            <p-message severity="error" size="small" variant="simple">City is required.</p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>
```

```html
<form [formGroup]="exampleForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-4 sm:w-56">
    <div class="flex flex-col gap-1">
        <p-listbox [options]="cities" formControlName="selectedCity" optionLabel="name" class="w-full md:w-56" [invalid]="isInvalid('selectedCity')" />
        @if (isInvalid('selectedCity')) {
            <p-message severity="error" size="small" variant="simple">City is required.</p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>
```

## Accessibility

Value to describe the component can be provided ariaLabelledBy or ariaLabel props. The list element has a listbox role with the aria-multiselectable attribute that sets to true when multiple selection is enabled. Each list item has an option role with aria-selected and aria-disabled as their attributes.

```html
<span id="lb">Options</span>
<p-listbox ariaLabelledBy="lb"/>

<p-listbox ariaLabel="City"/>
```

## Listbox

ListBox is used to select one or more values from a list of items.

---

[View Official Documentation](https://primeng.org/listbox)
