export const Spaces = () => {

    return (

        <div classNameName="divider position-relative" style={{ margin: "4rem 0" }}>
            <div
                style={{
                    height: "30px",
                    background: "linear-gradient(to bottom, rgba(255,255,255,0.03) 0%, transparent 100%)",
                    borderBottom: "1px solid rgba(255,255,255,0.02)"
                }}
            ></div>
            <div
                style={{
                    height: "20px",
                    background: "linear-gradient(to bottom, rgba(255,255,255,0.08) 0%, transparent 100%)",
                    marginTop: "-15px",
                    filter: "blur(3px)",
                    opacity: "0.7"
                }}
            ></div>
        </div>

    )

} 