# AutoComplete

AutoComplete is an input component that provides real-time suggestions when being typed.

## Import

```typescript
import { AutoCompleteModule } from 'primeng/autocomplete';
```

## Basic

AutoComplete uses ngModel for two-way binding, requires a list of suggestions and a completeMethod to query for the results. The completeMethod gets the query text as event.query property and should update the suggestions with the search results.

```html
<p-autocomplete [(ngModel)]="value" [suggestions]="items" (completeMethod)="search($event)" />
```

## Dropdown

Enabling dropdown property displays a button next to the input field where click behavior of the button is defined using dropdownMode property that takes blank or current as possible values. blank is the default mode to send a query with an empty string whereas current setting sends a query with the current value of the input.

```html
<p-autocomplete [(ngModel)]="value" [dropdown]="true" [suggestions]="items" (completeMethod)="search($event)" />
```

## Objects

AutoComplete can also work with objects using the optionLabel property that defines the label to display as a suggestion. The value passed to the model would still be the object instance of a suggestion. Here is an example with a Country object that has name and code fields such as {name: "United States", code:"USA"}.

```html
<p-autocomplete [(ngModel)]="selectedCountry" [suggestions]="filteredCountries" (completeMethod)="filterCountry($event)" optionLabel="name" />
```

## Template

AutoComplete offers multiple templates for customization through templating.

```html
<p-autocomplete [(ngModel)]="selectedCountryAdvanced" [suggestions]="filteredCountries" (completeMethod)="filterCountry($event)" optionLabel="name">
    <ng-template let-country #item>
        <div class="flex items-center gap-2">
            <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'flag flag-' + country.code.toLowerCase()" style="width: 18px" />
            <div>{{ country.name }}</div>
        </div>
    </ng-template>
    <ng-template #header>
        <div class="font-medium px-3 py-2">Available Countries</div>
    </ng-template>
    <ng-template #footer>
        <div class="px-3 py-3">
            <p-button label="Add New" fluid severity="secondary" text size="small" icon="pi pi-plus" />
        </div>
    </ng-template>
</p-autocomplete>
```

## Group

Option grouping is enabled when group property is set to true. group template is available to customize the option groups. All templates get the option instance as the default local template variable.

```html
<p-autocomplete [(ngModel)]="selectedCity" [group]="true" [suggestions]="filteredGroups" (completeMethod)="filterGroupedCity($event)" placeholder="Hint: type 'a'">
    <ng-template let-group #group>
        <div class="flex items-center">
            <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'mr-2 flag flag-' + group.value" style="width: 20px" />
            <span>{{ group.label }}</span>
        </div>
    </ng-template>
</p-autocomplete>
```

## Force Selection

ForceSelection mode validates the manual input to check whether it also exists in the suggestions list, if not the input value is cleared to make sure the value passed to the model is always one of the suggestions.

```html
<p-autocomplete [(ngModel)]="selectedCountry" [forceSelection]="true" [suggestions]="filteredCountries" (completeMethod)="filterCountry($event)" optionLabel="name" />
```

## Virtual Scroll

Virtual scrolling is an efficient way of rendering the options by displaying a small subset of data in the viewport at any time. When dealing with huge number of options, it is suggested to enable virtual scrolling to avoid performance issues. Usage is simple as setting virtualScroll property to true and defining virtualScrollItemSize to specify the height of an item.

```html
<p-autocomplete [(ngModel)]="selectedItem" [virtualScroll]="true" [suggestions]="filteredItems" [virtualScrollItemSize]="34" (completeMethod)="filterItems($event)" optionLabel="label" [dropdown]="true" />
```

## Multiple

Multiple mode is enabled using multiple property used to select more than one value from the autocomplete. In this case, value reference should be an array.

```html
<label for="multiple-ac-1" class="font-bold mb-2 block">With Typeahead</label>
<p-autocomplete [(ngModel)]="value1" inputId="multiple-ac-1" multiple fluid [suggestions]="items" (completeMethod)="search($event)" />

<label for="multiple-ac-2" class="font-bold mt-8 mb-2 block">Without Typeahead</label>
<p-autocomplete [(ngModel)]="value2" inputId="multiple-ac-2" multiple fluid (completeMethod)="search($event)" [typeahead]="false" />
```

## Float Label

A floating label appears on top of the input field when focused. Visit FloatLabel documentation for more information.

```html
<p-floatlabel>
    <p-autocomplete [(ngModel)]="value1" [suggestions]="items" (completeMethod)="search($event)" inputId="over_label" />
    <label for="over_label">Over Label</label>
</p-floatlabel>

<p-floatlabel variant="in">
    <p-autocomplete [(ngModel)]="value2" [suggestions]="items" (completeMethod)="search($event)" inputId="in_label" />
    <label for="in_label">In Label</label>
</p-floatlabel>

<p-floatlabel variant="on">
    <p-autocomplete [(ngModel)]="value3" [suggestions]="items" (completeMethod)="search($event)" inputId="on_label" />
    <label for="on_label">On Label</label>
</p-floatlabel>
```

## Ifta Label

IftaLabel is used to create infield top aligned labels. Visit IftaLabel documentation for more information.

```html
<p-iftalabel>
    <p-autocomplete [(ngModel)]="value" [suggestions]="items" (completeMethod)="search($event)" inputId="ac" />
    <label for="ac">Identifier</label>
</p-iftalabel>
```

## Sizes

AutoComplete provides small and large sizes as alternatives to the base.

```html
<p-autocomplete [(ngModel)]="value1" [suggestions]="items" (completeMethod)="search()" size="small" placeholder="Small" dropdown />
<p-autocomplete [(ngModel)]="value2" [suggestions]="items" (completeMethod)="search()" placeholder="Normal" dropdown />
<p-autocomplete [(ngModel)]="value3" [suggestions]="items" (completeMethod)="search()" size="large" placeholder="Large" dropdown />
```

## Filled

Specify the variant property as filled to display the component with a higher visual emphasis than the default outlined style.

```html
<p-autocomplete [(ngModel)]="selectedItem" [suggestions]="suggestions" (completeMethod)="search($event)" variant="filled" />
```

## Disabled

When disabled is present, the element cannot be edited and focused.

```html
<p-autocomplete [(ngModel)]="selectedItem" [suggestions]="suggestions" placeholder="Disabled" (completeMethod)="search($event)" [disabled]="true" />
```

## Invalid

The invalid state is applied using the ⁠invalid property to indicate failed validation, which can be integrated with Angular Forms.

```html
<p-autocomplete [(ngModel)]="value1" [suggestions]="suggestions" [invalid]="!value1" (completeMethod)="search($event)" placeholder="Code" />
<p-autocomplete [(ngModel)]="value2" [suggestions]="suggestions" [invalid]="!value2" (completeMethod)="search($event)" variant="filled" placeholder="Code" />
```

## Forms

AutoComplete can also be used with reactive forms. In this case, the formControlName property is used to bind the component to a form control.

```html
<form #exampleForm="ngForm" (ngSubmit)="onSubmit(exampleForm)" class="flex justify-center flex-col gap-4 md:w-56">
    <div class="flex flex-col gap-1">
        <p-autocomplete
            #val="ngModel"
            [(ngModel)]="value"
            [suggestions]="items"
            [invalid]="val.invalid && (val.touched || exampleForm.submitted)"
            name="val"
            (completeMethod)="search($event)"
            required
            fluid
        />
        @if (val.invalid && (val.touched || exampleForm.submitted)) {
            <p-message severity="error" size="small" variant="simple">Value is required.</p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>
```

```html
<form [formGroup]="exampleForm" (ngSubmit)="onSubmit()" class="flex justify-center flex-col gap-4 md:w-56">
    <div class="flex flex-col gap-1">
        <p-autocomplete formControlName="value" [suggestions]="items" [invalid]="isInvalid('value')" (completeMethod)="search($event)" fluid />
        @if (isInvalid('value')) {
            <p-message severity="error" size="small" variant="simple">Value is required.</p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>
```

## Accessibility

Value to describe the component can either be provided via label tag combined with inputId prop or using ariaLabelledBy, ariaLabel props. The input element has combobox role in addition to aria-autocomplete, aria-haspopup and aria-expanded attributes. The relation between the input and the popup is created with aria-controls and aria-activedescendant attribute is used to instruct screen reader which option to read during keyboard navigation within the popup list.

```html
<label for="ac1">Username</label>
<p-autocomplete inputId="ac1"/>

<span id="ac2">Email</span>
<p-autocomplete ariaLabelledBy="ac2" />

<p-autocomplete ariaLabel="City" />
```

## AutoComplete

AutoComplete is an input component that provides real-time suggestions when being typed.

---

[View Official Documentation](https://primeng.org/autocomplete)
