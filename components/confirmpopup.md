# ConfirmPopup

ConfirmPopup displays a confirmation overlay displayed relatively to its target.

## Import

```typescript
import { ConfirmPopupModule } from 'primeng/confirmpopup';
```

## Basic

ConfirmPopup is defined using p-confirmPopup tag and an instance of ConfirmationService is required to display it bycalling confirm method.

```html
<p-toast />
<p-confirmpopup />
<p-button (onClick)="confirm1($event)" label="Save" [outlined]="true" />
<p-button (onClick)="confirm2($event)" label="Delete" severity="danger" [outlined]="true" />
```

## Template

Content section can be customized using content template.

```html
<p-toast />
<p-confirmpopup>
    <ng-template #content let-message>
        <div
            class="flex flex-col items-center w-full gap-4 border-b border-surface-200 dark:border-surface-700 p-4 mb-4 pb-0"
        >
            <i [class]="message.icon" class="!text-6xl text-primary-500"></i>
            <p>{{ message.message }}</p>
        </div>
    </ng-template>
</p-confirmpopup>
<p-button (click)="confirm($event)" label="Save" />
```

## Headless

Headless mode allows you to customize the entire user interface instead of the default elements.

```html
<p-toast />
<p-confirmpopup #cp>
    <ng-template #headless let-message>
        <div class="rounded p-4">
            <span>{{ message.message }}</span>
            <div class="flex items-center gap-2 mt-4">
                <p-button (onClick)="cp.onAccept()" label="Save" size="small" />
                <p-button (onClick)="cp.onReject()" label="Cancel" [text]="true" size="small" severity="secondary" />
            </div>
        </div>
    </ng-template>
</p-confirmpopup>
<p-button (onClick)="confirm($event)" label="Save" />
```

## Accessibility

ConfirmPopup component uses alertdialog role and since any attribute is passed to the root element you may define attributes like aria-label or aria-labelledby to describe the popup contents. In addition aria-modal is added since focus is kept within the popup.

## ConfirmPopup

ConfirmPopup displays a confirmation overlay displayed relatively to its target.

## Confirmation

## ConfirmationService

---

[View Official Documentation](https://primeng.org/confirmpopup)
