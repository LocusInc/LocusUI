"use client";

import { Theme, ThemeControl } from "locus-ui";

type ComponentsLayoutProps = React.PropsWithChildren & {};

export const ComponentsLayout = ({ children }: ComponentsLayoutProps) => {
  return (
    <Theme appearance="dark" radius="md" roundness="3">
      <ThemeControl />
      {children}
    </Theme>
  );
};

export default ComponentsLayout;
