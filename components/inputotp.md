# InputOtp

Input Otp is used to enter one time passwords.

## Import

```typescript
import { InputOtpModule } from 'primeng/inputotp';
```

## Basic

Two-way value binding is defined using ngModel. The number of characters is defined with the length property, which is set to 4 by default.

```html
<p-inputotp [(ngModel)]="value" />
```

## Mask

Enable the mask option to hide the values in the input fields.

```html
<p-inputotp [(ngModel)]="value" [mask]="true" />
```

## Integer Only

When integerOnly is present, only integers can be accepted as input.

```html
<p-inputotp [(ngModel)]="value" [integerOnly]="true" />
```

## Sizes

InputOtp provides small and large sizes as alternatives to the base.

```html
<p-inputotp [(ngModel)]="value1" size="small" />
<p-inputotp [(ngModel)]="value2" />
<p-inputotp [(ngModel)]="value3" size="large" />
```

## Template

Define a template with your own UI elements with bindings to the provided events and attributes to replace the default design.

```html
<p-inputotp [(ngModel)]="value">
    <ng-template #input let-token let-events="events">
        <input class="custom-otp-input" (input)="events.input($event)" (keydown)="events.keydown($event)" type="text" [attr.value]="token" [maxLength]="1" />
    </ng-template>
</p-inputotp>
```

## Forms

InputOtp can also be used with reactive forms. In this case, the formControlName property is used to bind the component to a form control.

```html
<form #exampleForm="ngForm" (ngSubmit)="onSubmit(exampleForm)" class="flex flex-col gap-4">
    <div class="flex flex-col gap-1">
        <p-inputotp #otpModel="ngModel" [(ngModel)]="value" [invalid]="otpModel.invalid && (otpModel.touched || exampleForm.submitted)" name="value" required [minlength]="4" />

        @if (otpModel.invalid && (otpModel.touched || exampleForm.submitted)) {
            <p-message severity="error" size="small" variant="simple">Passcode is required.</p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>
```

```html
<form [formGroup]="exampleForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-4">
    <div class="flex flex-col gap-1">
        <p-inputotp formControlName="value" [invalid]="isInvalid('value')" />
        @if (isInvalid('value')) {
            <p-message severity="error" size="small" variant="simple">Passcode is required.</p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>
```

## Sample

A sample UI implementation with templating and additional elements.

```html
<div class="flex flex-col items-center">
    <div class="font-bold text-xl mb-2">Authenticate Your Account</div>
    <p class="text-muted-color block mb-8">Please enter the code sent to your phone.</p>
    <p-inputotp [(ngModel)]="value" [length]="6">
        <ng-template #input let-token let-events="events" let-index="index">
            <input type="text" [maxLength]="1" (input)="events.input($event)" (keydown)="events.keydown($event)" [attr.value]="token" class="custom-otp-input" />
            <div *ngIf="index === 3" class="px-4">
                <i class="pi pi-minus"></i>
            </div>
        </ng-template>
    </p-inputotp>
    <div class="flex justify-between mt-8 self-stretch">
        <p-button label="Resend Code" [link]="true" class="p-0"/>
        <p-button label="Submit Code"/>
    </div>
</div>
```

## Accessibility

Input OTP uses a set of InputText components, refer to the InputText component for more information about the screen reader support.

## InputOtp

Input Otp is used to enter one time passwords.

---

[View Official Documentation](https://primeng.org/inputotp)
