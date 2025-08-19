# ColorPicker

ColorPicker is an input component to select a color.

## Import

```typescript
import { ColorPickerModule } from 'primeng/colorpicker';
```

## Basic

ColorPicker is used as a controlled input with ngModel property.

```html
<p-colorpicker [(ngModel)]="color" />
```

## Inline

ColorPicker is displayed as a popup by default, add inline property to customize this behavior.

```html
<p-colorpicker [(ngModel)]="color" [inline]="true" />
```

## Format

Default color format to use in value binding is hex and other possible values can be rgb and hsb using the format property.

```html
<p-colorpicker [(ngModel)]="color" inputId="cp-hex" />

<p-colorpicker [(ngModel)]="colorRGB" format="rgb" inputId="cp-rgb" />

<p-colorpicker [(ngModel)]="colorHSB" format="hsb" inputId="cp-hsb" />
```

## Forms

ColorPicker can also be used with reactive forms. In this case, the formControlName property is used to bind the component to a form control.

```html
<form #exampleForm="ngForm" (ngSubmit)="onSubmit(exampleForm)" class="flex flex-col gap-4">
    <div class="flex flex-col items-center gap-2">
        <p-colorpicker name="color" [(ngModel)]="color" #colorModel="ngModel" required defaultColor="989898" />
        @if (colorModel.invalid && (colorModel.touched || exampleForm.submitted)) {
            <p-message severity="error" size="small" variant="simple">Color is required.</p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>
```

```html
<form [formGroup]="exampleForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-4">
    <div class="flex flex-col items-center gap-2">
        <p-colorpicker formControlName="color" defaultColor="989898" />
        @if (isInvalid('color')) {
            <p-message severity="error" size="small" variant="simple">Color is required.</p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>
```

## Disabled

When disabled is present, the element cannot be edited and focused.

```html
<p-colorpicker [(ngModel)]="color" [disabled]="true" />
```

## Accessibility

Specification does not cover a color picker yet and using a semantic native color picker is not consistent across browsers so currently component is not compatible with screen readers. In the upcoming versions, text fields will be introduced below the slider section to be able to pick a color using accessible text boxes in hsl, rgba and hex formats.

## ColorPicker

ColorPicker groups a collection of contents in tabs.

---

[View Official Documentation](https://primeng.org/colorpicker)
