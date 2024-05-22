function Activity001() {
    const tables = [];

    for (let i = 1; i < 11; i++) {
        const table = [];
        for (let x = 1; x < 11; x++) {
            table.push(<p key={`${i}-${x}`}>{`${i} X ${x} = ${i * x}`}</p>);
        }
        tables.push(
            <div className="table-column" key={i}>
                <h3>Tabuada do {i}</h3>
                {table}
            </div>
        );
    }

    return (
        <div>
            <div className="info-section">
                <h1>Desafio 01</h1>
                <p>Fazer um algoritmo que escreva no terminal as tabuadas do 1 até a tabuada do 10, com 10 números, utilizando dois comandos de repetição (for, while…)</p>
            </div>
            <div className="tables-container">
                {tables}
            </div>
            <div className="home-container">
            <div className="code-section">
                <h1>Código: </h1>
                <p>O código foi feito usando JS com dois comandos FOR e dentro desses comandos FOR usamos um array para guardar dados em HTML para mostrar na tela usando REACT, então foram usados dois comandos(for) mas usando arrays para mostrar no html</p>
                <pre className="code-snippet">
                    {`for (let i = 1; i < 11; i++) {\n`}
                    {`    for (let x = 1; x < 11; x++) {\n`}
                    {`        console.log(i + ' X ' + x + ' = ' + (i * x));\n`}
                    {`    }\n`}
                    {`}`}
                </pre>
            </div>
            </div>
        </div>
    );
}

export default Activity001;
