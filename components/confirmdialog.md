# ConfirmDialog

ConfirmDialog is backed by a service utilizing Observables to display confirmation windows easily that can be shared by multiple actions on the same component.

## Import

```typescript
import { ConfirmDialogModule } from 'primeng/confirmdialog';
```

## Basic

ConfirmDialog is defined using p-confirmDialog tag and an instance of ConfirmationService is required to display it bycalling confirm method.

```html
<p-toast />
<p-confirmdialog />
<p-button (click)="confirm1($event)" label="Save" [outlined]="true" />
<p-button (click)="confirm2($event)" label="Delete" severity="danger" [outlined]="true" />
```

## Position

The position property of the confirm options is used to display a Dialog at all edges and corners of the screen.

```html
<p-toast />
<p-confirmdialog key="positionDialog" [position]="position" />
<div class="flex flex-wrap justify-center gap-2 mb-4">
    <p-button (click)="confirmPosition('left')" icon="pi pi-arrow-right" label="Left" severity="secondary" styleClass="min-w-40" />
    <p-button (click)="confirmPosition('right')" icon="pi pi-arrow-left" label="Right" severity="secondary" styleClass="min-w-40" />
</div>
<div class="flex flex-wrap justify-center gap-2 mb-4">
    <p-button (click)="confirmPosition('topleft')" icon="pi pi-arrow-down" label="TopLeft" severity="secondary" styleClass="min-w-40" />
    <p-button (click)="confirmPosition('top')" icon="pi pi-arrow-down" label="Top" severity="secondary" styleClass="min-w-40" />
    <p-button (click)="confirmPosition('topright')" icon="pi pi-arrow-down" label="TopRight" severity="secondary" styleClass="min-w-40" />
</div>
<div class="flex flex-wrap justify-center gap-2">
    <p-button (click)="confirmPosition('bottomleft')" icon="pi pi-arrow-up" label="BottomLeft" severity="secondary" styleClass="min-w-40" />
    <p-button (click)="confirmPosition('bottom')" icon="pi pi-arrow-up" label="Bottom" severity="secondary" styleClass="min-w-40" />
    <p-button (click)="confirmPosition('bottomright')" icon="pi pi-arrow-up" label="BottomRight" severity="secondary" styleClass="min-w-40" />
</div>
```

## Template

Properties of the dialog are defined in two ways, message, icon, header properties can either be defined using confirm method or declaratively on p-confirmDialog ng-template by header, message, icon and footer templates. If these values are unlikely to change then declarative approach would be useful, still properties defined in a ng-template can be overridden with confirm method call.

```html
<p-toast />
<p-confirmdialog>
    <ng-template #message let-message>
        <div class="flex flex-col items-center w-full gap-4 border-b border-surface-200 dark:border-surface-700">
            <i [ngClass]="message.icon" class="!text-6xl text-primary-500"></i>
            <p>{{ message.message }}</p>
        </div>
    </ng-template>
</p-confirmdialog>
<p-button (click)="confirm()" label="Save" />
```

## Headless

Headless mode allows you to customize the entire user interface instead of the default elements.

```html
<p-toast />
<p-confirmdialog #cd>
    <ng-template #headless let-message let-onAccept="onAccept" let-onReject="onReject">
        <div class="flex flex-col items-center p-8 bg-surface-0 dark:bg-surface-900 rounded">
            <div
                class="rounded-full bg-primary text-primary-contrast inline-flex justify-center items-center h-24 w-24 -mt-20"
            >
                <i class="pi pi-question !text-5xl"></i>
            </div>
            <span class="font-bold text-2xl block mb-2 mt-6">{{ message.header }}</span>
            <p class="mb-0">{{ message.message }}</p>
            <div class="flex items-center gap-2 mt-6">
                <p-button label="Save" (onClick)="onAccept()" styleClass="w-32"></p-button>
                <p-button label="Cancel" [outlined]="true" (onClick)="onReject()" styleClass="w-32"></p-button>
            </div>
        </div>
    </ng-template>
</p-confirmdialog>
<p-button (click)="confirm()" label="Save"/>
```

## Accessibility

ConfirmDialog component uses alertdialog role along with aria-labelledby referring to the header element however any attribute is passed to the root element so you may use aria-labelledby to override this default behavior. In addition aria-modal is added since focus is kept within the popup.

```html
confirm1() {
this.confirmationService.confirm({
    message: 'Are you sure that you want to proceed?',
    header: 'Confirmation',
    icon: 'pi pi-exclamation-triangle',
    accept: () => acceptFunc(),
    reject: () => rejectFunc()
});

<p-button (click)="confirm1()" icon="pi pi-check" label="Confirm" />

<p-confirmdialog />
```

```html
<p-confirmdialog id="dialog" [visible]="visible" (onHide)="visible = false" message="Are you sure you want to proceed?" header="Confirmation" icon="pi pi-exclamation-triangle" />

<p-button (click)="visible = true" icon="pi pi-check" label="Confirm" aria-controls="{{visible ? 'dialog' : null}} aria-expanded="{{visible ? true : false}}" />
```

## ConfirmDialog

ConfirmDialog uses a Dialog UI that is integrated with the Confirmation API.

## ConfirmationService

## Confirmation

---

[View Official Documentation](https://primeng.org/confirmdialog)
