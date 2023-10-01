export interface CoordinateObject {
  x: number;
  y: number;
}
export interface TableDimension extends CoordinateObject {}

export type Coordinate = CoordinateObject | null;

export interface RobotState {
  isPlaced: boolean;
  coordinate: Coordinate;
  commands: string[];
  errorMessage: string;
}

export type GetTranslatePosition = (coordinate?: Coordinate) => string;

export interface RobotProps
  extends Pick<RobotState, "coordinate" | "isPlaced"> {}
