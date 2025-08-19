# CascadeSelect

CascadeSelect displays a nested structure of options.

## Features

### Import

```typescript
import { CascadeSelectModule } from 'primeng/cascadeselect';
```

### Basic

CascadeSelect requires a value to bind and a collection of arbitrary objects with a nested hierarchy. optionGroupLabel is used for the text of a category and optionGroupChildren is to define the children of the category. Note that order of the optionGroupChildren matters and it should correspond to the data hierarchy.

```html
<p-cascadeselect [(ngModel)]="selectedCity" [options]="countries" optionLabel="cname" optionGroupLabel="name" [optionGroupChildren]="['states', 'cities']" [style]="{ minWidth: '14rem' }" placeholder="Select a City" />
```

### Template

Label of an option is used as the display text of an item by default, for custom content support define an option template that gets the option instance as a parameter. In addition value, dropdownicon, loadingicon, and optiongroupicon slots are provided for further customization.

```html
<p-cascadeselect [(ngModel)]="selectedCity" [options]="countries" optionLabel="cname" optionGroupLabel="name" [optionGroupChildren]="['states', 'cities']" [style]="{ minWidth: '14rem' }" placeholder="Select a City">
    <ng-template #option let-option>
        <div class="flex items-center">
            <img *ngIf="option.states" src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'mr-2 flag flag-' + option.code.toLowerCase()" style="width: 18px" />
            <i class="pi pi-compass mr-2" *ngIf="option.cities"></i>
            <i class="pi pi-map-marker mr-2" *ngIf="option.cname"></i>
            <span>{{ option.cname || option.name }}</span>
        </div>
    </ng-template>
    <ng-template #triggericon>
        <i class="pi pi-map"></i>
    </ng-template>
    <ng-template #header>
        <div class="font-medium px-3 py-2">Available Countries</div>
    </ng-template>
    <ng-template #footer>
        <div class="px-3 py-1">
            <p-button label="Add New" fluid severity="secondary" text size="small" icon="pi pi-plus" />
        </div>
    </ng-template>
</p-cascadeselect>
```

### Loading State

Loading state can be used loading property.

```html
<p-cascadeselect [loading]="true" [style]="{ minWidth: '14rem' }" placeholder="Loading..." />
```

### Float Label

A floating label appears on top of the input field when focused. Visit FloatLabel documentation for more information.

```html
<p-floatlabel class="w-full md:w-56">
    <p-cascadeselect [(ngModel)]="value1" inputId="over_label" [options]="countries" optionLabel="cname" optionGroupLabel="name" [optionGroupChildren]="['states', 'cities']" class="w-full" />
    <label for="over_label">Over Label</label>
</p-floatlabel>

<p-floatlabel class="w-full md:w-56" variant="in">
    <p-cascadeselect [(ngModel)]="value2" inputId="in_label" [options]="countries" optionLabel="cname" optionGroupLabel="name" [optionGroupChildren]="['states', 'cities']" class="w-full" />
    <label for="in_label">In Label</label>
</p-floatlabel>

<p-floatlabel class="w-full md:w-56" variant="on">
    <p-cascadeselect [(ngModel)]="value3" inputId="on_label" [options]="countries" optionLabel="cname" optionGroupLabel="name" [optionGroupChildren]="['states', 'cities']" class="w-full" />
    <label for="on_label">On Label</label>
</p-floatlabel>
```

### Ifta Label

IftaLabel is used to create infield top aligned labels. Visit IftaLabel documentation for more information.

```html
<p-iftalabel class="w-full md:w-56">
    <p-cascadeselect [(ngModel)]="selectedCity" inputId="cs_city" [options]="countries" optionLabel="cname" optionGroupLabel="name" [optionGroupChildren]="['states', 'cities']" class="w-full" />
    <label for="cs_city">City</label>
</p-iftalabel>
```

### Sizes

CascadeSelect provides small and large sizes as alternatives to the base.

```html
<p-cascadeselect [(ngModel)]="value1" [options]="countries" optionLabel="cname" optionGroupLabel="name" [optionGroupChildren]="['states', 'cities']" class="w-56" size="small" placeholder="Small" />
<p-cascadeselect [(ngModel)]="value2" [options]="countries" optionLabel="cname" optionGroupLabel="name" [optionGroupChildren]="['states', 'cities']" class="w-56" placeholder="Normal" />
<p-cascadeselect [(ngModel)]="value3" [options]="countries" optionLabel="cname" optionGroupLabel="name" [optionGroupChildren]="['states', 'cities']" class="w-56" size="large" placeholder="Large" />
```

### Filled

Specify the variant property as filled to display the component with a higher visual emphasis than the default outlined style.

```html
<p-cascadeselect [(ngModel)]="selectedCity" variant="filled" [options]="countries" optionLabel="cname" optionGroupLabel="name" [optionGroupChildren]="['states', 'cities']" [style]="{ minWidth: '14rem' }" placeholder="Select a City" />
```

### Disabled

When disabled is present, the element cannot be edited and focused.

```html
<p-cascadeselect [disabled]="true" placeholder="Disabled" [style]="{ minWidth: '14rem' }" />
```

### Invalid

The invalid state is applied using the ⁠invalid property to indicate failed validation, which can be integrated with Angular Forms.

```html
<p-cascadeselect [(ngModel)]="selectedCity1" [invalid]="!selectedCity1" [options]="countries" optionLabel="cname" optionGroupLabel="name" [optionGroupChildren]="['states', 'cities']" class="w-full sm:w-56" placeholder="Select a City" />
<p-cascadeselect [(ngModel)]="selectedCity2" [invalid]="!selectedCity2" [options]="countries" optionLabel="cname" optionGroupLabel="name" [optionGroupChildren]="['states', 'cities']" class="w-full sm:w-56" placeholder="Select a City" variant="filled" />
```

### Forms

CascadeSelect can also be used with reactive forms. In this case, the formControlName property is used to bind the component to a form control.

```html
<form #exampleForm="ngForm" (ngSubmit)="onSubmit(exampleForm)" class="flex justify-center flex-col gap-4">
    <div class="flex flex-col gap-1">
        <p-cascadeselect
            #city="ngModel"
            [(ngModel)]="selectedCity"
            [options]="countries"
            [invalid]="city.invalid && (city.touched || exampleForm.submitted)"
            name="city"
            optionLabel="cname"
            optionGroupLabel="name"
            [optionGroupChildren]="['states', 'cities']"
            [style]="{ minWidth: '14rem' }"
            placeholder="Select a City"
            required
        />
        @if (city.invalid && (city.touched || exampleForm.submitted)) {
            <p-message severity="error" size="small" variant="simple">City is required.</p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>
```

```html
<form [formGroup]="exampleForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-4">
    <div class="flex flex-col gap-1">
        <p-cascadeselect
            formControlName="selectedCity"
            [options]="countries"
            optionLabel="cname"
            optionGroupLabel="name"
            [optionGroupChildren]="['states', 'cities']"
            [style]="{ minWidth: '14rem' }"
            placeholder="Select a City"
            [invalid]="isInvalid('selectedCity')"
        />

        @if (isInvalid('selectedCity')) {
            <p-message severity="error" size="small" variant="simple">City is required.</p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>
```

### Accessibility

Value to describe the component can either be provided with ariaLabelledBy or ariaLabel props. The cascadeselect element has a combobox role in addition to aria-haspopup and aria-expanded attributes. The relation between the combobox and the popup is created with aria-controls that refers to the id of the popup.

```html
<span id="dd1">Options</span>
<p-cascadeselect ariaLabelledBy="dd1"/>

<p-cascadeselect ariaLabel="Options"/>
```

### CascadeSelect

CascadeSelect is a form component to select a value from a nested structure of options.

## API

### CascadeSelect API

API defines helper props, events and others for the PrimeNG CascadeSelect module.

#### CascadeSelect

CascadeSelect is a form component to select a value from a nested structure of options.

##### Properties

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| required | InputSignalWithTransform<boolean, unknown> | false | There must be a value (if set). |
| invalid | InputSignalWithTransform<boolean, unknown> | false | When present, it specifies that the component should have invalid state style. |
| disabled | InputSignalWithTransform<boolean, unknown> | false | When present, it specifies that the component should have disabled state style. |
| name | InputSignal<string> | undefined | When present, it specifies that the name of the input. |
| id | string | null | Unique identifier of the component |
| searchMessage | string | '{0} results are available' | Text to display when the search is active. Defaults to global value in i18n translation configuration. |
| emptyMessage | string | null | Text to display when there is no data. Defaults to global value in i18n translation configuration. |
| selectionMessage | string | '{0} items selected' | Text to be displayed in hidden accessible field when options are selected. Defaults to global value in i18n translation configuration. |
| emptySearchMessage | string | 'No available options' | Text to display when filtering does not return any results. Defaults to value from PrimeNG locale configuration. |
| emptySelectionMessage | string | 'No selected item' | Text to display when filtering does not return any results. Defaults to global value in i18n translation configuration. |
| searchLocale | string | null | Locale to use in searching. The default locale is the host environment's current locale. |
| optionDisabled | any | null | Name of the disabled field of an option. |
| focusOnHover | boolean | true | Fields used when filtering the options, defaults to optionLabel. |
| selectOnFocus | boolean | false | Determines if the option will be selected on focus. |
| autoOptionFocus | boolean | false | Whether to focus on the first visible or selected element when the overlay panel is shown. |
| styleClass | string | null | Style class of the component. |
| options | string | string[] | null | An array of selectitems to display as the available options. |
| optionLabel | string | null | Property name or getter function to use as the label of an option. |
| optionValue | string | null | Property name or getter function to use as the value of an option, defaults to the option itself when not defined. |
| optionGroupLabel | string | null | Property name or getter function to use as the label of an option group. |
| optionGroupChildren | string | string[] | null | Property name or getter function to retrieve the items of a group. |
| placeholder | string | null | Default text to display when no option is selected. |
| value | string | null | Selected value of the component. |
| dataKey | string | null | A property to uniquely identify an option. |
| inputId | string | null | Identifier of the underlying input element. |
| tabindex | number | 0 | Index of the element in tabbing order. |
| ariaLabelledBy | string | null | Establishes relationships between the component and label(s) where its value should be one or more element IDs. |
| inputLabel | string | null | Label of the input for accessibility. |
| ariaLabel | string | null | Defines a string that labels the input for accessibility. |
| showClear | boolean | false | When enabled, a clear icon is displayed to clear the value. |
| panelStyleClass | string | null | Style class of the overlay panel. |
| panelStyle | { [klass: string]: any } | null | Inline style of the overlay panel. |
| overlayOptions | OverlayOptions | null | Whether to use overlay API feature. The properties of overlay API can be used like an object in it. |
| autofocus | boolean | false | When present, it specifies that the component should automatically get focus on load. |
| loading | boolean | false | Whether the dropdown is in loading state. |
| loadingIcon | string | null | Icon to display in loading state. |
| breakpoint | string | 960px | The breakpoint to define the maximum width boundary. |
| size | InputSignal<"small" | "large"> | undefined | Specifies the size of the component. |
| variant | InputSignal<"outlined" | "filled"> | undefined | Specifies the input variant of the component. |
| fluid | InputSignalWithTransform<boolean, unknown> | undefined | Spans 100% width of the container when enabled. |
| appendTo | InputSignal<any> | 'self' | Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name). |

##### Emitters

Defines emit that determine the behavior of the component based on a given condition or report the actions that the component takes.

| name | parameters | description |
| --- | --- | --- |
| onChange | event :  CascadeSelectChangeEvent | Callback to invoke on value change. |
| onGroupChange | event :  Event | Callback to invoke when a group changes. |
| onShow | event :  CascadeSelectShowEvent | Callback to invoke when the overlay is shown. |
| onHide | event :  CascadeSelectHideEvent | Callback to invoke when the overlay is hidden. |
| onClear | value :  any | Callback to invoke when the clear token is clicked. |
| onBeforeShow | event :  CascadeSelectBeforeShowEvent | Callback to invoke before overlay is shown. |
| onBeforeHide | event :  CascadeSelectBeforeHideEvent | Callback to invoke before overlay is hidden. |
| onFocus | event :  FocusEvent | Callback to invoke when input receives focus. |
| onBlur | event :  FocusEvent | Callback to invoke when input loses focus. |

##### Templates

Defines the templates used by the component.

| name | parameters | description |
| --- | --- | --- |
| value |  | Content template for displaying the selected value. |
| option |  | Content template for customizing the option display. |
| header |  | Content template for customizing the header. |
| footer |  | Content template for customizing the footer. |
| triggericon |  | Content template for customizing the trigger icon. |
| loadingicon |  | Content template for customizing the loading icon. |
| groupicon |  | Content template for customizing the group icon. |
| clearicon |  | Content template for customizing the clear icon. |

---

[View Official Documentation](https://primeng.org/cascadeselect)
