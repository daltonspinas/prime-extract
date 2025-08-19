# Password

Password displays strength indicator for password fields.

## Import

```typescript
import { PasswordModule } from 'primeng/password';
```

## Basic

Two-way value binding is defined using ngModel.

```html
<p-password [(ngModel)]="value" [feedback]="false" />
```

## Meter

Strength meter is displayed as a popup while a value is being entered.

```html
<p-password [(ngModel)]="value" />
```

## Locale

Labels are translated at component level by promptLabel, weakLabel, mediumLabel and strongLabel properties. In order to apply global translations for all Password components in the application, refer to the locale

```html
<p-password [(ngModel)]="value" promptLabel="Choose a password" weakLabel="Too simple" mediumLabel="Average complexity" strongLabel="Complex password" />
```

## Toggle Mask

When toggleMask is present, an icon is displayed to show the value as plain text.

```html
<p-password [(ngModel)]="value" [toggleMask]="true" />
```

## Template

3 templates are included to customize the overlay. These are header, content and footer. Note that content overrides the default meter.

```html
<p-password [(ngModel)]="value" autocomplete="off">
    <ng-template #header>
        <div class="font-semibold text-xm mb-4">Reset Password</div>
    </ng-template>
    <ng-template #footer>
        <p-divider />
        <ul class="pl-2 my-0 leading-normal">
            <li>At least one lowercase</li>
            <li>At least one uppercase</li>
            <li>At least one numeric</li>
            <li>Minimum 8 characters</li>
        </ul>
    </ng-template>
</p-password>
```

## Float Label

A floating label appears on top of the input field when focused. Visit FloatLabel documentation for more information.

```html
<p-floatlabel>
    <p-password [(ngModel)]="value1" inputId="over_label" />
    <label for="over_label">Over Label</label>
</p-floatlabel>

<p-floatlabel variant="in">
    <p-password [(ngModel)]="value2" inputId="in_label" />
    <label for="in_label">In Label</label>
</p-floatlabel>

<p-floatlabel variant="on">
    <p-password [(ngModel)]="value3" inputId="on_label" />
    <label for="on_label">On Label</label>
</p-floatlabel>
```

## Ifta Label

IftaLabel is used to create infield top aligned labels. Visit IftaLabel documentation for more information.

```html
<p-iftalabel>
    <p-password [(ngModel)]="value" inputId="password" />
    <label for="password">Password</label>
</p-iftalabel>
```

## Sizes

Password provides small and large sizes as alternatives to the base.

```html
<p-password [(ngModel)]="value1" type="text" size="small" placeholder="Small" />
<p-password [(ngModel)]="value2" type="text" placeholder="Normal" />
<p-password [(ngModel)]="value3" type="text" size="large" placeholder="Large" />
```

## Filled

Specify the variant property as filled to display the component with a higher visual emphasis than the default outlined style.

```html
<p-password [(ngModel)]="value" [feedback]="false" variant="filled" />
```

## Disabled

When disabled is present, the element cannot be edited and focused.

```html
<p-password [(ngModel)]="value" [disabled]="true" placeholder="Disabled" />
```

## Invalid

The invalid state is applied using the ⁠invalid property to indicate failed validation, which can be integrated with Angular Forms.

```html
<p-password [(ngModel)]="value1" [invalid]="!value1" placeholder="Password" />
<p-password [(ngModel)]="value2" [invalid]="!value2" variant="filled" placeholder="Password" />
```

## Forms

Password can also be used with reactive forms. In this case, the formControlName property is used to bind the component to a form control.

```html
<form #exampleForm="ngForm" (ngSubmit)="onSubmit(exampleForm)" class="flex justify-center flex-col gap-4 md:w-56">
    <div class="flex flex-col gap-1">
        <p-password #model="ngModel" [(ngModel)]="value" [invalid]="model.invalid && (model.touched || exampleForm.submitted)" name="password" [feedback]="false" autocomplete="off" required fluid />

        @if (model.invalid && (model.touched || exampleForm.submitted)) {
            <p-message severity="error" size="small" variant="simple">Password is required.</p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>
```

```html
<form [formGroup]="exampleForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-4 sm:w-56">
    <div class="flex flex-col gap-1">
        <p-password formControlName="value" [invalid]="isInvalid('value')" [feedback]="false" autocomplete="off" fluid />

        @if (isInvalid('value')) {
            <p-message severity="error" size="small" variant="simple">Password is required.</p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>
```

## Accessibility

Value to describe the component can either be provided via label tag combined with id prop or using ariaLabelledBy, ariaLabel props. Screen reader is notified about the changes to the strength of the password using a section that has aria-live while typing.

```html
<label for="pwd1">Password</label>
<p-password inputId="pwd1" />

<span id="pwd2">Password</span>
<p-password ariaLabelledBy="pwd2" />

<p-password ariaLabel="Password" />
```

## Password

Password displays strength indicator for password fields.

## PasswordDirective

Password directive.

---

[View Official Documentation](https://primeng.org/password)
