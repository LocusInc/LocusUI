import clsx from "clsx";

type ButtonProps = {
  className?: string;
  [key: string]: any;
};

export const Button = ({ className, ...props }: ButtonProps) => {
  return (
    <button
      className={clsx(
        "px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700",
        className
      )}
      {...props}
    />
  );
};
