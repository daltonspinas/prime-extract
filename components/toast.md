# Toast

Toast is used to display messages in an overlay.

## Features

### Import

```typescript
import { ToastModule } from 'primeng/toast';
```

### Basic

Toasts are displayed by calling the add and addAll method provided by the messageService. A single toast is specified by the Message interface that defines various properties such as severity, summary and detail.

```html
<p-toast />
<p-button (onClick)="show()" label="Show" />
```

### Severity

The severity option specifies the type of the message. There are four types of messages: success, info, warn and error. The severity of the message is used to display the icon and the color of the toast.

```html
<p-toast />
<p-button type="button" pRipple (click)="showSuccess()" label="Success" severity="success" />
<p-button type="button" pRipple (click)="showInfo()" label="Info" severity="info" />
<p-button type="button" pRipple (click)="showWarn()" label="Warn" severity="warn" />
<p-button type="button" pRipple (click)="showError()" label="Error" severity="danger" />
<p-button type="button" pRipple (click)="showSecondary()" label="Secondary" severity="secondary" />
<p-button type="button" pRipple (click)="showContrast()" label="Contrast" severity="contrast" />
```

### Position

Location of the toast is customized with the position property. Valid values are top-left, top-center, top-right, bottom-left, bottom-center, bottom-right and center.

```html
<p-toast position="top-left" key="tl" />
<p-toast position="bottom-left" key="bl" />
<p-toast position="bottom-right" key="br" />
<p-button pRipple (click)="showTopLeft()" label="Top Left" />
<p-button pRipple (click)="showBottomLeft()" label="Bottom Left" />
<p-button pRipple (click)="showBottomRight()" label="Bottom Right" />
```

### Multiple

Multiple toasts are displayed by passing an array to the showAll method of the messageService.

```html
<p-toast />
<p-button pRipple (click)="show()" label="Multiple" severity="warn" />
```

### Sticky

A toast disappears after the time defined by the life option, set sticky option true on the message to override this and not hide the toast automatically.

```html
<p-toast />
<div class="flex flex-wrap gap-2">
    <p-button pRipple (click)="show()" label="Sticky" />
    <p-button pRipple (click)="clear()" label="Clear" severity="secondary" />
</div>
```

### Template

Templating allows customizing the content where the message instance is available as the implicit variable.

```html
<p-toast position="bottom-center" key="confirm" (onClose)="onReject()" [baseZIndex]="5000">
    <ng-template let-message #message>
        <div class="flex flex-col items-start flex-auto">
            <div class="flex items-center gap-2">
                <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" shape="circle" />
                <span class="font-bold">Amy Elsner</span>
            </div>
            <div class="font-medium text-lg my-4">{{ message.summary }}</div>
            <p-button severity="success" size="small" label="Reply" (click)="onConfirm()" />
        </div>
    </ng-template>
</p-toast>
<p-button (click)="showConfirm()" label="View" />
```

### Headless

Headless mode allows you to customize the entire user interface instead of the default elements.

```html
<p-toast position="top-center" key="confirm" (onClose)="onClose()" [baseZIndex]="5000">
    <ng-template let-message #headless let-closeFn="closeFn">
        <section class="flex flex-col p-4 gap-4 w-full bg-primary/70 rounded-xl">
            <div class="flex items-center gap-5">
                <i class="pi pi-cloud-upload text-white dark:text-black text-2xl"></i>
                <span class="font-bold text-base text-white dark:text-black">{{ message.summary }}</span>
            </div>
            <div class="flex flex-col gap-2">
                <p-progressbar [value]="progress" [showValue]="false" [style]="{ height: '4px' }" class="!bg-primary/80" />
                <label class="text-sm font-bold text-white dark:text-black">{{ progress }}% uploaded</label>
            </div>
            <div class="flex gap-4 mb-4 justify-end">
                <p-button label="Another Upload?" (click)="closeFn($event)" size="small" />
                <p-button label="Cancel" (click)="closeFn($event)" size="small" />
            </div>
        </section>
    </ng-template>
</p-toast>
<p-button (click)="showConfirm()" label="Confirm" />
```

### Responsive

Toast styling can be adjusted per screen size with the breakpoints option. The value of breakpoints should be an object literal whose keys are the maximum screen sizes and values are the styles per screen. In example below, width of the toast messages cover the whole page on screens whose widths is smaller than 921px.

```html
<p-toast [breakpoints]="{ '920px': { width: '100%', right: '0', left: '0' } }" />
<p-button (click)="show()" label="Show" />
```

### Animation

Transition of the animations can be customized using the showTransitionOptions, hideTransitionOptions, showTransformOptions and hideTransformOptions properties.

```html
<p-toast [showTransitionOptions]="'250ms'" [showTransformOptions]="'translateX(100%)'" [hideTransitionOptions]="'150ms'" [hideTransformOptions]="'translateX(100%)'" />
<p-button (click)="show()" label="Show" />
```

### Accessibility

Toast component use alert role that implicitly defines aria-live as "assertive" and aria-atomic as "true".

### Toast

Toast is used to display messages in an overlay.

### ToastMessage

## API

### Toast API

API defines helper props, events and others for the PrimeNG Toast module.

#### Toast

Toast is used to display messages in an overlay.

##### Properties

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| key | string | null | Key of the message in case message is targeted to a specific toast component. |
| autoZIndex | boolean | true | Whether to automatically manage layering. |
| baseZIndex | number | 0 | Base zIndex value to use in layering. |
| life | number | 3000 | The default time to display messages for in milliseconds. |
| styleClass | string | null | Inline class of the component. |
| position | ToastPositionType | null | Position of the toast in viewport. |
| preventOpenDuplicates | boolean | false | It does not add the new message if there is already a toast displayed with the same content |
| preventDuplicates | boolean | false | Displays only once a message with the same content. |
| showTransformOptions | string | translateY(100%) | Transform options of the show animation. |
| hideTransformOptions | string | translateY(-100%) | Transform options of the hide animation. |
| showTransitionOptions | string | 300ms ease-out | Transition options of the show animation. |
| hideTransitionOptions | string | 250ms ease-in | Transition options of the hide animation. |
| breakpoints | { [key: string]: any } | null | Object literal to define styles per screen size. |

##### Emitters

Defines emit that determine the behavior of the component based on a given condition or report the actions that the component takes.

| name | parameters | description |
| --- | --- | --- |
| onClose | event :  ToastCloseEvent | Callback to invoke when a message is closed. |

##### Templates

Defines the templates used by the component.

| name | parameters | description |
| --- | --- | --- |
| template |  | Custom template of message. |
| headless |  | Custom headless template. |

#### ToastMessage

---

[View Official Documentation](https://primeng.org/toast)
