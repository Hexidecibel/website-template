import { CircularProgress } from "@mui/material";
import * as React from "react";
import { CSSProperties } from "react";

export type FLoadingProps = {
  fill?: boolean;
  size?: number;
  style?: CSSProperties;
};

export default function FLoading(props: FLoadingProps): JSX.Element {
  const { fill = true, style = {}, size = 80 } = { ...props };
  return (
    <div
      id={"loading"}
      style={
        fill
          ? style && {
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }
          : style
      }
    >
      <CircularProgress
        thickness={5}
        size={size}
        disableShrink
        variant={"indeterminate"}
      />
    </div>
  );
}
