import { create } from "zustand";
import { UserObjType } from "../interface/userObj";

const initUserObj = {
  userid: undefined,
  firstName: "",
  lastName: "",
  email: "",
};

type UseUser = {
  userObj: UserObjType;
};

export const useUser = create<UseUser>((set) => ({
  userObj: { ...initUserObj },
  setUserObj: (startUserObj: UserObjType) =>
    set((prev) => {
      return { userObj: { ...prev.userObj, ...startUserObj } };
    }),
}));
