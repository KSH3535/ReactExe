export default function Card(props) {
    
    const {title, backgroundColor, children} = props;

    return (
        <div
            style={{
                margin: 8,
                paddin: 8,
                borderRadius: 8,
                boxShadow: "0px 0px 4px grey",
                backgroundColor: backgroundColor || "white"
            }}
        >

            {/* Specialization 기법 */}
            {title && <h1>{title}</h1>}

            {/* Containment 기법 */}
            {children}

        </div>
    )
}