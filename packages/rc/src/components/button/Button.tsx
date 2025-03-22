import { cva, type VariantProps } from "class-variance-authority";
import { clsx } from "clsx";

export const getButtonClassNames = cva(
  "s:inline-flex s:cursor-pointer s:items-center s:justify-center s:gap-2 s:rounded-md s:text-sm s:font-medium s:whitespace-nowrap s:[&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "s:bg-primary s:text-primary-foreground s:hover:bg-primary/90 s:shadow-xs",
        destructive: "",
        outline:
          "s:border-input s:bg-background s:hover:bg-accent s:hover:text-accent-foreground s:border s:shadow-xs",
        secondary: "",
        ghost: "s:hover:bg-accent s:hover:text-accent-foreground",
        link: "s:text-primary s:underline-offset-4 s:hover:underline",
      },
      size: {
        default: "s:h-9 s:px-4 s:py-2",
        sm: "s:h-8 s:gap-1.5 s:rounded-md s:px-3 s:has-[>svg]:px-2.5",
        lg: "",
        icon: "s:size-9",
      },
    },
  },
);

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
