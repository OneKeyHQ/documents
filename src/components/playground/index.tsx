import React, { useEffect, useReducer, useRef, useState } from 'react';
import { editor } from "monaco-editor/esm/vs/editor/editor.api";
import OneKeyConnect from "@onekeyhq/connect";
import CodeBlock from '@theme/CodeBlock';
import useThemeContext from '@theme/hooks/useThemeContext';
import styles from './index.module.css';
import initHook from "./init";


interface PlaygroundProps {
    initValue?: string;
}

function Playground(props: PlaygroundProps) {
    initHook();
    const { isDarkTheme } = useThemeContext();
    const [value, setValue] = useState(props.initValue ?? '');
    const [log, setLog] = useReducer((p, a) => JSON.stringify(a, null, 2), '');
    const editorDivRef = useRef<HTMLDivElement>();
    const editorRef = useRef<editor.IStandaloneCodeEditor>();

    useEffect(() => {
        editorRef.current = editor.create(editorDivRef.current, {
            value: props.initValue,
            language: 'typescript',
            minimap: {
                enabled: false
            }
        });

        editorRef.current.onDidChangeModelContent(() => {
            setValue(editorRef.current.getValue());
        })
    }, []);

    useEffect(() => {
        editor.setTheme(isDarkTheme ? 'vs-dark' : 'vs');
    }, [isDarkTheme]);

    const run = () => {
        (window as any).OneKeyConnect = OneKeyConnect;
        Promise.resolve(eval(value)).then(setLog);
    }
    return (
        <>
            <div
                className={styles.editor}
                ref={editorDivRef}
            />
            <div className={styles.button} onClick={run}>RUN&gt;&gt;</div>
            {log &&
            <CodeBlock className="json">{log}</CodeBlock>
            }
        </>
    );
}

export default Playground;
