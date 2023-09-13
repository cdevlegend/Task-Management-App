import * as React from 'react';
import { Dialog as BaseDialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { ReactNode } from 'react';
import { ModalProps } from '@mui/material/Modal';

type Props = {
    open: ModalProps['open'];
    title?: string | ReactNode;
    children: ReactNode;
    onClose?: ModalProps['onClose'];
    actions?: ReactNode;
    maxWidth?: 'sm' | 'md' | 'lg' | 'xl';
    width?: string;
    dialogContentCustomClass?: string;
};
export default function Dialog(props: Props) {
    return (
        <div>
            <BaseDialog fullWidth maxWidth={props.maxWidth && props.maxWidth} open={props.open} onClose={props.onClose}>
                {props.title && <DialogTitle className={'bg-main-color font-bold text-white'}>{props.title}</DialogTitle>}
                <DialogContent className={props.dialogContentCustomClass ? props.dialogContentCustomClass : 'mt-4'}>
                    {props.children}
                </DialogContent>
                {props.actions && <DialogActions>{props.actions}</DialogActions>}
            </BaseDialog>
        </div>
    );
}
