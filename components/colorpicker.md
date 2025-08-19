# ColorPicker

ColorPicker is an input component to select a color.

## Features

### Import

```typescript
import { ColorPickerModule } from 'primeng/colorpicker';
```

### Basic

ColorPicker is used as a controlled input with ngModel property.

```html
<p-colorpicker [(ngModel)]="color" />
```

### Inline

ColorPicker is displayed as a popup by default, add inline property to customize this behavior.

```html
<p-colorpicker [(ngModel)]="color" [inline]="true" />
```

### Format

Default color format to use in value binding is hex and other possible values can be rgb and hsb using the format property.

```html
<p-colorpicker [(ngModel)]="color" inputId="cp-hex" />

<p-colorpicker [(ngModel)]="colorRGB" format="rgb" inputId="cp-rgb" />

<p-colorpicker [(ngModel)]="colorHSB" format="hsb" inputId="cp-hsb" />
```

### Forms

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

### Disabled

When disabled is present, the element cannot be edited and focused.

```html
<p-colorpicker [(ngModel)]="color" [disabled]="true" />
```

### Accessibility

Specification does not cover a color picker yet and using a semantic native color picker is not consistent across browsers so currently component is not compatible with screen readers. In the upcoming versions, text fields will be introduced below the slider section to be able to pick a color using accessible text boxes in hsl, rgba and hex formats.

### ColorPicker

ColorPicker groups a collection of contents in tabs.

## API

### ColorPicker API

API defines helper props, events and others for the PrimeNG ColorPicker module.

#### ColorPicker

ColorPicker groups a collection of contents in tabs.

##### Properties

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| required | InputSignalWithTransform<boolean, unknown> | false | There must be a value (if set). |
| invalid | InputSignalWithTransform<boolean, unknown> | false | When present, it specifies that the component should have invalid state style. |
| disabled | InputSignalWithTransform<boolean, unknown> | false | When present, it specifies that the component should have disabled state style. |
| name | InputSignal<string> | undefined | When present, it specifies that the name of the input. |
| styleClass | string | null | Style class of the component. |
| inline | boolean | false | Whether to display as an overlay or not. |
| format | "rgb" | "hex" | "hsb" | hex | Format to use in value binding. |
| tabindex | string | null | Index of the element in tabbing order. |
| inputId | string | null | Identifier of the focus input to match a label defined for the dropdown. |
| autoZIndex | boolean | true | Whether to automatically manage layering. |
| showTransitionOptions | string | .12s cubic-bezier(0, 0, 0.2, 1) | Transition options of the show animation. |
| hideTransitionOptions | string | .1s linear | Transition options of the hide animation. |
| autofocus | boolean | false | When present, it specifies that the component should automatically get focus on load. |
| defaultColor | string | ff0000 | Default color to display initially when model value is not present. |
| appendTo | InputSignal<any> | 'self' | Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name). |

##### Emitters

Defines emit that determine the behavior of the component based on a given condition or report the actions that the component takes.

| name | parameters | description |
| --- | --- | --- |
| onChange | event :  ColorPickerChangeEvent | Callback to invoke on value change. |
| onShow | value :  any | Callback to invoke on panel is shown. |
| onHide | value :  any | Callback to invoke on panel is hidden. |

---

[View Official Documentation](https://primeng.org/colorpicker)
