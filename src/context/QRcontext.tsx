import { useContext, createContext, useState } from "react";

interface QRContextType {
    formData: {
        Purpose: string;
        Uri: string;
    };
    setFormData: React.Dispatch<React.SetStateAction<{
        Purpose: string;
        Uri: string;
    }>>;
    seturltype: React.Dispatch<React.SetStateAction<string>>;
    urltype: string;
}

const QRContext = createContext<QRContextType | undefined>(undefined);

export const QRcontextProvider = ({ children }: { children: React.ReactNode }) => {
    const [formData, setFormData] = useState({
        Purpose: "",
        Uri: ""
    });
    const [urltype, seturltype] = useState("");

    const ReturnValue = { formData, setFormData, urltype, seturltype };
    return (
        <QRContext.Provider value={ReturnValue}>
            {children}
        </QRContext.Provider>
    );
}

export const UseQRcontext = () => {
    const context = useContext(QRContext);
    if (context === undefined) {
        throw new Error("UseQRcontext must be used within a QRcontextProvider");
    }
    return context;
}
