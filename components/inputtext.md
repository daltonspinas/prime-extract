# InputText

InputText is an extension to standard input element with theming and keyfiltering.

## Import

```typescript
import { InputTextModule } from 'primeng/inputtext';
```

## Basic

InputText is used as a controlled input with ngModel property.

```html
<input type="text" pInputText [(ngModel)]="value" />
```

## Float Label

FloatLabel visually integrates a label with its form element. Visit FloatLabel documentation for more information.

```html
<p-floatlabel>
    <input pInputText id="over_label" [(ngModel)]="value1" autocomplete="off" />
    <label for="over_label">Over Label</label>
</p-floatlabel>

<p-floatlabel variant="in">
    <input pInputText id="in_label" [(ngModel)]="value2" autocomplete="off" />
    <label for="in_label">In Label</label>
</p-floatlabel>

<p-floatlabel variant="on">
    <input pInputText id="on_label" [(ngModel)]="value3" autocomplete="off" />
    <label for="on_label">On Label</label>
</p-floatlabel>
```

## Ifta Label

IftaLabel is used to create infield top aligned labels. Visit IftaLabel documentation for more information.

```html
<p-iftalabel>
    <input pInputText id="username" [(ngModel)]="value" autocomplete="off" />
    <label for="username">Username</label>
</p-iftalabel>
```

## Sizes

InputText provides small and large sizes as alternatives to the standard.

```html
<input pInputText [(ngModel)]="value1" type="text" pSize="small" placeholder="Small" />
<input pInputText [(ngModel)]="value2" type="text" placeholder="Normal" />
<input pInputText [(ngModel)]="value3" type="text" pSize="large" placeholder="Large" />
```

## Help Text

An advisory text can be defined with the semantic small tag.

```html
<div class="flex flex-col gap-2">
    <label for="username">Username</label>
    <input pInputText id="username" aria-describedby="username-help" [(ngModel)]="value" />
    <small id="username-help">Enter your username to reset your password.</small>
</div>
```

## Filled

Specify the variant property as filled to display the component with a higher visual emphasis than the default outlined style.

```html
<input type="text" pInputText [(ngModel)]="value" variant="filled" />
```

## Disabled

When disabled is present, the element cannot be edited and focused.

```html
<input pInputText [disabled]="true" [(ngModel)]="value" />
```

## Invalid

The invalid state is applied using the ⁠invalid property to indicate failed validation, which can be integrated with Angular Forms.

```html
<input pInputText [(ngModel)]="value1" [invalid]="!value1" placeholder="Name" />
<input pInputText [(ngModel)]="value2" [invalid]="!value2" variant="filled" placeholder="Name" />
```

## Forms

```html
<form #exampleForm="ngForm" (ngSubmit)="onSubmit(exampleForm)" class="flex flex-col gap-4 w-full sm:w-56">
    <div class="flex flex-col gap-1">
        <input pInputText type="text" id="username" placeholder="Username" name="username" [(ngModel)]="user.username" #username="ngModel" [invalid]="username.invalid && (username.touched || exampleForm.submitted)" required />
        @if (username.invalid && (username.touched || exampleForm.submitted)) {
            <p-message severity="error" size="small" variant="simple">Username is required.</p-message>
        }
    </div>
    <div class="flex flex-col gap-1">
        <input pInputText type="email" id="email" name="email" placeholder="Email" [(ngModel)]="user.email" #email="ngModel" required email [invalid]="email.invalid && (email.touched || exampleForm.submitted)" />
        @if (email.invalid && (email.touched || exampleForm.submitted)) {
            <p-message severity="error" size="small" variant="simple">
                @if (email.hasError('required')) {
                    Email is Required.
                }
                @if (email.hasError('email')) {
                    Please enter a valid email.
                }
            </p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>
```

```html
<form [formGroup]="exampleForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-4 w-full sm:w-56">
    <div class="flex flex-col gap-1">
        <input pInputText type="text" id="username" placeholder="Username" formControlName="username" [invalid]="isInvalid('username')" />
        @if (isInvalid('username')) {
            <p-message severity="error" size="small" variant="simple">Username is required.</p-message>
        }
    </div>
    <div class="flex flex-col gap-1">
        <input pInputText type="email" id="email" placeholder="Email" formControlName="email" [invalid]="isInvalid('email')" />
        @if (isInvalid('email')) {
            @if (exampleForm.get('email')?.errors?.['required']) {
                <p-message severity="error" size="small" variant="simple">Email is required.</p-message>
            }
            @if (exampleForm.get('email')?.errors?.['email']) {
                <p-message severity="error" size="small" variant="simple">Please enter a valid email.</p-message>
            }
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>
```

## Accessibility

InputText component renders a native input element that implicitly includes any passed prop. Value to describe the component can either be provided via label tag combined with id prop or using aria-labelledby, aria-label props.

```html
<label for="firstname">Firstname</label>
<input pInputText id="firstname" />

<span id="lastname">Lastname</span>
<input pInputText aria-labelledby="lastname" />

<input pInputText aria-label="Age" />
```

## InputText

InputText directive is an extension to standard input element with theming.

---

[View Official Documentation](https://primeng.org/inputtext)
