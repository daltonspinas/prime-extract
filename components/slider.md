# Slider

Slider is a component to provide input with a drag handle.

## Import

```typescript
import { SliderModule } from 'primeng/slider';
```

## Basic

Two-way binding is defined using the standard ngModel directive.

```html
<p-slider [(ngModel)]="value" class="w-56" />
```

## Input

Slider is connected to an input field using two-way binding.

```html
<input type="text" pInputText [(ngModel)]="value" class="w-full mb-4"/>
<p-slider [(ngModel)]="value" class="w-full" />
```

## Step

Size of each movement is defined with the step property.

```html
<p-slider [(ngModel)]="value" [step]="20" class="w-56" />
```

## Range

When range property is present, slider provides two handles to define two values. In range mode, value should be an array instead of a single value.

```html
<p-slider [(ngModel)]="rangeValues" [range]="true" class="w-56" />
```

## Filter

Image filter implementation using multiple sliders.

```html
<img alt="user header" class="w-full md:w-80 rounded mb-6" src="https://primefaces.org/cdn/primevue/images/card-vue.jpg" [style]="filterStyle" />
<p-selectbutton [(ngModel)]="filter" [options]="filterOptions" optionLabel="label" optionValue="value" class="mb-4" />
<p-slider [(ngModel)]="filterValues[filter]" class="w-56" [min]="0" [max]="200" />
```

## Vertical

Default layout of slider is horizontal, use orientation property for the alternative vertical mode.

```html
<p-slider [(ngModel)]="value" orientation="vertical" class="h-56" />
```

## Forms

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

## Accessibility

Slider element component uses slider role on the handle in addition to the aria-orientation, aria-valuemin, aria-valuemax and aria-valuenow attributes. Value to describe the component can be defined using ariaLabelledBy and ariaLabel props.

```html
<span id="label_number">Number</span>
<p-slider ariaLabelledBy="label_number" />

<p-slider ariaLabel="Number" />
```

## Slider

Slider is a component to provide input with a drag handle.

---

[View Official Documentation](https://primeng.org/slider)
