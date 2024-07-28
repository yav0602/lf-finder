import { createContext } from "react";

type FoldersContextValue = {
  folders: unknown[];
};

export const foldersContext = createContext<FoldersContextValue>({
  folders: [],
});
