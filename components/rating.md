# Rating

Rating component is a star based selection input.

## Features

### Import

```typescript
import { RatingModule } from 'primeng/rating';
```

### Basic

Two-way value binding is defined using ngModel.

```html
<p-rating [(ngModel)]="value" />
```

### Number of Stars

Number of stars to display is defined with stars property.

```html
<p-rating [(ngModel)]="value" [stars]="10" />
```

### Template

Templating allows customizing the content where the icon instance is available as the implicit variable.

```html
<p-rating [(ngModel)]="value">
    <ng-template #onicon>
        <img src="https://primefaces.org/cdn/primeng/images/demo/rating/custom-icon-active.png" height="24" width="24" />
    </ng-template>
    <ng-template #officon>
        <img src="https://primefaces.org/cdn/primeng/images/demo/rating/custom-icon.png" height="24" width="24" />
    </ng-template>
</p-rating>
```

### Readonly

When readonly present, value cannot be edited.

```html
<p-rating [(ngModel)]="value" [readonly]="true" />
```

### Disabled

When disabled is present, a visual hint is applied to indicate that the Knob cannot be interacted with.

```html
<p-rating [(ngModel)]="value" [disabled]="true" />
```

### Forms

Rating can also be used with reactive forms. In this case, the formControlName property is used to bind the component to a form control.

```html
<form #exampleForm="ngForm" (ngSubmit)="onSubmit(exampleForm)" class="flex flex-col gap-4 w-40">
    <div class="flex flex-col items-center gap-2">
        <p-rating #ratingValue="ngModel" [(ngModel)]="value" required name="ratingValue" [invalid]="ratingValue.invalid && (ratingValue.touched || exampleForm.submitted)"/>
        @if (ratingValue.invalid && (ratingValue.touched || exampleForm.submitted)) {
            <p-message severity="error" size="small" variant="simple">Value is required.</p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>
```

```html
<form [formGroup]="exampleForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-4 w-40">
    <div class="flex flex-col items-center gap-2">
        <p-rating formControlName="ratingValue" [invalid]="isInvalid('ratingValue')"/>
        @if (isInvalid('ratingValue')) {
            <p-message severity="error" size="small" variant="simple">Value is required.</p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>
```

### Accessibility

Rating component internally uses radio buttons that are only visible to screen readers. The value to read for item is retrieved from the locale API via star and stars of the aria property.

### Rating

Rating is an extension to standard radio button element with theming.

## API

### Rating API

API defines helper props, events and others for the PrimeNG Rating module.

#### Rating

Rating is an extension to standard radio button element with theming.

##### Properties

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| required | InputSignalWithTransform<boolean, unknown> | false | There must be a value (if set). |
| invalid | InputSignalWithTransform<boolean, unknown> | false | When present, it specifies that the component should have invalid state style. |
| disabled | InputSignalWithTransform<boolean, unknown> | false | When present, it specifies that the component should have disabled state style. |
| name | InputSignal<string> | undefined | When present, it specifies that the name of the input. |
| readonly | boolean | false | When present, changing the value is not possible. |
| stars | number | 5 | Number of stars. |
| iconOnClass | string | null | Style class of the on icon. |
| iconOnStyle | { [klass: string]: any } | null | Inline style of the on icon. |
| iconOffClass | string | null | Style class of the off icon. |
| iconOffStyle | { [klass: string]: any } | null | Inline style of the off icon. |
| autofocus | boolean | false | When present, it specifies that the component should automatically get focus on load. |

##### Emitters

Defines emit that determine the behavior of the component based on a given condition or report the actions that the component takes.

| name | parameters | description |
| --- | --- | --- |
| onRate | event :  RatingRateEvent | Emitted on value change. |
| onFocus | event :  FocusEvent | Emitted when the rating receives focus. |
| onBlur | event :  FocusEvent | Emitted when the rating loses focus. |

##### Templates

Defines the templates used by the component.

| name | parameters | description |
| --- | --- | --- |
| onicon |  | Custom on icon template. |
| officon |  | Custom off icon template. |

---

[View Official Documentation](https://primeng.org/rating)
