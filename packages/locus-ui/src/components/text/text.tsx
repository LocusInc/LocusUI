import clsx from "clsx";

export type TextProps = React.HTMLAttributes<HTMLParagraphElement>;

export const Text = ({ children, className, ...rest }: TextProps) => {
  return (
    <p className={clsx("lcs-text", className)} {...rest}>
      {children}
    </p>
  );
};
