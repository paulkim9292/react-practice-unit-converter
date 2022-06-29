function Converter(props) {
    const [amount, setAmount] = React.useState(0);
    const [invert, setInvert] = React.useState(false);
    return (
        <div>
            <span>{props.unit1}</span>
            <input
                id="min"
                type="number"
                value={invert ? amount*props.value1 : amount}
                onChange={(event) => setAmount(event.target.value)}
                disabled={invert}
            />
            <br/>

            <span>{props.unit2}</span>
            <input
                id="hr"
                type="number"
                value={invert ? amount : amount*props.value2}
                onChange={(event) => setAmount(event.target.value)}
                disabled={!invert}
            />
            <br/>

            <button
                onClick={() => setAmount(0)}
            >Reset</button>

            <button
                onClick={() => {
                    setAmount(0);
                    setInvert((current) => !current);
                }}
            >Invert</button>
        </div>
    );
}

function App() {
    const [index, setIndex] = React.useState("-1");

    return (
        <div>
            <h1>Converter</h1>
            <select
                value={index}
                onChange={(event) => setIndex(event.target.value)}
            >
                <option value="-1">Select your units</option>
                <option value="0">Minutes & Hours</option>
                <option value="1">KM & Miles</option>
            </select>
            <br/>
            {index === "0" ? <Converter 
                unit1="Minutes: "
                unit2="Hours: "
                value1={60}
                value2={1/60}
            /> : null}
            {index === "1" ? <Converter
                unit1="KM: "
                unit2="Miles: "
                value1={1.60934}
                value2={0.621371}
            /> : null}
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));