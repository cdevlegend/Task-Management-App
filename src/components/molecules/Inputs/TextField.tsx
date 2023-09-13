import { TextField as DefaultTextField, InputAdornment } from '@mui/material';
import { ReactNode } from 'react';
import { Control, Controller } from 'react-hook-form';

type Props = {
    control: Control<any>;
    children?: ReactNode;
    name: string;
    defaultValue?: string;
    className?: string;
    label: string;
    size?: 'small' | 'medium';
    type?: React.InputHTMLAttributes<unknown>['type'];
    error?: any;
    required?: boolean;
    readOnly?: boolean;
    disabled?: boolean;
    multiline?: boolean;
    rows?: number;
    inputProps?: any;
    suffix?: string | ReactNode;
    prefix?: string | ReactNode;
    placeholder?: string;
};

export default function TextField(props: Props) {
    return (
        <Controller
            name={props.name}
            control={props.control}
            render={({ field, fieldState: { error } }) => (
                <DefaultTextField
                    className={props.className ? props.className : ''}
                    name={props.name}
                    defaultValue={props.defaultValue}
                    onChange={field.onChange}
                    size={props.size ?? 'small'}
                    fullWidth
                    label={props.label}
                    multiline={props.multiline}
                    rows={props.rows}
                    type={props.type}
                    error={!!error?.message}
                    helperText={error?.message}
                    placeholder={props.placeholder}
                    InputProps={{
                        readOnly: props.readOnly,
                        inputProps: {
                            value: field.value !== undefined && field.value !== null ? field.value : '',
                            ...props.inputProps
                        },
                        endAdornment: props.suffix && <InputAdornment position="end">{props.suffix}</InputAdornment>,
                        startAdornment: props.prefix && <InputAdornment position="start">{props.prefix}</InputAdornment>
                    }}
                    disabled={props.disabled}
                />
            )}
        />
    );
}
