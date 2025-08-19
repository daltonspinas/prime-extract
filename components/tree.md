# Tree

Tree is used to display hierarchical data.

## Features

### Import

```typescript
import { TreeModule } from 'primeng/tree';
```

### Basic

Tree component requires an array of TreeNode objects as its value.

```html
<p-tree [value]="files" class="w-full md:w-[30rem]" />
```

### Controlled

Tree requires a collection of TreeNode instances as a value.

```html
<div class="flex flex-wrap gap-2 mb-6">
    <p-button icon="pi pi-plus" label="Expand all" (click)="expandAll()" />
    <p-button icon="pi pi-minus" label="Collapse all" (click)="collapseAll()" />
</div>
<p-tree [value]="files" class="w-full md:w-[30rem]" />
```

### Selection

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

### Events

An event is provided for each type of user interaction such as expand, collapse and selection.

```html
<p-tree [value]="files" class="w-full md:w-[30rem]" selectionMode="single" [(selection)]="selectedFile" (onNodeExpand)="nodeExpand($event)" (onNodeCollapse)="nodeCollapse($event)" (onNodeSelect)="nodeSelect($event)" (onNodeUnselect)="nodeUnselect($event)" />
```

### Lazy

Lazy loading is useful when dealing with huge datasets, in this example nodes are dynamically loaded on demand using loading property and onNodeExpand method. Default value of loadingMode is mask and also icon is available.

```html
<p-tree class="w-full md:w-[30rem]" [value]="nodes" (onNodeExpand)="onNodeExpand($event)" [loading]="loading" />
<p-tree class="w-full md:w-[30rem]" [value]="nodes2" loadingMode="icon" (onNodeExpand)="onNodeExpand2($event)" />
```

### Template

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

### Filter

Filtering is enabled by adding the filter property, by default label property of a node is used to compare against the value in the text field, in order to customize which field(s) should be used during search define filterBy property. In addition filterMode specifies the filtering strategy. In lenient mode when the query matches a node, children of the node are not searched further as all descendants of the node are included. On the other hand, in strict mode when the query matches a node, filtering continues on all descendants.

```html
<p-tree [value]="files" [filter]="true" filterPlaceholder="Lenient Filter" />
<p-tree [value]="files2" [filter]="true" filterMode="strict" filterPlaceholder="Strict Filter" />
```

### Virtual Scroll

VirtualScroller is a performance-approach to handle huge data efficiently. Setting virtualScroll property as true and providing a virtualScrollItemSize in pixels would be enough to enable this functionality.

```html
<p-tree [value]="nodes" scrollHeight="250px" [virtualScroll]="true" [virtualScrollItemSize]="46" />
```

```html
<p-tree [value]="nodes" scrollHeight="250px" [virtualScroll]="true" [lazy]="true" [virtualScrollItemSize]="46" (onNodeExpand)="nodeExpand($event)" [loading]="loading" />
```

### DragDrop

Nodes can be reordered within the same tree and also can be transferred between other trees using drag&drop.

```html
<p-tree [value]="files" class="w-full md:w-[30rem]" [draggableNodes]="true" [droppableNodes]="true" draggableScope="self" droppableScope="self" />
```

### Context Menu

Tree requires a collection of TreeNode instances as a value.

```html
<p-tree [value]="files" class="w-full md:w-[30rem]" selectionMode="single" [(selection)]="selectedFile" [contextMenu]="cm" />
<p-contextmenu #cm [model]="items" />
<p-toast />
```

### Accessibility

Value to describe the component can either be provided with aria-labelledby or aria-label props. The root list element has a tree role whereas each list item has a treeitem role along with aria-label, aria-selected and aria-expanded attributes. In checkbox selection, aria-checked is used instead of aria-selected. The container element of a treenode has the group role. Checkbox and toggle icons are hidden from screen readers as their parent element with treeitem role and attributes are used instead for readers and keyboard support. The aria-setsize, aria-posinset and aria-level attributes are calculated implicitly and added to each treeitem.

### Tree

Tree is used to display hierarchical data.

### TreeNode

## API

### Tree API

API defines helper props, events and others for the PrimeNG Tree module.

#### Tree

Tree is used to display hierarchical data.

##### Properties

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| value | any | null | An array of treenodes. |
| selectionMode | "checkbox" | "single" | "multiple" | null | Defines the selection mode. |
| loadingMode | "icon" | "mask" | mask | Loading mode display. |
| selection | any | null | A single treenode instance or an array to refer to the selections. |
| styleClass | string | null | Style class of the component. |
| contextMenu | any | null | Context menu instance. |
| draggableScope | any | null | Scope of the draggable nodes to match a droppableScope. |
| droppableScope | any | null | Scope of the droppable nodes to match a draggableScope. |
| draggableNodes | boolean | false | Whether the nodes are draggable. |
| droppableNodes | boolean | false | Whether the nodes are droppable. |
| metaKeySelection | boolean | false | Defines how multiple items can be selected, when true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically. |
| propagateSelectionUp | boolean | true | Whether checkbox selections propagate to ancestor nodes. |
| propagateSelectionDown | boolean | true | Whether checkbox selections propagate to descendant nodes. |
| loading | boolean | false | Displays a loader to indicate data load is in progress. |
| loadingIcon | string | null | The icon to show while indicating data load is in progress. |
| emptyMessage | string | null | Text to display when there is no data. |
| ariaLabel | string | null | Used to define a string that labels the tree. |
| togglerAriaLabel | string | null | Defines a string that labels the toggler icon for accessibility. |
| ariaLabelledBy | string | null | Establishes relationships between the component and label(s) where its value should be one or more element IDs. |
| validateDrop | boolean | false | When enabled, drop can be accepted or rejected based on condition defined at onNodeDrop. |
| filter | boolean | false | When specified, displays an input field to filter the items. |
| filterInputAutoFocus | boolean | false | Determines whether the filter input should be automatically focused when the component is rendered. |
| filterBy | string | label | When filtering is enabled, filterBy decides which field or fields (comma separated) to search against. |
| filterMode | string | lenient | Mode for filtering valid values are "lenient" and "strict". Default is lenient. |
| filterOptions | any | null | Mode for filtering valid values are "lenient" and "strict". Default is lenient. |
| filterPlaceholder | string | null | Placeholder text to show when filter input is empty. |
| filteredNodes | TreeNode<any>[] | null | Values after the tree nodes are filtered. |
| filterLocale | string | null | Locale to use in filtering. The default locale is the host environment's current locale. |
| scrollHeight | string | null | Height of the scrollable viewport. |
| lazy | boolean | false | Defines if data is loaded and interacted with in lazy manner. |
| virtualScroll | boolean | false | Whether the data should be loaded on demand during scroll. |
| virtualScrollItemSize | number | null | Height of an item in the list for VirtualScrolling. |
| virtualScrollOptions | ScrollerOptions | null | Whether to use the scroller feature. The properties of scroller component can be used like an object in it. |
| indentation | number | 1.5 | Indentation factor for spacing of the nested node when virtual scrolling is enabled. |
| _templateMap | any | null | Custom templates of the component. |
| trackBy | Function | ... | Function to optimize the node list rendering, default algorithm checks for object identity. |
| highlightOnSelect | boolean | false | Highlights the node on select. |

##### Emitters

Defines emit that determine the behavior of the component based on a given condition or report the actions that the component takes.

| name | parameters | description |
| --- | --- | --- |
| selectionChange | value :  TreeNode | Callback to invoke on selection change. |
| onNodeSelect | event :  TreeNodeSelectEvent | Callback to invoke when a node is selected. |
| onNodeUnselect | event :  TreeNodeUnSelectEvent | Callback to invoke when a node is unselected. |
| onNodeExpand | event :  TreeNodeExpandEvent | Callback to invoke when a node is expanded. |
| onNodeCollapse | event :  TreeNodeCollapseEvent | Callback to invoke when a node is collapsed. |
| onNodeContextMenuSelect | event :  TreeNodeContextMenuSelectEvent | Callback to invoke when a node is selected with right click. |
| onNodeDoubleClick | event :  TreeNodeDoubleClickEvent | Callback to invoke when a node is double clicked. |
| onNodeDrop | event :  TreeNodeDropEvent | Callback to invoke when a node is dropped. |
| onLazyLoad | event :  TreeLazyLoadEvent | Callback to invoke in lazy mode to load new data. |
| onScroll | event :  TreeScrollEvent | Callback to invoke in virtual scroll mode when scroll position changes. |
| onScrollIndexChange | event :  TreeScrollIndexChangeEvent | Callback to invoke in virtual scroll mode when scroll position and item's range in view changes. |
| onFilter | event :  TreeFilterEvent | Callback to invoke when data is filtered. |

##### Methods

Defines methods that can be accessed by the component's reference.

| name | parameters | description |
| --- | --- | --- |
| resetFilter |  | Resets filter. |
| scrollToVirtualIndex | index :  number | Scrolls to virtual index. |
| scrollTo | options :  any | Scrolls to virtual index. |

##### Templates

Defines the templates used by the component.

| name | parameters | description |
| --- | --- | --- |
| filter |  | Filter template. |
| node |  | Node template. |
| header |  | Header template. |
| footer |  | Footer template. |
| loader |  | Loader template. |
| emptymessage |  | Empty message template. |
| togglericon |  | Toggler icon template. |
| checkboxicon |  | Checkbox icon template. |
| loadingicon |  | Loading icon template. |
| filtericon |  | Filter icon template. |

#### TreeNode

---

[View Official Documentation](https://primeng.org/tree)
