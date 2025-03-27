import { cva, type VariantProps } from "class-variance-authority";
import { clsx } from "clsx";

export const getButtonClassNames = cva("sl-button", {
  variants: {
    variant: {
      default: "variant-default",
      destructive: "variant-destructive",
      outline: "variant-outline",
      secondary: "variant-secondary",
      ghost: "variant-ghost",
      link: "variant-link",
    },
    size: {
      default: "size-default",
      sm: "size-sm",
      lg: "size-lg",
      icon: "size-icon",
    },
  },
});

export type ComponentRenderFn<Props, State> = (
  props: Props,
  state: State,
) => React.ReactElement<unknown>;

type getButtonClassNamesType = typeof getButtonClassNames;
type getButtonClassNamesProps = VariantProps<getButtonClassNamesType>;
export type ButtonProps = Omit<React.ComponentProps<"button">, "children"> &
  getButtonClassNamesProps & {
    children?:
      | React.ReactNode
      | ((params: { className: string }) => React.ReactNode);
  };

export const Button = (props: ButtonProps) => {
  const {
    variant = "default",
    size = "default",
    className,
    children,
    ...reset
  } = props;

  const classNames = clsx(getButtonClassNames({ variant, size }), className);

  if (typeof children === "function") {
    return children({ className: classNames });
  }

  return (
    <button className={classNames} {...reset}>
      {children}
    </button>
  );
};
