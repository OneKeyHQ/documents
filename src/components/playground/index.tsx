import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

const Container = (props: any) => (
    <BrowserOnly>{() => {
        const Playground = require('./playground').default;
        return <Playground {...props} />
    }}</BrowserOnly>
)

export default Container;
