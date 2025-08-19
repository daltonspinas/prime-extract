# MultiSelect

MultiSelect is used to select multiple items from a collection.

## Features

### Import

```typescript
import { MultiSelectModule } from 'primeng/multiselect';
```

### Basic

MultiSelect is used as a controlled component with ngModel property along with an options collection. Label and value of an option are defined with the optionLabel and optionValue properties respectively. Default property name for the optionLabel is label and value for the optionValue. If optionValue is omitted and the object has no value property, the object itself becomes the value of an option. Note that, when options are simple primitive values such as a string array, no optionLabel and optionValue would be necessary.

```html
<p-multiselect [options]="cities" [(ngModel)]="selectedCities" optionLabel="name" placeholder="Select Cities" [maxSelectedLabels]="3" class="w-full md:w-80" />
```

### Chips

Selected values are displayed as a comma separated list by default, setting display as chip displays them as chips.

```html
<p-multiselect [options]="cities" [(ngModel)]="selectedCities" placeholder="Select Cities" optionLabel="name" display="chip" class="w-full md:w-80" />
```

### Group

Options can be grouped when a nested data structures is provided.

```html
<p-multiselect [options]="groupedCities" [group]="true" [(ngModel)]="selectedCities" placeholder="Select Cities" scrollHeight="250px" display="chip" class="w-full md:w-80">
    <ng-template let-group #group>
        <div class="flex items-center">
            <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'mr-2 flag flag-' + group.value" style="width: 20px" />
            <span>{{ group.label }}</span>
        </div>
    </ng-template>
</p-multiselect>
```

### Template

Available options and the selected options support customization with item and selecteditems templates respectively. In addition, header, footer and filter sections can be templated as well.

```html
<p-multiselect [options]="countries" [(ngModel)]="selectedCountries" placeholder="Select Countries" optionLabel="name" class="w-full md:w-80" display="chip">
    <ng-template let-country #item>
        <div class="flex items-center gap-2">
            <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'flag flag-' + country.code.toLowerCase()" style="width: 18px" />
            <div>{{ country.name }}</div>
        </div>
    </ng-template>
    <ng-template #dropdownicon>
        <i class="pi pi-map"></i>
    </ng-template>
    <ng-template #filtericon>
        <i class="pi pi-map-marker"></i>
    </ng-template>
    <ng-template #header>
        <div class="font-medium px-3 py-2">Available Countries</div>
    </ng-template>
    <ng-template #footer>
        <div class="p-3 flex justify-between">
            <p-button label="Add New" severity="secondary" text size="small" icon="pi pi-plus" />
            <p-button label="Remove All" severity="danger" text size="small" icon="pi pi-times" />
        </div>
    </ng-template>
</p-multiselect>
```

### Filter

MultiSelect provides built-in filtering that is enabled by adding the filter property.

```html
<p-multiselect [options]="cities" [(ngModel)]="selectedCities" [filter]="true" optionLabel="name" placeholder="Select Cities" [maxSelectedLabels]="3" class="w-full md:w-80" />
```

### Loading State

Loading state can be used loading property.

```html
<p-multiselect [options]="cities" [(ngModel)]="selectedCities" [loading]="true" optionLabel="name" placeholder="Loading..." class="w-full md:w-80" />
```

### VirtualScroll

VirtualScrolling is an efficient way of rendering the options by displaying a small subset of data in the viewport at any time. When dealing with huge number of options, it is suggested to enable VirtualScrolling to avoid performance issues. Usage is simple as setting virtualScroll property to true and defining virtualScrollItemSize to specify the height of an item.

```html
<p-multiselect [options]="items" [showToggleAll]="true" [selectAll]="selectAll" [(ngModel)]="selectedItems" optionLabel="label" [virtualScroll]="true" [virtualScrollItemSize]="43" placeholder="Select Cities" (onSelectAllChange)="onSelectAllChange($event)" [maxSelectedLabels]="3" class="w-full md:w-80" #ms>
    <ng-template #headercheckboxicon let-allSelected let-partialSelected="partialSelected">
        <i class="pi pi-check" *ngIf="allSelected"></i>
        <i class="pi pi-minus" *ngIf="partialSelected" [ngStyle]="{ color: 'var(--text-color)' }"></i>
    </ng-template>
</p-multiselect>
```

### Float Label

A floating label appears on top of the input field when focused. Visit FloatLabel documentation for more information.

```html
<p-floatlabel class="w-full md:w-80">
    <p-multiselect id="over_label" [(ngModel)]="value1" [options]="cities" optionLabel="name" filter [maxSelectedLabels]="3" class="w-full" />
    <label for="over_label">Over Label</label>
</p-floatlabel>

<p-floatlabel class="w-full md:w-80" variant="in">
    <p-multiselect id="in_label" [(ngModel)]="value2" [options]="cities" optionLabel="name" filter [maxSelectedLabels]="3" class="w-full" />
    <label for="in_label">In Label</label>
</p-floatlabel>

<p-floatlabel class="w-full md:w-80" variant="on">
    <p-multiselect id="on_label" [(ngModel)]="value3" [options]="cities" optionLabel="name" filter [maxSelectedLabels]="3" class="w-full" />
    <label for="on_label">On Label</label>
</p-floatlabel>
```

### Ifta Label

IftaLabel is used to create infield top aligned labels. Visit IftaLabel documentation for more information.

```html
<p-iftalabel class="w-full md:w-80">
    <p-multiselect [(ngModel)]="selectedCities" inputId="ms_cities" [options]="cities" optionLabel="name" [filter]="true" [maxSelectedLabels]="3" class="w-full" />
    <label for="ms_cities">Cities</label>
</p-iftalabel>
```

### Sizes

MultiSelect provides small and large sizes as alternatives to the base.

```html
<p-multiselect [(ngModel)]="value1" [options]="cities" optionLabel="name" [maxSelectedLabels]="3" class="w-full md:w-80" size="small" placeholder="Small" />
<p-multiselect [(ngModel)]="value2" [options]="cities" optionLabel="name" [maxSelectedLabels]="3" class="w-full md:w-80" placeholder="Normal" />
<p-multiselect [(ngModel)]="value3" [options]="cities" optionLabel="name" [maxSelectedLabels]="3" class="w-full md:w-80" size="large" placeholder="Large" />
```

### Filled

Specify the variant property as filled to display the component with a higher visual emphasis than the default outlined style.

```html
<p-multiselect [options]="cities" [(ngModel)]="selectedCities" variant="filled" optionLabel="name" placeholder="Select Cities" [maxSelectedLabels]="3" class="w-full md:w-80" />
```

### Disabled

When disabled is present, the element cannot be edited and focused.

```html
<p-multiselect [options]="cities" [(ngModel)]="selectedCities" [disabled]="true" optionLabel="name" class="w-full md:w-80" />
```

### Invalid

The invalid state is applied using the ⁠invalid property to indicate failed validation, which can be integrated with Angular Forms.

```html
<p-multiselect [options]="cities" [(ngModel)]="selectedCities1" [invalid]="value1" optionLabel="name" placeholder="Select Cities" [maxSelectedLabels]="3" class="w-full md:w-80" />
<p-multiselect [options]="cities" [(ngModel)]="selectedCities2" [invalid]="value2" optionLabel="name" placeholder="Select Cities" [maxSelectedLabels]="3" class="w-full md:w-80" variant="filled" />
```

### Forms

MultiSelect can also be used with reactive forms. In this case, the formControlName property is used to bind the component to a form control.

```html
<div class="card flex justify-center">
    <form #exampleForm="ngForm" (ngSubmit)="onSubmit(exampleForm)" class="flex justify-center flex-col gap-4 w-full md:w-80">
        <div class="flex flex-col gap-1">
            <p-multiselect
                #city="ngModel"
                [(ngModel)]="selectedCity"
                [options]="cities"
                optionLabel="name"
                name="city"
                placeholder="Select Cities"
                [maxSelectedLabels]="3"
                [invalid]="city.invalid && (city.touched || exampleForm.submitted)"
                fluid
                required
            />
            @if (city.invalid && (city.touched || exampleForm.submitted)) {
                <p-message severity="error" size="small" variant="simple">City is required.</p-message>
            }
        </div>
        <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
    </form>
</div>
```

```html
<form [formGroup]="exampleForm" (ngSubmit)="onSubmit()" class="flex justify-center flex-col gap-4 w-full md:w-80">
    <div class="flex flex-col gap-1">
        <p-multiselect [options]="cities" formControlName="city" optionLabel="name" placeholder="Select Cities" [maxSelectedLabels]="3" [fluid]="true" [invalid]="isInvalid('city')" />
        @if (isInvalid('city')) {
            <p-message severity="error" size="small" variant="simple">City is required.</p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>
```

### Accessibility

Value to describe the component can either be provided with ariaLabelledBy or ariaLabel props. The multiselect component has a combobox role in addition to aria-haspopup and aria-expanded attributes. The relation between the combobox and the popup is created with aria-controls attribute that refers to the id of the popup listbox.

```html
<span id="dd1">Options</span>
<p-multiselect ariaLabelledBy="dd1"/>

<p-multiselect ariaLabel="Options"/>
```

### MultiSelect

MultiSelect is used to select multiple items from a collection.

## API

### MultiSelect API

API defines helper props, events and others for the PrimeNG MultiSelect module.

#### MultiSelect

MultiSelect is used to select multiple items from a collection.

##### Properties

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| required | InputSignalWithTransform<boolean, unknown> | false | There must be a value (if set). |
| invalid | InputSignalWithTransform<boolean, unknown> | false | When present, it specifies that the component should have invalid state style. |
| disabled | InputSignalWithTransform<boolean, unknown> | false | When present, it specifies that the component should have disabled state style. |
| name | InputSignal<string> | undefined | When present, it specifies that the name of the input. |
| id | string | null | Unique identifier of the component |
| ariaLabel | string | null | Defines a string that labels the input for accessibility. |
| styleClass | string | null | Style class of the element. |
| panelStyle | any | null | Inline style of the overlay panel. |
| panelStyleClass | string | null | Style class of the overlay panel element. |
| inputId | string | null | Identifier of the focus input to match a label defined for the component. |
| readonly | boolean | false | When present, it specifies that the component cannot be edited. |
| group | boolean | false | Whether to display options as grouped when nested options are provided. |
| filter | boolean | true | When specified, displays an input field to filter the items on keyup. |
| filterPlaceHolder | string | null | Defines placeholder of the filter input. |
| filterLocale | string | null | Locale to use in filtering. The default locale is the host environment's current locale. |
| overlayVisible | boolean | false | Specifies the visibility of the options panel. |
| tabindex | number | 0 | Index of the element in tabbing order. |
| dataKey | string | null | A property to uniquely identify a value in options. |
| ariaLabelledBy | string | null | Establishes relationships between the component and label(s) where its value should be one or more element IDs. |
| displaySelectedLabel | boolean | null | Whether to show labels of selected item labels or use default label. |
| maxSelectedLabels | number | null | Decides how many selected item labels to show at most. |
| selectionLimit | number | null | Maximum number of selectable items. |
| selectedItemsLabel | string | null | Label to display after exceeding max selected labels e.g. ({0} items selected), defaults "ellipsis" keyword to indicate a text-overflow. |
| showToggleAll | boolean | true | Whether to show the checkbox at header to toggle all items at once. |
| emptyFilterMessage | string | null | Text to display when filtering does not return any results. |
| emptyMessage | string | null | Text to display when there is no data. Defaults to global value in i18n translation configuration. |
| resetFilterOnHide | boolean | false | Clears the filter value when hiding the dropdown. |
| dropdownIcon | string | null | Icon class of the dropdown icon. |
| chipIcon | string | null | Icon class of the chip icon. |
| optionLabel | string | null | Name of the label field of an option. |
| optionValue | string | null | Name of the value field of an option. |
| optionDisabled | string | null | Name of the disabled field of an option. |
| optionGroupLabel | string | label | Name of the label field of an option group. |
| optionGroupChildren | string | items | Name of the options field of an option group. |
| showHeader | boolean | true | Whether to show the header. |
| filterBy | string | null | When filtering is enabled, filterBy decides which field or fields (comma separated) to search against. |
| scrollHeight | string | 200px | Height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value. |
| lazy | boolean | false | Defines if data is loaded and interacted with in lazy manner. |
| virtualScroll | boolean | false | Whether the data should be loaded on demand during scroll. |
| loading | boolean | false | Whether the multiselect is in loading state. |
| virtualScrollItemSize | number | null | Height of an item in the list for VirtualScrolling. |
| loadingIcon | string | null | Icon to display in loading state. |
| virtualScrollOptions | ScrollerOptions | null | Whether to use the scroller feature. The properties of scroller component can be used like an object in it. |
| overlayOptions | OverlayOptions | null | Whether to use overlay API feature. The properties of overlay API can be used like an object in it. |
| ariaFilterLabel | string | null | Defines a string that labels the filter input. |
| filterMatchMode | "gt" | "lt" | "in" | "startsWith" | "contains" | "endsWith" | "equals" | "notEquals" | "lte" | "gte" | contains | Defines how the items are filtered. |
| tooltip | string | null | Advisory information to display in a tooltip on hover. |
| tooltipPosition | "right" | "left" | "top" | "bottom" | right | Position of the tooltip. |
| tooltipPositionStyle | string | absolute | Type of CSS position. |
| tooltipStyleClass | string | null | Style class of the tooltip. |
| autofocusFilter | boolean | false | Applies focus to the filter element when the overlay is shown. |
| display | string | comma | Defines how the selected items are displayed. |
| autocomplete | string | off | Defines the autocomplete is active. |
| showClear | boolean | false | When enabled, a clear icon is displayed to clear the value. |
| autofocus | boolean | false | When present, it specifies that the component should automatically get focus on load. |
| placeholder | Signal<string> | null | Label to display when there are no selections. |
| options | any[] | null | An array of objects to display as the available options. |
| filterValue | string | null | When specified, filter displays with this value. |
| selectAll | boolean | null | Whether all data is selected. |
| focusOnHover | boolean | true | Indicates whether to focus on options when hovering over them, defaults to optionLabel. |
| filterFields | any[] | null | Fields used when filtering the options, defaults to optionLabel. |
| selectOnFocus | boolean | false | Determines if the option will be selected on focus. |
| autoOptionFocus | boolean | false | Whether to focus on the first visible or selected element when the overlay panel is shown. |
| highlightOnSelect | boolean | true | Whether the selected option will be add highlight class. |
| size | InputSignal<"small" | "large"> | undefined | Specifies the size of the component. |
| variant | InputSignal<"outlined" | "filled"> | undefined | Specifies the input variant of the component. |
| fluid | InputSignalWithTransform<boolean, unknown> | undefined | Spans 100% width of the container when enabled. |
| appendTo | InputSignal<any> | 'self' | Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name). |

##### Emitters

Defines emit that determine the behavior of the component based on a given condition or report the actions that the component takes.

| name | parameters | description |
| --- | --- | --- |
| onChange | event :  MultiSelectChangeEvent | Callback to invoke when value changes. |
| onFilter | event :  MultiSelectFilterEvent | Callback to invoke when data is filtered. |
| onFocus | event :  MultiSelectFocusEvent | Callback to invoke when multiselect receives focus. |
| onBlur | event :  MultiSelectBlurEvent | Callback to invoke when multiselect loses focus. |
| onClick | event :  Event | Callback to invoke when component is clicked. |
| onClear | value :  void | Callback to invoke when input field is cleared. |
| onPanelShow | event :  AnimationEvent | Callback to invoke when overlay panel becomes visible. |
| onPanelHide | event :  AnimationEvent | Callback to invoke when overlay panel becomes hidden. |
| onLazyLoad | event :  MultiSelectLazyLoadEvent | Callback to invoke in lazy mode to load new data. |
| onRemove | event :  MultiSelectRemoveEvent | Callback to invoke in lazy mode to load new data. |
| onSelectAllChange | event :  MultiSelectSelectAllChangeEvent | Callback to invoke when all data is selected. |

##### Methods

Defines methods that can be accessed by the component's reference.

| name | parameters | description |
| --- | --- | --- |
| updateModel | value :  anyevent :  any | Updates the model value. |
| show | isFocus :  any | Displays the panel. |
| hide | isFocus :  any | Hides the panel. |

---

[View Official Documentation](https://primeng.org/multiselect)
