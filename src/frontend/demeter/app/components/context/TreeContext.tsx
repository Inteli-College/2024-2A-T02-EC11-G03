import { createContext } from "react";

export const UploadContext = createContext<[any[], React.Dispatch<React.SetStateAction<any[]>>]>([[], () => {}]);