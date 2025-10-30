function Card({ name, years, originPlace, description }){
  return(
    <div className="w-[450px] h-auto p-[1%] m-[2%] content-center justify-center rounded-2xl border-dashed border-3 bg-black hover:bg-gray-500">
      <h2>{name}</h2>
      <h3>{years}</h3>
      <h4>{originPlace}</h4>
      <p>{description}</p>
    </div>
  );
}

export default Card;
