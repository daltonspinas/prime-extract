# Editor

Editor is rich text editor component based on Quill.

## Import

```typescript
import { EditorModule } from 'primeng/editor';
```

## Quill

Editor uses Quill editor underneath so it needs to be installed as a dependency.

```text
npm install quill
```

## Basic

A model can be bound using the standard ngModel directive.

```html
<p-editor [(ngModel)]="text" [style]="{ height: '320px' }" />
```

## ReadOnly

When readonly is present, the value cannot be edited.

```html
<p-editor [(ngModel)]="text" [readonly]="true" [style]="{ height: '320px' }" />
```

## Template

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

## Forms

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

## Accessibility

Quill performs generally well in terms of accessibility. The elements in the toolbar can be tabbed and have the necessary ARIA roles/attributes for screen readers. One known limitation is the lack of arrow key support for dropdowns in the toolbar that may be overcome with a custom toolbar.

## Editor

Editor groups a collection of contents in tabs.

---

[View Official Documentation](https://primeng.org/editor)
