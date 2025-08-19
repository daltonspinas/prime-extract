# InputMask

InputMask component is used to enter input in a certain format such as numeric, date, currency and phone.

## Import

```typescript
import { InputMaskModule } from 'primeng/inputmask';
```

## Basic

InputMask is used as a controlled input with ngModel properties.

```html
<p-inputmask mask="99-999999" [(ngModel)]="value" placeholder="99-999999" />
```

## Mask

Mask format can be a combination of the following definitions; a for alphabetic characters, 9 for numeric characters and * for alphanumberic characters. In addition, formatting characters like ( , ) , - are also accepted.

```html
<span class="font-bold block mb-2">SSN</span>
<p-inputmask mask="999-99-9999" [(ngModel)]="value1" placeholder="999-99-9999" />
<span class="font-bold block mb-2">Phone</span>
<p-inputmask mask="(999) 999-9999" [(ngModel)]="value2" placeholder="(999) 999-9999" />
<span class="font-bold block mb-2">Serial Number</span>
<p-inputmask mask="a*-999-a999" [(ngModel)]="value3" placeholder="a*-999-a999" />
```

## Optional

When the input does not complete the mask definition, it is cleared by default. Use autoClear property to control this behavior. In addition, ? is used to mark anything after the question mark optional.

```html
<p-inputmask mask="(999) 999-9999? x99999" [(ngModel)]="value" placeholder="(999) 999-9999? x99999" />
```

## SlotChar

Default placeholder for a mask is underscore that can be customized using slotChar property.

```html
<p-inputmask [(ngModel)]="value" mask="99/99/9999" placeholder="99/99/9999" slotChar="mm/dd/yyyy" />
```

## Filled

Specify the variant property as filled to display the component with a higher visual emphasis than the default outlined style.

```html
<p-inputmask mask="99-999999" [(ngModel)]="value" variant="filled" placeholder="99-999999" />
```

## Float Label

FloatLabel visually integrates a label with its form element. Visit FloatLabel documentation for more information.

```html
<p-floatlabel>
    <p-inputmask id="over_label" [(ngModel)]="value1" mask="999-99-9999" />
    <label for="over_label">Over Label</label>
</p-floatlabel>

<p-floatlabel variant="in">
    <p-inputmask id="in_label" [(ngModel)]="value2" mask="999-99-9999" />
    <label for="in_label">In Label</label>
</p-floatlabel>

<p-floatlabel variant="on">
    <p-inputmask id="on_label" [(ngModel)]="value3" mask="999-99-9999" />
    <label for="on_label">On Label</label>
</p-floatlabel>
```

## Ifta Label

IftaLabel is used to create infield top aligned labels. Visit IftaLabel documentation for more information.

```html
<p-iftalabel>
    <p-inputmask id="ssn" [(ngModel)]="value" mask="999-99-9999" autocomplete="off" />
    <label for="ssn">SSN</label>
</p-iftalabel>
```

## Sizes

InputMask provides small and large sizes as alternatives to the base.

```html
<p-inputmask [(ngModel)]="value1" placeholder="Small" size="small" mask="99-999999" />
<p-inputmask [(ngModel)]="value2" placeholder="Normal" mask="99-999999" />
<p-inputmask [(ngModel)]="value3" placeholder="Large" size="large" mask="99-999999" />
```

## Disabled

When disabled is present, the element cannot be edited and focused.

```html
<p-inputmask mask="999-99-9999" [(ngModel)]="value" [disabled]="true" />
```

## Invalid

The invalid state is applied using the ⁠invalid property to indicate failed validation, which can be integrated with Angular Forms.

```html
<p-inputmask [(ngModel)]="value1" mask="99-999999" placeholder="Serial Key" [invalid]="!value1" />
<p-inputmask [(ngModel)]="value2" mask="99-999999" placeholder="Serial Key" [invalid]="!value2" variant="filled" />
```

## Forms

InputMask can also be used with reactive forms. In this case, the formControlName property is used to bind the component to a form control.

```html
<form #exampleForm="ngForm" (ngSubmit)="onSubmit(exampleForm)" class="flex justify-center flex-col gap-4 md:w-56">
    <div class="flex flex-col gap-1">
        <p-inputmask name="serial" mask="99-999999" #serialNumber="ngModel" [(ngModel)]="value" placeholder="99-999999" [invalid]="serialNumber.invalid && (serialNumber.touched || exampleForm.submitted)" required fluid />
        @if (serialNumber.invalid && (serialNumber.touched || exampleForm.submitted)) {
            <p-message severity="error" size="small" variant="simple">Serial number is required.</p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>
```

```html
<form [formGroup]="exampleForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-4 sm:w-56">
    <div class="flex flex-col gap-1">
        <p-inputmask mask="99-999999" formControlName="value" placeholder="99-999999" [invalid]="isInvalid('value')" fluid />
        @if (isInvalid('value')) {
            <p-message severity="error" size="small" variant="simple">Serial number is required.</p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>
```

## Accessibility

InputMask component renders a native input element that implicitly includes any passed prop. Value to describe the component can either be provided via label tag combined with id prop or using ariaLabelledBy, ariaLabel props.

```html
<label for="date">Date</label>
<p-inputmask inputId="date"/>

<span id="phone">Phone</span>
<p-inputmask ariaLabelledBy="phone"/>

<p-inputmask ariaLabel="Age"/>
```

## InputMask

InputMask component is used to enter input in a certain format such as numeric, date, currency, email and phone.

---

[View Official Documentation](https://primeng.org/inputmask)
