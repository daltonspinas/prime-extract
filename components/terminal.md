# Terminal

Terminal is a text based user interface. Enter "date" to display the current date.

## Features

### Import

```typescript
import { TerminalModule } from 'primeng/terminal';
```

### Basic

Commands are processed using observables via the TerminalService. Import this service into your component and subscribe to commandHandler to process commands by sending replies with sendResponse function.

```html
<p>Enter "<strong>date</strong>" to display the current date,
"<strong>greet &#123;0&#125;</strong>" for a message and "<strong>random</strong>"
to get a random number.</p>
<p-terminal welcomeMessage="Welcome to PrimeNG" prompt="primeng $" />
```

### Accessibility

Terminal component has an input element that can be described with aria-label or aria-labelledby props. The element that lists the previous commands has aria-live so that changes are received by the screen reader.

### Terminal

Terminal is a text based user interface.

## API

### Terminal API

API defines helper props, events and others for the PrimeNG Terminal module.

#### Terminal

Terminal is a text based user interface.

##### Properties

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| welcomeMessage | string | null | Initial text to display on terminal. |
| prompt | string | null | Prompt text for each command. |
| styleClass | string | null | Style class of the component. |

---

[View Official Documentation](https://primeng.org/terminal)
