import { cva, type VariantProps } from "class-variance-authority";
import { clsx } from "clsx";
import { Children, cloneElement, isValidElement } from "react";

export const getButtonClassNames = cva("slButtonBase", {
  variants: {
    variant: {
      default: "slButtonVariantDefault",
      destructive: "slButtonVariantDestructive",
      outline: "slButtonVariantOutline",
      secondary: "slButtonVariantSecondary",
      ghost: "slButtonVariantGhost",
      link: "slButtonVariantLink",
    },
    size: {
      default: "slButtonSizeDefault",
      sm: "slButtonSizeSm",
      lg: "slButtonSizeLg",
      icon: "slButtonSizeIcon",
    },
  },
});

export type ComponentRenderFn<Props, State> = (
  props: Props,
  state: State,
) => React.ReactElement<unknown>;

type getButtonClassNamesType = typeof getButtonClassNames;
type getButtonClassNamesProps = VariantProps<getButtonClassNamesType>;
export type ButtonProps = React.ComponentProps<"button"> &
  getButtonClassNamesProps & {
    renderWithChild?: boolean;
  };

export const Button = (props: ButtonProps) => {
  const {
    variant = "default",
    size = "default",
    className,
    children,
    renderWithChild = false,
    ...reset
  } = props;

  const classNames = clsx(getButtonClassNames({ variant, size }), className);

  if (renderWithChild) {
    const element = Children.only(children);
    if (isValidElement(element)) {
      return cloneElement(
        element as React.ReactElement<{ className: string }>,
        {
          className: classNames,
        },
      );
    }
  }

  return (
    <button className={classNames} {...reset}>
      {children}
    </button>
  );
};
