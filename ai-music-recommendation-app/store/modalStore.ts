import { create } from "zustand";

type ModalTypeT = "change-password" | "change-email" | "settings" | null;
export interface ModalDataI {
  modalHeader: Element;
  modalBody: Element;
  modalFooter: Element;
}
type ModalDataT = {
  modalData: ModalDataI;
};
interface ModalStoreI {
  modalType: ModalTypeT;
  openModal: (modalType: ModalTypeT, data: ModalDataI) => void;
  closeModal: () => void;
  isOpen: boolean;
  setModalData: (modalData: ModalDataT) => void;
  modalData: ModalDataI | null;
}
export const useModalStore = create<ModalStoreI>((set, get) => ({
  modalType: null,
  openModal: (modalType, modalData) =>
    set(() => ({ isOpen: true, modalType: modalType, modalData: modalData })),
  closeModal: () =>
    set(() => ({ isOpen: false, modalType: null, modalData: null })),
  isOpen: false,
  setModalData: (modalData) => set(() => ({ modalData: modalData })),
  modalData: null,
}));
