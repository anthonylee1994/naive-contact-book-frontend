import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { BottomBar } from "components/BottomBar";
import { TopBar } from "components/TopBar";
import { Contacts } from "pages/contacts";
import { Profile } from "pages/profile";
import { ContactInfo } from "./contacts/[id]";

export const Index = React.memo(() => {
  return (
    <React.Fragment>
      <TopBar />
      <Routes>
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/contacts/:id" element={<ContactInfo />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Navigate to="/contacts" />} />
      </Routes>
      <BottomBar />
    </React.Fragment>
  );
});
