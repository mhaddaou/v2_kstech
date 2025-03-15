"use client";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { Theme } from "@radix-ui/themes";

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <Theme>{children}</Theme>
    </Provider>
  );
}
