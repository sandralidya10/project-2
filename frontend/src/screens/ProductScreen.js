import "./ProductScreen.css";

const ProductScreen = () => {
    return (
        <div className="productscreen">
            <div className="productScreen__left">
                <div className="left__image">
                    <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
                    alt="Product Name"
                    />
                </div>

                <div className="left__info">
                    <p className="left__name">Product 1</p>
                    <p>Price: $99.9</p>
                    <p>
                        Description: Welcome to a new era of iPhone. Beautifully bright 6.1-inch Super Retina XDR display.1 Ceramic Shield with 4x better drop performance.2 Incredible low-light photography with Night mode on all cameras. Cinema-grade Dolby Vision video recording, editing, and playback. Powerful A14 Bionic chip. And new MagSafe accessories for easy attach and faster wireless charging.3 Let the fun begin.
                    </p>
                </div>
            </div>

            <div className="productScreen__right">
            <div className="right__info">
                <p>
                    Price: <span>$99.9</span>
                </p>
                <p>
                    Status: <span>In Stock</span>
                </p>
                <p>
                    Qty 
                    <select>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                </p>
                <p>
                    <button type="button">Add To Cart</button>
                </p>
            </div>
            </div>
        </div>
    )
}

export default ProductScreen;