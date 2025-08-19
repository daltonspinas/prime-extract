# OrganizationChart

OrganizationChart visualizes hierarchical organization data.

## Import

```typescript
import { OrganizationChartModule } from 'primeng/organizationchart';
```

## Basic

OrganizationChart requires a collection of TreeNode instances as a value.

```html
<p-organization-chart [value]="data" />
```

## Template

Custom content instead of a node label is defined using the pTemplate property.

```html
<p-organization-chart [value]="data" [collapsible]="true">
    <ng-template let-node pTemplate="default">
        <div class="flex flex-col items-center">
            <img src="https://primefaces.org/cdn/primeng/images/flag/flag_placeholder.png" [alt]="node.label" [class]="'flag' + ' flag-' + node.data" width="32" />
            <div class="mt-4 font-medium text-lg">{{ node.label }}</div>
        </div>
    </ng-template>
</p-organization-chart>
```

## Selection

Nodes can be selected by defining selectionMode along with a value binding with selection properties. By default only one node can be selected, set selectionMode as multiple to select more than one.

```html
<p-organization-chart [value]="data" selectionMode="multiple" [(selection)]="selectedNodes" [collapsible]="true">
    <ng-template let-node pTemplate="person">
        <div class="flex flex-col">
            <div class="flex flex-col items-center">
                <img [src]="node.data.image" class="mb-4 w-12 h-12" />
                <div class="font-bold mb-2">{{ node.data.name }}</div>
                <div>{{ node.data.title }}</div>
            </div>
        </div>
    </ng-template>
</p-organization-chart>
```

## Colored

Styling a specific node is configured with class and style options of a TreeNode.

```html
<p-organization-chart [value]="data" [collapsible]="true">
    <ng-template let-node pTemplate="person">
        <div class="flex flex-col">
            <div class="flex flex-col items-center">
                <img [src]="node.data.image" class="mb-4 w-12 h-12" />
                <span class="font-bold mb-2">{{ node.data.name }}</span>
                <span>{{ node.data.title }}</span>
            </div>
        </div>
    </ng-template>
</p-organization-chart>
```

## Accessibility

Component currently uses a table based implementation and does not provide high level of screen reader support, a nested list implementation replacement is planned with aria roles and attributes aligned to a tree widget for high level of reader support in the upcoming versions.

## OrganizationChart

OrganizationChart visualizes hierarchical organization data.

---

[View Official Documentation](https://primeng.org/organizationchart)
