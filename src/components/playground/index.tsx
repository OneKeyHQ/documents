import React, { useEffect, useReducer, useRef, useState } from 'react';
import {editor, languages, Uri} from "monaco-editor/esm/vs/editor/editor.api";
import OneKeyConnect from "@onekeyhq/connect";
import { loggerReducer } from "./loggerReducer";
import styles from './index.module.css';
// @ts-ignore
import libSource from '!raw-loader!./types.txt';

interface PlaygroundProps {
    initValue?: string;
}

function Playground(props: PlaygroundProps) {
    const [value, setValue] = useState(props.initValue ?? '');
    const [log, setLog] = useReducer(loggerReducer, '');
    const editorDivRef = useRef<HTMLDivElement>();
    const editorRef = useRef<editor.IStandaloneCodeEditor>();

    useEffect(() => {
        //monaco
        // validation settings
        languages.typescript.javascriptDefaults.setDiagnosticsOptions({
            noSemanticValidation: true,
            noSyntaxValidation: false
        });

        // compiler options
        languages.typescript.javascriptDefaults.setCompilerOptions({
            target: languages.typescript.ScriptTarget.ES2016,
            allowNonTsExtensions: true
        });

        // extra library
        languages.typescript.javascriptDefaults.addExtraLib(libSource, 'ts:global.d.ts');
        // When resolving definitions and references, the editor will try to use created models.
        // Creating a model for the library allows "peek definition/references" commands to work with the library.
        editor.createModel(libSource, 'typescript', Uri.parse('ts:global.d.ts'));

        editorRef.current = editor.create(editorDivRef.current, {
            value: props.initValue,
            language: 'typescript'
        });

        editorRef.current.onDidChangeModelContent(() => {
            setValue(editorRef.current.getValue());
        })

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
                ref={editorDivRef}
            />
            <button onClick={run}>RUN</button>
            <div>{log}</div>
        </>
    );
}

export default Playground;
