# Dynamic Dialog

Dialogs can be created dynamically with any component as the content using a DialogService.

## Import

```typescript
import { DynamicDialogModule } from 'primeng/dynamicdialog';
```

## Usage

To use dynamic dialog, a reference should be declared as DynamicDialogRef after the DialogService injected into the component.

```typescript
import { Component, OnDestroy } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Product } from '@/domain/product';
import { ProductListDemo } from './productlistdemo';

@Component({
    templateUrl: './dynamicdialogdemo.html',
    providers: [DialogService]
})
export class DynamicDialogDemo implements OnDestroy {

    ref: DynamicDialogRef | undefined;

    constructor(public dialogService: DialogService) {}
}
```

## Opening a Dialog

The open method of the DialogService is used to open a Dialog. First parameter is the component to load and second one is the configuration object to customize the Dialog.

```typescript
import { Component } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ProductListDemo } from './productlistdemo';

@Component({
    templateUrl: './dynamicdialogdemo.html',
    providers: [DialogService]
})
export class DynamicDialogDemo {

    ref: DynamicDialogRef | undefined;

    constructor(public dialogService: DialogService) {}

    show() {
        this.ref = this.dialogService.open(ProductListDemo, { header: 'Select a Product'});
    }
}
```

## Customization

DynamicDialog uses the Dialog component internally, visit dialog for more information about the available props.

```typescript
import { Component } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ProductListDemo } from './productlistdemo';

@Component({
    templateUrl: './dynamicdialogdemo.html',
    providers: [DialogService]
})
export class CustomizationDemo {

    ref: DynamicDialogRef | undefined;

    constructor(public dialogService: DialogService) {}
    show() {
        this.ref = this.dialogService.open(ProductListDemo, {
            header: 'Select a Product',
            width: '50vw',
            modal:true,
            breakpoints: {
                '960px': '75vw',
                '640px': '90vw'
            },
        });
}
```

## Passing Data

To pass data to a dynamically loaded component, you can use either the data or inputValues property, depending on your requirements. The data property is ideal for passing generic information that is not directly tied to the component's inputs, while inputValues allows you to set specific input properties on the component in a more structured and type-safe way.

```typescript
import { Component } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ProductListDemo } from './productlistdemo';

@Component({
    templateUrl: './dynamicdialogdemo.html',
    providers: [DialogService]
})
export class DynamicDialogDemo {

    ref: DynamicDialogRef | undefined;

    constructor(public dialogService: DialogService) {}

    show() {
        this.ref = this.dialogService.open(ProductListDemo, {
            data: {
                id: '51gF3'
            },
      		inputValues: {
        		selectedProduct: 'Laptop',
        		quantity: 2
      		},
            header: 'Select a Product'
        });
    }
}
```

## Closing a Dialog

Most of the time, requirement is returning a value from the dialog. DialogRef's close method is used for this purpose where the parameter passed will be available at the onClose event at the caller. Here is an example on how to close the dialog from the ProductListDemo by passing a selected product.

```typescript
import { Component, Input } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Product } from '@/domain/product';
import { ProductListDemo } from './productlistdemo';

@Component({
    templateUrl: './dynamicdialogdemo.html',
    providers: [DialogService, MessageService]
})
export class DynamicDialogDemo {

    ref: DynamicDialogRef | undefined;

    constructor(public dialogService: DialogService, public messageService: MessageService) {}

    show() {
        this.ref = this.dialogService.open(ProductListDemo, {
            header: 'Select a Product',
            width: '70%',
            contentStyle: { overflow: 'auto' },
            baseZIndex: 10000,
            maximizable: true
        });

        this.ref.onClose.subscribe((product: Product) => {
            if (product) {
                this.messageService.add({ severity: 'info', summary: 'Product Selected', detail: product.name });
            }
        });
    }
}
```

## Example

Dynamic dialogs require an instance of a DialogService that is responsible for displaying a dialog with a component as its content. Calling open method of DialogService will display dynamic dialog. First parameter of open method is the type of component to load and the second parameter is the configuration of the Dialog such as header, width and more.

```html
<p-toast />
<p-button (click)="show()" icon="pi pi-search" label="Select a Product" />
```

## DynamicDialog-Ref

## DynamicDialog-Config

## DialogService

---

[View Official Documentation](https://primeng.org/dynamicdialog)
