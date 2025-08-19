# Knob

Knob is a form component to define number inputs with a dial.

## Import

```typescript
import { KnobModule } from 'primeng/knob';
```

## Basic

Knob is an input component and used with the standard ngModel directive.

```html
<p-knob [(ngModel)]="value" />
```

## Min/Max

Boundaries are configured with the min and max properties whose defaults are 0 and 100 respectively.

```html
<p-knob [(ngModel)]="value" [min]="-50" [max]="50" />
```

## Step

Size of each movement is defined with the step property.

```html
<p-knob [(ngModel)]="value" [step]="10" />
```

## Template

Label is a string template that can be customized with the valueTemplate property having 60 as the placeholder .

```html
<p-knob [(ngModel)]="value" valueTemplate="{value}%" />
```

## Stroke

The border size is specified with the strokeWidth property as a number in pixels.

```html
<p-knob [(ngModel)]="value" [strokeWidth]="5" />
```

## Size

Diameter of the knob is defined in pixels using the size property.

```html
<p-knob [(ngModel)]="value" [size]="200" />
```

## Color

Colors are customized with the textColor, rangeColor and valueColor properties.

```html
<p-knob [(ngModel)]="value" valueColor="SlateGray" rangeColor="MediumTurquoise" />
```

## Reactive

Knob can be controlled with custom controls as well.

```html
<p-knob [(ngModel)]="value" size="150" readonly="true"/>
<div class="flex gap-2">
    <p-button icon="pi pi-plus" (click)="value = value+1" [disabled]="value >= 100" />
    <p-button icon="pi pi-minus" (click)="value = value-1" [disabled]="value <= 0" />
</div>
```

## ReadOnly

When readonly present, value cannot be edited.

```html
<p-knob [(ngModel)]="value" [readonly]="true" />
```

## Forms

Knob can also be used with reactive forms. In this case, the formControlName property is used to bind the component to a form control.

```html
<form #exampleForm="ngForm" (ngSubmit)="onSubmit(exampleForm)" class="flex flex-col gap-4">
    <div class="flex flex-col items-center gap-1">
        <p-knob #model="ngModel" [(ngModel)]="value" [invalid]="isInvalid(model)" name="knob" />
        @if (isInvalid(model)) {
            <p-message severity="error" size="small" variant="simple">{{ getErrorMessage(model) }}</p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>
```

```html
<form [formGroup]="exampleForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-4">
    <div class="flex flex-col items-center gap-1">
        <p-knob formControlName="value" [invalid]="isInvalid('value')" />
        @if (isInvalid('value')) {
            <p-message severity="error" size="small" variant="simple">{{ getErrorMessage('value') }}</p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>
```

## Disabled

When disabled is present, a visual hint is applied to indicate that the Knob cannot be interacted with.

```html
<p-knob [(ngModel)]="value" [disabled]="true" />
```

## Accessibility

Knob element component uses slider role in addition to the aria-valuemin, aria-valuemax and aria-valuenow attributes. Value to describe the component can be defined using ariaLabelledBy and ariaLabel props.

```html
<span id="label_number">Number</span>
<p-knob ariaLabelledBy="label_number"/>

<p-knob ariaLabel="Number"/>
```

## Knob

Knob is a form component to define number inputs with a dial.

---

[View Official Documentation](https://primeng.org/knob)
