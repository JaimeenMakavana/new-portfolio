"use client";

import NextButton from "@/components/UI/NextButton";
import store from "@/store";
import { Provider } from "react-redux";

const template = ({ children }: { children: any }) => {
  return (
    <div>
      <Provider store={store}>
        {children}
        <NextButton />
      </Provider>
    </div>
  );
};

export default template;
