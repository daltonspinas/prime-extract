# ToggleSwitch

ToggleSwitch is used to select a boolean value.

## Features

### Import

```typescript
import { ToggleSwitchModule } from 'primeng/toggleswitch';
```

### Basic

Two-way value binding is defined using ngModel.

```html
<p-toggleswitch [(ngModel)]="checked" />
```

### Preselection

Enabling ngModel property displays the component as active initially.

```html
<p-toggleswitch [(ngModel)]="checked" />
```

### Template

The handle template is available to display custom content.

```html
<p-toggleswitch [(ngModel)]="checked">
    <ng-template #handle let-checked="checked">
        <i [ngClass]="['!text-xs', 'pi', checked ? 'pi-check' : 'pi-times']"></i>
    </ng-template>
</p-toggleswitch>
```

### Disabled

When disabled is present, the element cannot be edited and focused.

```html
<p-toggleswitch [(ngModel)]="checked" [disabled]="true" />
```

### Invalid

The invalid state is applied using the ⁠invalid property to indicate failed validation, which can be integrated with Angular Forms.

```html
<p-toggleswitch [(ngModel)]="checked" [invalid]="!checked" />
```

### Forms

ToggleSwitch can also be used with reactive forms. In this case, the formControlName property is used to bind the component to a form control.

```html
<form #exampleForm="ngForm" (ngSubmit)="onSubmit(exampleForm)" class="flex flex-col gap-4 w-48">
    <div class="flex flex-col items-center gap-2">
        <p-toggleswitch #model="ngModel" [(ngModel)]="checked" name="activation" [invalid]="model.invalid && exampleForm.submitted" required />
        @if (model.invalid && exampleForm.submitted) {
            <p-message severity="error" size="small" variant="simple">Activation is required.</p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>
```

```html
<div class="card flex justify-center">
    <form [formGroup]="exampleForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-4 w-48">
        <div class="flex flex-col items-center gap-2">
            <p-toggleswitch name="activation" formControlName="activation" [invalid]="isInvalid('activation')" />
            @if (isInvalid('activation')) {
                <p-message severity="error" size="small" variant="simple">Activation is required.</p-message>
            }
        </div>
        <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
    </form>
</div>
```

### Accessibility

InputSwitch component uses a hidden native checkbox element with switch role internally that is only visible to screen readers. Value to describe the component can either be provided via label tag combined with inputId prop or using ariaLabelledBy, ariaLabel props.

```html
<label for="switch1">Remember Me</label>
<p-toggleswitch inputId="switch1" />

<span id="switch2">Remember Me</span>
<p-toggleswitch ariaLabelledBy="switch2" />

<p-toggleswitch ariaLabel="Remember Me" />
```

### ToggleSwitch

ToggleSwitch is used to select a boolean value.

## API

### ToggleSwitch API

API defines helper props, events and others for the PrimeNG ToggleSwitch module.

#### ToggleSwitch

ToggleSwitch is used to select a boolean value.

##### Properties

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| required | InputSignalWithTransform<boolean, unknown> | false | There must be a value (if set). |
| invalid | InputSignalWithTransform<boolean, unknown> | false | When present, it specifies that the component should have invalid state style. |
| disabled | InputSignalWithTransform<boolean, unknown> | false | When present, it specifies that the component should have disabled state style. |
| name | InputSignal<string> | undefined | When present, it specifies that the name of the input. |
| styleClass | string | null | Style class of the component. |
| tabindex | number | null | Index of the element in tabbing order. |
| inputId | string | null | Identifier of the input element. |
| readonly | boolean | false | When present, it specifies that the component cannot be edited. |
| trueValue | any | true | Value in checked state. |
| falseValue | any | false | Value in unchecked state. |
| ariaLabel | string | null | Used to define a string that autocomplete attribute the current element. |
| size | InputSignal<"small" | "large"> | undefined | Specifies the size of the component. |
| ariaLabelledBy | string | null | Establishes relationships between the component and label(s) where its value should be one or more element IDs. |
| autofocus | boolean | false | When present, it specifies that the component should automatically get focus on load. |

##### Emitters

Defines emit that determine the behavior of the component based on a given condition or report the actions that the component takes.

| name | parameters | description |
| --- | --- | --- |
| onChange | event :  ToggleSwitchChangeEvent | Callback to invoke when the on value change. |

##### Templates

Defines the templates used by the component.

| name | parameters | description |
| --- | --- | --- |
| handle |  | Callback to invoke when the on value change. |

---

[View Official Documentation](https://primeng.org/toggleswitch)
