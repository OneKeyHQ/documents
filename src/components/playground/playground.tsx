import React, { useEffect, useReducer, useRef, useState } from 'react';
import Sticky from 'react-sticky-el';

import { editor } from "monaco-editor/esm/vs/editor/editor.api";
import OneKeyConnect from "@onekeyfe/connect";
import CodeBlock from '@theme/CodeBlock';
import Toggle from '@theme/Toggle';
import useThemeContext from '@theme/hooks/useThemeContext';
import styles from './index.module.css';
import { useOnekeyConnectEditor } from "@src/hooks/useOnekeyConnectEditor";
import { usePopupToggle } from "@src/hooks/usePopupToggle";

const checked = (
    <span className={styles.toggle} />
);
const unchecked = (
    <span className={styles.toggle} />
);

interface PlaygroundProps {
    initValue?: string;
}

function Playground(props: PlaygroundProps) {
    useOnekeyConnectEditor();
    const { isDarkTheme } = useThemeContext();
    const [value, setValue] = useState(props.initValue ?? '');
    const [usePopup, setUsePopup] = usePopupToggle();
    const [log, setLog] = useReducer((p, a) => JSON.stringify(a, null, 2), '');
    const editorDivRef = useRef<HTMLDivElement>();
    const editorRef = useRef<editor.IStandaloneCodeEditor>();

    useEffect(() => {
        const parent = document.getElementsByClassName('markdown')[0];
        parent?.classList.add(styles.parent);
        return () => parent?.classList.remove(styles.parent);
    }, []);

    useEffect(() => {
        editorRef.current = editor.create(editorDivRef.current, {
            value: props.initValue,
            language: 'typescript',
            overviewRulerBorder: false,
            cursorSmoothCaretAnimation: true,
            scrollbar: {
                vertical: 'hidden',
                horizontal: 'hidden',
            },
            wordWrap: 'on',
            renderWhitespace: 'boundary',
            minimap: {
                enabled: false
            },
            automaticLayout: true
        });

        editorRef.current.onDidChangeModelContent(() => {
            setValue(editorRef.current.getValue());
        })
        // disable scroll beyond last line
        editorRef.current.updateOptions({ scrollBeyondLastLine: false });

        const LINE_HEIGHT = 18;
        const CONTAINER_GUTTER = 10;

        // @ts-expect-error
        const el = editorRef.current.domElement as any;
        if (!el) return;
        const codeContainer = el.getElementsByClassName('view-lines')[0];

        let prevLineCount = 0;

        editorRef.current.onDidChangeModelDecorations(() => {
        // wait until dom rendered
        setTimeout(() => {
            const height =
            codeContainer.childElementCount > prevLineCount
                ? codeContainer.offsetHeight // unfold
                : codeContainer.childElementCount * LINE_HEIGHT + CONTAINER_GUTTER; // fold
            prevLineCount = codeContainer.childElementCount;

            el.style.height = height + 'px';

            editorRef.current.layout();
        }, 0);
        });
    }, []);

    useEffect(() => {
        editor.setTheme(isDarkTheme ? 'vs-dark' : 'vs');
    }, [isDarkTheme]);

    const run = () => {
        (window as any).OneKeyConnect = OneKeyConnect;
        Promise.resolve(eval(value)).then(setLog);
    }

    const changePopup = (e) => {
        setUsePopup(e.target.checked);
    }

    return (
        // <Sticky mode="bottom" bottomOffset={1000}>
            <div className={styles.playground}>
                <div className={styles.title}>
                    <h3>Try at OneKey online</h3>
                </div>
                <div
                    className={styles.editor}
                    ref={editorDivRef}
                />
                <div className={styles.actions}>
                    <div className={styles.button} onClick={run}>RUN &gt;&gt;</div>
                    <span style={{fontWeight: 500}}>current is {usePopup ? 'popup' : 'inline'} mode</span>&nbsp;&nbsp;
                    <Toggle checked={usePopup} onChange={changePopup} icons={{ checked, unchecked }} />
                </div>
                <div>
                    {
                        log && <CodeBlock className="json">{log}</CodeBlock>
                    }
                </div>
            </div>
        // </Sticky>
    );
}

export default Playground;
