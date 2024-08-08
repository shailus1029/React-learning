import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetails = () => {
  const navigate = useNavigate();

  /* Reading slug name from routing */
  const { slug } = useParams();

  useEffect(() => {
    /*
    getProductDetailsBySlug(slug);
    */
  }, []);

  return (
    <div>
      <div>
        <p>{`We will fetch product details with slug name : ${slug} `}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
