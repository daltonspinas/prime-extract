# Carousel

Carousel is a content slider featuring various customization options.

## Features

### Import

```typescript
import { CarouselModule } from 'primeng/carousel';
```

### Basic

Carousel requires a collection of items as its value along with a template to render each item.

```html
<p-carousel [value]="products" [numVisible]="3" [numScroll]="3" [circular]="false" [responsiveOptions]="responsiveOptions">
    <ng-template let-product #item>
        <div class="border border-surface rounded-border m-2 p-4">
            <div class="mb-4">
                <div class="relative mx-auto">
                    <img src="https://primefaces.org/cdn/primeng/images/demo/product/{{ product.image }}" [alt]="product.name" class="w-full rounded-border" />
                    <p-tag [value]="product.inventoryStatus" [severity]="getSeverity(product.inventoryStatus)" class="absolute" [ngStyle]="{ 'left.px': 5, 'top.px': 5 }" />
                </div>
            </div>
            <div class="mb-4 font-medium">{{ product.name }}</div>
            <div class="flex justify-between items-center">
                <div class="mt-0 font-semibold text-xl">{{ '$' + product.price }}</div>
                <span>
                    <p-button icon="pi pi-heart" severity="secondary" [outlined]="true" />
                    <p-button icon="pi pi-shopping-cart" styleClass="ml-2" />
                </span>
            </div>
        </div>
    </ng-template>
</p-carousel>
```

### Circular

When autoplayInterval is defined in milliseconds, items are scrolled automatically. In addition, for infinite scrolling circular property needs to be added which is enabled automatically in auto play mode.

```html
<p-carousel [value]="products" [numVisible]="3" [numScroll]="1" [circular]="true" [responsiveOptions]="responsiveOptions" autoplayInterval="3000">
    <ng-template let-product #item>
        <div class="border border-surface-200 dark:border-surface-700 rounded m-2 p-4">
            <div class="mb-4">
                <div class="relative mx-auto">
                    <img src="https://primefaces.org/cdn/primeng/images/demo/product/{{ product.image }}" [alt]="product.name" class="w-full rounded-border" />
                    <p-tag [value]="product.inventoryStatus" [severity]="getSeverity(product.inventoryStatus)" class="absolute dark:!bg-surface-900" [ngStyle]="{ 'left.px': 5, 'top.px': 5 }" />
                </div>
            </div>
            <div class="mb-4 font-medium">{{ product.name }}</div>
            <div class="flex justify-between items-center">
                <div class="mt-0 font-semibold text-xl">{{ '$' + product.price }}</div>
                <span>
                    <p-button icon="pi pi-heart" severity="secondary" [outlined]="true" />
                    <p-button icon="pi pi-shopping-cart" styleClass="ml-2" />
                </span>
            </div>
        </div>
    </ng-template>
</p-carousel>
```

### Responsive

Carousel supports specific configuration per screen size with the responsiveOptions property that takes an array of objects where each object defines the max-width breakpoint, numVisible for the number of items items per page and numScroll for number of items to scroll. When responsiveOptions is defined, the numScroll and numVisible properties of the Carousel are used as default when there is breakpoint that applies.

```html
<p-carousel [value]="products" [numVisible]="3" [numScroll]="1" [responsiveOptions]="responsiveOptions">
    <ng-template let-product #item>
        <div class="border border-surface-200 dark:border-surface-700 rounded m-2 p-4">
            <div class="mb-4">
                <div class="relative mx-auto">
                    <img src="https://primefaces.org/cdn/primeng/images/demo/product/{{ product.image }}" [alt]="product.name" class="w-full rounded-border" />
                    <p-tag [value]="product.inventoryStatus" [severity]="getSeverity(product.inventoryStatus)" class="absolute dark:!bg-surface-900" [ngStyle]="{ 'left.px': 5, 'top.px': 5 }" />
                </div>
            </div>
            <div class="mb-4 font-medium">{{ product.name }}</div>
            <div class="flex justify-between items-center">
                <div class="mt-0 font-semibold text-xl">{{ '$' + product.price }}</div>
                <span>
                    <p-button icon="pi pi-heart" severity="secondary" [outlined]="true" />
                    <p-button icon="pi pi-shopping-cart" styleClass="ml-2" />
                </span>
            </div>
        </div>
    </ng-template>
</p-carousel>
```

### Vertical

To create a vertical Carousel, orientation needs to be set to vertical along with a verticalViewPortHeight.

```html
<p-carousel [value]="products" [numVisible]="1" [numScroll]="1" orientation="vertical" verticalViewPortHeight="330px" contentClass="flex items-center">
    <ng-template let-product #item>
        <div class="border border-surface-200 dark:border-surface-700 rounded m-2 p-4">
            <div class="mb-4">
                <div class="relative mx-auto">
                    <img src="https://primefaces.org/cdn/primeng/images/demo/product/{{ product.image }}" [alt]="product.name" class="w-full rounded" />
                    <p-tag [value]="product.inventoryStatus" [severity]="getSeverity(product.inventoryStatus)" class="absolute dark:!bg-surface-900" [ngStyle]="{ 'left.px': 5, 'top.px': 5 }" />
                </div>
            </div>
            <div class="mb-4 font-medium">{{ product.name }}</div>
            <div class="flex justify-between items-center">
                <div class="mt-0 font-semibold text-xl">{{ '$' + product.price }}</div>
                <span>
                    <p-button icon="pi pi-heart" severity="secondary" [outlined]="true" />
                    <p-button icon="pi pi-shopping-cart" styleClass="ml-2" />
                </span>
            </div>
        </div>
    </ng-template>
</p-carousel>
```

### Accessibility

Carousel uses region role and since any attribute is passed to the main container element, attributes such as aria-label and aria-roledescription can be used as well. The slides container has aria-live attribute set as "polite" if carousel is not in autoplay mode, otherwise "off" would be the value in autoplay.

### Carousel

Carousel is a content slider featuring various customization options.

## API

### Carousel API

API defines helper props, events and others for the PrimeNG Carousel module.

#### Carousel

Carousel is a content slider featuring various customization options.

##### Properties

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| page | number | null | Index of the first item. |
| numVisible | number | null | Number of items per page. |
| numScroll | number | null | Number of items to scroll. |
| responsiveOptions | CarouselResponsiveOptions[] | null | An array of options for responsive design. |
| orientation | "vertical" | "horizontal" | horizontal | Specifies the layout of the component. |
| verticalViewPortHeight | string | 300px | Height of the viewport in vertical layout. |
| contentClass | string | null | Style class of main content. |
| indicatorsContentClass | string | null | Style class of the indicator items. |
| indicatorsContentStyle | { [klass: string]: any } | null | Inline style of the indicator items. |
| indicatorStyleClass | string | null | Style class of the indicators. |
| indicatorStyle | { [klass: string]: any } | null | Style of the indicators. |
| value | any[] | null | An array of objects to display. |
| circular | boolean | false | Defines if scrolling would be infinite. |
| showIndicators | boolean | true | Whether to display indicator container. |
| showNavigators | boolean | true | Whether to display navigation buttons in container. |
| autoplayInterval | number | 0 | Time in milliseconds to scroll items automatically. |
| styleClass | string | null | Style class of the viewport container. |
| prevButtonProps | ButtonProps | ... | Used to pass all properties of the ButtonProps to the Button component. |
| nextButtonProps | ButtonProps | ... | Used to pass all properties of the ButtonProps to the Button component. |

##### Emitters

Defines emit that determine the behavior of the component based on a given condition or report the actions that the component takes.

| name | parameters | description |
| --- | --- | --- |
| onPage | event :  CarouselPageEvent | Callback to invoke after scroll. |

##### Templates

Defines the templates used by the component.

| name | parameters | description |
| --- | --- | --- |
| item |  | Template for carousel items. |
| header |  | Template for the carousel header. |
| footer |  | Template for the carousel footer. |
| previousicon |  | Template for the previous button icon. |
| nexticon |  | Template for the next button icon. |

---

[View Official Documentation](https://primeng.org/carousel)
