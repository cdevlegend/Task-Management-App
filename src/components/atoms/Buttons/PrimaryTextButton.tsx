import { Button, Typography } from '@mui/material';
import { MouseEventHandler, ReactNode } from 'react';

type Props = {
    onClick?: MouseEventHandler | undefined;
    children: ReactNode;
    className?: string;
    type?: 'submit' | 'reset' | 'button' | undefined;
};
export default function PrimaryTextButton(props: Props) {
    return (
        <Button
            onClick={props.onClick}
            color={'success'}
            variant={'text'}
            className={(props.className ? props.className : '') + ' rounded-xl'}
            type={props.type}
        >
            <Typography fontSize={12}>{props.children}</Typography>
        </Button>
    );
}
