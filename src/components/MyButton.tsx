export type MyButtonProps = {
  primary?: boolean;
  backgroundColor?: string | null;
  size?: string;
  label: string;
  onClick?: () => void;
};

export default function MyButton({
  primary = false,
  backgroundColor = null,
  size = "medium",
  label = "Button",
  ...props
}: MyButtonProps) {
  const mode = primary
    ?  "storybook-button--primary"
    : "storybook-button--secondary";

  return (
    <button
      type="button"
      className={["storybook-button", `storybook-button--${size}`, mode].join(" ")}
      style={backgroundColor ? { backgroundColor } : undefined}
      {...props}
    >
      {label}
    </button>
  );
};
