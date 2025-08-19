# Scroller

VirtualScroller is a performance-approach to handle huge data efficiently.

## Import

```typescript
import { ScrollerModule } from 'primeng/scroller';
```

## Basic

VirtualScroller requires items as the data to display, itemSize for the dimensions of an item and item template are required on component. In addition, an initial array is required based on the total number of items to display. Size of the viewport is configured using scrollWidth, scrollHeight properties directly or with CSS width and height styles.

```html
<p-virtualscroller [items]="items" [itemSize]="50" scrollHeight="200px" styleClass="border border-surface" [style]="{ width: '200px', height: '200px' }">
    <ng-template #item let-item let-options="options">
        <div class="flex items-center p-2" [ngClass]="{ 'bg-surface-100 dark:bg-surface-700': options.odd }" style="height: 50px;">
            {{ item }}
        </div>
    </ng-template>
</p-virtualscroller>
```

## Horizontal

Setting orientation to horizontal enables scrolling horizontally. In this case, the itemSize should refer to the width of an item.

```html
<p-virtualscroller [items]="items" [itemSize]="50" scrollHeight="200px" orientation="horizontal" styleClass="border border-surface" [style]="{ width: '200px', height: '200px' }">
    <ng-template #item let-item let-options="options">
        <div class="flex items-center p-2" style="writing-mode: vertical-lr; width: 50px;" [ngClass]="{ 'bg-surface-100 dark:bg-surface-700': options.odd }">
            {{ item }}
        </div>
    </ng-template>
</p-virtualscroller>
```

## Grid

Scrolling can be enabled vertically and horizontally when orientation is set as both. In this mode, itemSize should be an array where first value is the height of an item and second is the width.

```html
<p-virtualscroller [items]="items" [itemSize]="[50, 100]" orientation="both" styleClass="border border-surface" [style]="{ width: '200px', height: '200px' }">
    <ng-template #item let-item let-options="options">
        <div class="flex items-center p-2" [ngClass]="{ 'bg-surface-100 dark:bg-surface-700': options.odd }" style="height: 50px;">
            <div *ngFor="let el of item" style="width: 100px">{{ el }}</div>
        </div>
    </ng-template>
</p-virtualscroller>
```

## Delay

Scroll delay is adjusted by using delay property.

```html
<p-virtualscroller [items]="items" [itemSize]="50" styleClass="border border-surface" [style]="{ width: '200px', height: '200px' }">
    <ng-template #item let-item let-options="options">
        <div class="flex items-center p-2" [ngClass]="{ 'bg-surface-100 dark:bg-surface-700': options.odd }" style="height: 50px;">
            {{ item }}
        </div>
    </ng-template>
</p-virtualscroller>

<p-virtualscroller [items]="items" [itemSize]="50" [delay]="150" styleClass="border border-surface" [style]="{ width: '200px', height: '200px' }">
    <ng-template #item let-item let-options="options">
        <div class="flex items-center p-2" [ngClass]="{ 'bg-surface-100 dark:bg-surface-700': options.odd }" style="height: 50px;">
            {{ item }}
        </div>
    </ng-template>
</p-virtualscroller>

<p-virtualscroller [items]="items" [itemSize]="50" [delay]="500" styleClass="border border-surface" [style]="{ width: '200px', height: '200px' }">
    <ng-template #item let-item let-options="options">
        <div class="flex items-center p-2" [ngClass]="{ 'bg-surface-100 dark:bg-surface-700': options.odd }" style="height: 50px;">
            {{ item }}
        </div>
    </ng-template>
</p-virtualscroller>
```

## Loading

Busy state is enabled by adding showLoader property which blocks the UI with a modal by default. Alternatively, loader template can be used to customize items e.g. with Skeleton.

```html
<p-virtualscroller [items]="items" [itemSize]="50" [showLoader]="true" [delay]="250" styleClass="border border-surface" [style]="{ width: '200px', height: '200px' }">
    <ng-template #item let-item let-options="options">
        <div class="flex items-center p-2" [ngClass]="{ 'bg-surface-100 dark:bg-surface-700': options.odd }" style="height: 50px;">
            {{ item }}
        </div>
    </ng-template>
</p-virtualscroller>

 <p-virtualscroller [items]="items" [itemSize]="50" [showLoader]="true" [delay]="250" styleClass="border border-surface" [style]="{ width: '200px', height: '200px' }">
    <ng-template #item let-item let-options="options">
        <div class="flex items-center p-2" [ngClass]="{ 'bg-surface-100 dark:bg-surface-700': options.odd }" style="height: 50px;">
            {{ item }}
        </div>
    </ng-template>
    <ng-template pTemplate="loader" let-options="options">
        <div class="flex items-center p-2" [ngClass]="{ 'bg-surface-100 dark:bg-surface-700': options.odd }" style="height: 50px;">
            <p-skeleton [width]="options.even ? '60%' : '50%'" height="1.3rem"></p-skeleton>
        </div>
    </ng-template>
</p-virtualscroller>
```

## Lazy

Lazy mode is handy to deal with large datasets where instead of loading the entire data, small chunks of data are loaded on demand by invoking onLazyLoad callback everytime scrolling requires a new chunk. To implement lazy loading, enable lazy attribute, initialize your data as a placeholder with a length and finally implement a method callback using onLazyLoad that actually loads a chunk from a datasource. onLazyLoad gets an event object that contains information about the chunk of data to load such as the index and number of items to load. Notice that a new template called loadingItem is also required to display as a placeholder while the new items are being loaded.

```html
<p-virtualscroller [items]="items" [itemSize]="50" [showLoader]="true" [delay]="250" [loading]="lazyLoading" [lazy]="true" (onLazyLoad)="onLazyLoad($event)" styleClass="border border-surface" [style]="{ width: '200px', height: '200px' }">
    <ng-template #item let-item let-options="options">
        <div class="flex items-center p-2" [ngClass]="{ 'bg-surface-100 dark:bg-surface-700': options.odd }" style="height: 50px;">
            {{ item }}
        </div>
    </ng-template>
</p-virtualscroller>
```

## Programmatic

Scrolling to a specific index can be done with the scrollToIndex function.

```html
<p-button label="Reset" (click)="reset()" />
<p-virtualscroller #sc [items]="items" [itemSize]="50" scrollHeight="200px" styleClass="border border-surface" [style]="{ width: '200px', height: '200px' }">
    <ng-template #item let-item let-options="options">
        <div class="flex items-center p-2" [ngClass]="{ 'bg-surface-100 dark:bg-surface-700': options.odd }" style="height: 50px;">
            {{ item }}
        </div>
    </ng-template>
</p-virtualscroller>
```

## Template

Scroller content is customizable by using ng-template. Valid values are content, item, loader and loadericon

```html
<p-virtualscroller [items]="items" [itemSize]="25 * 7" [showLoader]="true" [delay]="250" styleClass="border border-surface" [style]="{ width: '200px', height: '200px' }">
    <ng-template #item let-item let-options="options">
        <div class="flex flex-col align-items-strech" [ngClass]="{ 'surface-ground': options.odd }">
            <div class="flex items-center px-2" style="height: 25px">Item: {{ item }}</div>
            <div class="flex items-center px-2" style="height: 25px">Index: {{ options.index }}</div>
            <div class="flex items-center px-2" style="height: 25px">Count: {{ options.count }}</div>
            <div class="flex items-center px-2" style="height: 25px">First: {{ options.first }}</div>
            <div class="flex items-center px-2" style="height: 25px">Last: {{ options.last }}</div>
            <div class="flex items-center px-2" style="height: 25px">Even: {{ options.even }}</div>
            <div class="flex items-center px-2" style="height: 25px">Odd: {{ options.odd }}</div>
        </div>
    </ng-template>
    <ng-template #loader let-options="options">
        <div class="flex flex-col items-stretch" [ngClass]="{ 'surface-ground': options.odd }">
            <div class="flex items-center px-2" style="height: 25px"><p-skeleton width="60%" height="1.2rem"></p-skeleton></div>
            <div class="flex items-center px-2" style="height: 25px"><p-skeleton width="50%" height="1.2rem"></p-skeleton></div>
            <div class="flex items-center px-2" style="height: 25px"><p-skeleton width="60%" height="1.2rem"></p-skeleton></div>
            <div class="flex items-center px-2" style="height: 25px"><p-skeleton width="50%" height="1.2rem"></p-skeleton></div>
            <div class="flex items-center px-2" style="height: 25px"><p-skeleton width="60%" height="1.2rem"></p-skeleton></div>
            <div class="flex items-center px-2" style="height: 25px"><p-skeleton width="50%" height="1.2rem"></p-skeleton></div>
            <div class="flex items-center px-2" style="height: 25px"><p-skeleton width="60%" height="1.2rem"></p-skeleton></div>
        </div>
    </ng-template>
</p-virtualscroller>
```

## Accessibility

VirtualScroller uses a semantic list element to list the items. No specific role is enforced, still you may use any aria role and attributes as any valid attribute is passed to the container element.

## Scroller

Scroller is a performance-approach to handle huge data efficiently.

---

[View Official Documentation](https://primeng.org/virtualscroller)
