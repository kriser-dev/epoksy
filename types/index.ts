export type ModalType = 'privacy' | 'cookies' | null;
export type SectionId = 'o-nas' | 'proces' | 'oferta' | 'realizacje' | 'kontakt';

export interface FormData {
  name: string;
  phone: string;
  details: string;
}

export interface ModalProps {
  activeModal: ModalType;
  setActiveModal: React.Dispatch<React.SetStateAction<ModalType>>;
}

export interface SetterProps {
  setActiveModal: React.Dispatch<React.SetStateAction<ModalType>>;
}