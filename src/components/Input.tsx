interface Props {
  label: string;
  type?: string;
  value?: string;
  placeholder: string;
  required: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
}
export default function Input({
  label = "",
  type = "text",
  required = false,
  placeholder = "",
  onChange,
}: Props) {
  return (
    <>
      <label>{label}</label>
      <input
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
    </>
  );
}
