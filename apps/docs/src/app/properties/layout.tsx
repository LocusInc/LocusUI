"use client";

import { Theme, ThemeControl } from "locus-ui";

type PropertiesLayoutProps = React.PropsWithChildren & {};

export const PropertiesLayout = ({ children }: PropertiesLayoutProps) => {
  return (
    <Theme appearance="dark" radius="md" roundness="3">
      <ThemeControl />
      {children}
    </Theme>
  );
};

export default PropertiesLayout;
