# Rating

Rating component is a star based selection input.

## Import

```typescript
import { RatingModule } from 'primeng/rating';
```

## Basic

Two-way value binding is defined using ngModel.

```html
<p-rating [(ngModel)]="value" />
```

## Number of Stars

Number of stars to display is defined with stars property.

```html
<p-rating [(ngModel)]="value" [stars]="10" />
```

## Template

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

## Readonly

When readonly present, value cannot be edited.

```html
<p-rating [(ngModel)]="value" [readonly]="true" />
```

## Disabled

When disabled is present, a visual hint is applied to indicate that the Knob cannot be interacted with.

```html
<p-rating [(ngModel)]="value" [disabled]="true" />
```

## Forms

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

## Accessibility

Rating component internally uses radio buttons that are only visible to screen readers. The value to read for item is retrieved from the locale API via star and stars of the aria property.

## Rating

Rating is an extension to standard radio button element with theming.

---

[View Official Documentation](https://primeng.org/rating)
