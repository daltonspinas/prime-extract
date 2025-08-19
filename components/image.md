# Image

Displays an image with preview and tranformation options.

## Features

### Import

```typescript
import { ImageModule } from 'primeng/image';
```

### Basic

Image is used as the native img element and supports all properties that the native element has. For multiple image, see Galleria.

```html
<p-image src="https://primefaces.org/cdn/primeng/images/galleria/galleria10.jpg" alt="Image" width="250" />
```

### Preview

Preview mode displays a modal layer when the image is clicked that provides transformation options such as rotating and zooming.

```html
<p-image src="https://primefaces.org/cdn/primeng/images/galleria/galleria10.jpg" alt="Image" width="250" [preview]="true" />
```

### Template

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

### Accessibility

The preview button is a native button element with an aria-label that refers to the aria.zoomImage property of the locale API by default.

### Image

Displays an image with preview and tranformation options. For multiple image, see Galleria.

## API

### Image API

API defines helper props, events and others for the PrimeNG Image module.

#### Image

Displays an image with preview and tranformation options. For multiple image, see Galleria.

##### Properties

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| imageClass | string | null | Style class of the image element. |
| imageStyle | { [klass: string]: any } | null | Inline style of the image element. |
| styleClass | string | null | Class of the element. |
| src | string | SafeUrl | null | The source path for the main image. |
| srcSet | string | SafeUrl | null | The srcset definition for the main image. |
| sizes | string | null | The sizes definition for the main image. |
| previewImageSrc | string | SafeUrl | null | The source path for the preview image. |
| previewImageSrcSet | string | SafeUrl | null | The srcset definition for the preview image. |
| previewImageSizes | string | null | The sizes definition for the preview image. |
| alt | string | null | Attribute of the preview image element. |
| width | string | null | Attribute of the image element. |
| height | string | null | Attribute of the image element. |
| loading | "lazy" | "eager" | null | Attribute of the image element. |
| preview | boolean | false | Controls the preview functionality. |
| showTransitionOptions | string | 150ms cubic-bezier(0, 0, 0.2, 1) | Transition options of the show animation |
| hideTransitionOptions | string | 150ms cubic-bezier(0, 0, 0.2, 1) | Transition options of the hide animation |
| appendTo | InputSignal<any> | 'self' | Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name). |

##### Emitters

Defines emit that determine the behavior of the component based on a given condition or report the actions that the component takes.

| name | parameters | description |
| --- | --- | --- |
| onShow | value :  any | Triggered when the preview overlay is shown. |
| onHide | value :  any | Triggered when the preview overlay is hidden. |
| onImageError | event :  Event | This event is triggered if an error occurs while loading an image file. |

##### Templates

Defines the templates used by the component.

| name | parameters | description |
| --- | --- | --- |
| indicator |  | Custom template of indicator. |
| rotaterighticon |  | Custom template of rotaterighticon. |
| rotatelefticon |  | Custom template of rotatelefticon. |
| zoomouticon |  | Custom template of zoomouticon. |
| zoominicon |  | Custom template of zoominicon. |
| closeicon |  | Custom template of closeicon. |
| preview |  | Custom template of preview. |
| image |  | Custom template of image. |

---

[View Official Documentation](https://primeng.org/image)
