# Hooks

## 1. [useState](https://reactjs.org/docs/hooks-state.html)
useState仅接受一个参数作为初始状态，并且返回一对值；返回的值第一个为初始值即传入参数，第二个为一个函数即更新初始值的函数。

```javascript
// 此种写法得益于js语法的数组结构特性
const [count, setCount] = useState(0);

// 上述代码等价于以下代码
const countState = useState(0);
const count = countState[0];
const setCount = countState[1];


// 声明多个状态变量
const [age, setAge] = useState(42);
const [fruit, setFruit] = useState('banana');
const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);

// 更新值
const updateAge = () => setAge(59);
updateAge();        // age 59
```



## 2. [useEffect](https://reactjs.org/docs/hooks-effect.html)
useEffect让我们可以在函数组件中执行一些side effects, useEffect可以看作生命周期 componentDidMount componentDidUpdate componentWillUnmount的结合

```javascript
useEffect(() => {
    document.title = `You clicked ${count} times`
    return () => {
        console.log('unmount');
    }
})

// 等价于
componentDidMount() {
    document.title = `You clicked ${this.state.count} times`
}

componentDidUpdate() {
    document.title = `You clicked ${this.state.count} times`
}

componentWillUnmount() {
    console.log('unmount');
}
```

性能优化：频繁的应用的副作用可能会造成性能问题，因此在class组件我们已知componentDidUpdate可以传入prevProps prevState，通过这两个参数可以进行一些优化，useEffect也存在第二个可选参数用来作为性能优化
```javascript
useEffect(() => {
    document.title = `You clicked ${count} times`
}, [count])

componentDidUpdateState(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
        document.title = `You clicked ${this.state.count} times`
    }
}
```

## 3. [Hooks相关规则和约定](https://reactjs.org/docs/hooks-rules.html)


## 4. [创建自己的Hook](https://reactjs.org/docs/hooks-custom.html)
针对大量重复使用Hook的代码，提取出公共逻辑结合React给出的hook创建出属于自己的Hook

```javascript
function Example() {
    const [name, setName] = useState('mary');
    const [secName, setSecName] = useState('bob');

    function changeName(e) {
        setName(e.target.value);
    }

    function changeSecName(e) {
        setName(e.target.value);
    }

    return (
        <div>
            <input type="text" value={name} onChange={changeName} />
            <input type="text" value={secName} onChange={changeSecName} />
        </div>
    )
}



```
上述代码可改写为：
```javascript
function useName(initialValue) {
    const [value, setValue] = useState(initialValue);

    function handleChange(e) {
        setValue(e.target.value);
    }

    return {
        value, 
        onChange: handleChange
    }
}


function CustomExample() {
    const name = useName('mary');
    const secName = useName('bob');

    return (
        <div>
            <input type="text" {...name} />
            <input type="text" {...secName} />
        </div>
    )
}

```