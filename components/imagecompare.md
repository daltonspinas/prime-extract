# ImageCompare

Compare two images side by side with a slider.

## Import

```typescript
import { ImageCompareModule } from 'primeng/imagecompare';
```

## Basic

Images are defined using templating with left and right templates. Use the style or class properties to define the size of the container.

```html
<p-imagecompare class="shadow-lg rounded-2xl">
    <ng-template #left>
        <img src="https://primefaces.org/cdn/primevue/images/compare/island1.jpg" />
    </ng-template>
    <ng-template #right>
        <img src="https://primefaces.org/cdn/primevue/images/compare/island2.jpg" />
    </ng-template>
</p-imagecompare>
```

## Responsive

Apply responsive styles to the container element to optimize display per screen size.

```html
<p-imagecompare class="sm:!w-96 shadow-lg rounded-2xl">
    <ng-template #left>
        <img src="https://primefaces.org/cdn/primevue/images/compare/island1.jpg" />
    </ng-template>
    <ng-template #right>
        <img src="https://primefaces.org/cdn/primevue/images/compare/island2.jpg" />
    </ng-template>
</p-imagecompare>
```

## Accessibility

ImageComponent component uses a native range slider internally. Value to describe the component can be defined using aria-labelledby and aria-label props.

```html
<span id="image_label">Compare Images</span>
<p-imagecompare class="shadow-lg rounded-2xl" aria-labelledby="image-label">
    ...
</p-imagecompare>

<p-imagecompare class="shadow-lg rounded-2xl" aria-label="Compare Images">
    ...
</p-imagecompare>
```

## ImageCompare

Compare two images side by side with a slider.

---

[View Official Documentation](https://primeng.org/imagecompare)
