# KeyFilter

KeyFilter is a directive to restrict individual key strokes. In order to restrict the whole input, use InputNumber or InputMask instead.

## Import

```typescript
import { KeyFilterModule } from 'primeng/keyfilter';
```

## Presets

KeyFilter provides various presets configured with the pKeyFilter property.

```html
<input pInputText pKeyFilter="int" />
<input pInputText pKeyFilter="num" />
<input pInputText pKeyFilter="money" />
<input pInputText pKeyFilter="hex" />
<input pInputText pKeyFilter="alpha" />
<input pInputText pKeyFilter="alphanum" />
```

## Regex

In addition to the presets, a regular expression can be configured for customization.

```html
<input pInputText [pKeyFilter]="blockSpace" />
<input pInputText [pKeyFilter]="blockChars" />
```

## Accessibility

Refer to InputText for accessibility as KeyFilter is a built-in add-on of the InputText.

## KeyFilter

KeyFilter Directive is a built-in feature of InputText to restrict user input based on a regular expression.

---

[View Official Documentation](https://primeng.org/keyfilter)
