# Select

Select is used to choose an item from a collection of options.

## Import

```typescript
import { SelectModule } from 'primeng/select';
```

## Basic

Select is used as a controlled component with ngModel property along with an options collection. Label and value of an option are defined with the optionLabel and optionValue properties respectively. Note that, when options are simple primitive values such as a string array, no optionLabel and optionValue would be necessary.

```html
<p-select [options]="cities" [(ngModel)]="selectedCity" optionLabel="name" placeholder="Select a City" class="w-full md:w-56" />
```

## Checkmark

An alternative way to highlight the selected option is displaying a checkmark instead.

```html
<p-select [options]="cities" [(ngModel)]="selectedCity" [checkmark]="true" optionLabel="name" [showClear]="true" placeholder="Select a City" class="w-full md:w-56" />
```

## Editable

When editable is present, the input can also be entered with typing.

```html
<p-select [options]="cities" [(ngModel)]="selectedCity" placeholder="Select a City" [editable]="true" optionLabel="name" class="w-full md:w-56" />
```

## Group

Options can be grouped when a nested data structures is provided.

```html
<p-select [options]="groupedCities" [(ngModel)]="selectedCity" placeholder="Select a City" [group]="true" class="w-full md:w-56">
    <ng-template let-group #group>
        <div class="flex items-center">
            <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'mr-2 flag flag-' + group.value" style="width: 20px" />
            <span>{{ group.label }}</span>
        </div>
    </ng-template>
</p-select>
```

## Template

Both the selected option and the options list can be templated to provide customizated representation. Use selectedItem template to customize the selected label display and the item template to change the content of the options in the select panel. In addition when grouping is enabled, group template is available to customize the option groups. All templates get the option instance as the default local template variable.

```html
<p-select [options]="countries" [(ngModel)]="selectedCountry" optionLabel="name" placeholder="Select a country" class="w-full md:w-56">
    <ng-template #selectedItem let-selectedOption>
        <div class="flex items-center gap-2" *ngIf="selectedOption">
            <img
                src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png"
                [class]="'flag flag-' + selectedOption.code.toLowerCase()"
                style="width: 18px"
            />
            <div>{{ selectedOption.name }}</div>
        </div>
    </ng-template>
    <ng-template let-country #item>
        <div class="flex items-center gap-2">
            <img
                src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png"
                [class]="'flag flag-' + country.code.toLowerCase()"
                style="width: 18px"
            />
            <div>{{ country.name }}</div>
        </div>
    </ng-template>
    <ng-template #dropdownicon>
        <i class="pi pi-map"></i>
    </ng-template>
    <ng-template #header>
        <div class="font-medium p-3">Available Countries</div>
    </ng-template>
    <ng-template #footer>
        <div class="p-3">
            <p-button label="Add New" fluid severity="secondary" text size="small" icon="pi pi-plus" />
        </div>
    </ng-template>
</p-select>
```

## Filter

Select provides built-in filtering that is enabled by adding the filter property.

```html
<p-select [options]="countries" [(ngModel)]="selectedCountry" optionLabel="name" [filter]="true" filterBy="name" [showClear]="true" placeholder="Select a Country" class="w-full md:w-56">
    <ng-template #selectedItem let-selectedOption>
        <div class="flex items-center gap-2">
            <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'flag flag-' + selectedCountry.code.toLowerCase()" style="width: 18px" />
            <div>{{ selectedOption.name }}</div>
        </div>
    </ng-template>
    <ng-template let-country #item>
        <div class="flex items-center gap-2">
            <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'flag flag-' + country.code.toLowerCase()" style="width: 18px" />
            <div>{{ country.name }}</div>
        </div>
    </ng-template>
</p-select>
```

## Clear Icon

When showClear is enabled, a clear icon is added to reset the Select.

```html
<p-select [options]="cities" [(ngModel)]="selectedCity" optionLabel="name" [showClear]="true" placeholder="Select a City" class="w-full md:w-56" />
```

## Loading State

Loading state can be used loading property.

```html
<p-select [options]="cities" [(ngModel)]="selectedCity" [loading]="true" optionLabel="name" placeholder="Loading..." class="w-full md:w-56" />
```

## Virtual Scroll

VirtualScrolling is an efficient way of rendering the options by displaying a small subset of data in the viewport at any time. When dealing with huge number of options, it is suggested to enable VirtualScrolling to avoid performance issues. Usage is simple as setting virtualScroll property to true and defining virtualScrollItemSize to specify the height of an item.

```html
<p-select [options]="items" [(ngModel)]="selectedItem" placeholder="Select Item" [virtualScroll]="true" [virtualScrollItemSize]="38" class="w-full md:w-56" />
```

## Lazy Virtual Scroll

```html
<p-select [options]="items" [(ngModel)]="selectedItem" placeholder="Select Item" [virtualScroll]="true" [virtualScrollItemSize]="38" [virtualScrollOptions]="options" class="w-full md:w-56" />
```

## Filled

Specify the variant property as filled to display the component with a higher visual emphasis than the default outlined style.

```html
<p-select [options]="cities" [(ngModel)]="selectedCity" variant="filled" optionLabel="name" placeholder="Select a City" class="w-full md:w-56" />
```

## Float Label

A floating label appears on top of the input field when focused. Visit FloatLabel documentation for more information.

```html
<p-floatlabel class="w-full md:w-56">
    <p-select [(ngModel)]="value1" inputId="over_label" [options]="cities" optionLabel="name" class="w-full" />
    <label for="over_label">Over Label</label>
</p-floatlabel>

<p-floatlabel class="w-full md:w-56" variant="in">
    <p-select [(ngModel)]="value2" inputId="in_label" [options]="cities" optionLabel="name" class="w-full" variant="filled" />
    <label for="in_label">In Label</label>
</p-floatlabel>

<p-floatlabel class="w-full md:w-56" variant="on">
    <p-select [(ngModel)]="value3" inputId="on_label" [options]="cities" optionLabel="name" class="w-full" />
    <label for="on_label">On Label</label>
</p-floatlabel>
```

## Ifta Label

IftaLabel is used to create infield top aligned labels. Visit IftaLabel documentation for more information.

```html
<p-iftalabel class="w-full md:w-56">
    <p-select [(ngModel)]="selectedCity" inputId="dd-city" [options]="cities" optionLabel="name" class="w-full" />
    <label for="dd-city">City</label>
</p-iftalabel>
```

## Sizes

Select provides small and large sizes as alternatives to the base.

```html
<p-select [(ngModel)]="value1" [options]="cities" optionLabel="name" size="small" placeholder="Small" class="w-full md:w-56" />
<p-select [(ngModel)]="value2" [options]="cities" optionLabel="name" placeholder="Normal" class="w-full md:w-56" />
<p-select [(ngModel)]="value3" [options]="cities" optionLabel="name" size="large" placeholder="Large" class="w-full md:w-56" />
```

## Disabled

When disabled is present, the element cannot be edited and focused.

```html
<p-select [options]="cities" [(ngModel)]="selectedCity" placeholder="Select a City" optionLabel="name" [disabled]="true" class="w-full md:w-56" />
```

## Invalid

The invalid state is applied using the ⁠invalid property to indicate failed validation, which can be integrated with Angular Forms.

```html
<p-select [options]="cities" [(ngModel)]="selectedCity1" optionLabel="name" [showClear]="true" [invalid]="value1" placeholder="Select a City" class="w-full md:w-56" />
<p-select [options]="cities" [(ngModel)]="selectedCity2" optionLabel="name" [showClear]="true" [invalid]="value2" placeholder="Select a City" class="w-full md:w-56" variant="filled"/>
```

## Forms

Select can also be used with reactive forms. In this case, the formControlName property is used to bind the component to a form control.

```html
<form #exampleForm (ngSubmit)="onSubmit(exampleForm)" class="flex flex-col gap-4 w-full sm:w-56">
    <div class="flex flex-col gap-1">
        <p-select #city="ngModel" [(ngModel)]="selectedCity" [options]="cities" [invalid]="city.invalid && (city.touched || exampleForm.submitted)" optionLabel="name" placeholder="Select a City" class="w-full md:w-56" required />
        @if (city.invalid && (city.touched || exampleForm.submitted)) {
            <p-message severity="error" size="small" variant="simple">City is required.</p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>
```

```html
<form [formGroup]="exampleForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-4 w-full sm:w-56">
    <div class="flex flex-col gap-1">
        <p-select formControlName="selectedCity" [options]="cities" [invalid]="isInvalid('city')" optionLabel="name" placeholder="Select a City" class="w-full md:w-56" />
        @if (isInvalid('city')) {
            <p-message severity="error" size="small" variant="simple">City is required.</p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>
```

## Accessibility

Value to describe the component can either be provided with ariaLabelledBy or ariaLabel props. The select element has a combobox role in addition to aria-haspopup and aria-expanded attributes. If the editable option is enabled aria-autocomplete is also added. The relation between the combobox and the popup is created with aria-controls and aria-activedescendant attribute is used to instruct screen reader which option to read during keyboard navigation within the popup list.

```html
<span id="dd1">Options</span>
<p-select ariaLabelledBy="dd1"/>

<p-select ariaLabel="Options"/>
```

## Select

Select is used to choose an item from a collection of options.

---

[View Official Documentation](https://primeng.org/select)
