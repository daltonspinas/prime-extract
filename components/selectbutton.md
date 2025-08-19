# SelectButton

SelectButton is used to choose single or multiple items from a list using buttons.

## Import

```typescript
import { SelectButtonModule } from 'primeng/selectbutton';
```

## Basic

SelectButton requires a value to bind and a collection of options.

```html
<p-selectbutton [options]="stateOptions" [(ngModel)]="value" optionLabel="label" optionValue="value" aria-labelledby="basic" />
```

## Multiple

SelectButton allows selecting only one item by default and setting multiple option enables choosing more than one item. In multiple case, model property should be an array.

```html
<p-selectbutton [options]="paymentOptions" [(ngModel)]="value" [multiple]="true" optionLabel="name" optionValue="value" />
```

## Template

For custom content support define a template named item where the default local template variable refers to an option.

```html
<p-selectbutton [options]="justifyOptions" [(ngModel)]="value" optionLabel="justify">
    <ng-template #item let-item>
        <i [class]="item.icon"></i>
    </ng-template>
</p-selectbutton>
```

## Sizes

SelectButton provides small and large sizes as alternatives to the base.

```html
<p-selectbutton [(ngModel)]="value1" [options]="options" size="small" />
<p-selectbutton [(ngModel)]="value2" [options]="options" />
<p-selectbutton [(ngModel)]="value3" [options]="options" size="large" />
```

## Disabled

When disabled is present, the element cannot be edited and focused entirely. Certain options can also be disabled using the optionDisabled property.

```html
<p-selectbutton [options]="stateOptions" [(ngModel)]="value1" optionLabel="label" optionValue="value" [disabled]="true" />

<p-selectbutton [options]="stateOptions2" [(ngModel)]="value2" optionLabel="label" optionValue="value" optionDisabled="constant" />
```

## Invalid

The invalid state is applied using the ⁠invalid property to indicate failed validation, which can be integrated with Angular Forms.

```html
<p-selectbutton [options]="stateOptions" [(ngModel)]="value" optionLabel="label" optionValue="value" [invalid]="value === null" />
```

## Forms

SelectButton can also be used with reactive forms. In this case, the formControlName property is used to bind the component to a form control.

```html
<form #exampleForm="ngForm" (ngSubmit)="onSubmit(exampleForm)" class="flex justify-center flex-col gap-4">
    <div class="flex flex-col gap-1">
        <p-selectbutton #model="ngModel" [(ngModel)]="value" [options]="stateOptions" optionLabel="label" optionValue="value" [invalid]="model.invalid && (model.touched || exampleForm.submitted)" required name="value" />
        @if (model.invalid && (model.touched || exampleForm.submitted)) {
            <p-message severity="error" size="small" variant="simple">Selection is required.</p-message>
        }
    </div>
    <button pButton type="submit"><span pButtonLabel>Submit</span></button>
</form>
```

```html
<form [formGroup]="exampleForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-4">
    <div class="flex flex-col gap-1">
        <p-selectbutton [options]="stateOptions" formControlName="value" [invalid]="isInvalid('value')" optionLabel="label" optionValue="value" />
        @if (isInvalid('value')) {
            <p-message severity="error" size="small" variant="simple">Selection is required</p-message>
        }
    </div>
    <button pButton type="submit"><span pButtonLabel>Submit</span></button>
</form>
```

## Accessibility

The container element that wraps the buttons has a group role whereas each button element uses button role and aria-pressed is updated depending on selection state. Value to describe an option is automatically set using the ariaLabel property that refers to the label of an option so it is still suggested to define a label even the option display consists of presentational content like icons only.

## SelectButton

SelectButton is used to choose single or multiple items from a list using buttons.

---

[View Official Documentation](https://primeng.org/selectbutton)
