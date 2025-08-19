# Image

Displays an image with preview and tranformation options.

## Import

```typescript
import { ImageModule } from 'primeng/image';
```

## Basic

Image is used as the native img element and supports all properties that the native element has. For multiple image, see Galleria.

```html
<p-image src="https://primefaces.org/cdn/primeng/images/galleria/galleria10.jpg" alt="Image" width="250" />
```

## Preview

Preview mode displays a modal layer when the image is clicked that provides transformation options such as rotating and zooming.

```html
<p-image src="https://primefaces.org/cdn/primeng/images/galleria/galleria10.jpg" alt="Image" width="250" [preview]="true" />
```

## Template

An eye icon is displayed by default when the image is hovered in preview mode. Use the indicator template for custom content.

```html
<p-image src="https://primefaces.org/cdn/primeng/images/galleria/galleria11.jpg" [preview]="true" alt="Image" width="250">
    <ng-template #indicator>
        <i class="pi pi-search"></i>
    </ng-template>
    <ng-template #image>
        <img src="https://primefaces.org/cdn/primeng/images/galleria/galleria11.jpg" alt="image" width="250" />
    </ng-template>
    <ng-template #preview let-style="style" let-previewCallback="previewCallback">
        <img src="https://primefaces.org/cdn/primeng/images/galleria/galleria11.jpg" alt="image" [style]="style" (click)="previewCallback()" />
    </ng-template>
</p-image>
```

## Accessibility

The preview button is a native button element with an aria-label that refers to the aria.zoomImage property of the locale API by default.

## Image

Displays an image with preview and tranformation options. For multiple image, see Galleria.

---

[View Official Documentation](https://primeng.org/image)
