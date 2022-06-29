function MinutesToHours() {
    const [amount, setAmount] = React.useState(0);
    const [invert, setInvert] = React.useState(false);
    return (
        <div>
            <span>Minutes: </span>
            <input
                id="min"
                type="number"
                value={invert ? amount*60 : amount}
                onChange={(event) => setAmount(event.target.value)}
                disabled={invert}
            />
            <br/>

            <span>Hours: </span>
            <input
                id="hr"
                type="number"
                value={invert ? amount : amount/60}
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

function KmToMiles() {
    const [amount, setAmount] = React.useState(0);
    const [invert, setInvert] = React.useState(false);
    return (
        <div>
            <span>KM: </span>
            <input
                id="km"
                type="number"
                value={invert ? amount*1.60934 : amount}
                onChange={(event) => setAmount(event.target.value)}
                disabled={invert}
            />
            <br/>

            <span>Miles: </span>
            <input
                id="miles"
                type="number"
                value={invert ? amount : amount*0.621371}
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
            {index === "0" ? <MinutesToHours /> : null}
            {index === "1" ? <KmToMiles /> : null}
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));