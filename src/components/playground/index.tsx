import React, { useEffect, useReducer, useRef, useState } from 'react';
import * as monaco from "monaco-editor/esm/vs/editor/editor.api";
import OneKeyConnect from "@onekeyhq/connect";
import { loggerReducer } from "./loggerReducer";
import styles from './index.module.css';

interface PlaygroundProps {
    initValue?: string;
}

function Playground(props: PlaygroundProps) {
    const [value, setValue] = useState(props.initValue ?? '');
    const [log, setLog] = useReducer(loggerReducer, '');
    const editorRef = useRef<HTMLDivElement>();

    useEffect(() => {
        //monaco
        monaco.languages.typescript.javascriptDefaults.addExtraLib(`
            declare global {
                interface Window { OneKeyConnect: {}; }
            }`);
        monaco.editor.create(editorRef.current, {
            value: props.initValue,
            language: 'typescript'
        });

        // OneKeyConnect
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
            <div
                className={styles.editor}
                ref={editorRef}
            />
            <button onClick={run}>RUN</button>
            <div>{log}</div>
        </>
    );
}

export default Playground;
