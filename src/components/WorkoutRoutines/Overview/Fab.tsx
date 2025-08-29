import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { WgerModal } from "components/Core/Modals/WgerModal";
import { RoutineForm } from "components/WorkoutRoutines/widgets/forms/RoutineForm";
import React, { forwardRef } from "react";
import { useTranslation } from "react-i18next";

export const AddRoutineFab = forwardRef<HTMLButtonElement>((props, ref) => {
    const [t] = useTranslation();
    const [openModal, setOpenModal] = React.useState(false);
    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);

    return (
        <div>
            <Fab
                ref={ref}  // use passed ref
                color="secondary"
                aria-label="add"
                onClick={handleOpenModal}
                sx={{
                    position: 'fixed',
                    bottom: '5rem',
                    right: (theme) => theme.spacing(2),
                    zIndex: 9,
                }}>
                <AddIcon />
            </Fab>
            <WgerModal title={t('add')} isOpen={openModal} closeFn={handleCloseModal}>
                <RoutineForm closeFn={handleCloseModal} />
            </WgerModal>
        </div>
    );
});