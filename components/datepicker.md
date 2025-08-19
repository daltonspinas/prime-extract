# DatePicker

DatePicker is an input component to select a date.

## Import

```typescript
import { DatePickerModule } from 'primeng/datepicker';
```

## Basic

Two-way value binding is defined using the standard ngModel directive referencing to a Date property.

```html
<p-datepicker [(ngModel)]="date" />
```

## Format

Default date format is mm/dd/yy which can be customized using the dateFormat property. Following options can be a part of the format.

```html
<p-datepicker [(ngModel)]="date" dateFormat="dd.mm.yy" />
```

## Locale

Locale for different languages and formats is defined globally, refer to the PrimeNG Locale configuration for more information.

## Icon

An additional icon is displayed next to the input field when showIcon is present.

```html
<p-datepicker [(ngModel)]="date1" [showIcon]="true" inputId="buttondisplay" [showOnFocus]="false" />

<p-datepicker [(ngModel)]="date2" [iconDisplay]="'input'" [showIcon]="true" inputId="icondisplay" />

<p-datepicker [(ngModel)]="date3" [iconDisplay]="'input'" [showIcon]="true" [timeOnly]="true" inputId="templatedisplay">
    <ng-template #inputicon let-clickCallBack="clickCallBack">
        <i class="pi pi-clock" (click)="clickCallBack($event)"></i>
    </ng-template>
</p-datepicker>
```

## Min / Max

Boundaries for the permitted dates that can be entered are defined with minDate and maxDate properties.

```html
<p-datepicker [(ngModel)]="date" [minDate]="minDate" [maxDate]="maxDate" [readonlyInput]="true" />
```

## Multiple

In order to choose multiple dates, set selectionMode as multiple. In this mode, the value binding should be an array.

```html
<p-datepicker [(ngModel)]="dates" selectionMode="multiple" [readonlyInput]="true" />
```

## Range

A range of dates can be selected by defining selectionMode as range, in this case the bound value would be an array with two values where first date is the start of the range and second date is the end.

```html
<p-datepicker [(ngModel)]="rangeDates" selectionMode="range" [readonlyInput]="true" />
```

## Button Bar

When showButtonBar is present, today and clear buttons are displayed at the footer.

```html
<p-datepicker [(ngModel)]="date" [showButtonBar]="true" />
```

## Time

A time picker is displayed when showTime is enabled where 12/24 hour format is configured with hourFormat property. In case, only time needs to be selected, add timeOnly to hide the date section.

```html
<p-datepicker inputId="calendar-12h" [(ngModel)]="datetime12h" [showTime]="true" [hourFormat]="12" />

<p-datepicker inputId="calendar-24h" [(ngModel)]="datetime24h" [showTime]="true" [hourFormat]="24" />

<p-datepicker inputId="calendar-timeonly" [(ngModel)]="time" [timeOnly]="true" />
```

## Month Picker

Month only picker is enabled by specifying view as month in addition to a suitable dateFormat.

```html
<p-datepicker [(ngModel)]="date" view="month" dateFormat="mm/yy" [readonlyInput]="true" />
```

## Year Picker

Specifying view as year in addition to a suitable dateFormat enables the year picker.

```html
<p-datepicker [(ngModel)]="date" view="year" dateFormat="yy" />
```

## Multiple Months

Number of months to display is configured with the numberOfMonths property.

```html
<p-datepicker [(ngModel)]="date" [numberOfMonths]="2" />
```

## Date Template

Custom content can be placed inside date cells with the ng-template property that takes a Date as a parameter.

```html
<p-datepicker [(ngModel)]="date">
    <ng-template #date let-date>
        <strong *ngIf="date.day > 10 && date.day < 15; else elseBlock" style="text-decoration: line-through">{{ date.day }}</strong>
        <ng-template #elseBlock>{{ date.day }}</ng-template>
    </ng-template>
</p-datepicker>
```

## Inline

DatePicker is displayed as a popup by default, add inline property to customize this behavior.

```html
<p-datepicker class="max-w-full" [(ngModel)]="date" [inline]="true" [showWeek]="true" />
```

## Float Label

A floating label appears on top of the input field when focused. Visit FloatLabel documentation for more information.

```html
<p-floatlabel>
    <p-datepicker [(ngModel)]="value1" inputId="over_label" showIcon iconDisplay="input" />
    <label for="over_label">Over Label</label>
</p-floatlabel>

<p-floatlabel variant="in">
    <p-datepicker [(ngModel)]="value2" inputId="in_label" showIcon iconDisplay="input" />
    <label for="in_label">In Label</label>
</p-floatlabel>

<p-floatlabel variant="on">
    <p-datepicker [(ngModel)]="value3" inputId="on_label" showIcon iconDisplay="input" />
    <label for="on_label">On Label</label>
</p-floatlabel>
```

## Ifta Label

IftaLabel is used to create infield top aligned labels. Visit IftaLabel documentation for more information.

```html
<p-iftalabel>
    <p-datepicker [(ngModel)]="value" inputId="date" showIcon iconDisplay="input" />
    <label for="date">Date</label>
</p-iftalabel>
```

## Sizes

DatePicker provides small and large sizes as alternatives to the base.

```html
<p-datepicker [(ngModel)]="value1" size="small" placeholder="Small" showIcon iconDisplay="input" />
<p-datepicker [(ngModel)]="value2" placeholder="Normal" showIcon iconDisplay="input" />
<p-datepicker [(ngModel)]="value3" size="large" placeholder="Large" showIcon iconDisplay="input" />
```

## Filled

Specify the variant property as filled to display the component with a higher visual emphasis than the default outlined style.

```html
<p-datepicker [(ngModel)]="date" variant="filled" />
```

## Disabled

When disabled is present, the element cannot be edited and focused.

```html
<p-datepicker [(ngModel)]="date" [disabled]="true" />
```

## Invalid

The invalid state is applied using the ⁠invalid property to indicate failed validation, which can be integrated with Angular Forms.

```html
<p-datepicker [(ngModel)]="date1" [invalid]="!date1" placeholder="Date" />
<p-datepicker [(ngModel)]="date2" [invalid]="!date2" variant="filled" placeholder="Date" />
```

## Forms

DatePicker can also be used with reactive forms. In this case, the formControlName property is used to bind the component to a form control.

```html
<form #exampleForm="ngForm" (ngSubmit)="onSubmit(exampleForm)" class="flex justify-center flex-col gap-4 md:w-56">
    <div class="flex flex-col gap-1">
        <p-datepicker name="date" [invalid]="dateModel.invalid && (dateModel.touched || exampleForm.submitted)" #dateModel="ngModel" [(ngModel)]="date" required />
        @if (dateModel.invalid && (dateModel.touched || exampleForm.submitted)) {
            <p-message severity="error" size="small" variant="simple">Date is required.</p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>
```

```html
<form [formGroup]="exampleForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-4">
    <div class="flex flex-col gap-1">
        <p-datepicker formControlName="selectedDate" [invalid]="isInvalid('selectedDate')" />
        @if (isInvalid('selectedDate')) {
            <p-message severity="error" size="small" variant="simple">Date is required.</p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>
```

## Accessibility

Value to describe the component can either be provided via label tag combined with inputId prop or using aria-labelledby, aria-label props. The input element has combobox role in addition to aria-autocomplete as "none", aria-haspopup as "dialog" and aria-expanded attributes. The relation between the input and the popup is created with aria-controls attribute that refers to the id of the popup.

```html
<label for="date1">Date</label>
<p-datepicker inputId="date1"/>

<span id="date2">Date</span>
<p-datepicker ariaLabelledBy="date2"/>

<p-datepicker ariaLabel="Date"/>
```

## DatePicker

DatePicker is a form component to work with dates.

---

[View Official Documentation](https://primeng.org/datepicker)
