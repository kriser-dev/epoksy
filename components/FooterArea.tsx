"use client";
import React, { useState } from 'react';
import Footer from './Footer';
import LegalModals from './LegalModals';
import CookieBanner from './CookieBanner';
import { ModalType } from '../types';

const FooterArea = () => {
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  
  return (
    <>
      <Footer setActiveModal={setActiveModal} />
      <LegalModals activeModal={activeModal} setActiveModal={setActiveModal} />
      <CookieBanner setActiveModal={setActiveModal} />
    </>
  );
};

export default FooterArea;