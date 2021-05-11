import React, { useEffect, useReducer, useState } from 'react';
import MonacoEditor from 'react-monaco-editor';
import { MonacoEditorProps } from "react-monaco-editor/lib/types";
import OneKeyConnect from "@onekeyhq/connect";
import { loggerReducer } from "./loggerReducer";

interface PlayroundProps extends MonacoEditorProps {
    initValue?: string;
}

function Playground(props: PlayroundProps) {
    const [value, setValue] = useState(props.initValue ?? '');
    const [log, setLog] = useReducer(loggerReducer, '');


    useEffect(() => {
        OneKeyConnect.on('UI_EVENT', event => {
            console.log('UI_EVENT', event);
        });

        OneKeyConnect.init({
            debug: true,
            manifest: {
                email: 'hi@onekey.so',
                appUrl: 'https://onekey.so',
            },
        });
    }, []);

    const run = () => {
        const savedLogger = console.log;
        console.log = (...params) => {
            savedLogger(...params);
            setLog(params[0]);
        }
        (window as any).OneKeyConnect = OneKeyConnect;
        eval(value);
    }
    return (
        <>

            <MonacoEditor
                value={value}
                onChange={setValue}
                {...props}
            />
            <button onClick={run}>RUN</button>
            <div>{log}</div>
        </>
    );
}

export default Playground;
