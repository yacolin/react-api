import React from 'react';
import { useLocation } from 'react-router-dom';

import Greeting from './components/class/Greeting';
import GreetingH from './components/hooks/GreetingH';

import Ref from './components/class/Ref';
import RefH from './components/hooks/RefH';

import ForwardRef from './components/ForwardRef';
import ForwardRefH from './components/hooks/ForwardRefH';

import Context from './components/class/Context';
import ContextH from './components/hooks/ContextH';

import SimpleTodo from './components/hooks/SimpleTodo';

function QueryComponent(Component, Hook) {
    let query = new URLSearchParams(useLocation().search);
    let type = query.get('type');

    switch (type) {
        case 'class':
            return <Component />
        case 'hooks':
            return <Hook />    
        default:
            return null;
    }
}


const routes = [
    {
        path: '/greeting',
        component: () => QueryComponent(Greeting, GreetingH)
    }, {
        path: '/ref',
        component: () => QueryComponent(Ref, RefH)
    }, {
        path: '/forwardRef',
        component: () => QueryComponent(ForwardRef, ForwardRefH)
    }, {
        path: '/context',
        component: () => QueryComponent(Context, ContextH)
    }, {
        path: '/simple-todo',
        component: SimpleTodo
    }
]



export default routes;