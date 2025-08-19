# TreeTable

TreeTable is used to display hierarchical data in tabular format.

## Import

```typescript
import { TreeTableModule } from 'primeng/treetable';
```

## Basic

TreeTable requires a collection of TreeNode instances as a value components as children for the representation.

```html
<p-treetable [value]="files" [scrollable]="true" [tableStyle]="{'min-width':'50rem'}">
    <ng-template #header>
        <tr>
            <th>Name</th>
            <th>Size</th>
            <th>Type</th>
        </tr>
    </ng-template>
    <ng-template #body let-rowNode let-rowData="rowData">
        <tr [ttRow]="rowNode">
            <td>
                <p-treetable-toggler [rowNode]="rowNode" />
                {{ rowData.name }}
            </td>
            <td>{{ rowData.size }}</td>
            <td>{{ rowData.type }}</td>
        </tr>
    </ng-template>
</p-treetable>
```

## Dynamic Columns

Columns can be created programmatically.

```html
<p-treetable [value]="files" [columns]="cols" [scrollable]="true" [tableStyle]="{'min-width':'50rem'}">
    <ng-template #header let-columns>
        <tr>
            <th *ngFor="let col of columns">
                {{ col.header }}
            </th>
        </tr>
    </ng-template>
    <ng-template #body let-rowNode let-rowData="rowData" let-columns="columns">
        <tr [ttRow]="rowNode">
            <td *ngFor="let col of columns; let i = index">
                <p-treetable-toggler [rowNode]="rowNode" *ngIf="i === 0" />
                {{ rowData[col.field] }}
            </td>
        </tr>
    </ng-template>
</p-treetable>
```

## Controlled

Expansion state is controlled with expandedKeys property.

```html
<p-button (click)="toggleApplications()" label="Toggle Applications" />
<p-treetable [value]="files" [scrollable]="true" [tableStyle]="{ 'min-width': '50rem' }" class="mt-6">
    <ng-template #header>
        <tr>
            <th>Name</th>
            <th>Size</th>
            <th>Type</th>
        </tr>
    </ng-template>
    <ng-template #body let-rowNode let-rowData="rowData">
        <tr [ttRow]="rowNode">
            <td>
                <p-treetable-toggler [rowNode]="rowNode" />
                {{ rowData.name }}
            </td>
            <td>{{ rowData.size }}</td>
            <td>{{ rowData.type }}</td>
        </tr>
    </ng-template>
</p-treetable>
```

## Template

Custom content at caption, header, body and summary sections are supported via templating.

```html
<p-treetable [value]="files" [columns]="cols" [scrollable]="true" [tableStyle]="{ 'min-width': '50rem' }">
    <ng-template #caption><div class="text-xl font-bold">File Viewer</div> </ng-template>
    <ng-template #header let-columns>
        <tr>
            <th *ngFor="let col of columns">
                {{ col.header }}
            </th>
        </tr>
    </ng-template>
    <ng-template #body let-rowNode let-rowData="rowData" let-columns="columns">
        <tr [ttRow]="rowNode">
            <td *ngFor="let col of columns; let i = index; let last = last">
                <p-treetable-toggler [rowNode]="rowNode" *ngIf="i === 0" />
                    {{ rowData[col.field] }}
                <ng-container *ngIf="last">
                    <p-button icon="pi pi-search" rounded="true" [style]="{ 'margin-right': '.5em' }" />
                    <p-button icon="pi pi-pencil" rounded="true" severity="success" />
                </ng-container>
            </td>
        </tr>
    </ng-template>
    <ng-template #summary>
        <div style="text-align:left">
            <p-button icon="pi pi-refresh" label="Reload" severity="warn" />
        </div>
    </ng-template>
</p-treetable>
```

## Size

In addition to a regular treetable, alternatives with alternative sizes are available. Add p-treetable-sm class to reduce the size of treetable or p-treetable-lg to enlarge it.

```html
<div class="flex justify-center mb-4">
    <p-selectbutton [options]="sizes" [(ngModel)]="selectedSize" [multiple]="false" optionLabel="name" optionValue="class" />
</div>
<p-treetable [value]="files" [scrollable]="true" [tableStyle]="{'min-width':'50rem'}" [class]="selectedSize">
    <ng-template #header>
        <tr>
            <th>Name</th>
            <th>Size</th>
            <th>Type</th>
        </tr>
    </ng-template>
    <ng-template #body let-rowNode let-rowData="rowData">
        <tr [ttRow]="rowNode">
            <td>
                <p-treetable-toggler [rowNode]="rowNode" />
                {{ rowData.name }}
            </td>
            <td>{{ rowData.size }}</td>
            <td>{{ rowData.type }}</td>
        </tr>
    </ng-template>
</p-treetable>
```

## Grid Lines

Enabling showGridlines displays grid lines.

```html
<p-treetable [value]="files" [scrollable]="true" showGridlines [tableStyle]="{ 'min-width': '50rem' }">
    <ng-template #header>
        <tr>
            <th>Name</th>
            <th>Size</th>
            <th>Type</th>
        </tr>
    </ng-template>
    <ng-template #body let-rowNode let-rowData="rowData">
        <tr [ttRow]="rowNode">
            <td>
                <p-treetable-toggler [rowNode]="rowNode" />
                {{ rowData.name }}
            </td>
            <td>{{ rowData.size }}</td>
            <td>{{ rowData.type }}</td>
        </tr>
    </ng-template>
</p-treetable>
```

## Paginator

Pagination is enabled by adding paginator property and defining rows per page.

```html
<p-treetable [value]="files" [columns]="cols" [paginator]="true" [rows]="5" [rowsPerPageOptions]="[5, 10, 25]" [scrollable]="true" [tableStyle]="{'min-width':'50rem'}">
    <ng-template #header let-columns>
        <tr>
            <th *ngFor="let col of columns">
                {{ col.header }}
            </th>
        </tr>
    </ng-template>
    <ng-template #body let-rowNode let-rowData="rowData" let-columns="columns">
        <tr [ttRow]="rowNode">
            <td *ngFor="let col of columns; let i = index">
                <p-treetable-toggler [rowNode]="rowNode" *ngIf="i === 0" />
                {{ rowData[col.field] }}
            </td>
        </tr>
    </ng-template>
</p-treetable>
```

```html
<p-treetable [value]="files" [columns]="cols" [paginator]="true" [rows]="10" [scrollable]="true" [tableStyle]="{'min-width':'50rem'}">
    <ng-template #header let-columns>
        <tr>
            <th *ngFor="let col of columns">
                {{ col.header }}
            </th>
        </tr>
    </ng-template>
    <ng-template #body let-rowNode let-rowData="rowData" let-columns="columns">
        <tr [ttRow]="rowNode">
            <td *ngFor="let col of columns; let i = index">
                <p-treetable-toggler [rowNode]="rowNode" *ngIf="i === 0" />
                {{ rowData[col.field] }}
            </td>
        </tr>
    </ng-template>
    <ng-template #paginatorleft>
        <p-button icon="pi pi-refresh" text />
    </ng-template>
    <ng-template #paginatorright>
        <p-button icon="pi pi-download" text />
    </ng-template>
</p-treetable>
```

## Sort

Sorting on a column is enabled by adding the ttSortableColumn property.

```html
<p-treetable [value]="files" [columns]="cols" [scrollable]="true" [tableStyle]="{'min-width':'50rem'}">
    <ng-template #header let-columns>
        <tr>
            <th *ngFor="let col of columns" [ttSortableColumn]="col.field">
                <div class="flex items-center gap-2">
                    {{ col.header }}
                    <p-treetable-sort-icon [field]="col.field" />
                </div>
            </th>
        </tr>
    </ng-template>
    <ng-template #body let-rowNode let-rowData="rowData" let-columns="columns">
        <tr [ttRow]="rowNode">
            <td *ngFor="let col of columns; let i = index">
                <p-treetable-toggler [rowNode]="rowNode" *ngIf="i === 0" />
                {{ rowData[col.field] }}
            </td>
        </tr>
    </ng-template>
</p-treetable>
```

```html
<p-treetable [value]="files" [columns]="cols" sortMode="multiple" [scrollable]="true" [tableStyle]="{'min-width':'50rem'}">
    <ng-template #header let-columns>
        <tr>
            <th *ngFor="let col of columns" [ttSortableColumn]="col.field">
                <div class="flex items-center gap-2">
                    {{ col.header }}
                    <p-treetable-sort-icon [field]="col.field" />
                </div>
            </th>
        </tr>
    </ng-template>
    <ng-template #body let-rowNode let-rowData="rowData" let-columns="columns">
        <tr [ttRow]="rowNode">
            <td *ngFor="let col of columns; let i = index">
                <p-treetable-toggler [rowNode]="rowNode" *ngIf="i === 0" />
                {{ rowData[col.field] }}
            </td>
        </tr>
    </ng-template>
</p-treetable>
```

## Filter

The filterMode specifies the filtering strategy, in lenient mode when the query matches a node, children of the node are not searched further as all descendants of the node are included. On the other hand, in strict mode when the query matches a node, filtering continues on all descendants. A general filled called filterGlobal is also provided to search all columns that support filtering.

```html
<p-selectbutton [options]="filterModes" [(ngModel)]="filterMode" optionLabel="label" optionValue="value" />

<p-treetable #tt [value]="files" [columns]="cols" [filterMode]="filterMode" [scrollable]="true" [tableStyle]="{ 'min-width': '50rem' }">
    <ng-template #caption>
        <div class="flex justify-end items-center">
            <p-iconfield>
                <p-inputicon class="pi pi-search" />
                <input type="text" pInputText placeholder="Global Search" (input)="tt.filterGlobal($event.target.value, 'contains')" />
            </p-iconfield>
        </div>
    </ng-template>
    <ng-template #header let-columns>
        <tr>
            <th *ngFor="let col of cols">
                {{ col.header }}
            </th>
        </tr>
        <tr>
            <th *ngFor="let col of cols">
                <input pInputText [placeholder]="'Filter by ' + col.field" type="text" (input)="tt.filter($event.target.value, col.field, col.filterMatchMode)" />
            </th>
        </tr>
    </ng-template>
    <ng-template #body let-rowNode let-rowData="rowData">
        <tr [ttRow]="rowNode">
            <td *ngFor="let col of cols; let i = index">
                <p-treetable-toggler [rowNode]="rowNode" *ngIf="i === 0" />
                {{ rowData[col.field] }}
            </td>
        </tr>
    </ng-template>
    <ng-template #emptymessage>
        <tr>
            <td [attr.colspan]="cols?.length">No data found.</td>
        </tr>
    </ng-template>
</p-treetable>
```

## Selection

Single node selection is configured by setting selectionMode as single along with selection properties to manage the selection value binding.

```html
<p-treetable [value]="files" [columns]="cols" selectionMode="single" [(selection)]="selectedNode" dataKey="name" [scrollable]="true" [tableStyle]="{'min-width':'50rem'}">
    <ng-template #header let-columns>
        <tr>
            <th *ngFor="let col of columns">
                {{ col.header }}
            </th>
        </tr>
    </ng-template>
    <ng-template #body let-rowNode let-rowData="rowData" let-columns="columns">
        <tr [ttRow]="rowNode" [ttSelectableRow]="rowNode">
            <td *ngFor="let col of columns; let i = index">
                <p-treetable-toggler [rowNode]="rowNode" *ngIf="i === 0" />
                {{ rowData[col.field] }}
            </td>
        </tr>
    </ng-template>
</p-treetable>
```

```html
<p-toggleswitch [(ngModel)]="metaKeySelection" />
<p-treetable [value]="files" [columns]="cols" selectionMode="multiple" [(selection)]="selectedNodes" dataKey="name" [metaKeySelection]="metaKeySelection" [scrollable]="true" [tableStyle]="{'min-width':'50rem'}">
    <ng-template #header let-columns>
        <tr>
            <th *ngFor="let col of columns">
                {{ col.header }}
            </th>
        </tr>
    </ng-template>
    <ng-template #body let-rowNode let-rowData="rowData" let-columns="columns">
        <tr [ttRow]="rowNode" [ttSelectableRow]="rowNode">
            <td *ngFor="let col of columns; let i = index">
                <p-treetable-toggler [rowNode]="rowNode" *ngIf="i === 0" />
                {{ rowData[col.field] }}
            </td>
        </tr>
    </ng-template>
</p-treetable>
```

```text
{
    '0': {
        partialChecked: true
    },
    '0-0': {
        partialChecked: false,
        checked: true
    },
    '0-0-0': {
        checked: true
    },
    '0-0-1': {
        checked: true
    },
    '0-0-2': {
        checked: true
    }
}
```

```html
<p-treetable [value]="files" [columns]="cols" selectionMode="checkbox" [(selectionKeys)]="selectionKeys" dataKey="key" [scrollable]="true" [tableStyle]="{ 'min-width': '50rem' }">
    <ng-template #header let-columns>
        <tr>
            <th *ngFor="let col of columns">
                {{ col.header }}
            </th>
        </tr>
    </ng-template>
    <ng-template #body let-rowNode let-rowData="rowData" let-columns="columns">
        <tr [ttRow]="rowNode" [ttSelectableRow]="rowNode">
            <td *ngFor="let col of columns; let i = index">
                <p-treetable-toggler [rowNode]="rowNode" *ngIf="i === 0" />
                <p-treetable-checkbox [value]="rowNode" *ngIf="i === 0" />
                {{ rowData[col.field] }}
            </td>
        </tr>
    </ng-template>
</p-treetable>
```

```html
<p-treetable
    [value]="files"
    [columns]="cols"
    selectionMode="single"
    [(selection)]="selectedNode"
    dataKey="name"
    (onNodeSelect)="nodeSelect($event)"
    (onNodeUnselect)="nodeUnselect($event)"
    [scrollable]="true"
    [tableStyle]="{ 'min-width': '50rem' }"
>
    <ng-template #header let-columns>
        <tr>
            <th *ngFor="let col of columns">
                {{ col.header }}
            </th>
        </tr>
    </ng-template>
    <ng-template #body let-rowNode let-rowData="rowData" let-columns="columns">
        <tr [ttRow]="rowNode" [ttSelectableRow]="rowNode">
            <td *ngFor="let col of columns; let i = index">
                <p-treetable-toggler [rowNode]="rowNode" *ngIf="i === 0" />
                {{ rowData[col.field] }}
            </td>
        </tr>
    </ng-template>
</p-treetable>
```

## Column Group

```html
<p-treetable [value]="sales" [scrollable]="true" [tableStyle]="{'min-width':'50rem'}">
    <ng-template #header>
        <tr>
            <th rowspan="3">Brand</th>
            <th colspan="4">Sale Rate</th>
        </tr>
        <tr>
            <th colspan="2">Sales</th>
            <th colspan="2">Profits</th>
        </tr>
        <tr>
            <th>Last Year</th>
            <th>This Year</th>
            <th>Last Year</th>
            <th>This Year</th>
        </tr>
    </ng-template>
    <ng-template #body let-rowNode let-rowData="rowData">
        <tr>
            <td>
                <p-treetable-toggler [rowNode]="rowNode" />
                {{ rowData.brand }}
            </td>
            <td>{{ rowData.lastYearSale }}</td>
            <td>{{ rowData.thisYearSale }}</td>
            <td>{{ rowData.lastYearProfit }}</td>
            <td>{{ rowData.thisYearProfit }}</td>
        </tr>
    </ng-template>
    <ng-template #footer>
        <tr>
            <td colspan="3">Totals</td>
            <td>$3,283,772</td>
            <td>$2,126,925</td>
        </tr>
    </ng-template>
</p-treetable>
```

## Lazy Load

Lazy mode is handy to deal with large datasets, instead of loading the entire data, small chunks of data is loaded by invoking corresponding callbacks everytime paging, sorting and filtering occurs. Sample below imitates lazy loading data from a remote datasource using an in-memory list and timeouts to mimic network connection.

```html
<p-treetable
    [value]="files"
    [columns]="cols"
    [paginator]="true"
    [rows]="10"
    [lazy]="true"
    (onLazyLoad)="loadNodes($event)"
    [totalRecords]="1000"
    [loading]="loading"
    (onNodeExpand)="onNodeExpand($event)"
    [scrollable]="true"
    [tableStyle]="{ 'min-width': '50rem' }"
>
    <ng-template #header let-columns>
        <tr>
            <th *ngFor="let col of columns">
                {{ col.header }}
            </th>
        </tr>
    </ng-template>
    <ng-template #body let-rowNode let-rowData="rowData" let-columns="columns">
        <tr [ttRow]="rowNode">
            <td *ngFor="let col of columns; let i = index">
                <p-treetable-toggler [rowNode]="rowNode" *ngIf="i === 0" />
                {{ rowData[col.field] }}
            </td>
        </tr>
    </ng-template>
</p-treetable>
```

## Scroll

Adding scrollable property along with a scrollHeight for the data viewport enables vertical scrolling with fixed headers.

```html
<p-treetable [value]="files" [columns]="cols" [scrollable]="true" scrollHeight="200px" [scrollable]="true" [tableStyle]="{ 'min-width': '50rem' }">
    <ng-template #header let-columns>
        <tr>
            <th *ngFor="let col of columns">
                {{ col.header }}
            </th>
        </tr>
    </ng-template>
    <ng-template #body let-rowNode let-rowData="rowData" let-columns="columns">
        <tr [ttRow]="rowNode">
            <td *ngFor="let col of columns; let i = index">
                <p-treetable-toggler [rowNode]="rowNode" *ngIf="i === 0" />
                {{ rowData[col.field] }}
            </td>
        </tr>
    </ng-template>
</p-treetable>
```

```html
<p-button label="Show" icon="pi pi-external-link" (onClick)="dialogVisible = true" />
<p-dialog [(visible)]="dialogVisible" header="Flex Scroll" [style]="{ width: '75vw' }" maximizable modal [contentStyle]="{ height: '300px' }">
    <ng-template #content>
        <p-treetable [value]="files" [scrollable]="true" scrollHeight="flex" [tableStyle]="{ 'min-width': '50rem' }">
            <ng-template #header>
                <tr>
                    <th>Name</th>
                    <th>Size</th>
                    <th>Type</th>
                </tr>
            </ng-template>
            <ng-template #body let-rowNode let-rowData="rowData">
                <tr [ttRow]="rowNode">
                    <td>
                        <p-treetable-toggler [rowNode]="rowNode" />
                        {{ rowData.name }}
                    </td>
                    <td>{{ rowData.size }}</td>
                    <td>{{ rowData.type }}</td>
                </tr>
            </ng-template>
        </p-treetable>
    </ng-template>
    <ng-template #footer>
        <p-button label="Ok" icon="pi pi-check" (onClick)="dialogVisible = false" />
    </ng-template>
</p-dialog>
```

```html
<p-treetable [value]="files" [columns]="cols" [scrollable]="true" scrollHeight="250px" [scrollable]="true" [tableStyle]="{'min-width':'50rem'}">
    <ng-template #colgroup let-columns>
        <colgroup>
            <col *ngFor="let col of columns" style="width:500px" />
        </colgroup>
    </ng-template>
    <ng-template #header let-columns>
        <tr>
            <th *ngFor="let col of columns">
                {{ col.header }}
            </th>
        </tr>
    </ng-template>
    <ng-template #body let-rowNode let-rowData="rowData" let-columns="columns">
        <tr [ttRow]="rowNode">
            <td *ngFor="let col of columns; let i = index">
                <p-treetable-toggler [rowNode]="rowNode" *ngIf="i === 0"></p-treetable-toggler>
                {{ rowData[col.field] }}
            </td>
        </tr>
    </ng-template>
</p-treetable>
```

```html
<p-treetable [value]="files" [columns]="scrollableCols" [frozenColumns]="frozenCols" [scrollable]="true" scrollHeight="250px" frozenWidth="200px" [scrollable]="true" [tableStyle]="{ 'min-width': '50rem' }">
    <ng-template #colgroup let-columns>
        <colgroup>
            <col *ngFor="let col of columns" style="width:250px" />
        </colgroup>
    </ng-template>
    <ng-template #header let-columns>
        <tr>
            <th *ngFor="let col of columns">
                {{ col.header }}
            </th>
        </tr>
    </ng-template>
    <ng-template #body let-rowData="rowData" let-columns="columns">
        <tr [ttRow]="rowNode" style="height: 57px">
            <td *ngFor="let col of columns; let i = index">
                {{ rowData[col.field] }}
            </td>
        </tr>
    </ng-template>
    <ng-template #frozenbody let-rowNode let-rowData="rowData">
        <tr [ttRow]="rowNode" style="height: 57px">
            <td>
                <p-treetable-toggler [rowNode]="rowNode" />
                {{ rowData.name }}
            </td>
        </tr>
    </ng-template>
</p-treetable>
```

## Column Resize

Columns can be resized with drag and drop when resizableColumns is enabled. Default resize mode is fit that does not change the overall table width.

```html
<p-treetable [value]="files" [columns]="cols" [resizableColumns]="true" [tableStyle]="{'min-width': '50rem'}" showGridlines>
    <ng-template #header let-columns>
        <tr>
            <th *ngFor="let col of columns" ttResizableColumn>
                {{ col.header }}
            </th>
        </tr>
    </ng-template>
    <ng-template #body let-rowNode let-rowData="rowData" let-columns="columns">
        <tr [ttRow]="rowNode">
            <td *ngFor="let col of columns; let i = index">
                <p-treetable-toggler [rowNode]="rowNode" *ngIf="i === 0" />
                {{ rowData[col.field] }}
            </td>
        </tr>
    </ng-template>
</p-treetable>
```

```html
<p-treetable [value]="files" [columns]="cols" [resizableColumns]="true" columnResizeMode="expand" showGridlines>
    <ng-template #header let-columns>
        <tr>
            <th *ngFor="let col of columns" ttResizableColumn>
                {{ col.header }}
            </th>
        </tr>
    </ng-template>
    <ng-template #body let-rowNode let-rowData="rowData" let-columns="columns">
        <tr [ttRow]="rowNode">
            <td *ngFor="let col of columns; let i = index">
                <p-treetable-toggler [rowNode]="rowNode" *ngIf="i === 0" />
                {{ rowData[col.field] }}
            </td>
        </tr>
    </ng-template>
</p-treetable>
```

```html
<p-treetable [value]="files" [columns]="cols" [resizableColumns]="true" [scrollable]="true" scrollHeight="200px" showGridlines>
    <ng-template #colgroup let-columns>
        <colgroup>
            <col *ngFor="let col of columns">
        </colgroup>
    </ng-template>
    <ng-template #header let-columns>
        <tr>
            <th *ngFor="let col of columns" ttResizableColumn>
                {{ col.header }}
            </th>
        </tr>
    </ng-template>
    <ng-template #body let-rowNode let-rowData="rowData" let-columns="columns">
        <tr [ttRow]="rowNode">
            <td *ngFor="let col of columns; let i = index">
                <p-treetable-toggler [rowNode]="rowNode" *ngIf="i === 0" />
                {{ rowData[col.field] }}
            </td>
        </tr>
    </ng-template>
</p-treetable>
```

## Reorder

Order of the columns can be changed using drag and drop when reorderableColumns is present.

```html
<p-treetable [value]="files" [columns]="cols" [reorderableColumns]="true" [scrollable]="true" [tableStyle]="{'min-width':'50rem'}">
    <ng-template #header let-columns>
        <tr>
            <th *ngFor="let col of columns" ttReorderableColumn>
                {{ col.header }}
            </th>
        </tr>
    </ng-template>
    <ng-template #body let-rowNode let-rowData="rowData" let-columns="columns">
        <tr [ttRow]="rowNode">
            <td *ngFor="let col of columns; let i = index">
                <p-treetable-toggler [rowNode]="rowNode" *ngIf="i === 0"></p-treetable-toggler>
                {{ rowData[col.field] }}
            </td>
        </tr>
    </ng-template>
</p-treetable>
```

## Column Toggle

Column visibility based on a condition can be implemented with dynamic columns, in this sample a MultiSelect is used to manage the visible columns.

```html
<p-treetable [value]="files" [columns]="selectedColumns" [scrollable]="true" [tableStyle]="{ 'min-width': '50rem' }">
    <ng-template #caption>
        <div style="text-align:left">
            <p-multiselect [options]="cols" [(ngModel)]="selectedColumns" optionLabel="header" selectedItemsLabel="{0} columns selected" [style]="{ width: '20em' }" placeholder="Choose Columns" display="chip" />
        </div>
    </ng-template>
    <ng-template #header let-columns>
        <tr>
            <th *ngFor="let col of columns">
                {{ col.header }}
            </th>
        </tr>
    </ng-template>
    <ng-template #body let-rowNode let-rowData="rowData" let-columns="columns">
        <tr [ttRow]="rowNode">
            <td *ngFor="let col of columns; let i = index">
                <p-treetable-toggler [rowNode]="rowNode" *ngIf="i === 0" />
                {{ rowData[col.field] }}
            </td>
        </tr>
    </ng-template>
</p-treetable>
```

## Conditional Style

Particular rows and cells can be styled based on conditions. The ngClass receives a row data as a parameter to return a style class for a row whereas cells are customized using the body template.

```html
<p-treetable [value]="files" [columns]="cols" [scrollable]="true" [tableStyle]="{ 'min-width': '50rem' }">
    <ng-template #header let-columns>
        <tr>
            <th *ngFor="let col of columns">
                {{ col.header }}
            </th>
        </tr>
    </ng-template>
    <ng-template #body let-rowNode let-rowData="rowData" let-columns="columns">
        <tr [ttRow]="rowNode" [ngClass]="{ 'p-highlight': rowData.size.endsWith('kb') }">
            <td *ngFor="let col of columns; let i = index" [ngClass]="{ 'font-bold': col.field === 'size' && rowData.size.endsWith('kb') }">
                <p-treetable-toggler [rowNode]="rowNode" *ngIf="i === 0" />
                {{ rowData[col.field] }}
            </td>
        </tr>
    </ng-template>
</p-treetable>
```

## Context Menu

TreeTable has exclusive integration with ContextMenu using the contextMenu event to open a menu on right click alont with contextMenuSelection properties to control the selection via the menu.

```html
<p-toast [style]="{ marginTop: '80px' }" />

<p-treetable [value]="files" [columns]="cols" dataKey="name" [(contextMenuSelection)]="selectedNode" [contextMenu]="cm" [scrollable]="true" [tableStyle]="{ 'min-width': '50rem' }">
    <ng-template #header let-columns>
        <tr>
            <th *ngFor="let col of columns">
                {{ col.header }}
            </th>
        </tr>
    </ng-template>
    <ng-template #body let-rowNode let-rowData="rowData" let-columns="columns">
        <tr [ttRow]="rowNode" [ttContextMenuRow]="rowNode">
            <td *ngFor="let col of columns; let i = index">
                <p-treetable-toggler [rowNode]="rowNode" *ngIf="i === 0" />
                {{ rowData[col.field] }}
            </td>
        </tr>
    </ng-template>
</p-treetable>

<p-contextmenu #cm [model]="items" />
```

## Accessibility

Default role of the table is table. Header, body and footer elements use rowgroup, rows use row role, header cells have columnheader and body cells use cell roles. Sortable headers utilizer aria-sort attribute either set to "ascending" or "descending".

## TreeTable

TreeTable is used to display hierarchical data in tabular format.

## TreeTableNode

## TreeNode

---

[View Official Documentation](https://primeng.org/treetable)
