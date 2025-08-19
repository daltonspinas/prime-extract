# TreeTable

TreeTable is used to display hierarchical data in tabular format.

## Features

### Import

```typescript
import { TreeTableModule } from 'primeng/treetable';
```

### Basic

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

### Dynamic Columns

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

### Controlled

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

### Template

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

### Size

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

### Grid Lines

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

### Paginator

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

### Sort

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

### Filter

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

### Selection

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

### Column Group

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

### Lazy Load

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

### Scroll

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

### Column Resize

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

### Reorder

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

### Column Toggle

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

### Conditional Style

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

### Context Menu

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

### Accessibility

Default role of the table is table. Header, body and footer elements use rowgroup, rows use row role, header cells have columnheader and body cells use cell roles. Sortable headers utilizer aria-sort attribute either set to "ascending" or "descending".

### TreeTable

TreeTable is used to display hierarchical data in tabular format.

### TreeTableNode

### TreeNode

## API

### TreeTable API

API defines helper props, events and others for the PrimeNG TreeTable module.

#### TreeTable

TreeTable is used to display hierarchical data in tabular format.

##### Properties

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| columns | any[] | null | An array of objects to represent dynamic columns. |
| styleClass | string | null | Style class of the component. |
| tableStyle | { [klass: string]: any } | null | Inline style of the table. |
| tableStyleClass | string | null | Style class of the table. |
| autoLayout | boolean | false | Whether the cell widths scale according to their content or not. |
| lazy | boolean | false | Defines if data is loaded and interacted with in lazy manner. |
| lazyLoadOnInit | boolean | true | Whether to call lazy loading on initialization. |
| paginator | boolean | false | When specified as true, enables the pagination. |
| rows | number | null | Number of rows to display per page. |
| first | number | 0 | Index of the first row to be displayed. |
| pageLinks | number | 5 | Number of page links to display in paginator. |
| rowsPerPageOptions | any[] | null | Array of integer/object values to display inside rows per page dropdown of paginator |
| alwaysShowPaginator | boolean | true | Whether to show it even there is only one page. |
| paginatorPosition | "top" | "bottom" | "both" | bottom | Position of the paginator. |
| paginatorStyleClass | string | null | Custom style class for paginator |
| paginatorDropdownAppendTo | any | null | Target element to attach the paginator dropdown overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name). |
| currentPageReportTemplate | string | {currentPage} of {totalPages} | Template of the current page report element. Available placeholders are {currentPage},{totalPages},{rows},{first},{last} and {totalRecords} |
| showCurrentPageReport | boolean | false | Whether to display current page report. |
| showJumpToPageDropdown | boolean | false | Whether to display a dropdown to navigate to any page. |
| showFirstLastIcon | boolean | true | When enabled, icons are displayed on paginator to go first and last page. |
| showPageLinks | boolean | true | Whether to show page links. |
| defaultSortOrder | number | 1 | Sort order to use when an unsorted column gets sorted by user interaction. |
| sortMode | "single" | "multiple" | single | Defines whether sorting works on single column or on multiple columns. |
| resetPageOnSort | boolean | true | When true, resets paginator to first page after sorting. |
| customSort | boolean | false | Whether to use the default sorting or a custom one using sortFunction. |
| selectionMode | string | null | Specifies the selection mode, valid values are "single" and "multiple". |
| contextMenuSelection | any | null | Selected row with a context menu. |
| contextMenuSelectionMode | string | separate | Mode of the contet menu selection. |
| dataKey | string | null | A property to uniquely identify a record in data. |
| metaKeySelection | boolean | false | Defines whether metaKey is should be considered for the selection. On touch enabled devices, metaKeySelection is turned off automatically. |
| compareSelectionBy | string | deepEquals | Algorithm to define if a row is selected, valid values are "equals" that compares by reference and "deepEquals" that compares all fields. |
| rowHover | boolean | false | Adds hover effect to rows without the need for selectionMode. |
| loading | boolean | false | Displays a loader to indicate data load is in progress. |
| loadingIcon | string | null | The icon to show while indicating data load is in progress. |
| showLoader | boolean | true | Whether to show the loading mask when loading property is true. |
| scrollable | boolean | false | When specified, enables horizontal and/or vertical scrolling. |
| scrollHeight | string | null | Height of the scroll viewport in fixed pixels or the "flex" keyword for a dynamic size. |
| virtualScroll | boolean | false | Whether the data should be loaded on demand during scroll. |
| virtualScrollItemSize | number | null | Height of a row to use in calculations of virtual scrolling. |
| virtualScrollOptions | ScrollerOptions | null | Whether to use the scroller feature. The properties of scroller component can be used like an object in it. |
| virtualScrollDelay | number | 150 | The delay (in milliseconds) before triggering the virtual scroll. This determines the time gap between the user's scroll action and the actual rendering of the next set of items in the virtual scroll. |
| frozenWidth | string | null | Width of the frozen columns container. |
| frozenColumns | { [klass: string]: any } | null | An array of objects to represent dynamic columns that are frozen. |
| resizableColumns | boolean | false | When enabled, columns can be resized using drag and drop. |
| columnResizeMode | string | fit | Defines whether the overall table width should change on column resize, valid values are "fit" and "expand". |
| reorderableColumns | boolean | false | When enabled, columns can be reordered using drag and drop. |
| contextMenu | any | null | Local ng-template varilable of a ContextMenu. |
| rowTrackBy | Function | ... | Function to optimize the dom operations by delegating to ngForTrackBy, default algorithm checks for object identity. |
| filters | { [s: string]: FilterMetadata } | {} | An array of FilterMetadata objects to provide external filters. |
| globalFilterFields | string[] | null | An array of fields as string to use in global filtering. |
| filterDelay | number | 300 | Delay in milliseconds before filtering the data. |
| filterMode | string | lenient | Mode for filtering valid values are "lenient" and "strict". Default is lenient. |
| filterLocale | string | null | Locale to use in filtering. The default locale is the host environment's current locale. |
| paginatorLocale | string | null | Locale to be used in paginator formatting. |
| totalRecords | number | null | Number of total records, defaults to length of value when not defined. |
| sortField | string | null | Name of the field to sort data by default. |
| sortOrder | number | null | Order to sort when default sorting is enabled. |
| multiSortMeta | SortMeta[] | null | An array of SortMeta objects to sort the data by default in multiple sort mode. |
| selection | any | null | Selected row in single mode or an array of values in multiple mode. |
| value | TreeNode<any>[] | null | An array of objects to display. |
| virtualRowHeight | number | null | Indicates the height of rows to be scrolled. |
| selectionKeys | any | null | A map of keys to control the selection state. |
| showGridlines | boolean | false | Whether to show grid lines between cells. |

##### Emitters

Defines emit that determine the behavior of the component based on a given condition or report the actions that the component takes.

| name | parameters | description |
| --- | --- | --- |
| selectionChange | value :  TreeTableNode | Callback to invoke on selected node change. |
| contextMenuSelectionChange | value :  TreeTableNode | Callback to invoke on context menu selection change. |
| onFilter | event :  TreeTableFilterEvent | Callback to invoke when data is filtered. |
| onNodeExpand | event :  TreeTableNodeExpandEvent | Callback to invoke when a node is expanded. |
| onNodeCollapse | event :  TreeTableNodeCollapseEvent | Callback to invoke when a node is collapsed. |
| onPage | value :  TreeTablePaginatorState | Callback to invoke when pagination occurs. |
| onSort | value :  any | Callback to invoke when a column gets sorted. |
| onLazyLoad | event :  TreeTableLazyLoadEvent | Callback to invoke when paging, sorting or filtering happens in lazy mode. |
| sortFunction | event :  TreeTableSortEvent | An event emitter to invoke on custom sorting, refer to sorting section for details. |
| onColResize | event :  TreeTableColResizeEvent | Callback to invoke when a column is resized. |
| onColReorder | event :  TreeTableColumnReorderEvent | Callback to invoke when a column is reordered. |
| onNodeSelect | value :  TreeTableNode | Callback to invoke when a node is selected. |
| onNodeUnselect | event :  TreeTableNodeUnSelectEvent | Callback to invoke when a node is unselected. |
| onContextMenuSelect | event :  TreeTableContextMenuSelectEvent | Callback to invoke when a node is selected with right click. |
| onHeaderCheckboxToggle | event :  TreeTableHeaderCheckboxToggleEvent | Callback to invoke when state of header checkbox changes. |
| onEditInit | event :  TreeTableEditEvent | Callback to invoke when a cell switches to edit mode. |
| onEditComplete | event :  TreeTableEditEvent | Callback to invoke when cell edit is completed. |
| onEditCancel | event :  TreeTableEditEvent | Callback to invoke when cell edit is cancelled with escape key. |
| selectionKeysChange | value :  any | Callback to invoke when selectionKeys are changed. |

##### Methods

Defines methods that can be accessed by the component's reference.

| name | parameters | description |
| --- | --- | --- |
| resetScrollTop |  | Resets scroll to top. |
| scrollToVirtualIndex | index :  number | Scrolls to given index when using virtual scroll. |
| scrollTo | options :  ScrollToOptions | Scrolls to given index. |
| reset |  | Clears the sort and paginator state. |

#### TreeTableNode

#### TreeNode

---

[View Official Documentation](https://primeng.org/treetable)
