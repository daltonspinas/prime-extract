# Editor

Editor is rich text editor component based on Quill.

## Features

### Import

```typescript
import { EditorModule } from 'primeng/editor';
```

### Quill

Editor uses Quill editor underneath so it needs to be installed as a dependency.

```text
npm install quill
```

### Basic

A model can be bound using the standard ngModel directive.

```html
<p-editor [(ngModel)]="text" [style]="{ height: '320px' }" />
```

### ReadOnly

When readonly is present, the value cannot be edited.

```html
<p-editor [(ngModel)]="text" [readonly]="true" [style]="{ height: '320px' }" />
```

### Template

Editor provides a default toolbar with common options, to customize it define your elements inside the header element. Refer to Quill documentation for available controls.

```html
<p-editor [(ngModel)]="text" [style]="{ height: '320px' }">
    <ng-template #header>
        <span class="ql-formats">
            <button type="button" class="ql-bold" aria-label="Bold"></button>
            <button type="button" class="ql-italic" aria-label="Italic"></button>
            <button type="button" class="ql-underline" aria-label="Underline"></button>
        </span>
    </ng-template>
</p-editor>
```

### Forms

Editor can also be used with reactive forms. In this case, the formControlName property is used to bind the component to a form control.

```html
<form #exampleForm="ngForm" (ngSubmit)="onSubmit(exampleForm)" class="flex flex-col gap-4">
    <div class="flex flex-col gap-1">
        <p-editor #content="ngModel" [(ngModel)]="text" [invalid]="content.invalid && (content.touched || exampleForm.submitted)" name="content" [style]="{ height: '320px' }" required />
        @if (content.invalid && (content.touched || exampleForm.submitted)) {
            <p-message severity="error" size="small" variant="simple">Content is required.</p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>
```

```html
<form [formGroup]="exampleForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-4">
    <div class="flex flex-col gap-1">
        <p-editor formControlName="text" [invalid]="isInvalid('text')" [style]="{ height: '320px' }" />
        @if (isInvalid('text')) {
            <p-message severity="error" size="small" variant="simple">Content is required.</p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>
```

### Accessibility

Quill performs generally well in terms of accessibility. The elements in the toolbar can be tabbed and have the necessary ARIA roles/attributes for screen readers. One known limitation is the lack of arrow key support for dropdowns in the toolbar that may be overcome with a custom toolbar.

### Editor

Editor groups a collection of contents in tabs.

## API

### Editor API

API defines helper props, events and others for the PrimeNG Editor module.

#### Editor

Editor groups a collection of contents in tabs.

##### Properties

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| required | InputSignalWithTransform<boolean, unknown> | false | There must be a value (if set). |
| invalid | InputSignalWithTransform<boolean, unknown> | false | When present, it specifies that the component should have invalid state style. |
| disabled | InputSignalWithTransform<boolean, unknown> | false | When present, it specifies that the component should have disabled state style. |
| name | InputSignal<string> | undefined | When present, it specifies that the name of the input. |
| style | { [klass: string]: any } | null | Inline style of the container. |
| styleClass | string | null | Style class of the container. |
| placeholder | string | null | Placeholder text to show when editor is empty. |
| formats | string[] | null | Whitelist of formats to display, see [here](https://quilljs.com/docs/formats/) for available options. |
| modules | object | null | Modules configuration of Editor, see [here](https://quilljs.com/docs/modules/) for available options. |
| bounds | string | HTMLElement | null | DOM Element or a CSS selector for a DOM Element, within which the editor’s p elements (i.e. tooltips, etc.) should be confined. Currently, it only considers left and right boundaries. |
| scrollingContainer | string | HTMLElement | null | DOM Element or a CSS selector for a DOM Element, specifying which container has the scrollbars (i.e. overflow-y: auto), if is has been changed from the default ql-editor with custom CSS. Necessary to fix scroll jumping bugs when Quill is set to auto grow its height, and another ancestor container is responsible from the scrolling.. |
| debug | string | null | Shortcut for debug. Note debug is a static method and will affect other instances of Quill editors on the page. Only warning and error messages are enabled by default. |
| readonly | boolean | null | Whether to instantiate the editor to read-only mode. |

##### Emitters

Defines emit that determine the behavior of the component based on a given condition or report the actions that the component takes.

| name | parameters | description |
| --- | --- | --- |
| onInit | event :  EditorInitEvent | Callback to invoke when the quill modules are loaded. |
| onTextChange | event :  EditorTextChangeEvent | Callback to invoke when text of editor changes. |
| onSelectionChange | event :  EditorSelectionChangeEvent | Callback to invoke when selection of the text changes. |

##### Templates

Defines the templates used by the component.

| name | parameters | description |
| --- | --- | --- |
| header |  | Custom item template. |

---

[View Official Documentation](https://primeng.org/editor)
