import OneKeyConnect from "@onekeyhq/connect";
import { Dispatch, SetStateAction, useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

let previousPopup = null;

export function usePopupToggle() {
    const [usePopup, setUsePopup] = useLocalStorage('usePopup', false);
    useEffect(() => {
        if (usePopup !== previousPopup) {
            if (previousPopup === null) {
                OneKeyConnect.on('UI_EVENT', event => {
                    console.log('UI_EVENT', event);
                });
                OneKeyConnect.init({
                    debug: true,
                    popup: usePopup,
                    manifest: {
                        email: 'hi@onekey.so',
                        appUrl: 'https://onekey.so',
                    },
                });
                previousPopup = usePopup;

            } else {
                location.reload();
            }
        }
    }, [usePopup]);

    return [usePopup, setUsePopup] as [boolean, Dispatch<SetStateAction<boolean>>];
}
