# Tree

Tree is used to display hierarchical data.

## Import

```typescript
import { TreeModule } from 'primeng/tree';
```

## Basic

Tree component requires an array of TreeNode objects as its value.

```html
<p-tree [value]="files" class="w-full md:w-[30rem]" />
```

## Controlled

Tree requires a collection of TreeNode instances as a value.

```html
<div class="flex flex-wrap gap-2 mb-6">
    <p-button icon="pi pi-plus" label="Expand all" (click)="expandAll()" />
    <p-button icon="pi pi-minus" label="Collapse all" (click)="collapseAll()" />
</div>
<p-tree [value]="files" class="w-full md:w-[30rem]" />
```

## Selection

Single node selection is configured by setting selectionMode as single along with selection properties to manage the selection value binding.

```html
<p-tree [value]="files" class="w-full md:w-[30rem]" selectionMode="single" [(selection)]="selectedFile" />
```

```html
<div class="flex items-center mb-6 gap-2">
    <p-toggleswitch inputId="input-metakey" [(ngModel)]="metaKeySelection" />
    <label for="input-metakey">MetaKey</label>
</div>
<p-tree [metaKeySelection]="metaKeySelection" [value]="files" class="w-full md:w-[30rem]" selectionMode="multiple" [(selection)]="selectedFiles" />
```

```html
<p-tree [value]="files" selectionMode="checkbox" class="w-full md:w-[30rem]" [(selection)]="selectedFiles" />
```

## Events

An event is provided for each type of user interaction such as expand, collapse and selection.

```html
<p-tree [value]="files" class="w-full md:w-[30rem]" selectionMode="single" [(selection)]="selectedFile" (onNodeExpand)="nodeExpand($event)" (onNodeCollapse)="nodeCollapse($event)" (onNodeSelect)="nodeSelect($event)" (onNodeUnselect)="nodeUnselect($event)" />
```

## Lazy

Lazy loading is useful when dealing with huge datasets, in this example nodes are dynamically loaded on demand using loading property and onNodeExpand method. Default value of loadingMode is mask and also icon is available.

```html
<p-tree class="w-full md:w-[30rem]" [value]="nodes" (onNodeExpand)="onNodeExpand($event)" [loading]="loading" />
<p-tree class="w-full md:w-[30rem]" [value]="nodes2" loadingMode="icon" (onNodeExpand)="onNodeExpand2($event)" />
```

## Template

Custom node content instead of a node label is defined with the pTemplate property.

```html
<p-tree [value]="nodes" class="w-full md:w-[30rem]">
    <ng-template let-node pTemplate="url">
        <a [href]="node.data" target="_blank" rel="noopener noreferrer" class="text-surface-700 dark:text-surface-100 hover:text-primary">
            {{ node.label }}
        </a>
    </ng-template>
    <ng-template let-node pTemplate="default">
        <b>{{ node.label }}</b>
    </ng-template>
</p-tree>
```

## Filter

Filtering is enabled by adding the filter property, by default label property of a node is used to compare against the value in the text field, in order to customize which field(s) should be used during search define filterBy property. In addition filterMode specifies the filtering strategy. In lenient mode when the query matches a node, children of the node are not searched further as all descendants of the node are included. On the other hand, in strict mode when the query matches a node, filtering continues on all descendants.

```html
<p-tree [value]="files" [filter]="true" filterPlaceholder="Lenient Filter" />
<p-tree [value]="files2" [filter]="true" filterMode="strict" filterPlaceholder="Strict Filter" />
```

## Virtual Scroll

VirtualScroller is a performance-approach to handle huge data efficiently. Setting virtualScroll property as true and providing a virtualScrollItemSize in pixels would be enough to enable this functionality.

```html
<p-tree [value]="nodes" scrollHeight="250px" [virtualScroll]="true" [virtualScrollItemSize]="46" />
```

```html
<p-tree [value]="nodes" scrollHeight="250px" [virtualScroll]="true" [lazy]="true" [virtualScrollItemSize]="46" (onNodeExpand)="nodeExpand($event)" [loading]="loading" />
```

## DragDrop

Nodes can be reordered within the same tree and also can be transferred between other trees using drag&drop.

```html
<p-tree [value]="files" class="w-full md:w-[30rem]" [draggableNodes]="true" [droppableNodes]="true" draggableScope="self" droppableScope="self" />
```

## Context Menu

Tree requires a collection of TreeNode instances as a value.

```html
<p-tree [value]="files" class="w-full md:w-[30rem]" selectionMode="single" [(selection)]="selectedFile" [contextMenu]="cm" />
<p-contextmenu #cm [model]="items" />
<p-toast />
```

## Accessibility

Value to describe the component can either be provided with aria-labelledby or aria-label props. The root list element has a tree role whereas each list item has a treeitem role along with aria-label, aria-selected and aria-expanded attributes. In checkbox selection, aria-checked is used instead of aria-selected. The container element of a treenode has the group role. Checkbox and toggle icons are hidden from screen readers as their parent element with treeitem role and attributes are used instead for readers and keyboard support. The aria-setsize, aria-posinset and aria-level attributes are calculated implicitly and added to each treeitem.

## Tree

Tree is used to display hierarchical data.

## TreeNode

---

[View Official Documentation](https://primeng.org/tree)
