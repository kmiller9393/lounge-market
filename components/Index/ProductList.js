import { Card } from 'semantic-ui-react';

const ProductList = ({ products }) => {
  const mapProductsToItems = products => {
    return products.map(product => ({
      header: product.name,
      image: product.mediaUrl,
      color: 'teal',
      fluid: true,
      childKey: product._id,
      href: `/product?_id=${product._id}`
    }));
  };

  return <Card.Group items={mapProductsToItems(products)} />;
};

export default ProductList;
