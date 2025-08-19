# Textarea

Textarea adds styling and autoResize functionality to standard textarea element.

## Import

```typescript
import { TextareaModule } from 'primeng/textarea';
```

## Basic

Textarea is applied to an input field with pTextarea directive.

```html
<textarea rows="5" cols="30" pTextarea [(ngModel)]="value"></textarea>
```

## AutoResize

When autoResize is enabled, textarea grows instead of displaying a scrollbar.

```html
<textarea rows="5"cols="30" pTextarea [autoResize]="true"></textarea>
```

## Float Label

A floating label appears on top of the input field when focused. Visit FloatLabel documentation for more information.

```html
<p-floatlabel>
    <textarea pTextarea id="over_label" [(ngModel)]="value1" rows="5" cols="30" style="resize: none" class="h-full"></textarea>
    <label for="over_label">Over Label</label>
</p-floatlabel>

<p-floatlabel variant="in">
    <textarea pTextarea id="over_label" [(ngModel)]="value2" rows="5" cols="30" style="resize: none" class="h-full"></textarea>
    <label for="in_label">In Label</label>
</p-floatlabel>

<p-floatlabel variant="on">
    <textarea pTextarea id="over_label" [(ngModel)]="value3" rows="5" cols="30" style="resize: none" class="h-full"></textarea>
    <label for="on_label">On Label</label>
</p-floatlabel>
```

## Ifta Label

IftaLabel is used to create infield top aligned labels. Visit IftaLabel documentation for more information.

```html
<p-iftalabel>
    <textarea pTextarea id="description" [(ngModel)]="value" rows="5" cols="30" style="resize: none"></textarea>
    <label for="description">Description</label>
</p-iftalabel>
```

## Sizes

Textarea provides small and large sizes as alternatives to the base.

```html
<textarea pTextarea [(ngModel)]="value1" pSize="small" placeholder="Small" rows="3"></textarea>
<textarea pTextarea [(ngModel)]="value2" placeholder="Normal" rows="3"></textarea>
<textarea pTextarea [(ngModel)]="value3" pSize="large" placeholder="Large" rows="3"></textarea>
```

## Filled

Specify the variant property as filled to display the component with a higher visual emphasis than the default outlined style.

```html
<textarea [(ngModel)]="value" variant="filled" rows="5" cols="30" pTextarea></textarea>
```

## Disabled

When disabled is present, the element cannot be edited and focused.

```html
<textarea rows="5"cols="30" pTextarea [disabled]="true"></textarea>
```

## Invalid

The invalid state is applied using the ⁠invalid property to indicate failed validation, which can be integrated with Angular Forms.

```html
<textarea rows="5" cols="30" pTextarea [(ngModel)]="value" [invalid]="!value" placeholder="Address"></textarea>
```

## Forms

Textarea can also be used with reactive forms. In this case, the formControlName property is used to bind the component to a form control.

```html
<form [formGroup]="exampleForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-4">
    <div class="flex flex-col gap-1">
        <textarea rows="5" cols="30" pTextarea formControlName="adress" [invalid]="isInvalid('adress')"></textarea>
        @if (isInvalid('adress')) {
            <p-message severity="error" size="small" variant="simple">Address is required..</p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>
```

```html
<form [formGroup]="exampleForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-4">
    <div class="flex flex-col gap-1">
        <textarea rows="5" cols="30" pTextarea formControlName="adress" [invalid]="isInvalid('address')"></textarea>
        @if (isInvalid('address')) {
            <p-message severity="error" size="small" variant="simple">Address is required..</p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>
```

## Accessibility

Textarea component renders a native textarea element that implicitly includes any passed prop. Value to describe the component can either be provided via label tag combined with id prop or using aria-labelledby, aria-label props.

```html
<label for="address1">Address 1</label>
<textarea pTextarea id="address1"></textarea>

<span id="address2">Address 2</span>
<textarea pTextarea aria-labelledby="address2"></textarea>

<textarea pTextarea aria-label="Address Details"></textarea>
```

## Textarea

Textarea adds styling and autoResize functionality to standard textarea element.

---

[View Official Documentation](https://primeng.org/textarea)
