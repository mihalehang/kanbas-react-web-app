function FunctionParenthesisAndParameters() {
    const square = (a) => a * a;
    const plusOne = (a) => a + 1;
    const twoSquared = square(2);
    const threePlusOne = plusOne(3);
    return (
        <>
            <h3>Parenthesis And Parameters</h3>
            twoSquared = 4<br />
            square(2) = {twoSquared}<br />
            threePlusOne = 4<br />
            plusOne(1) = {threePlusOne}<br />

        </>
    )
}

export default FunctionParenthesisAndParameters;
