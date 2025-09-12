export const Spaces = () => {
    return (
        <div className="divider position-relative" style={{ margin: "5rem 0", padding: "2rem 0" }}>
            {/* Mejorado con más contraste y brillo */}
            <div
                style={{
                    height: "40px",
                    background: "linear-gradient(to bottom, rgba(79,195,247,0.1) 0%, rgba(255,255,255,0.05) 50%, transparent 100%)",
                    borderTop: "1px solid rgba(79,195,247,0.2)",
                    borderBottom: "1px solid rgba(255,255,255,0.1)"
                }}
            ></div>
            <div
                style={{
                    height: "30px",
                    background: "linear-gradient(to bottom, rgba(79,195,247,0.15) 0%, transparent 100%)",
                    marginTop: "-20px",
                    filter: "blur(4px)",
                    opacity: "0.8"
                }}
            ></div>
        </div>
    );
};