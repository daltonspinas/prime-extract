# Timeline

Timeline visualizes a series of chained events.

## Features

### Import

```typescript
import { TimelineModule } from 'primeng/timeline';
```

### Basic

Timeline receives the events with the value property as a collection of arbitrary objects. In addition, content template is required to display the representation of an event. Example below is a sample events array that is used throughout the documentation.

```html
<p-timeline [value]="events">
    <ng-template #content let-event>
        {{ event.status }}
    </ng-template>
</p-timeline>
```

### Alignment

Content location relative the line is defined with the align property.

```html
<p-timeline [value]="events" class="w-full md:w-80">
    <ng-template #content let-event>
        {{ event.status }}
    </ng-template>
</p-timeline>

<p-timeline [value]="events" class="w-full md:w-80" align="right">
    <ng-template #content let-event>
        {{ event.status }}
    </ng-template>
</p-timeline>

<p-timeline [value]="events" class="w-full md:w-80" align="alternate">
    <ng-template #content let-event>
        {{ event.status }}
    </ng-template>
</p-timeline>
```

### Opposite

Additional content at the other side of the line can be provided with the opposite property.

```html
<p-timeline [value]="events">
    <ng-template #opposite let-event>
        <small class="text-surface-500 dark:text-surface-400">{{ event.date }}</small>
    </ng-template>
    <ng-template #content let-event>
        {{ event.status }}
    </ng-template>
</p-timeline>
```

### Template

Sample implementation with custom content and styled markers.

```html
<p-timeline [value]="events" align="alternate" class="customized-timeline">
    <ng-template #marker let-event>
        <span class="flex w-8 h-8 items-center justify-center text-white rounded-full z-10 shadow-sm" [style]="{ 'background-color': event.color }">
            <i [class]="event.icon"></i>
        </span>
    </ng-template>
    <ng-template #content let-event>
        <p-card [header]="event.status" [subheader]="event.date">
            <img *ngIf="event.image" [src]="'https://primefaces.org/cdn/primeng/images/demo/product/' + event.image" [alt]="event.name" width="200" class="shadow" />
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate
                neque quas!
            </p>
            <p-button label="Read more" [text]="true" />
        </p-card>
    </ng-template>
</p-timeline>
```

### Horizontal

TimeLine orientation is controlled with the layout property, default is vertical having horizontal as the alternative.

```html
<p-timeline [value]="events" layout="horizontal" align="top">
    <ng-template #content let-event>
        {{ event }}
    </ng-template>
</p-timeline>

<p-timeline [value]="events" layout="horizontal" align="bottom">
    <ng-template #content let-event>
        {{ event }}
    </ng-template>
</p-timeline>

<p-timeline [value]="events" layout="horizontal" align="alternate">
    <ng-template #content let-event>
        {{ event }}
    </ng-template>
    <ng-template #opposite let-event>
        <span>&nbsp;</span>
    </ng-template>
</p-timeline>
```

### Accessibility

Timeline uses a semantic ordered list element to list the events. No specific role is enforced, still you may use any aria role and attributes as any valid attribute is passed to the list element.

### Timeline

Timeline visualizes a series of chained events.

## API

### Timeline API

API defines helper props, events and others for the PrimeNG Timeline module.

#### Timeline

Timeline visualizes a series of chained events.

##### Properties

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| value | any[] | null | An array of events to display. |
| styleClass | string | null | Style class of the component. |
| align | string | left | Position of the timeline bar relative to the content. Valid values are "left", "right" for vertical layout and "top", "bottom" for horizontal layout. |
| layout | "vertical" | "horizontal" | vertical | Orientation of the timeline. |

##### Templates

Defines the templates used by the component.

| name | parameters | description |
| --- | --- | --- |
| content |  | Custom content template. |
| opposite |  | Custom opposite item template. |
| marker |  | Custom marker template. |

---

[View Official Documentation](https://primeng.org/timeline)
