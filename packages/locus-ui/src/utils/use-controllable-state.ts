import * as React from "react";

export function useControllableState<T>({
  value,
  defaultValue,
  onChange,
}: {
  value?: T;
  defaultValue: T;
  onChange?: (value: T) => void;
}) {
  const [state, setState] = React.useState(defaultValue);

  const isControlled = value !== undefined;
  const current = isControlled ? value : state;

  const set = React.useCallback(
    (value: T) => {
      if (!isControlled) setState(value);
      onChange?.(value);
    },
    [isControlled, onChange]
  );

  return [current, set] as const;
}
