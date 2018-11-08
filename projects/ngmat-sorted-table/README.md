# ngmat-sorted-table

A angular material component that renders tabular data and allows the user
to sort the table by clicking the table headers.

[Demo](https://crusaider.github.io/angular-material-utils/sorted-table)

## Installation

`npm install --save ngmat-sorted-table`

## API

`import { SortedTableModule } from 'ngmat-sorted-table';`

### SortedTableComponent

A component that renders tabular data using ordinary HTML table elements
and allows the user to sort the table data by clicking the table headers.

**Selector**: `ngmat-sorted-table`

#### Properties

| Name                                         | Description                                                                                                                                                                             |
| -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `@Input() headers: string[];`                | Headers of the table as a array of strings                                                                                                                                              |
| `@Input() rows: string[][];`                 | The data to be displayed in the table as a array of arrays of strings.                                                                                                                  |
| `@Input() disableClear = false;`             | Disables the user to clear the sorting of a columns, defaults to `false`.                                                                                                               |
| `@Input() indexColumn = false;`              | If true, shows a first column with the index number of the table row, defaults to `false`.                                                                                              |
| `@Input() sortActive: string;`               | If set, the table will initialize with sorting of the defined column. Defaults to `undefined`.                                                                                          |
| `@Input() sortDirection: SortDirection;`     | The initial sorting direction, will have to be supplied if `sortActive` is set. Refer to [Angular Material](https://material.angular.io/components/sort/api#SortDirection) for details. |
| `@Output() sortStart: EventEmitter<void>();` | Emits when (re)sorting of the table data is about to start.                                                                                                                             |
| `@Output() sortEnd: EventEmitter<void>();`   | Emits when (re)sorting of the table data is completed.                                                                                                                                  |
| `@Output() sort: EventEmitter<Sort>();`      | Emits when the user changes sorting of the table. See [Angular Material](https://material.angular.io/components/sort/api#Sort) for details.                                             |

#### Theming

The component is themed according to angular material [custom component styling guidelines](https://material.angular.io/guide/theming-your-components). To make the component adhere to the applicaiton theme:

1. Include the component theme in the application theme file `@import 'ngmat-sorted-table/theme';`
1. Include the component theme mixin: `@include ngmat-sorted-table-theme($app-dark-theme);`
