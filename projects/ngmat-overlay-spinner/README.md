# ngmat-overlay-spinner

A service that shows and hides a spinner on a overlay blocking user interactions as long as it is displayed.

[Demo](https://crusaider.github.io/angular-material-utils/overlay-spinner)

## Installation

`npm install --save ngmat-overlay-spinner`

## API

`import { OverlaySpinnerModule } from 'ngmat-overlay-spinner';`

### Services

#### `OverlaySpinnerService`

A service that shows and hides a spinner on a overlay blocking user interactions as long as it is displayed.

##### Methods

| `open`                     |                                                                   |
| -------------------------- | ----------------------------------------------------------------- |
| Shows a overlay spinner.   |                                                                   |
| **Parameters**             |                                                                   |
| `options?: SpinnerOptions` | Optional configuration object controlling the spinner appearance. |
| **Returns**                |                                                                   |
| `SpinnerRef`               | A reference to the opened spinner overlay                         |

### Classes

#### `SpinnerRef`

A reference to a opened overlay spinner.

#### Methods

| `dismiss`                                    |     |
| -------------------------------------------- | --- |
| Hides removes the spinner overlay from view. |     |

### Interfaces

#### `SpinnerOptions`

Configuration settings for the spinner appearance. Any properties not supplied will use the default value of the `mat-progress-spinner` component.

##### Properties

| Name                         | Description                                                                                                                                             |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `color?: ThemePalette`       | Theme color palette for the component. [See.](https://material.angular.io/components/progress-spinner/api#MatSpinner)                                   |
| `diameter?: number`          | The diameter of the progress spinner (will set width and height of svg). [See.](https://material.angular.io/components/progress-spinner/api#MatSpinner) |
| `strokeWidth?: number`       | Stroke width of the progress spinner. [See.](https://material.angular.io/components/progress-spinner/api#MatSpinner)                                    |
| `mode?: ProgressSpinnerMode` | Mode of the progress circle. [See.](https://material.angular.io/components/progress-spinner/api#MatSpinner)                                             |
| `value?: Observable<number>` | Value of the progress circle. Only relevant if the mode is `'determinate'`. The spinner will be updated for every emit of the obervable.                |
