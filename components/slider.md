# Slider

Slider is a component to provide input with a drag handle.

## Features

### Import

```typescript
import { SliderModule } from 'primeng/slider';
```

### Basic

Two-way binding is defined using the standard ngModel directive.

```html
<p-slider [(ngModel)]="value" class="w-56" />
```

### Input

Slider is connected to an input field using two-way binding.

```html
<input type="text" pInputText [(ngModel)]="value" class="w-full mb-4"/>
<p-slider [(ngModel)]="value" class="w-full" />
```

### Step

Size of each movement is defined with the step property.

```html
<p-slider [(ngModel)]="value" [step]="20" class="w-56" />
```

### Range

When range property is present, slider provides two handles to define two values. In range mode, value should be an array instead of a single value.

```html
<p-slider [(ngModel)]="rangeValues" [range]="true" class="w-56" />
```

### Filter

Image filter implementation using multiple sliders.

```html
<img alt="user header" class="w-full md:w-80 rounded mb-6" src="https://primefaces.org/cdn/primevue/images/card-vue.jpg" [style]="filterStyle" />
<p-selectbutton [(ngModel)]="filter" [options]="filterOptions" optionLabel="label" optionValue="value" class="mb-4" />
<p-slider [(ngModel)]="filterValues[filter]" class="w-56" [min]="0" [max]="200" />
```

### Vertical

Default layout of slider is horizontal, use orientation property for the alternative vertical mode.

```html
<p-slider [(ngModel)]="value" orientation="vertical" class="h-56" />
```

### Forms

Slider can also be used with reactive forms. In this case, the formControlName property is used to bind the component to a form control.

```html
<form #exampleForm="ngForm" (ngSubmit)="onSubmit(exampleForm)" class="flex justify-center flex-col gap-4">
    <div class="flex flex-col gap-4">
        <p-slider #model="ngModel" [(ngModel)]="value" class="w-56" required [invalid]="model.invalid && (model.touched || exampleForm.submitted)" name="slider" />
        @if (model.invalid && (model.touched || exampleForm.submitted)) {
            <p-message severity="error" size="small" variant="simple">Must be greater than 25.</p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>
```

```html
<form [formGroup]="exampleForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-4">
    <div class="flex flex-col gap-4">
        <p-slider formControlName="value" class="w-56" />
        @if (isInvalid('value')) {
            <p-message severity="error" size="small" variant="simple">Must be greater than 25.</p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>
```

### Accessibility

Slider element component uses slider role on the handle in addition to the aria-orientation, aria-valuemin, aria-valuemax and aria-valuenow attributes. Value to describe the component can be defined using ariaLabelledBy and ariaLabel props.

```html
<span id="label_number">Number</span>
<p-slider ariaLabelledBy="label_number" />

<p-slider ariaLabel="Number" />
```

### Slider

Slider is a component to provide input with a drag handle.

## API

### Slider API

API defines helper props, events and others for the PrimeNG Slider module.

#### Slider

Slider is a component to provide input with a drag handle.

##### Properties

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| required | InputSignalWithTransform<boolean, unknown> | false | There must be a value (if set). |
| invalid | InputSignalWithTransform<boolean, unknown> | false | When present, it specifies that the component should have invalid state style. |
| disabled | InputSignalWithTransform<boolean, unknown> | false | When present, it specifies that the component should have disabled state style. |
| name | InputSignal<string> | undefined | When present, it specifies that the name of the input. |
| animate | boolean | false | When enabled, displays an animation on click of the slider bar. |
| min | number | 0 | Mininum boundary value. |
| max | number | 100 | Maximum boundary value. |
| orientation | "vertical" | "horizontal" | horizontal | Orientation of the slider. |
| step | number | null | Step factor to increment/decrement the value. |
| range | boolean | false | When specified, allows two boundary values to be picked. |
| styleClass | string | null | Style class of the component. |
| ariaLabel | string | null | Defines a string that labels the input for accessibility. |
| ariaLabelledBy | string | null | Establishes relationships between the component and label(s) where its value should be one or more element IDs. |
| tabindex | number | 0 | Index of the element in tabbing order. |
| autofocus | boolean | false | When present, it specifies that the component should automatically get focus on load. |

##### Emitters

Defines emit that determine the behavior of the component based on a given condition or report the actions that the component takes.

| name | parameters | description |
| --- | --- | --- |
| onChange | event :  SliderChangeEvent | Callback to invoke on value change. |
| onSlideEnd | event :  SliderSlideEndEvent | Callback to invoke when slide ended. |

---

[View Official Documentation](https://primeng.org/slider)
