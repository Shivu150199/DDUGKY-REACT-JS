const ProductCard = ({ card }) => {
  return (
    <article>
      <img src={card.images[0]} alt="" />
      <div className="content">
        <h1>{card.title}</h1>
      <div>
        <h3>{card.brand}</h3>
        <h3>{card.category}</h3>
      </div>
      <p>{card.description}</p>
      </div>
    </article>
  )
}

export default ProductCard
