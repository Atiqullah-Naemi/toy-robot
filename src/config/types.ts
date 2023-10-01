import * as CSS from "csstype";

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

export interface RobotTransitionParams extends Pick<RobotState, "coordinate"> {
  prevIsPlaced?: boolean;
  prevCoordinate?: Coordinate;
}

export interface RobotTransition {
  prevTransition: CSS.Properties;
  currentTransition: CSS.Properties;
}

export type IsRobotOnTable = (coordinate: CoordinateObject) => boolean;

export type GetSquareSize = (type?: "x" | "y") => string;

export type GetTranslatePosition = (coordinate?: Coordinate) => string;

export type CreateRobotTransition = (
  params: RobotTransitionParams
) => RobotTransition;

export interface RobotProps
  extends Pick<RobotState, "coordinate" | "isPlaced"> {}
