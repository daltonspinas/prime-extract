# Paginator

Paginator displays data in paged format and provides navigation between pages.

## Features

### Import

```typescript
import { PaginatorModule } from 'primeng/paginator';
```

### Basic

Paginator is used as a controlled component with first, rows and onPageChange properties to manage the first index and number of records to display per page. Total number of records need to be with totalRecords property. Default template includes a dropdown to change the rows so rowsPerPageOptions is also necessary for the dropdown options.

```html
<p-paginator (onPageChange)="onPageChange($event)" [first]="first" [rows]="rows" [totalRecords]="120" [rowsPerPageOptions]="[10, 20, 30]" />
```

### Template

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

### Current Page Report

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

### Accessibility

Paginator is placed inside a nav element to indicate a navigation section. All of the paginator elements can be customized using templating however the default behavious is listed below.

### Paginator

Paginator is a generic component to display content in paged format.

## API

### Paginator API

API defines helper props, events and others for the PrimeNG Paginator module.

#### Paginator

Paginator is a generic component to display content in paged format.

##### Properties

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| pageLinkSize | number | 5 | Number of page links to display. |
| styleClass | string | null | Style class of the component. |
| alwaysShow | boolean | true | Whether to show it even there is only one page. |
| dropdownAppendTo | any | null | Target element to attach the dropdown overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name). |
| templateLeft | TemplateRef<PaginatorState> | null | Template instance to inject into the left side of the paginator. |
| templateRight | TemplateRef<PaginatorState> | null | Template instance to inject into the right side of the paginator. |
| dropdownScrollHeight | string | 200px | Dropdown height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value. |
| currentPageReportTemplate | string | {currentPage} of {totalPages} | Template of the current page report element. Available placeholders are {currentPage},{totalPages},{rows},{first},{last} and {totalRecords} |
| showCurrentPageReport | boolean | false | Whether to display current page report. |
| showFirstLastIcon | boolean | true | When enabled, icons are displayed on paginator to go first and last page. |
| totalRecords | number | 0 | Number of total records. |
| rows | number | 0 | Data count to display per page. |
| rowsPerPageOptions | any[] | null | Array of integer/object values to display inside rows per page dropdown. A object that have 'showAll' key can be added to it to show all data. Exp; [10,20,30,{showAll:'All'}] |
| showJumpToPageDropdown | boolean | false | Whether to display a dropdown to navigate to any page. |
| showJumpToPageInput | boolean | false | Whether to display a input to navigate to any page. |
| jumpToPageItemTemplate | TemplateRef<{ $implicit: any }> | null | Template instance to inject into the jump to page dropdown item inside in the paginator. |
| showPageLinks | boolean | true | Whether to show page links. |
| locale | string | null | Locale to be used in formatting. |
| dropdownItemTemplate | TemplateRef<{ $implicit: any }> | null | Template instance to inject into the rows per page dropdown item inside in the paginator. |
| first | number | null | Zero-relative number of the first row to be displayed. |
| appendTo | InputSignal<any> | 'self' | Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name). |

##### Emitters

Defines emit that determine the behavior of the component based on a given condition or report the actions that the component takes.

| name | parameters | description |
| --- | --- | --- |
| onPageChange | value :  PaginatorState | Callback to invoke when page changes, the event object contains information about the new state. |

##### Templates

Defines the templates used by the component.

| name | parameters | description |
| --- | --- | --- |
| dropdownicon |  | Template for the dropdown icon. |
| firstpagelinkicon |  | Template for the first page link icon. |
| previouspagelinkicon |  | Template for the previous page link icon. |
| lastpagelinkicon |  | Template for the last page link icon. |
| nextpagelinkicon |  | Template for the next page link icon. |

---

[View Official Documentation](https://primeng.org/paginator)
