# ToggleButton

ToggleButton is used to select a boolean value using a button.

## Import

```typescript
import { ToggleButtonModule } from 'primeng/togglebutton';
```

## Basic

Two-way binding to a boolean property is defined using the standard ngModel directive.

```html
<p-togglebutton [(ngModel)]="checked" onLabel="On" offLabel="Off" class="w-24" />
```

## Customized

Icons and Labels can be customized using onLabel, offLabel, onIcon and offIcon properties.

```html
<p-togglebutton [(ngModel)]="checked" onLabel="Locked" offLabel="Unlocked" onIcon="pi pi-check" offIcon="pi pi-times" onIcon="pi pi-lock" offIcon="pi pi-lock-open" class="w-36" ariaLabel="Do you confirm" />
```

## Sizes

ToggleButton provides small and large sizes as alternatives to the base.

```html
<p-togglebutton [(ngModel)]="value1" onLabel="On" offLabel="Off" size="small" class="min-w-16" />
<p-togglebutton [(ngModel)]="value2" onLabel="On" offLabel="Off" class="min-w-20" />
<p-togglebutton [(ngModel)]="value3" onLabel="On" offLabel="Off" size="large" class="min-w-24" />
```

## Disabled

When disabled is present, the element cannot be edited and focused.

```html
<p-togglebutton disabled="true" onIcon="pi pi-check" offIcon="pi pi-times" [(ngModel)]="checked" onLabel="Yes" offLabel="No" class="w-full sm:w-40" ariaLabel="Confirmation" />
```

## Invalid

The invalid state is applied using the ⁠invalid property to indicate failed validation, which can be integrated with Angular Forms.

```html
<p-togglebutton [(ngModel)]="checked" onIcon="pi pi-check" offIcon="pi pi-times" [invalid]="!checked" class="w-full sm:w-40" aria-label="Confirmation" />
```

## Forms

ToggleButton can also be used with reactive forms. In this case, the formControlName property is used to bind the component to a form control.

```html
<form #exampleForm="ngForm" (ngSubmit)="onSubmit(exampleForm)" class="flex flex-col gap-4">
    <div class="flex flex-col gap-1">
        <p-togglebutton #model="ngModel" [(ngModel)]="checked" [invalid]="model.invalid && (model.touched || exampleForm.submitted)" name="country" onLabel="Accept All" offLabel="Reject All" required />
        @if (model.invalid && (model.touched || exampleForm.submitted)) {
            <p-message severity="error" size="small" variant="simple">Consent is mandatory.</p-message>
        }
    </div>
    <button pButton type="submit"><span pButtonLabel>Submit</span></button>
</form>
```

```html
<form [formGroup]="exampleForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-4">
    <div class="flex flex-col gap-1">
        <p-togglebutton name="consent" formControlName="checked" [invalid]="isInvalid('checked')" onLabel="Accept All" offLabel="Reject All" />
        @if (isInvalid('checked')) {
            <p-message severity="error" size="small" variant="simple">Consent is mandatory.</p-message>
        }
    </div>
    <button pButton type="submit"><span pButtonLabel>Submit</span></button>
</form>
```

## Accessibility

ToggleButton component uses an element with button role and updates aria-pressed state for screen readers. Value to describe the component can be defined with ariaLabelledBy or ariaLabel props, it is highly suggested to use either of these props as the component changes the label displayed which will result in screen readers to read different labels when the component receives focus. To prevent this, always provide an aria label that does not change related to state.

```html
<span id="rememberme">Remember Me</span>
<p-togglebutton ariaLabelledBy="rememberme" />

<p-togglebutton ariaLabel="Remember Me" />
```

## ToggleButton

ToggleButton is used to select a boolean value using a button.

---

[View Official Documentation](https://primeng.org/togglebutton)
