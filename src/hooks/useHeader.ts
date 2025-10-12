"use client";

import { useContext } from "react";
import { HeaderContext } from "@/context/HeaderContext";

export const useHeader = () => {
    const context = useContext(HeaderContext);
    if (!context) throw new Error("useHeader debe usarse dentro de <HeaderProvider>");
    return context;
};