import { MdClose } from "react-icons/md";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  Icon,
} from ".";

interface Props {
  onConfirm?: () => any;
  title?: string;
  description?: string;
  confirmText?: string;
  onClose?: () => void;
  open?: boolean;
}

export const ConfirmDeleteDialog = ({
  title = "Confirm Deletion",
  description = "Are you sure you want to delete? This action cannot be undone.",
  confirmText = "Delete",
  onConfirm,
  onClose,
  open,
}: Props) => {
  return (
    <AlertDialog onOpenChange={onClose} open={open}>
      <AlertDialogContent>
        <div className="flex h-12 items-center justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-danger-100">
            <Icon name="Trash2" className="h-6 w-6 text-danger-500" />
          </div>

          <AlertDialogCancel className="border-0 p-0">
            <MdClose className="h-6 w-6 text-gray-500" />
          </AlertDialogCancel>
        </div>

        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onClose}>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className="bg-danger-500 text-white hover:bg-danger-600"
            onClick={onConfirm}
          >
            {confirmText}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
