import OneKeyConnect from "@onekeyhq/connect";
import { Dispatch, SetStateAction, useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

let previousPopup = null;

export function usePopupToggle() {
    const [usePopup, setUsePopup] = useLocalStorage('usePopup', false);
    useEffect(() => {
        if (usePopup !== previousPopup) {
            console.log('previousPopup', previousPopup, usePopup);
            console.log(previousPopup);
            // if (previousPopup !== null) {
                console.log('-----');
                OneKeyConnect.dispose();
                console.log('-----dispose end');
            // }

            // OneKeyConnect.on('UI_EVENT', event => {
            //     console.log('UI_EVENT', event);
            // });
            // console.log('-----onekey config------', {
            //     debug: true,
            //     popup: usePopup,
            //     manifest: {
            //         email: 'hi@onekey.so',
            //         appUrl: 'https://onekey.so',
            //     },
            // });
            // OneKeyConnect.init({
            //     debug: true,
            //     popup: usePopup,
            //     manifest: {
            //         email: 'hi@onekey.so',
            //         appUrl: 'https://onekey.so',
            //     },
            // });
            // previousPopup = usePopup;
        }
    }, [usePopup]);

    return [usePopup, setUsePopup] as [boolean, Dispatch<SetStateAction<boolean>>];
}
