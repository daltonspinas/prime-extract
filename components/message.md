# Message

Message component is used to display inline messages.

## Features

### Import

```typescript
import { MessageModule } from 'primeng/message';
```

### Basic

Message component requires a content to display.

```html
<p-message>Message Content</p-message>
```

### Severity

The severity option specifies the type of the message.

```html
<p-message severity="success">Success Message</p-message>
<p-message severity="info">Info Message</p-message>
<p-message severity="warn">Warn Message</p-message>
<p-message severity="error">Error Message</p-message>
<p-message severity="secondary">Secondary Message</p-message>
<p-message severity="contrast">Contrast Message</p-message>
```

### Icon

The severity option specifies the type of the message.

```html
<p-message severity="info" icon="pi pi-send" text="Info Message" styleClass="h-full" />
<p-message severity="success">
    <ng-template #icon>
        <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" shape="circle" />
    </ng-template>
    <span class="ml-2">How may I help you?</span>
</p-message>
```

### Outlined

Configure the variant value as outlined for messages with borders and no background.

```html
<p-message severity="success" variant="outlined">Success Message</p-message>
<p-message severity="info" variant="outlined">Info Message</p-message>
<p-message severity="warn" variant="outlined">Warn Message</p-message>
<p-message severity="error" variant="outlined">Error Message</p-message>
<p-message severity="secondary" variant="outlined">Secondary Message</p-message>
<p-message severity="contrast" variant="outlined">Contrast Message</p-message>
```

### Simple

Configure the variant value as simple for messages without borders and backgrounds.

```html
<p-message severity="success" variant="simple">Success Message</p-message>
<p-message severity="info" variant="simple">Info Message</p-message>
<p-message severity="warn" variant="simple">Warn Message</p-message>
<p-message severity="error" variant="simple">Error Message</p-message>
<p-message severity="secondary" variant="simple">Secondary Message</p-message>
<p-message severity="contrast" variant="simple">Contrast Message</p-message>
```

### Sizes

Message provides small and large sizes as alternatives to the base.

```html
<p-message size="small" icon="pi pi-send">Small Message</p-message>
<p-message icon="pi pi-user">Normal Message</p-message>
<p-message size="large" icon="pi pi-check">Large Message</p-message>
```

### Forms

Validation errors in a form are displayed with the error severity.

```html
<div class="flex flex-col gap-4">
    <p-message severity="error" icon="pi pi-times-circle" styleClass="mb-2">Validation Failed</p-message>
    <div class="flex flex-col gap-1">
        <input pInputText placeholder="Username" [(ngModel)]="username" aria-label="username" [invalid]="!username" />
        @if (!username) {
            <p-message severity="error" variant="simple" size="small">Username is required</p-message>
        }
    </div>
    <div class="flex flex-col gap-1">
        <p-inputmask mask="(999) 999-9999" [(ngModel)]="phone" placeholder="Phone" [invalid]="!phone" />
        @if (!phone) {
            <p-message severity="error" variant="simple" size="small">Phone number is required</p-message>
        }
    </div>
</div>
```

### Dynamic

Multiple messages can be displayed using the standard for block.

```html
<div class="flex gap-2">
    <p-button label="Show" (onClick)="addMessages()" />
    <p-button label="Clear" severity="secondary" (onClick)="clearMessages()" />
</div>
<div class="flex flex-col">
    @for (message of messages(); track message; let first = $first) {
        <p-message [severity]="message.severity" [text]="message.content" [ngClass]="{ 'mt-4': !first }" />
    }
</div>
```

### Closable

Enable closable option to display an icon to remove a message.

```html
<p-message closable>Closable Message</p-message>
```

### Life

Messages can disappear automatically by defined the life in milliseconds.

```html
<p-message [life]="3000" severity="success">Auto disappear message</p-message>
```

### Accessibility

Message component uses alert role that implicitly defines aria-live as "assertive" and aria-atomic as "true". Since any attribute is passed to the root element, attributes like aria-labelledby and aria-label can optionally be used as well.

### Message

Message groups a collection of contents in tabs.

## API

### Message API

API defines helper props, events and others for the PrimeNG Message module.

#### Message

Message groups a collection of contents in tabs.

##### Properties

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| severity | string | 'info' | Severity level of the message. |
| text | string | null | Text content. |
| escape | boolean | true | Whether displaying messages would be escaped or not. |
| style | { [klass: string]: any } | null | Inline style of the component. |
| styleClass | string | null | Style class of the component. |
| closable | boolean | false | Whether the message can be closed manually using the close icon. |
| icon | string | undefined | Icon to display in the message. |
| closeIcon | string | undefined | Icon to display in the message close button. |
| showTransitionOptions | string | '300ms ease-out' | Transition options of the show animation. |
| hideTransitionOptions | string | '200ms cubic-bezier(0.86, 0, 0.07, 1)' | Transition options of the hide animation. |
| size | "small" | "large" | null | Defines the size of the component. |
| variant | "text" | "outlined" | "simple" | null | Specifies the input variant of the component. |

##### Emitters

Defines emit that determine the behavior of the component based on a given condition or report the actions that the component takes.

| name | parameters | description |
| --- | --- | --- |
| onClose | event :  { originalEvent: Event } | Emits when the message is closed. |

##### Methods

Defines methods that can be accessed by the component's reference.

| name | parameters | description |
| --- | --- | --- |
| close | event :  Event | Closes the message. |

##### Templates

Defines the templates used by the component.

| name | parameters | description |
| --- | --- | --- |
| container |  | Custom template of the message container. |
| icon |  | Custom template of the message icon. |
| closeicon |  | Custom template of the close icon. |

---

[View Official Documentation](https://primeng.org/message)
