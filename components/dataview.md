# DataView

DataView displays data in grid grid-cols-12 gap-4 or list layout with pagination and sorting features.

## Import

```typescript
import { DataViewModule } from 'primeng/dataview';
```

## Basic

DataView requires a value to display along with a list template that receives an object in the collection to return content.

```html
<p-dataview #dv [value]="products()">
    <ng-template #list let-items>
        <div class="grid grid-cols-12 gap-4 grid-nogutter">
            <div class="col-span-12" *ngFor="let item of items; let first = first" class="col-span-12">
                <div
                    class="flex flex-col sm:flex-row sm:items-center p-6 gap-4"
                    [ngClass]="{ 'border-t border-surface-200 dark:border-surface-700': !first }"
                >
                    <div class="md:w-40 relative">
                        <img
                            class="block xl:block mx-auto rounded-border w-full"
                            [src]="'https://primefaces.org/cdn/primeng/images/demo/product/' + item.image"
                            [alt]="item.name"
                        />
                        <p-tag
                            [value]="item.inventoryStatus"
                            [severity]="getSeverity(item)"
                            class="absolute dark:!bg-surface-900"
                            [style.left.px]="4"
                            [style.top.px]="4"
                        />
                    </div>
                    <div class="flex flex-col md:flex-row justify-between md:items-center flex-1 gap-6">
                        <div class="flex flex-row md:flex-col justify-between items-start gap-2">
                            <div>
                                <span class="font-medium text-secondary text-sm">{{ item.category }}</span>
                                <div class="text-lg font-medium text-surface-900 dark:text-surface-0 mt-2">{{ item.name }}</div>
                            </div>
                            <div class="bg-surface-100 dark:bg-surface-700 p-1" style="border-radius: 30px">
                                <div
                                    class="bg-surface-0 dark:bg-surface-900 flex items-center gap-2 justify-center py-1 px-2"
                                    style="border-radius: 30px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)"
                                >
                                    <span class="text-surface-900 dark:text-surface-0 font-medium text-sm">{{
                                        item.rating
                                    }}</span>
                                    <i class="pi pi-star-fill text-yellow-500"></i>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col md:items-end gap-8">
                            <span class="text-xl font-semibold text-surface-900 dark:text-surface-0">{{
                                '$' + item.price
                            }}</span>
                            <div class="flex flex-row-reverse md:flex-row gap-2">
                                <p-button icon="pi pi-heart" [outlined]="true" />
                                <p-button
                                    icon="pi pi-shopping-cart"
                                    class="flex-auto md:flex-initial whitespace-nowrap"
                                    label="Buy Now"
                                    [disabled]="item.inventoryStatus === 'OUTOFSTOCK'"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </ng-template>
</p-dataview>
```

## Pagination

Pagination is enabled with the paginator and rows properties. Refer to the Paginator for more information about customizing the paginator.

```html
<p-dataview [value]="products()" [rows]="5" [paginator]="true">
    <ng-template #list let-items>
        <div class="grid grid-cols-12 gap-4 grid-nogutter">
            <div class="col-span-12" *ngFor="let item of items; let first = first" class="col-span-12">
                <div
                    class="flex flex-col sm:flex-row sm:items-center p-6 gap-4"
                    [ngClass]="{ 'border-t border-surface-200 dark:border-surface-700': !first }"
                >
                    <div class="md:w-40 relative">
                        <img
                            class="block xl:block mx-auto rounded-border w-full"
                            [src]="'https://primefaces.org/cdn/primeng/images/demo/product/' + item.image"
                            [alt]="item.name"
                        />
                        <p-tag
                            [value]="item.inventoryStatus"
                            [severity]="getSeverity(item)"
                            class="absolute dark:!bg-surface-900"
                            [style.left.px]="4"
                            [style.top.px]="4"
                        />
                    </div>
                    <div class="flex flex-col md:flex-row justify-between md:items-center flex-1 gap-6">
                        <div class="flex flex-row md:flex-col justify-between items-start gap-2">
                            <div>
                                <span class="font-medium text-secondary text-sm">{{ item.category }}</span>
                                <div class="text-lg font-medium text-surface-900 dark:text-surface-0 mt-2">{{ item.name }}</div>
                            </div>
                            <div class="bg-surface-100 dark:bg-surface-700 p-1" style="border-radius: 30px">
                                <div
                                    class="bg-surface-0 dark:bg-surface-900 flex items-center gap-2 justify-center py-1 px-2"
                                    style="border-radius: 30px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)"
                                >
                                    <span class="text-surface-900 dark:text-surface-0 font-medium text-sm">{{
                                        item.rating
                                    }}</span>
                                    <i class="pi pi-star-fill text-yellow-500"></i>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col md:items-end gap-8">
                            <span class="text-xl font-semibold text-surface-900 dark:text-surface-0">{{
                                '$' + item.price
                            }}</span>
                            <div class="flex flex-row-reverse md:flex-row gap-2">
                                <p-button icon="pi pi-heart" [outlined]="true" />
                                <p-button
                                    icon="pi pi-shopping-cart"
                                    class="flex-auto md:flex-initial whitespace-nowrap"
                                    label="Buy Now"
                                    [disabled]="item.inventoryStatus === 'OUTOFSTOCK'"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </ng-template>
</p-dataview>
```

## Sorting

Built-in sorting is controlled by bindings sortField and sortOrder properties from a custom UI.

```html
<p-dataview [value]="products()" [sortField]="sortField" [sortOrder]="sortOrder">
    <ng-template #header>
        <div class="flex flex-col md:flex-row md:justify-between">
            <p-select
                [options]="sortOptions"
                [(ngModel)]="sortKey"
                placeholder="Sort By Price"
                (onChange)="onSortChange($event)"
                class="mb-2 md:mb-0"
            />
        </div>
    </ng-template>
    <ng-template #list let-items>
        <div class="grid grid-cols-12 gap-4 grid-nogutter">
            <div class="col-span-12" *ngFor="let item of items; let first = first">
                <div
                    class="flex flex-col sm:flex-row sm:items-center p-6 gap-4"
                    [ngClass]="{ 'border-t border-surface-200 dark:border-surface-700': !first }"
                >
                    <div class="md:w-40 relative">
                        <img
                            class="block xl:block mx-auto rounded-border w-full"
                            [src]="'https://primefaces.org/cdn/primeng/images/demo/product/' + item.image"
                            [alt]="item.name"
                        />
                        <p-tag
                            [value]="item.inventoryStatus"
                            [severity]="getSeverity(item)"
                            class="dark:!bg-surface-900 absolute"
                            [style.left.px]="4"
                            [style.top.px]="4"
                        />
                    </div>
                    <div class="flex flex-col md:flex-row justify-between md:items-center flex-1 gap-6">
                        <div class="flex flex-row md:flex-col justify-between items-start gap-2">
                            <div>
                                <span class="font-medium text-secondary text-sm">{{ item.category }}</span>
                                <div class="text-lg font-medium text-surface-900 dark:text-surface-0 mt-2">{{ item.name }}</div>
                            </div>
                            <div class="bg-surface-100 dark:bg-surface-700 p-1" style="border-radius: 30px">
                                <div
                                    class="bg-surface-0 dark:bg-surface-900 flex items-center gap-2 justify-center py-1 px-2"
                                    style="border-radius: 30px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)"
                                >
                                    <span class="text-surface-900 dark:text-surface-0 font-medium text-sm">{{
                                        item.rating
                                    }}</span>
                                    <i class="pi pi-star-fill text-yellow-500"></i>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col md:items-end gap-8">
                            <span class="text-xl font-semibold text-surface-900 dark:text-surface-0">{{
                                '$' + item.price
                            }}</span>
                            <div class="flex flex-row-reverse md:flex-row gap-2">
                                <p-button icon="pi pi-heart" [outlined]="true" />
                                <p-button
                                    icon="pi pi-shopping-cart"
                                    class="flex-auto md:flex-initial whitespace-nowrap"
                                    label="Buy Now"
                                    [disabled]="item.inventoryStatus === 'OUTOFSTOCK'"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </ng-template>
</p-dataview>
```

## Layout

DataView supports list and grid display modes defined with the layout property. The grid mode is not built-in for flexibility purposes and requires a library with CSS grid features like Tailwind.

```html
<p-dataview #dv [value]="products()" [layout]="layout">
    <ng-template #header>
        <div class="flex justify-end">
            <p-selectbutton [(ngModel)]="layout" [options]="options" [allowEmpty]="false">
                <ng-template #item let-item>
                    <i class="pi " [ngClass]="{ 'pi-bars': item === 'list', 'pi-table': item === 'grid' }"></i>
                </ng-template>
            </p-selectbutton>
        </div>
    </ng-template>
    <ng-template #list let-items>
        <div *ngFor="let item of items; let first = first">
            <div
                class="flex flex-col sm:flex-row sm:items-center p-6 gap-4"
                [ngClass]="{ 'border-t border-surface-200 dark:border-surface-700': !first }"
            >
                <div class="md:w-40 relative">
                    <img
                        class="block xl:block mx-auto rounded w-full"
                        [src]="'https://primefaces.org/cdn/primeng/images/demo/product/' + item.image"
                        [alt]="item.name"
                    />
                    <p-tag
                        [value]="item.inventoryStatus"
                        [severity]="getSeverity(item)"
                        class="absolute dark:!bg-surface-900"
                        [style.left.px]="4"
                        [style.top.px]="4"
                    />
                </div>
                <div class="flex flex-col md:flex-row justify-between md:items-center flex-1 gap-6">
                    <div class="flex flex-row md:flex-col justify-between items-start gap-2">
                        <div>
                            <span class="font-medium text-surface-500 dark:text-surface-400 text-sm">{{ item.category }}</span>
                            <div class="text-lg font-medium mt-2">{{ item.name }}</div>
                        </div>
                        <div class="bg-surface-100 p-1" style="border-radius: 30px">
                            <div
                                class="bg-surface-0 flex items-center gap-2 justify-center py-1 px-2"
                                style="border-radius: 30px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)"
                            >
                                <span class="text-surface-900 font-medium text-sm">{{ item.rating }}</span>
                                <i class="pi pi-star-fill text-yellow-500"></i>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col md:items-end gap-8">
                        <span class="text-xl font-semibold">{{ item.price | currency: 'USD' }}</span>
                        <div class="flex flex-row-reverse md:flex-row gap-2">
                            <button pButton icon="pi pi-heart" [outlined]="true"></button>
                            <button
                                pButton
                                icon="pi pi-shopping-cart"
                                label="Buy Now"
                                [disabled]="item.inventoryStatus === 'OUTOFSTOCK'"
                                class="flex-auto md:flex-initial whitespace-nowrap"
                            ></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </ng-template>
    <ng-template #grid let-items>
        <div class="grid grid-cols-12 gap-4">
            <div *ngFor="let product of items" class="col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-6 p-2">
                <div
                    class="p-6 border border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-900 rounded flex flex-col"
                >
                    <div class="bg-surface-50 flex justify-center rounded p-4">
                        <div class="relative mx-auto">
                            <img
                                class="rounded w-full"
                                [src]="'https://primefaces.org/cdn/primeng/images/demo/product/' + product.image"
                                [alt]="product.name"
                                style="max-width: 300px"
                            />
                            <p-tag
                                [value]="product.inventoryStatus"
                                [severity]="getSeverity(product)"
                                class="absolute dark:!bg-surface-900"
                                [style.left.px]="4"
                                [style.top.px]="4"
                            />
                        </div>
                    </div>
                    <div class="pt-6">
                        <div class="flex flex-row justify-between products-start gap-2">
                            <div>
                                <span class="font-medium text-surface-500 dark:text-surface-400 text-sm">{{
                                    product.category
                                }}</span>
                                <div class="text-lg font-medium mt-1">{{ product.name }}</div>
                            </div>
                            <div class="bg-surface-100 p-1" style="border-radius: 30px; height:100%">
                                <div
                                    class="bg-surface-0 flex products-center gap-2 justify-center py-1 px-2"
                                    style="border-radius: 30px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)"
                                >
                                    <span class="text-surface-900 font-medium text-sm">{{ product.rating }}</span>
                                    <i class="pi pi-star-fill text-yellow-500"></i>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col gap-6 mt-6">
                            <span class="text-2xl font-semibold">{{ product.price | currency: 'USD' }}</span>
                            <div class="flex gap-2">
                                <button
                                    pButton
                                    icon="pi pi-shopping-cart"
                                    label="Buy Now"
                                    [disabled]="product.inventoryStatus === 'OUTOFSTOCK'"
                                    class="flex-auto whitespace-nowrap"
                                ></button>
                                <button pButton icon="pi pi-heart" outlined></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </ng-template>
</p-dataview>
```

## Loading

While data is being loaded. Skeleton component may be used to indicate the busy state.

```html
<p-dataview #dv [value]="products()" [layout]="layout">
    <ng-template #header>
        <div class="flex justify-end">
            <p-selectbutton [(ngModel)]="layout" [options]="options" [allowEmpty]="false">
                <ng-template #item let-option>
                    <i [class]="option === 'list' ? 'pi pi-bars' : 'pi pi-table'"></i>
                </ng-template>
            </p-selectbutton>
        </div>
    </ng-template>
    <ng-template #list let-items>
        <div class="flex flex-col">
            <div *ngFor="let i of counterArray(6); let first = first">
                <div
                    class="flex flex-col xl:flex-row xl:items-start p-6 gap-6"
                    [ngClass]="{ 'border-t border-surface-200 dark:border-surface-700': !first }"
                >
                    <p-skeleton class="!w-9/12 sm:!w-64 xl:!w-40 !h-24 mx-auto" />
                    <div
                        class="flex flex-col sm:flex-row justify-between items-center xl:items-start flex-1 gap-6"
                    >
                        <div class="flex flex-col items-center sm:items-start gap-4">
                            <p-skeleton width="8rem" height="2rem" />
                            <p-skeleton width="6rem" height="1rem" />

                            <div class="flex items-center gap-4">
                                <p-skeleton width="6rem" height="1rem" />
                                <p-skeleton width="3rem" height="1rem" />
                            </div>
                        </div>
                        <div class="flex sm:flex-col items-center sm:items-end gap-4 sm:gap-2">
                            <p-skeleton width="4rem" height="2rem" />
                            <p-skeleton size="3rem" shape="circle" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </ng-template>
    <ng-template #grid let-items>
        <div class="grid grid-cols-12 gap-4">
            <div
                *ngFor="let i of counterArray(6); let first = first"
                class="col-span-12 sm:col-span-6 xl:col-span-4 p-2"
            >
                <div
                    class="p-6 border border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-900 rounded"
                >
                    <div class="flex flex-wrap items-center justify-between gap-2">
                        <p-skeleton width="6rem" height="2rem" />
                        <p-skeleton width="3rem" height="1rem" />
                    </div>
                    <div class="flex flex-col items-center gap-4 py-8">
                        <p-skeleton height="10rem" class="w-3/4" class="w-3/4" />
                        <p-skeleton width="8rem" height="2rem" />
                        <p-skeleton width="6rem" height="1rem" />
                    </div>
                    <div class="flex items-center justify-between">
                        <p-skeleton width="4rem" height="2rem" />
                        <p-skeleton width="6rem" height="1rem" shape="circle" size="3rem" />
                    </div>
                </div>
            </div>
        </div>
    </ng-template>
</p-dataview>
```

## Accessibility

The container element that wraps the layout options buttons has a group role whereas each button element uses button role and aria-pressed is updated depending on selection state. Values to describe the buttons are derived from the aria.listView and aria.gridView properties of the locale API respectively.

## DataView

DataView displays data in grid or list layout with pagination and sorting features.

---

[View Official Documentation](https://primeng.org/dataview)
