//Poner estilos en otro lado?

export const Title = ({ text, capitalize = true }) => {
  return (
    <h1
      style={{
        fontSize: "3rem",
        margin: "1rem 0",
      }}
    >
      {text && capitalize ? text.toUpperCase() : text}
    </h1>
  );
};

