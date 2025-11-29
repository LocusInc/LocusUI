import * as React from "react";

export function useControllableState<T>({
  value,
  defaultValue,
  onChange,
}: {
  value?: T;
  defaultValue: T;
  onChange?: (v: T) => void;
}) {
  const [state, setState] = React.useState(defaultValue);

  const isControlled = value !== undefined;
  const current = isControlled ? value : state;

  const set = React.useCallback(
    (v: T) => {
      if (!isControlled) setState(v);
      onChange?.(v);
    },
    [isControlled, onChange]
  );

  return [current, set] as const;
}
