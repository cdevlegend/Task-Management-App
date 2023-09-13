import { Button } from '@mui/material';
import { MouseEventHandler, ReactNode } from 'react';

type Props = {
    onClick?: MouseEventHandler | undefined;
    children: ReactNode;
    isFull?: boolean;
    className?: string;
    type?: 'submit' | 'reset' | 'button' | undefined;
};
export default function PrimaryOutlineButton(props: Props) {
    return (
        <Button
            onClick={props.onClick}
            variant={'outlined'}
            className={(props.className ? props.className : '') + ' rounded-xl'}
            type={props.type}
            sx={{ border: '0 !important' }}
        >
            {props.children}
        </Button>
    );
}
