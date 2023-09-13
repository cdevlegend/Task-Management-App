import { Button, Typography } from '@mui/material';
import { MouseEventHandler, ReactNode } from 'react';

type Props = {
    onClick?: MouseEventHandler | undefined;
    children: ReactNode;
    className?: string;
    type?: 'submit' | 'reset' | 'button' | undefined;
};
export default function RedTextButton(props: Props) {
    return (
        <Button
            onClick={props.onClick}
            color={'error'}
            variant={'text'}
            className={(props.className ? props.className : '') + ' rounded-xl'}
            type={props.type}
        >
            <Typography fontSize={12}>{props.children}</Typography>
        </Button>
    );
}
