import useId from "./utils/useId";

interface CheckboxProps {
  checked?: boolean;
  defaultChecked?: boolean;
  id?: string;
  label?: string;
  onChange?: (checked: boolean) => void;
}

export default function Checkbox(props: CheckboxProps) {
  const fallbackId = useId();

  const { id = fallbackId, label = null, onChange, ...inputProps } = props;

  const handleChange =
    onChange === undefined
      ? undefined
      : (event: React.ChangeEvent<HTMLInputElement>) => {
          onChange(event.target.checked);
        };

  return (
    <div className="flex items-center">
      <input
        className="form-checkbox text-primary border border-gray-300 rounded"
        type="checkbox"
        id={id}
        onChange={handleChange}
        {...inputProps}
      />
      <label className="ml-2 block text-sm text-info" htmlFor={id}>
        {label}
      </label>
    </div>
  );
}
