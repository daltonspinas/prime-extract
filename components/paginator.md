# Paginator

Paginator displays data in paged format and provides navigation between pages.

## Import

```typescript
import { PaginatorModule } from 'primeng/paginator';
```

## Basic

Paginator is used as a controlled component with first, rows and onPageChange properties to manage the first index and number of records to display per page. Total number of records need to be with totalRecords property. Default template includes a dropdown to change the rows so rowsPerPageOptions is also necessary for the dropdown options.

```html
<p-paginator (onPageChange)="onPageChange($event)" [first]="first" [rows]="rows" [totalRecords]="120" [rowsPerPageOptions]="[10, 20, 30]" />
```

## Template

Templating allows overriding the default content of the UI elements by defining callbacks using the element name.

```html
<div class="flex items-center justify-center">
    <div>
        <p-button icon="pi pi-star" outlined />
    </div>
    <div class="flex-1">
        <p-paginator (onPageChange)="onPageChange1($event)" [first]="first1" [rows]="rows1" [totalRecords]="120" [rowsPerPageOptions]="[10, 20, 30]" [showFirstLastIcon]="false" />
    </div>
    <div class="justify-end">
        <p-button icon="pi pi-search" />
    </div>
</div>

<div class="flex items-center justify-end">
    <span class="mx-1 text-color">Items per page: </span>
    <p-select [options]="options" optionLabel="label" optionValue="value" [(ngModel)]="rows2" (ngModelChange)="first2 = 0" />
    <p-paginator [first]="first2" [rows]="rows2" [totalRecords]="120" (onPageChange)="onPageChange2($event)" [showCurrentPageReport]="true"
        currentPageReportTemplate="{first} - {last} of {totalRecords}" [showPageLinks]="false" [showFirstLastIcon]="false" ></p-paginator>
</div>

<div class="flex items-center justify-start">
    <div class="flex justify-center items-center gap-4">
        <span>Items per page: </span>
        <p-slider [(ngModel)]="rows3" (ngModelChange)="first3 = 0" [style]="{ width: '10rem' }" [min]="10" [max]="120" [step]="30" />
    </div>
    <p-paginator (onPageChange)="onPageChange3($event)" [first]="first3" [rows]="rows3" [totalRecords]="totalRecords" [showFirstLastIcon]="false"
        [showCurrentPageReport]="true" currentPageReportTemplate="{first} - {last} of {totalRecords}" ></p-paginator>
</div>
```

## Current Page Report

Current page report item in the template displays information about the pagination state. Default value is ({currentPage} of {totalPages}) whereas available placeholders are the following;

```html
<p-paginator
    (onPageChange)="onPageChange($event)"
    [first]="first"
    [rows]="rows"
    [totalRecords]="120"
    [showCurrentPageReport]="true"
    [showPageLinks]="false"
    [showJumpToPageDropdown]="false"
    currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" />
```

## Accessibility

Paginator is placed inside a nav element to indicate a navigation section. All of the paginator elements can be customized using templating however the default behavious is listed below.

## Paginator

Paginator is a generic component to display content in paged format.

---

[View Official Documentation](https://primeng.org/paginator)
