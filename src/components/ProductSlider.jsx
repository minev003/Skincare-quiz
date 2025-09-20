
import React, { useState, useEffect } from 'react';
import productsData from "../data/products.json";
import MilkBodyCleanserImage from '../assets/MilkBodyCleanser.jpg';
import MilkBodyLotionImage from '../assets/MilkBodyLotion.jpg';
import SoothingBodyWashImage from '../assets/SoothingBodyWash.png';

const productImages = {
    "MilkBodyCleanser.jpg": MilkBodyCleanserImage,
    "MilkBodyLotion.jpg": MilkBodyLotionImage,
    "SoothingBodyWash.png": SoothingBodyWashImage
};

const ITEMS_PER_PAGE = 2;

function ProductSlider({ userInputs }) {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        setWishlist(storedWishlist);

        const filteredProducts = productsData.filter(product => {
            if (!userInputs || userInputs.length === 0) {
                return true;
            }
            return product.tags.some(tag => userInputs.includes(tag));
        });

        const sortedProducts = [...filteredProducts].sort((a, b) => {
            const aInWishlist = storedWishlist.includes(a.id);
            const bInWishlist = storedWishlist.includes(b.id);
            if (aInWishlist && !bInWishlist) return -1;
            if (!aInWishlist && bInWishlist) return 1;
            return 0;
        });

        setProducts(sortedProducts);
    }, [userInputs]);

    const toggleWishlist = (productId) => {
        const newWishlist = wishlist.includes(productId)
            ? wishlist.filter(id => id !== productId)
            : [...wishlist, productId];

        setWishlist(newWishlist);
        localStorage.setItem('wishlist', JSON.stringify(newWishlist));
    };

    const handleNext = () => {
        if ((currentPage + 1) * ITEMS_PER_PAGE < products.length) {
            setCurrentPage(currentPage + 1);
        } else {
            setCurrentPage(0);
        }
    };

    const handlePrev = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        } else {
            setCurrentPage(Math.ceil(products.length / ITEMS_PER_PAGE) - 1);
        }
    };

    const paginatedProducts = products.slice(currentPage * ITEMS_PER_PAGE, (currentPage + 1) * ITEMS_PER_PAGE);

    return (
        <>
            <div className="slider-wrapper">
                <div className="products-list">
                    {paginatedProducts.map(product => (
                        <div key={product.id} className="product-card">
                            <span
                                className={`wishlist-icon${wishlist.includes(product.id) ? ' active' : ''}`}
                                title={wishlist.includes(product.id) ? 'Remove from wishlist' : 'Add to wishlist'}
                                onClick={() => toggleWishlist(product.id)}
                                role="button"
                                aria-label="Toggle wishlist"
                            >
                                {wishlist.includes(product.id)
                                    ? <>&#10084;&#65039;</>
                                    : <>&#9825;</>
                                }
                            </span>
                            <img src={productImages[product.image]} alt={product.title} className="product-image" />
                            <div className="product-text-content">
                                <h3 className="product-name">{product.title}</h3>
                                <p className="product-price">${product.price.toFixed(2)}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <button onClick={handleNext} className="slider-nav-button next-button" aria-label="Next products">
                    &gt;
                </button>
            </div>
            {/* Slider Dots */}
            <div className="slider-dots">
                {Array.from({ length: Math.ceil(products.length / ITEMS_PER_PAGE) }).map((_, index) => (
                    <span
                        key={index}
                        className={`slider-dot ${index === currentPage ? 'active' : ''}`}
                        onClick={() => setCurrentPage(index)}
                    ></span>
                ))}
            </div>
        </>
    );
}

export default ProductSlider;